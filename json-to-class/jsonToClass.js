import { checkSnakeCase, ParsedTypes } from "./engine-utils.js";
import {
  EngineCsharp,
  EngineParseTs,
  EngineCsharpWrapper,
  EngineTypescript,
  EngineKotlin,
  EngineKotlinData,
  EngineJava,
  ParseEngines,
  EngineTypescriptInterface,
  EngineKotlinBaseObservable,
} from "./engines.js";

let classPool = [];
const jsonSample = {
  typeA: "a",
  typeB: 123,
  typeC: Date.now(),
  typeD: 1.2,
  typeE: { subA: 0, subB: "b" },
  typeF: [
    { subA: 0, subB: "b" },
    { subA: 0, subB: "b" },
  ],
  type_g: "yey",
  TypeH: false,
  typeI: new Date(),
  typeJ: [0, 2, 3],
  typeK: [true, false, true],
  typeL: "a",
};

class ParsedField {
  constructor(type, innerType, name) {
    this.type = type;
    this.innerType = innerType; // Only used with array
    this.name = name;
  }

  toComparableString() {
    return `-${this.name.toLowerCase()}-${this.type.toLowerCase()}-${
      this.innerType ? this.innerType.toLowerCase() : ParsedTypes.NONE
    }-`;
  }
}

const compareFields = (targetClass) => {
  let res = "";

  const comp = targetClass.fields.map((f) => f.toComparableString());
  classPool.forEach((c) => {
    const base = c.fields.map((f) => f.toComparableString());
    if (
      !res &&
      comp.filter((field) => base.includes(field)).length ===
        targetClass.fields.length
    ) {
      res = c.className;
    }
  });

  return res;
};

const generate = (engine) => {
  let generated = "";
  const buildEngine = getEngine(engine);
  classPool.forEach((c) => {
    generated += c.build(buildEngine);
  });

  return generated;
};

class ParsedClass {
  constructor() {
    this.className = "";
    this.fields = [];
    this.subClasses = [];
  }

  build(engine) {
    let resultClass = "";

    resultClass += engine.classHeader(this.className);
    if (engine == ParseEngines.JAVA) {
      resultClass += engine.classFields(this.fields);
      resultClass += engine.classConstructor(this.className);
    } else {
      resultClass += engine.classConstructor(this.className);
      resultClass += engine.classFields(this.fields);
    }
    resultClass += engine.classBottom();

    return resultClass;
  }
}

const getEngine = (engine) => {
  switch (engine) {
    case ParseEngines.KOTLIN:
      return EngineKotlin;
    case ParseEngines.KOTLIN_DATA:
      return EngineKotlinData;
    case ParseEngines.KOTLIN_BO:
      return EngineKotlinBaseObservable;
    case ParseEngines.CSHARP_WRAPPER:
      return EngineCsharpWrapper;
    case ParseEngines.TYPESCRIPT:
      return EngineTypescript;
    case ParseEngines.TYPESCRIPT_IF:
      return EngineTypescriptInterface;
    case ParseEngines.PARSE_OBJECT_TS:
      return EngineParseTs;
    case ParseEngines.JAVA:
      return EngineJava;
    case ParseEngines.CSHARP:
    default:
      return EngineCsharp;
  }
};

