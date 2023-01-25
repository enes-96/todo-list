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

eval("const dateProjects = document.querySelectorAll(\".wrapper-project-item\");\n\nfunction selectProject() {\n  const mainTitle = document.querySelector(\".main-title\");\n  const table = document.querySelector(\".table-wrapper\");\n\n  dateProjects.forEach((item) => {\n    item.addEventListener(\"click\", (e) => {\n      dateProjects.forEach((el) => {\n        item.classList.add(\"selected\");\n        mainTitle.textContent = item.textContent;\n        if (el !== item) {\n          el.classList.remove(\"selected\");\n        }\n      });\n    });\n  });\n}\naddNewProject();\nselectProject();\nfunction addNewProject() {\n  const btnNewProject = document.getElementById(\"btnNewProject\");\n  btnNewProject.addEventListener(\"click\", () => {\n    const createProject = document.createElement(\"div\");\n    createProject.classList.add(\"wrapper-project-item\");\n    createProject.textContent = \"motehrfucker\";\n    const userProjectsWrapper = document.body.querySelector(\n      \".wrapper-user-projects\"\n    );\n    userProjectsWrapper.appendChild(createProject);\n  });\n}\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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