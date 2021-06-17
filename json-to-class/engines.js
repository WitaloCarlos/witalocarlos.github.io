import {
  capitalizeString,
  arrayName,
  checkSnakeCase,
  ParsedTypes,
} from "./engine-utils.js";

const ParseEngines = {
  CSHARP: "csharp",
  CSHARP_WRAPPER: "csharp_w",
  TYPESCRIPT: "typescript",
  TYPESCRIPT_IF: "typescript_if",
  JAVASCRIPT: "javascript",
  PARSE_OBJECT_TS: "parse_ts",
  KOTLIN: "kotlin",
  KOTLIN_BO: "kotlin_bo",
  KOTLIN_DATA: "kotlin_d",
  JAVA: "java",
};

const EngineTypescriptInterface = {
  classHeader: (className) => {
    return "interface " + className + " {\n";
  },
  classConstructor: (className) => {
    return "";
  },
  classFields: (fields) => {
    let fieldBody = "";
    fields.forEach((field) => {
      fieldBody += `\t ${
        field.type !== ParsedTypes.ARRAY
          ? checkSnakeCase(field.name, false)
          : checkSnakeCase(arrayName(field.name), false)
      }: ${EngineTypescriptInterface.getType(field)};\n`;
    });

    return fieldBody;
  },
  classBottom: () => {
    return "}\n\n";
  },
  getType: (field) => {
    let resType = "";

    switch (field.type) {
      default:
      case ParsedTypes.CHAR:
      case ParsedTypes.STRING:
        resType = "string";
        break;
      case ParsedTypes.BOOLEAN:
        resType = "boolean";
        break;
      case ParsedTypes.DATE:
        resType = "Date";
        break;
      case ParsedTypes.FLOAT:
      case ParsedTypes.LONG:
      case ParsedTypes.INTEGER:
      case ParsedTypes.DOUBLE:
        resType = "number";
        break;
      case ParsedTypes.NONE:
        resType = field.innerType;
        break;
      case ParsedTypes.ARRAY:
        resType = `${field.innerType}[]`;
        break;
    }

    return resType;
  },
};

const EngineTypescript = {
  classHeader: (className) => {
    return "export class " + className + " {\n\n";
  },
  classConstructor: (className) => {
    return "";
  },
  classFields: (fields) => {
    let fieldBody = "";
    fields.forEach((field) => {
      fieldBody += `\t ${
        field.type !== ParsedTypes.ARRAY
          ? checkSnakeCase(field.name, false)
          : checkSnakeCase(arrayName(field.name), false)
      }: ${EngineTypescript.getType(field)};\n`;
    });

    return fieldBody;
  },
  classBottom: () => {
    return "\n}\n\n";
  },
  getType: (field) => {
    let resType = "";

    switch (field.type) {
      default:
      case ParsedTypes.CHAR:
      case ParsedTypes.STRING:
        resType = "string";
        break;
      case ParsedTypes.BOOLEAN:
        resType = "boolean";
        break;
      case ParsedTypes.DATE:
        resType = "Date";
        break;
      case ParsedTypes.FLOAT:
      case ParsedTypes.LONG:
      case ParsedTypes.INTEGER:
      case ParsedTypes.DOUBLE:
        resType = "number";
        break;
      case ParsedTypes.NONE:
        resType = field.innerType;
        break;
      case ParsedTypes.ARRAY:
        resType = `${field.innerType}[]`;
        break;
    }

    return resType;
  },
};

