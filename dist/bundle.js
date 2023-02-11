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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sidebar.js */ \"./src/modules/sidebar.js\");\n/* harmony import */ var _modules_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todo.js */ \"./src/modules/todo.js\");\n\n\n\n(0,_modules_sidebar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nmanageTodos();\n\nfunction manageTodos() {\n  const todos = [];\n  const submitTask = document.querySelector(\".task-submit\");\n\n  submitTask.addEventListener(\"click\", addNewTask);\n\n  function addTodo(project, todo) {\n    todos.push({ project, todo });\n  }\n  function getTodos(project) {\n    return todos.filter((t) => t.project === project);\n  }\n  function addNewTask() {\n    const selectedProject = document.querySelector(\".sidebar .selected\");\n\n    const addedTask = document.querySelectorAll(\".new-task\");\n    addedTask.forEach((task) => {\n      if (!task.classList.contains(\"added\")) {\n        addTodo(selectedProject.innerText, task);\n        task.classList.add(\"added\");\n      }\n    });\n  }\n\n  const allProjects = document.querySelectorAll(\".wrapper-project-item\");\n  allProjects.forEach((project) => {\n    project.addEventListener(\"click\", () => {\n      const addedTask = document.querySelectorAll(\".new-task\");\n      addedTask.forEach((task) => {\n        task.remove();\n      });\n      getTodos(project.innerText).forEach((todo) => {\n        const todoTitle = todo.todo.querySelector(\".todo-title\");\n        const todoDate = todo.todo.querySelector(\".todo-date\");\n        const todoComment = todo.todo.querySelector(\".user-added-comment\");\n        const todoPriority = todo.todo.querySelector(\".todo-priority\");\n        //\n        (0,_modules_todo_js__WEBPACK_IMPORTED_MODULE_1__.createNewTask)(\n          todoTitle.value,\n          todoDate.value,\n          todoComment.value,\n          todoPriority.value\n        );\n      });\n    });\n  });\n}\n\n//i need to select the priority of foreach todo\n// when i change somehting on each todo, and change categories it resets\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/sidebar.js":
/*!********************************!*\
  !*** ./src/modules/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sidebarJS)\n/* harmony export */ });\nfunction sidebarJS() {\n  document.getElementById(\"btnNewProject\").addEventListener(\"click\", () => {\n    addNewProject();\n    selectProject();\n  });\n  //sidebar select\n  function selectProject() {\n    const allProjects = document.querySelectorAll(\".wrapper-project-item\");\n    const mainTitle = document.getElementById(\"mainTitle\");\n\n    //loop over all projects and listen for click\n    allProjects.forEach((item) => {\n      item.addEventListener(\"click\", (e) => {\n        item.classList.add(\"selected\");\n        mainTitle.textContent = item.textContent;\n\n        allProjects.forEach((el) => {\n          if (el !== item) {\n            el.classList.remove(\"selected\");\n          }\n        });\n      });\n    });\n  }\n  //sidebar\n  function addNewProject() {\n    const userProjectsContainer = document.querySelector(\".wrp-user-projct\");\n\n    //item wrapper (icon and name) and syling\n    const createProject = document.createElement(\"div\");\n    createProject.classList.add(\"wrapper-project-item\", \"project-item\");\n\n    (function createIcon() {\n      const projectIcon = document.createElementNS(\n        \"http://www.w3.org/2000/svg\",\n        \"svg\"\n      );\n      const iconPath = document.createElementNS(\n        \"http://www.w3.org/2000/svg\",\n        \"path\"\n      );\n      iconPath.setAttributeNS(\n        null,\n        \"d\",\n        \"M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9\"\n      );\n      projectIcon.setAttribute(\"viewBox\", \"0 0 24 24\");\n      projectIcon.appendChild(iconPath);\n      projectIcon.classList.add(\"item-logo\");\n      createProject.appendChild(projectIcon);\n    })();\n\n    const createProjectNameInput = document.createElement(\"input\");\n    createProject.appendChild(createProjectNameInput);\n    window.setTimeout(() => createProjectNameInput.focus(), 0);\n\n    createProjectNameInput.addEventListener(\"input\", (e) => {\n      mainTitle.textContent = e.target.value;\n    });\n\n    const newProjectName = document.createElement(\"h5\");\n    createProjectNameInput.addEventListener(\"keydown\", handleInputToTitle);\n\n    function handleInputToTitle(e) {\n      if (e.key === \"Enter\") {\n        newProjectName.textContent = e.target.value;\n        newProjectName.classList.add(\"project-item-name\");\n        createProject.replaceChild(newProjectName, createProjectNameInput);\n        //if input is empty remove item\n        if (!newProjectName.innerText) {\n          createProject.remove();\n        }\n      }\n    }\n    function editProject() {\n      const projectItems = document.querySelectorAll(\".project-item\");\n      const editBtn = document.querySelector(\".edit-user-project\");\n      //edit only the selected item\n      editBtn.addEventListener(\"click\", () => {\n        projectItems.forEach((item) => {\n          if (item.classList.contains(\"selected\")) {\n            editItem(item);\n          }\n        });\n      });\n      //transform h5 title to input\n      function editItem(item) {\n        item.replaceChild(createProjectNameInput, newProjectName);\n        window.setTimeout(() => createProjectNameInput.focus(), 0);\n      }\n    }\n\n    //append item to his wrapper\n    userProjectsContainer.appendChild(createProject);\n    addContextMenu(createProject);\n    deleteProject();\n    editProject();\n  }\n  //right click function\n  function addContextMenu(contextItem) {\n    const contextContainer = document.querySelector(\".context-menu\");\n    contextItem.addEventListener(\"contextmenu\", handleContextMenu);\n\n    function handleContextMenu(e) {\n      contextContainer.style.left = `${e.clientX + window.scrollX}px`;\n      contextContainer.style.top = `${e.clientY + window.scrollY}px`;\n      contextContainer.style.display = \"block\";\n      e.preventDefault();\n      contextContainer.addEventListener(\"contextmenu\", (e) => {\n        e.preventDefault();\n      });\n    }\n\n    document.body.addEventListener(\"click\", () => {\n      contextContainer.style.display = \"none\";\n    });\n  }\n  //delete from context menu\n  function deleteProject() {\n    const projectItems = document.querySelectorAll(\".project-item\");\n    const deleteBtn = document.querySelector(\".delete-user-project\");\n    //if project is selected,then it can be deletet\n    deleteBtn.addEventListener(\"click\", () => {\n      projectItems.forEach((item) => {\n        if (item.classList.contains(\"selected\")) {\n          item.remove();\n          mainTitle.innerHtml = \"\";\n        }\n      });\n    });\n  }\n  selectProject();\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/sidebar.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewTask\": () => (/* binding */ createNewTask),\n/* harmony export */   \"default\": () => (/* binding */ manageItem)\n/* harmony export */ });\nfunction manageItem() {\n  //new task button\n  const newTaskButton = document.querySelector(\".add-new-task\");\n\n  newTaskButton.addEventListener(\"click\", () => {\n    toggleModal();\n  });\n\n  const taskModal = document.querySelector(\".modal\");\n\n  function submitTask() {\n    const taskSubmitButton = taskModal.querySelector(\".task-submit\");\n    taskSubmitButton.addEventListener(\"click\", () => {\n      const setTaskName = taskModal.querySelector(\".change-title\");\n      const setTasDate = taskModal.querySelector(\".change-date\");\n      const setTaskPriority = document.querySelector(\".change-priority\");\n      const setTaskComment = taskModal.querySelector(\".comment\");\n      //\n      createNewTask(\n        setTaskName.value,\n        setTasDate.value,\n        setTaskComment.value,\n        setTaskPriority.value\n      );\n\n      //reset modal\n      setTaskName.value = \"\";\n      setTasDate.value = \"\";\n      setTaskPriority.value = \"\";\n      setTaskComment.value = \"\";\n      toggleModal();\n    });\n  }\n\n  function deleteTask() {\n    const taskDeleteButton = taskModal.querySelector(\".task-delete\");\n    taskDeleteButton.addEventListener(\"click\", toggleModal);\n  }\n\n  function toggleModal() {\n    const overlay = document.querySelector(\".overlay\");\n    taskModal.classList.toggle(\"hidden\");\n    overlay.classList.toggle(\"hidden\");\n  }\n\n  submitTask();\n  deleteTask();\n}\n\nfunction createNewTask(taskTitle, taskDate, taskComment, taskPriority) {\n  const tableBody = document.querySelector(\"tbody\");\n  const newRow = document.createElement(\"tr\");\n  newRow.classList.add(\"new-task\");\n  tableBody.appendChild(newRow);\n\n  createEditButton();\n  createCheckbox();\n  createTitle();\n  createDate();\n  createPriority();\n  createComment();\n  deleteAddedTask();\n  dublicateTask();\n\n  function createTaskProperty(\n    elementProperty,\n    className,\n    appendTo,\n    value,\n    type\n  ) {\n    const newItem = document.createElement(elementProperty);\n    newItem.classList.add(className);\n    newItem.value = value;\n    newItem.type = type;\n    appendTo.appendChild(newItem);\n    return newItem;\n  }\n\n  function createEditButton() {\n    const taskIconWrapper = document.querySelector(\".task-icon-wrapper\");\n    const taskModalSmall = document.querySelector(\".task-menu-sm\");\n    const taskModalOverlay = document.querySelector(\".task-menu-overlay\");\n\n    taskIconWrapper.style.display = \"none\";\n\n    newRow.addEventListener(\"mouseover\", handleButtonDisplay);\n    newRow.addEventListener(\"mouseout\", () => {\n      taskIconWrapper.style.display = \"none\";\n    });\n    taskIconWrapper.addEventListener(\"mouseover\", () => {\n      taskIconWrapper.style.display = \"flex\";\n    });\n    taskIconWrapper.addEventListener(\"mouseout\", () => {\n      taskIconWrapper.style.display = \"none\";\n    });\n    taskIconWrapper.addEventListener(\"click\", handleModalDisplay);\n\n    function handleButtonDisplay() {\n      const newRowPosition = newRow.getBoundingClientRect();\n      taskIconWrapper.style.top = `${newRowPosition.top}px`;\n      taskIconWrapper.style.left = `${newRowPosition.left - 40}px`;\n      taskIconWrapper.style.display = \"flex\";\n    }\n\n    function handleModalDisplay() {\n      const newRowPosition = newRow.getBoundingClientRect();\n      taskModalSmall.style.top = `${newRowPosition.top}px`;\n      taskModalSmall.style.left = `${newRowPosition.left}px`;\n      taskModalSmall.classList.remove(\"hidden\");\n      taskModalOverlay.classList.remove(\"hidden\");\n      taskModalOverlay.addEventListener(\"click\", () => {\n        taskModalSmall.classList.add(\"hidden\");\n        taskModalOverlay.classList.add(\"hidden\");\n      });\n    }\n  }\n  function createCheckbox() {\n    const checkboxTd = createTaskProperty(\"td\", \"checkbox-td\", newRow);\n    const checkboxWrapper = createTaskProperty(\n      \"div\",\n      \"checkbox-wrapper\",\n      checkboxTd\n    );\n    createTaskProperty(\n      \"input\",\n      \"task-checkbox\",\n      checkboxWrapper,\n      \"\",\n      \"checkbox\"\n    );\n  }\n\n  function createTitle() {\n    const newTaskTitle = createTaskProperty(\"td\", \"title-wrapper\", newRow);\n    const newTaskTitleWrapper = createTaskProperty(\n      \"div\",\n      \"title-icon-wrapper\",\n      newTaskTitle\n    );\n    const newTitleInput = createTaskProperty(\n      \"input\",\n      \"todo-title\",\n      newTaskTitleWrapper,\n      taskTitle\n    );\n    if (!newTitleInput.value) {\n      newTitleInput.placeholder = \"untitled\";\n    }\n    if (newTitleInput.value.trim().length === 0) {\n      newTitleInput.placeholder = \"untitled\";\n      return (newTitleInput.value = \"\");\n    }\n  }\n  function createDate() {\n    const newTaskDate = createTaskProperty(\"td\", \"date-wrapper\", newRow);\n\n    const taskDateInput = createTaskProperty(\n      \"input\",\n      \"todo-date\",\n      newTaskDate,\n      taskDate,\n      \"date\"\n    );\n  }\n  function createPriority() {\n    const priorities = [\"High\", \"Medium\", \"Low\"];\n    const priorityWrapper = document.createElement(\"select\");\n    priorityWrapper.classList.add(\"todo-priority\");\n\n    for (const priority of priorities) {\n      const option = document.createElement(\"option\");\n      option.value = priority.toLowerCase();\n      option.textContent = priority;\n      priorityWrapper.appendChild(option);\n    }\n\n    priorityWrapper.value = taskPriority;\n\n    const newTaskPriority = document.createElement(\"td\");\n    newTaskPriority.classList.add(\"priority-wrapper\");\n    newTaskPriority.appendChild(priorityWrapper);\n    newRow.appendChild(newTaskPriority);\n  }\n  function createComment() {\n    const newTaskComment = createTaskProperty(\"td\", \"comment-wrapper\", newRow);\n    const wrapperIconComment = createTaskProperty(\n      \"div\",\n      \"wrapperIconComment\",\n      newTaskComment\n    );\n    const newComment = createTaskProperty(\n      \"input\",\n      \"user-added-comment\",\n      wrapperIconComment,\n      taskComment\n    );\n    const projectIcon = document.createElementNS(\n      \"http://www.w3.org/2000/svg\",\n      \"svg\"\n    );\n    function createIcon(appendTo) {\n      const iconPath = document.createElementNS(\n        \"http://www.w3.org/2000/svg\",\n        \"path\"\n      );\n      iconPath.setAttributeNS(\n        null,\n        \"d\",\n        \"M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z\"\n      );\n      projectIcon.setAttribute(\"viewBox\", \"0 0 24 24\");\n      projectIcon.appendChild(iconPath);\n      projectIcon.classList.add(\"item-logo\");\n      appendTo.appendChild(projectIcon);\n    }\n    createIcon(wrapperIconComment);\n\n    if (newComment.value.trim().length === 0) {\n      newComment.value = \"\";\n    }\n    newTaskComment.addEventListener(\"click\", () => {\n      newComment.style.display = \"block\";\n      projectIcon.style.display = \"none\";\n    });\n    newTaskComment.addEventListener(\"dblclick\", () => {\n      newComment.style.display = \"none\";\n      projectIcon.style.display = \"block\";\n    });\n  }\n  function deleteAddedTask() {\n    const allTasks = document.querySelectorAll(\".new-task\");\n    allTasks.forEach((item) => {\n      item.addEventListener(\"mouseover\", (e) => {\n        item.classList.add(\"task-selected\");\n        allTasks.forEach((el) => {\n          if (el !== item) {\n            el.classList.remove(\"task-selected\");\n          }\n        });\n      });\n    });\n    const removeTaskButton = document.querySelector(\".delete-task\");\n    removeTaskButton.addEventListener(\"click\", () => {\n      const selectedTask = document.querySelector(\".task-selected\");\n      if (selectedTask) {\n        const taskModalSmall = document.querySelector(\".task-menu-sm\");\n        taskModalSmall.classList.add(\"hidden\");\n        selectedTask.remove();\n      }\n    });\n  }\n  function dublicateTask() {\n    const dublicateTaskButton = document.querySelector(\".dublicate-task\");\n    dublicateTaskButton.addEventListener(\"click\", () => {\n      const selectedTask = document.querySelector(\".task-selected\");\n      const selectedTaskTitle = selectedTask.querySelector(\".todo-title\").value;\n      const selectedTaskComment = selectedTask.querySelector(\n        \".user-added-comment\"\n      ).value;\n\n      const dublicatedTask = createNewTask(\n        selectedTaskTitle,\n        \"\",\n        selectedTaskComment\n      );\n      const taskModalSmall = document.querySelector(\".task-menu-sm\");\n      taskModalSmall.classList.add(\"hidden\");\n    });\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/todo.js?");

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