const parse = (jsonTarget, resultClassName) => {
  if (!resultClassName) {
    resultClassName = "ParsedClassObject";
  }

  if (Array.isArray(jsonTarget)) {
    if (jsonTarget.length > 0) {
      return parse(jsonTarget[0], resultClassName);
    } else {
      throw new Error("The array is empty");
    }
  }

  const parsedClass = new ParsedClass();
  parsedClass.className = checkSnakeCase(resultClassName, true);

  const objKeys = Object.keys(jsonTarget);
  objKeys.forEach((key) => {
    let val = typeof jsonTarget[key];
    const varVal = jsonTarget[key];

    if (val === "object" && varVal && typeof varVal.getMonth === "function") {
      val = "date";
    }

    if (val === "object" && Array.isArray(jsonTarget[key])) {
      val = "array";
    }

    const varName = checkSnakeCase(key, false);
    switch (val) {
      case "number":
        if (
          varVal.toString().includes(".") ||
          varVal.toString().includes(",")
        ) {
          if (varVal.toString().includes("f")) {
            parsedClass.fields.push(
              new ParsedField(ParsedTypes.FLOAT, ParsedTypes.NONE, varName)
            );
          } else {
            parsedClass.fields.push(
              new ParsedField(ParsedTypes.DOUBLE, ParsedTypes.NONE, varName)
            );
          }
        } else {
          if (varVal.toString().length > 8) {
            parsedClass.fields.push(
              new ParsedField(ParsedTypes.LONG, ParsedTypes.NONE, varName)
            );
          } else {
            parsedClass.fields.push(
              new ParsedField(ParsedTypes.INTEGER, ParsedTypes.NONE, varName)
            );
          }
        }

        break;
      case "boolean":
        parsedClass.fields.push(
          new ParsedField(ParsedTypes.BOOLEAN, ParsedTypes.NONE, varName)
        );
        break;
      default:
      case "string":
        if (varVal && varVal.length === 1) {
          parsedClass.fields.push(
            new ParsedField(ParsedTypes.CHAR, ParsedTypes.NONE, varName)
          );
        } else {
          parsedClass.fields.push(
            new ParsedField(ParsedTypes.STRING, ParsedTypes.NONE, varName)
          );
        }

        break;
      case "date":
        parsedClass.fields.push(
          new ParsedField(ParsedTypes.DATE, ParsedTypes.NONE, varName)
        );
        break;
      case "object":
        if (!jsonTarget[key]) {
          parsedClass.fields.push(
            new ParsedField(ParsedTypes.STRING, ParsedTypes.NONE, varName)
          );
        } else {
          const newElement = parse(jsonTarget[key], key);
          const clashCheck = compareFields(newElement);
          let fieldType = newElement.className;

          if (!clashCheck) {
            classPool.push(newElement);
          } else {
            fieldType = clashCheck;
          }
          parsedClass.fields.push(
            new ParsedField(ParsedTypes.NONE, fieldType, varName)
          );
        }
        break;
      case "array":
        let arrayType = ParsedTypes.STRING;

        if (jsonTarget[key].length > 0) {
          arrayType = typeof jsonTarget[key][0];

          if (
            val === "object" &&
            jsonTarget[key] &&
            typeof jsonTarget[key].getMonth === "function"
          ) {
            arrayType = ParsedTypes.DATE;
          } else if (arrayType == "object") {
            const newElement = parse(
              jsonTarget[key][0],
              arrayType == "object" ? key : arrayType
            );
        //    console.log(newElement, arrayType);
            const clashCheck = compareFields(newElement);
            arrayType = newElement.className;
            if (!clashCheck) {
              classPool.push(newElement);
            } else {
              arrayType = clashCheck;
            }
          } else if (arrayType === "number") {
            // TODO A code refactoring is needed to avoid duplicated code
            const numberToCheck = jsonTarget[key][0];
            if (
              numberToCheck.toString().includes(".") ||
              numberToCheck.toString().includes(",")
            ) {
              if (numberToCheck.toString().includes("f")) {
                arrayType = ParsedTypes.FLOAT;
              } else {
                arrayType = ParsedTypes.DOUBLE;
              }
            } else {
              if (numberToCheck.toString().length > 8) {
                arrayType = ParsedTypes.LONG;
              } else {
                arrayType = ParsedTypes.INTEGER;
              }
            }
          }
        }

        parsedClass.fields.push(
          new ParsedField(ParsedTypes.ARRAY, arrayType, varName)
        );
        break;
    }
  });

  if (!compareFields(parsedClass)) classPool.push(parsedClass);

  return parsedClass;
};

const isSubClassClash = (subClasses, newClass) => {
  const newClassParts = newClass.split(" {\n");

  return subClasses.some((s) => s.includes(newClassParts[1]));
};

const resetPool = () => {
  classPool = [];
};

export { parse, generate, resetPool };

// parse(jsonSample, 'Sample');
// const retClasses = generate(ParseEngines.CSHARP);

// console.log(retClasses);
