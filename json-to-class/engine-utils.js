function capitalizeString(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  
  function uncapitalizeString(s) {
    return s.charAt(0).toLowerCase() + s.slice(1);
  }
  
  function arrayName(s) {
    return s.toLowerCase().endsWith("s") ? s : s + "s";
  }
  
  function checkSnakeCase(s, captalize) {
    if (s.includes("_") || s.includes("-")) {
      const divider = s.includes("_") ? "_" : "-";
      const parts = s.split(divider);
      let result = "";
  
      for (let i = 0; i < parts.length; i++) {
        if (i === 0 && !captalize) {
          result += uncapitalizeString(parts[i]);
        } else {
          result += capitalizeString(parts[i]);
        }
      }
  
      return result;
    } else {
      return captalize ? capitalizeString(s) : uncapitalizeString(s);
    }
  }
  
  const ParsedTypes = {
    INTEGER: "int",
    DOUBLE: "double",
    LONG: "long",
    FLOAT: "float",
    STRING: "string",
    CHAR: "char",
    BOOLEAN: "boolean",
    DATE: "date",
    ARRAY: "array",
    NONE: "none",
  };


  export { capitalizeString, uncapitalizeString, arrayName, checkSnakeCase, ParsedTypes }