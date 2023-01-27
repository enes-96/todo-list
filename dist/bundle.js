/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const btnNewProject = document.getElementById(\"btnNewProject\");\n\nbtnNewProject.addEventListener(\"click\", () => {\n  addNewProject();\n  selectProject();\n});\n\nfunction selectProject() {\n  const allProjects = document.querySelectorAll(\".wrapper-project-item\");\n  const mainTitle = document.getElementById(\"mainTitle\");\n\n  allProjects.forEach((item) => {\n    item.addEventListener(\"click\", (e) => {\n      allProjects.forEach((el) => {\n        item.classList.add(\"selected\");\n        mainTitle.textContent = item.textContent;\n        if (el !== item) {\n          el.classList.remove(\"selected\");\n        }\n      });\n    });\n  });\n  allProjects.forEach((item) => {\n    item.addEventListener(\"dblclick\", () => {\n      item.remove();\n    });\n  });\n}\n\nfunction addNewProject() {\n  const createProject = document.createElement(\"div\");\n  createProject.classList.add(\"wrapper-project-item\");\n\n  const projectIcon = document.createElementNS(\n    \"http://www.w3.org/2000/svg\",\n    \"svg\"\n  );\n  var path = document.createElementNS(\"http://www.w3.org/2000/svg\", \"path\");\n  path.setAttributeNS(\n    null,\n    \"d\",\n    \"M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9\"\n  );\n  projectIcon.setAttribute(\"viewBox\", \"0 0 24 24\");\n  projectIcon.appendChild(path);\n  projectIcon.classList.add(\"item-logo\");\n  createProject.appendChild(projectIcon);\n\n  //----------------\n\n  function generateItem() {\n    const createItemName = document.createElement(\"input\");\n    createProject.appendChild(createItemName);\n\n    createItemName.addEventListener(\"change\", () => {\n      const h5 = document.createElement(\"h5\");\n      h5.innerText = createItemName.value;\n      h5.classList.add(\"project-item-name\");\n      createProject.replaceChild(h5, createItemName);\n    });\n  }\n\n  function edtiItemTitle() {}\n\n  generateItem();\n\n  //---------------------------------------------\n  const userProjectsWrapper = document.querySelector(\".wrapper-user-projects\");\n  userProjectsWrapper.appendChild(createProject);\n}\n\nselectProject();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;