const EngineParseTs = {
  classHeader: (className) => {
    return "export class " + className + " extends Parse.Object {\n\n";
  },
  classConstructor: (className) => {
    return (
      "\n" +
      "\tconstructor(){\n" +
      `\tsuper('${className}');\n` +
      "\t }\n" +
      "\n\tstatic register() {\n" +
      `\t\t// Creating an instance: const x: Parse.Object = new ${className}();
            Parse.Object.registerSubclass('${className}', ${className});\n` +
      "\t}\n"
    );
  },
  classFields: (fields) => {
    let fieldBody = "";

    fields.forEach((field) => {
      const fieldName =
        field.type !== ParsedTypes.ARRAY
          ? checkSnakeCase(field.name, false)
          : checkSnakeCase(arrayName(field.name), false);

      const fieldType = EngineTypescript.getType(field);

      fieldBody += `\tget ${fieldName}(): ${fieldType} {
             return super.get('${fieldName}'); \n\t}\n
          set ${fieldName}(value: ${fieldType}) {
              super.set('${fieldName}', value);
          }\n\n\n`;
    });

    return fieldBody;
  },
  classBottom: () => {
    return "\n}\n\n";
  },
  getType: (field) => {
    let resType = "";

    switch (field.type) {
      default:
      case ParsedTypes.CHAR:
      case ParsedTypes.STRING:
        resType = "string";
        break;
      case ParsedTypes.BOOLEAN:
        resType = "boolean";
        break;
      case ParsedTypes.DATE:
        resType = "Date";
        break;
      case ParsedTypes.FLOAT:
      case ParsedTypes.LONG:
      case ParsedTypes.INTEGER:
      case ParsedTypes.DOUBLE:
        resType = "number";
        break;
      case ParsedTypes.NONE:
        resType = field.innerType;
        break;
      case ParsedTypes.ARRAY:
        resType = `${field.innerType}[]`;
        break;
    }

    return resType;
  },
};

const EngineCsharpWrapper = {
  classHeader: (className) => {
    return "public class " + className + " {\n\n";
  },
  classConstructor: (className) => {
    return "";
  },
  classFields: (fields) => {
    let fieldBody = "";
    fields.forEach((field) => {
      fieldBody += `\tpublic ${EngineCsharpWrapper.getType(field)} ${
        field.type !== ParsedTypes.ARRAY
          ? checkSnakeCase(field.name, true)
          : checkSnakeCase(arrayName(field.name), true)
      }  {get; set;}\n`;
    });

    return fieldBody;
  },
  classBottom: () => {
    return "\n}\n\n";
  },
  getType: (field) => {
    let resType = "";

    switch (field.type) {
      default:
      case ParsedTypes.STRING:
        resType = "String";
        break;
      case ParsedTypes.BOOLEAN:
        resType = "Boolean";
        break;
      case ParsedTypes.CHAR:
        resType = "Char";
        break;
      case ParsedTypes.DATE:
        resType = "Date";
        break;
      case ParsedTypes.DOUBLE:
        resType = "Double";
        break;
      case ParsedTypes.FLOAT:
        resType = "Single";
        break;
      case ParsedTypes.LONG:
        resType = "Int64";
        break;
      case ParsedTypes.INTEGER:
        resType = "Int32";
        break;
      case ParsedTypes.NONE:
        resType = field.innerType;
        break;
      case ParsedTypes.ARRAY:
        resType = `List<${field.innerType}>`;
        break;
    }

    return resType;
  },
};

const EngineCsharp = {
  classHeader: (className) => {
    return "public class " + className + " {\n\n";
  },
  classConstructor: (className) => {
    return "";
  },
  classFields: (fields) => {
    let fieldBody = "";
    fields.forEach((field) => {
      fieldBody += `\tpublic ${EngineCsharp.getType(field)} ${
        field.type !== ParsedTypes.ARRAY
          ? checkSnakeCase(field.name, true)
          : checkSnakeCase(arrayName(field.name), true)
      }  {get; set;}\n`;
    });

    return fieldBody;
  },
  classBottom: () => {
    return "\n}\n\n";
  },
  getType: (field) => {
    let resType = "";

    switch (field.type) {
      default:
      case ParsedTypes.STRING:
        resType = "string";
        break;
      case ParsedTypes.BOOLEAN:
        resType = "bool";
        break;
      case ParsedTypes.CHAR:
        resType = "char";
        break;
      case ParsedTypes.DATE:
        resType = "Date";
        break;
      case ParsedTypes.DOUBLE:
        resType = "double";
        break;
      case ParsedTypes.FLOAT:
        resType = "float";
        break;
      case ParsedTypes.LONG:
        resType = "long";
        break;
      case ParsedTypes.INTEGER:
        resType = "int";
        break;
      case ParsedTypes.NONE:
        resType = field.innerType;
        break;
      case ParsedTypes.ARRAY:
        resType = `List<${field.innerType}>`;
        break;
    }

    return resType;
  },
};

