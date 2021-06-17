import { parse, generate, resetPool } from "./jsonToClass.js";
import "./lib/highlightjs/highlight.min.js";

const generateAndPlot = () => {
  const content = document.getElementById("txtRawJson");

  if (content.value) {
    const inputName = document.getElementById("className");

    if (!inputName.value) {
      alert("You need to define your Base Class Name.");
      return;
    }

    if (content.value && inputName.value) {
      parse(JSON.parse(content.value), inputName.value);

      const engine = document.getElementById("buildEngine");
      const engineVal = engine.options[engine.selectedIndex].value;
      const generatedClass = generate(engineVal);

      const divRes = document.getElementById("divResults");

      const preDiv = document.createElement("div");
      preDiv.id = "codeBlock";
      const preContent = document.createElement("pre");
      preContent.className += " preContent";

      const codeDiv = document.createElement("code");
      const highlightLanguage = selectLanguageFromEngine(engineVal);
      const highlightedClasses = hljs.highlight(generatedClass, {
        language: highlightLanguage,
      }).value;
      codeDiv.className += ` hljs language-${highlightLanguage}`;
      codeDiv.innerHTML = highlightedClasses.trim();

      preContent.appendChild(codeDiv);
      preDiv.appendChild(preContent);
      document.querySelector(".container").insertBefore(preDiv, divRes);
      // hljs.highlightAll();
    }
  }
};

const selectLanguageFromEngine = (engine) => {
  let selected = "";

  switch (engine) {
    case "kotlin_bo":
    case "kotlin_d":
    case "kotlin":
      selected = "kotlin";
      break;
    case "parse_ts":
    case "typescript":
    case "typescript_if":
      selected = "typescript";
      break;
    case "java":
      selected = "java";
      break;
    case "csharp":
    case "csharp_w":
      selected = "csharp";
    default:
      break;
  }

  return selected;
};

const clearResults = () => {
  resetPool();
  const divRes = document.querySelectorAll("#codeBlock");
  divRes.forEach((el) => el.remove());
};

const clearAll = () => {
  clearResults();
  const inputName = document.getElementById("className");
  const content = document.getElementById("txtRawJson");
  inputName.value = "";
  content.value = "";
};

const btnGenerate = document.getElementById("btnGenerate");
const btnClear = document.getElementById("btnClear");
const btnClearClasses = document.getElementById("btnClearCl");

btnGenerate.addEventListener("click", generateAndPlot);
btnClear.addEventListener("click", clearAll);
btnClearClasses.addEventListener("click", clearResults);
