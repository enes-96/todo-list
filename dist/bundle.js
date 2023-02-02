/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.js */ \"./src/sidebar.js\");\n\n\n(0,_sidebar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//new item modal\nfunction manageItem() {\n  //new task button\n  document.body.querySelector(\".add-new-task\").addEventListener(\"click\", () => {\n    toggleModal();\n  });\n  const taskModal = document.querySelector(\".modal\");\n\n  function submitTask() {\n    const taskSubmit = taskModal.querySelector(\".task-submit\");\n\n    taskSubmit.addEventListener(\"click\", () => {\n      toggleModal();\n      const setTaskName = taskModal.querySelector(\".change-title\");\n      const setTasDate = taskModal.querySelector(\".change-date\");\n      const setTaskPriority = document.querySelector(\".change-priority\");\n      const setTaskComment = document.querySelector(\".comment\");\n      createNewTask(setTaskName.value, setTasDate.value);\n\n      //reset modal\n      setTaskName.value = \"\";\n      setTasDate.value = \"\";\n      setTaskPriority.value = \"\";\n    });\n  }\n\n  function deleteTask() {\n    const taskDeleteButton = taskModal.querySelector(\".task-delete\");\n    taskDeleteButton.addEventListener(\"click\", toggleModal);\n  }\n\n  function toggleModal() {\n    taskModal.classList.toggle(\"hidden\");\n    const overlay = document.querySelector(\".overlay\");\n    overlay.classList.toggle(\"hidden\");\n  }\n\n  submitTask();\n  deleteTask();\n}\n\nfunction createNewTask(taskTitle, taskDate) {\n  const tableRow = document.querySelector(\"tbody\");\n  const newTableRow = document.createElement(\"tr\");\n  newTableRow.classList.add(\"new-task\");\n  tableRow.appendChild(newTableRow);\n\n  createEditButton();\n  //checkbox dont need a argument\n  createCheckbox();\n  //first argument\n  createTitle();\n  //second argument\n  createDate();\n  //third argument\n  createPriority();\n  //fourth argument\n  createComment();\n  //delete task\n  deleteAddedTask();\n\n  function createTaskProperty(\n    elementProperty,\n    elementClass,\n    appendTo,\n    elementValue,\n    elementType\n  ) {\n    const newItem = document.createElement(elementProperty);\n    newItem.classList.add(elementClass);\n    appendTo.appendChild(newItem);\n    newItem.value = elementValue;\n    newItem.type = elementType;\n    return newItem;\n  }\n  function createCheckbox() {\n    const newTaskCheck = createTaskProperty(\"td\", \"checkbox-td\", newTableRow);\n\n    const newTaskCheckWrapper = createTaskProperty(\n      \"div\",\n      \"checkbox-wrapper\",\n      newTaskCheck\n    );\n    const taskCheckBox = createTaskProperty(\n      \"input\",\n      \"task-checkbox\",\n      newTaskCheckWrapper,\n      \"\",\n      \"checkbox\"\n    );\n  }\n  function createTitle() {\n    const newTaskTitle = createTaskProperty(\"td\", \"title-wrapper\", newTableRow);\n\n    const newTitleInput = createTaskProperty(\n      \"input\",\n      \"todo-title\",\n      newTaskTitle,\n      taskTitle\n    );\n    if (!newTitleInput.value) {\n      newTitleInput.placeholder = \"untitled\";\n    }\n    if (newTitleInput.value.trim().length === 0) {\n      newTitleInput.placeholder = \"untitled\";\n\n      return (newTitleInput.value = \"\");\n    }\n  }\n  function createDate() {\n    const newTaskDate = createTaskProperty(\"td\", \"date-wrapper\", newTableRow);\n\n    const taskDateInput = createTaskProperty(\n      \"input\",\n      \"todo-date\",\n      newTaskDate,\n      taskDate,\n      \"date\"\n    );\n  }\n  function createPriority() {\n    const priorityWrapper = document.createElement(\"select\");\n    priorityWrapper.classList.add(\"todo-priority\");\n\n    const priorities = [\"High\", \"Medium\", \"Low\"];\n    for (const priority of priorities) {\n      const option = document.createElement(\"option\");\n      option.value = priority.toLowerCase();\n      option.textContent = priority;\n      priorityWrapper.appendChild(option);\n    }\n\n    const setTaskPriority = document.querySelector(\".change-priority\");\n\n    priorityWrapper.value = setTaskPriority.value;\n\n    const newTaskPriority = document.createElement(\"td\");\n    newTaskPriority.classList.add(\"priority-wrapper\");\n    newTaskPriority.appendChild(priorityWrapper);\n    newTableRow.appendChild(newTaskPriority);\n  }\n  function createComment() {\n    const addCommentButton = document.querySelector(\".comment-task\");\n\n    addCommentButton.addEventListener(\"click\", () => {\n      const selectedTask = document.querySelector(\".task-selected\");\n      const taskModalSmall = document.querySelector(\".task-menu-sm\");\n      const commentContainer = document.querySelector(\".comment-box\");\n      const commentOverlay = document.querySelector(\".comment-box-overlay\");\n\n      if (selectedTask) {\n        commentContainer.classList.remove(\"hidden\");\n        commentOverlay.classList.remove(\"hidden\");\n        taskModalSmall.classList.add(\"hidden\");\n      }\n\n      commentOverlay.addEventListener(\"click\", () => {\n        commentContainer.classList.add(\"hidden\");\n        commentOverlay.classList.add(\"hidden\");\n        const taskTitle = document.querySelector(\".title-wrapper\");\n        //\n\n        taskTitle.style.backgroundColor = \"blue\";\n      });\n    });\n  }\n  function deleteAddedTask() {\n    const allTasks = document.querySelectorAll(\".new-task\");\n    const removeTaskButton = document.querySelector(\".delete-task\");\n    allTasks.forEach((item) => {\n      item.addEventListener(\"mouseover\", (e) => {\n        item.classList.add(\"task-selected\");\n        allTasks.forEach((el) => {\n          if (el !== item) {\n            el.classList.remove(\"task-selected\");\n          }\n        });\n      });\n    });\n\n    removeTaskButton.addEventListener(\"click\", () => {\n      const selectedTask = document.querySelector(\".task-selected\");\n      if (selectedTask) {\n        const taskModalSmall = document.querySelector(\".task-menu-sm\");\n        taskModalSmall.classList.add(\"hidden\");\n        selectedTask.remove();\n      }\n    });\n  }\n  function createEditButton() {\n    const taskIcon = document.querySelector(\".task-icon-wrapper\");\n    taskIcon.style.display = \"none\";\n\n    //open modal if click the dots\n    taskIcon.addEventListener(\"click\", handleTaskModal);\n\n    function handleTaskModal() {\n      const newTableRowPositions = newTableRow.getBoundingClientRect();\n      //modal container\n      const taskModalSmall = document.querySelector(\".task-menu-sm\");\n      const taskModalOverlay = document.querySelector(\".task-menu-overlay\");\n\n      taskModalSmall.style.top = `${newTableRowPositions.top}px`;\n      taskModalSmall.style.left = `${newTableRowPositions.left}px`;\n      taskModalSmall.classList.remove(\"hidden\");\n      if (!taskModalSmall.classList.contains(\"hidden\")) {\n        taskModalOverlay.classList.remove(\"hidden\");\n        taskModalOverlay.addEventListener(\"click\", () => {\n          taskModalSmall.classList.add(\"hidden\");\n          taskModalOverlay.classList.add(\"hidden\");\n        });\n      }\n    }\n\n    //dots icon appear when hover\n    newTableRow.addEventListener(\"mouseover\", handleButtonPosition);\n    handleButtonExistins(taskIcon, \"mouseover\", taskIcon, \"flex\");\n    handleButtonExistins(taskIcon, \"mouseout\", taskIcon, \"none\");\n    handleButtonExistins(newTableRow, \"mouseout\", taskIcon, \"none\");\n\n    function handleButtonPosition() {\n      const newTableRowPositions = newTableRow.getBoundingClientRect();\n      taskIcon.style.top = `${newTableRowPositions.top}px`;\n      taskIcon.style.left = newTableRowPositions.left - 40 + \"px\";\n      taskIcon.style.display = \"flex\";\n    }\n    function handleButtonExistins(target, event, parent, displayItem) {\n      target.addEventListener(event, function () {\n        parent.style.display = displayItem;\n      });\n    }\n  }\n}\n\nmanageItem();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sidebarJS)\n/* harmony export */ });\nfunction sidebarJS() {\n  document.getElementById(\"btnNewProject\").addEventListener(\"click\", () => {\n    addNewProject();\n    selectProject();\n  });\n  //sidebar select\n  function selectProject() {\n    const allProjects = document.querySelectorAll(\".wrapper-project-item\");\n    const mainTitle = document.getElementById(\"mainTitle\");\n\n    //loop over all projects and listen for click\n    allProjects.forEach((item) => {\n      item.addEventListener(\"click\", (e) => {\n        item.classList.add(\"selected\");\n        mainTitle.textContent = item.textContent;\n        allProjects.forEach((el) => {\n          if (el !== item) {\n            el.classList.remove(\"selected\");\n          }\n        });\n      });\n    });\n  }\n  //sidebar\n  function addNewProject() {\n    const userProjectsContainer = document.querySelector(\".wrp-user-projct\");\n\n    //item wrapper (icon and name) and syling\n    const createProject = document.createElement(\"div\");\n    createProject.classList.add(\"wrapper-project-item\", \"project-item\");\n\n    (function createIcon() {\n      const projectIcon = document.createElementNS(\n        \"http://www.w3.org/2000/svg\",\n        \"svg\"\n      );\n      const iconPath = document.createElementNS(\n        \"http://www.w3.org/2000/svg\",\n        \"path\"\n      );\n      iconPath.setAttributeNS(\n        null,\n        \"d\",\n        \"M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9\"\n      );\n      projectIcon.setAttribute(\"viewBox\", \"0 0 24 24\");\n      projectIcon.appendChild(iconPath);\n      projectIcon.classList.add(\"item-logo\");\n      createProject.appendChild(projectIcon);\n    })();\n\n    const createProjectNameInput = document.createElement(\"input\");\n    createProject.appendChild(createProjectNameInput);\n    window.setTimeout(() => createProjectNameInput.focus(), 0);\n\n    createProjectNameInput.addEventListener(\"input\", (e) => {\n      mainTitle.textContent = e.target.value;\n    });\n\n    const newProjectName = document.createElement(\"h5\");\n    createProjectNameInput.addEventListener(\"keydown\", handleInputToTitle);\n\n    function handleInputToTitle(e) {\n      if (e.key === \"Enter\") {\n        newProjectName.textContent = e.target.value;\n        newProjectName.classList.add(\"project-item-name\");\n        createProject.replaceChild(newProjectName, createProjectNameInput);\n        //if input is empty remove item\n        if (!newProjectName.innerText) {\n          createProject.remove();\n        }\n      }\n    }\n    function editProject() {\n      const projectItems = document.querySelectorAll(\".project-item\");\n      const editBtn = document.querySelector(\".edit-user-project\");\n      //edit only the selected item\n      editBtn.addEventListener(\"click\", () => {\n        projectItems.forEach((item) => {\n          if (item.classList.contains(\"selected\")) {\n            editItem(item);\n          }\n        });\n      });\n      //transform h5 title to input\n      function editItem(item) {\n        item.replaceChild(createProjectNameInput, newProjectName);\n        window.setTimeout(() => createProjectNameInput.focus(), 0);\n      }\n    }\n\n    //append item to his wrapper\n    userProjectsContainer.appendChild(createProject);\n    addContextMenu(createProject);\n    deleteProject();\n    editProject();\n  }\n  //right click function\n  function addContextMenu(contextItem) {\n    const contextContainer = document.querySelector(\".context-menu\");\n    contextItem.addEventListener(\"contextmenu\", handleContextMenu);\n\n    function handleContextMenu(e) {\n      contextContainer.style.left = `${e.clientX + window.scrollX}px`;\n      contextContainer.style.top = `${e.clientY + window.scrollY}px`;\n      contextContainer.style.display = \"block\";\n      e.preventDefault();\n      contextContainer.addEventListener(\"contextmenu\", (e) => {\n        e.preventDefault();\n      });\n    }\n\n    document.body.addEventListener(\"click\", () => {\n      contextContainer.style.display = \"none\";\n    });\n  }\n  //delete from context menu\n  function deleteProject() {\n    const projectItems = document.querySelectorAll(\".project-item\");\n    const deleteBtn = document.querySelector(\".delete-user-project\");\n    //if project is selected,then it can be deletet\n    deleteBtn.addEventListener(\"click\", () => {\n      projectItems.forEach((item) => {\n        if (item.classList.contains(\"selected\")) {\n          item.remove();\n          mainTitle.innerHtml = \"\";\n        }\n      });\n    });\n  }\n  selectProject();\n}\n\n\n//# sourceURL=webpack://todo-list/./src/sidebar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;