const EngineKotlin = {
  classHeader: (className) => {
    return "class " + className + " {\n\n";
  },
  classConstructor: (className) => {
    return "";
  },
  classFields: (fields) => {
    let fieldBody = "";
    fields.forEach((field) => {
      fieldBody += `\t var ${
        field.type !== ParsedTypes.ARRAY
          ? checkSnakeCase(field.name, false)
          : checkSnakeCase(arrayName(field.name), false)
      } ${EngineKotlin.getType(field)}\n`;
    });

    return fieldBody;
  },
  classBottom: () => {
    return "\n}\n\n";
  },
  getType: (field) => {
    let resType = "";

    switch (field.type) {
      default:
      case ParsedTypes.CHAR:
      case ParsedTypes.STRING:
        resType = '= ""';
        break;
      case ParsedTypes.BOOLEAN:
        resType = " = false";
        break;
      case ParsedTypes.DATE:
        resType = " = Date()";
        break;
      case ParsedTypes.FLOAT:
        resType = " = 0f";
        break;
      case ParsedTypes.LONG:
        resType = " = 0L";
        break;
      case ParsedTypes.INTEGER:
        resType = " = 0";
        break;
      case ParsedTypes.DOUBLE:
        resType = "= 0.0";
        break;
      case ParsedTypes.NONE:
        resType = `: ${field.innerType}? = null`;
        break;
      case ParsedTypes.ARRAY:
        resType = `: List<${field.innerType}> = listOf()`;
        break;
    }

    return resType;
  },
};

const EngineKotlinBaseObservable = {
  classHeader: (className) => {
    return "class " + className + " : BaseObservable() {\n\n";
  },
  classConstructor: (className) => {
    return "";
  },
  classFields: (fields) => {
    let fieldBody = "";
    fields.forEach((field) => {
      const fieldName =
        field.type !== ParsedTypes.ARRAY
          ? checkSnakeCase(field.name, false)
          : checkSnakeCase(arrayName(field.name), false);

      fieldBody +=
        `\n\t@Bindable\n\t var ${fieldName} ${EngineKotlinBaseObservable.getType(
          field
        )}\n` +
        `\t\tset(value) {\n\t\t\tfield = value\n\t\t\tnotifyPropertyChanged(BR.${fieldName})\n\t\t}\n`;
    });

    return fieldBody;
  },
  classBottom: () => {
    return "\n}\n\n";
  },
  getType: (field) => {
    let resType = "";

    switch (field.type) {
      default:
      case ParsedTypes.CHAR:
      case ParsedTypes.STRING:
        resType = '= ""';
        break;
      case ParsedTypes.BOOLEAN:
        resType = " = false";
        break;
      case ParsedTypes.DATE:
        resType = " = Date()";
        break;
      case ParsedTypes.FLOAT:
        resType = " = 0f";
        break;
      case ParsedTypes.LONG:
        resType = " = 0L";
        break;
      case ParsedTypes.INTEGER:
        resType = " = 0";
        break;
      case ParsedTypes.DOUBLE:
        resType = "= 0.0";
        break;
      case ParsedTypes.NONE:
        resType = `: ${field.innerType}? = null`;
        break;
      case ParsedTypes.ARRAY:
        resType = `: List<${field.innerType}> = listOf()`;
        break;
    }

    return resType;
  },
};

