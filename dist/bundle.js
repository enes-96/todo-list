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

eval("document.getElementById(\"btnNewProject\").addEventListener(\"click\", () => {\n  addNewProject();\n  selectProject();\n});\n\nfunction selectProject() {\n  const allProjects = document.querySelectorAll(\".wrapper-project-item\");\n\n  const mainTitle = document.getElementById(\"mainTitle\");\n  const projectItems = document.querySelectorAll(\n    \".wrapper-user-projects .wrapper-project-item\"\n  );\n  //loop over all projects and listen for click\n  allProjects.forEach((item) => {\n    item.addEventListener(\"click\", (e) => {\n      //add the selected effect\n      item.classList.add(\"selected\");\n      mainTitle.textContent = item.textContent;\n      //if user clicks another projects remove previous one\n      allProjects.forEach((el) => {\n        if (el !== item) {\n          el.classList.remove(\"selected\");\n        }\n      });\n    });\n  });\n}\n\nfunction addNewProject() {\n  //new projects comes in there\n  const userProjectsContainer = document.querySelector(\".wrp-user-projct\");\n\n  //item wrapper (icon and name) and syling\n  const createProject = document.createElement(\"div\");\n  createProject.classList.add(\"wrapper-project-item\");\n\n  (function createIcon() {\n    const projectIcon = document.createElementNS(\n      \"http://www.w3.org/2000/svg\",\n      \"svg\"\n    );\n    const iconPath = document.createElementNS(\n      \"http://www.w3.org/2000/svg\",\n      \"path\"\n    );\n    iconPath.setAttributeNS(\n      null,\n      \"d\",\n      \"M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9\"\n    );\n    projectIcon.setAttribute(\"viewBox\", \"0 0 24 24\");\n    projectIcon.appendChild(iconPath);\n    projectIcon.classList.add(\"item-logo\");\n    createProject.appendChild(projectIcon);\n  })();\n\n  // first create a input and append to item wrapper\n  const createProjectNameInput = document.createElement(\"input\");\n  createProject.appendChild(createProjectNameInput);\n  window.setTimeout(() => createProjectNameInput.focus(), 0);\n\n  //dynamicly type title\n  createProjectNameInput.addEventListener(\"input\", (e) => {\n    mainTitle.textContent = e.target.value;\n  });\n  //turn to title\n  createProjectNameInput.addEventListener(\"focusout\", (e) => {\n    const newProjectName = document.createElement(\"h5\");\n    newProjectName.innerText = e.target.value;\n    newProjectName.classList.add(\"project-item-name\");\n    createProject.replaceChild(newProjectName, createProjectNameInput);\n    if (newProjectName.innerText === \"\") {\n      createProject.remove();\n    }\n  });\n\n  //listen for right click\n  addContextMenu(createProject);\n  userProjectsContainer.appendChild(createProject);\n}\n\n//right click listener\nfunction addContextMenu(contextItem) {\n  const contextContainer = document.querySelector(\".context-menu\");\n  contextItem.addEventListener(\"contextmenu\", handleContextMenu);\n\n  function handleContextMenu(e) {\n    contextContainer.style.left = `${e.clientX + window.scrollX}px`;\n    contextContainer.style.top = `${e.clientY + window.scrollY}px`;\n    contextContainer.style.display = \"block\";\n    e.preventDefault();\n  }\n  document.body.addEventListener(\"click\", () => {\n    contextContainer.style.display = \"none\";\n  });\n  contextContainer.addEventListener(\"contextmenu\", (e) => {\n    e.preventDefault();\n  });\n}\n\nfunction deleteProjects() {\n  const userProjects = document.querySelectorAll(\n    \".wrp-user-projct .wrapper-project-item\"\n  );\n}\nselectProject();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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