const EngineKotlinData = {
  classHeader: (className) => {
    return "data class " + className + "(\n";
  },
  classConstructor: (className) => {
    return "";
  },
  classFields: (fields) => {
    let fieldBody = "";
    fields.forEach((field, index, array) => {
      fieldBody += `\t var ${
        field.type !== ParsedTypes.ARRAY
          ? checkSnakeCase(field.name, false)
          : checkSnakeCase(arrayName(field.name), false)
      } ${EngineKotlinData.getType(field)}${
        index < array.length - 1 ? "," : ""
      }\n`;
    });

    return fieldBody;
  },
  classBottom: () => {
    return "\n){}\n\n";
  },
  getType: (field) => {
    let resType = "";

    switch (field.type) {
      default:
      case ParsedTypes.CHAR:
      case ParsedTypes.STRING:
        resType = ': String = ""';
        break;
      case ParsedTypes.BOOLEAN:
        resType = ": Boolean = false,";
        break;
      case ParsedTypes.DATE:
        resType = ": Date = Date()";
        break;
      case ParsedTypes.FLOAT:
        resType = ": Float = 0f";
        break;
      case ParsedTypes.LONG:
        resType = ": Long = 0L";
        break;
      case ParsedTypes.INTEGER:
        resType = ": Int = 0";
        break;
      case ParsedTypes.DOUBLE:
        resType = ": Double = 0.0";
        break;
      case ParsedTypes.NONE:
        resType = `: ${field.innerType}? = null`;
        break;
      case ParsedTypes.ARRAY:
        resType = `: List<${field.innerType}> = listOf()`;
        break;
    }

    return resType;
  },
};

const EngineJava = {
  classHeader: (className) => {
    return "public class " + className + " implements Serializable {\n\n";
  },
  classConstructor: (className) => {
    return "\n" + `\tpublic ${className}() {\n` + "\t }\n\n";
  },
  classFields: (fields) => {
    let fieldBody = "";

    fields.forEach((field) => {
      const fieldName =
        field.type !== ParsedTypes.ARRAY
          ? checkSnakeCase(field.name, false)
          : checkSnakeCase(arrayName(field.name), false);

      const fieldType = EngineJava.getType(field);

      fieldBody += `\tprivate ${fieldType} ${fieldName};
        \n`;
    });

    fieldBody += "\n\n";

    fields.forEach((field) => {
      const fieldName =
        field.type !== ParsedTypes.ARRAY
          ? checkSnakeCase(field.name, false)
          : checkSnakeCase(arrayName(field.name), false);

      const fieldType = EngineJava.getType(field);

      fieldBody +=
        `\tpublic ${fieldType} ${
          fieldType !== "boolean" ? "get" : "is"
        }${capitalizeString(fieldName)}() {
               return this.${fieldName}; \n\t}\n` +
        `\tpublic void set${capitalizeString(fieldName)}(${fieldType} value) {
                this.${fieldName} = value;
            }\n\n\n`;
    });

    return fieldBody;
  },
  classBottom: () => {
    return "\n}\n\n";
  },
  getType: (field) => {
    let resType = "";

    switch (field.type) {
      default:
      case ParsedTypes.CHAR:
      case ParsedTypes.STRING:
        resType = "String";
        break;
      case ParsedTypes.BOOLEAN:
        resType = "boolean";
        break;
      case ParsedTypes.DATE:
        resType = "Date";
        break;
      case ParsedTypes.FLOAT:
        resType = "float";
        break;
      case ParsedTypes.LONG:
        resType = "long";
        break;
      case ParsedTypes.INTEGER:
        resType = "int";
        break;
      case ParsedTypes.DOUBLE:
        resType = "double";
        break;
      case ParsedTypes.NONE:
        resType = field.innerType;
        break;
      case ParsedTypes.ARRAY:
        resType = `List<${field.innerType}>`;
        break;
    }

    return resType;
  },
};

export {
  EngineCsharp,
  EngineParseTs,
  EngineCsharpWrapper,
  EngineKotlin,
  EngineTypescript,
  EngineTypescriptInterface,
  EngineKotlinData,
  EngineKotlinBaseObservable,
  EngineJava,
  ParseEngines,
};
