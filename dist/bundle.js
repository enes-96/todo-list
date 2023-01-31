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

eval("document.getElementById(\"btnNewProject\").addEventListener(\"click\", () => {\n  addNewProject();\n  selectProject();\n});\n//sidebar select\nfunction selectProject() {\n  const allProjects = document.querySelectorAll(\".wrapper-project-item\");\n  const mainTitle = document.getElementById(\"mainTitle\");\n\n  //loop over all projects and listen for click\n  allProjects.forEach((item) => {\n    item.addEventListener(\"click\", (e) => {\n      item.classList.add(\"selected\");\n      mainTitle.textContent = item.textContent;\n      allProjects.forEach((el) => {\n        if (el !== item) {\n          el.classList.remove(\"selected\");\n        }\n      });\n    });\n  });\n}\n//sidebar\nfunction addNewProject() {\n  const userProjectsContainer = document.querySelector(\".wrp-user-projct\");\n\n  //item wrapper (icon and name) and syling\n  const createProject = document.createElement(\"div\");\n  createProject.classList.add(\"wrapper-project-item\", \"project-item\");\n\n  (function createIcon() {\n    const projectIcon = document.createElementNS(\n      \"http://www.w3.org/2000/svg\",\n      \"svg\"\n    );\n    const iconPath = document.createElementNS(\n      \"http://www.w3.org/2000/svg\",\n      \"path\"\n    );\n    iconPath.setAttributeNS(\n      null,\n      \"d\",\n      \"M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9\"\n    );\n    projectIcon.setAttribute(\"viewBox\", \"0 0 24 24\");\n    projectIcon.appendChild(iconPath);\n    projectIcon.classList.add(\"item-logo\");\n    createProject.appendChild(projectIcon);\n  })();\n\n  const createProjectNameInput = document.createElement(\"input\");\n  createProject.appendChild(createProjectNameInput);\n  window.setTimeout(() => createProjectNameInput.focus(), 0);\n\n  createProjectNameInput.addEventListener(\"input\", (e) => {\n    mainTitle.textContent = e.target.value;\n  });\n\n  const newProjectName = document.createElement(\"h5\");\n  createProjectNameInput.addEventListener(\"keydown\", handleInputToTitle);\n\n  function handleInputToTitle(e) {\n    if (e.key === \"Enter\") {\n      newProjectName.textContent = e.target.value;\n      newProjectName.classList.add(\"project-item-name\");\n      createProject.replaceChild(newProjectName, createProjectNameInput);\n      //if input is empty remove item\n      if (!newProjectName.innerText) {\n        createProject.remove();\n      }\n    }\n  }\n  function editProject() {\n    const projectItems = document.querySelectorAll(\".project-item\");\n    const editBtn = document.querySelector(\".edit-user-project\");\n    //edit only the selected item\n    editBtn.addEventListener(\"click\", () => {\n      projectItems.forEach((item) => {\n        if (item.classList.contains(\"selected\")) {\n          editItem(item);\n        }\n      });\n    });\n    //transform h5 title to input\n    function editItem(item) {\n      item.replaceChild(createProjectNameInput, newProjectName);\n      window.setTimeout(() => createProjectNameInput.focus(), 0);\n    }\n  }\n\n  //append item to his wrapper\n  userProjectsContainer.appendChild(createProject);\n  addContextMenu(createProject);\n  deleteProject();\n  editProject();\n}\n//right click function\nfunction addContextMenu(contextItem) {\n  const contextContainer = document.querySelector(\".context-menu\");\n  contextItem.addEventListener(\"contextmenu\", handleContextMenu);\n\n  function handleContextMenu(e) {\n    contextContainer.style.left = `${e.clientX + window.scrollX}px`;\n    contextContainer.style.top = `${e.clientY + window.scrollY}px`;\n    contextContainer.style.display = \"block\";\n    e.preventDefault();\n    contextContainer.addEventListener(\"contextmenu\", (e) => {\n      e.preventDefault();\n    });\n  }\n\n  document.body.addEventListener(\"click\", () => {\n    contextContainer.style.display = \"none\";\n  });\n}\n//delete from context menu\nfunction deleteProject() {\n  const projectItems = document.querySelectorAll(\".project-item\");\n  const deleteBtn = document.querySelector(\".delete-user-project\");\n  //if project is selected,then it can be deletet\n  deleteBtn.addEventListener(\"click\", () => {\n    projectItems.forEach((item) => {\n      if (item.classList.contains(\"selected\")) {\n        item.remove();\n        mainTitle.innerHtml = \"\";\n      }\n    });\n  });\n}\n\nfunction manageItem() {\n  //new task button\n  document.body.querySelector(\".add-new-task\").addEventListener(\"click\", () => {\n    toggleModal();\n  });\n  const taskModal = document.querySelector(\".modal\");\n\n  function submitTask() {\n    const taskSubmit = taskModal.querySelector(\".task-submit\");\n\n    taskSubmit.addEventListener(\"click\", () => {\n      toggleModal();\n      const setTaskName = taskModal.querySelector(\".change-title\");\n      const setTasDate = taskModal.querySelector(\".change-date\");\n      const setTaskPriority = document.querySelector(\".change-priority\");\n      const setTaskComment = document.querySelector(\".comment\");\n      createNewTask(setTaskName.value, setTasDate.value);\n\n      //reset modal\n      setTaskName.value = \"\";\n      setTasDate.value = \"\";\n      setTaskPriority.value = \"\";\n    });\n  }\n\n  function deleteTask() {\n    const taskDeleteButton = taskModal.querySelector(\".task-delete\");\n    taskDeleteButton.addEventListener(\"click\", toggleModal);\n  }\n\n  function toggleModal() {\n    taskModal.classList.toggle(\"hidden\");\n    const overlay = document.querySelector(\".overlay\");\n    overlay.classList.toggle(\"hidden\");\n  }\n\n  submitTask();\n  deleteTask();\n}\n\nfunction createNewTask(taskTitle, taskDate) {\n  const tableRow = document.querySelector(\"tbody\");\n  const newTableRow = document.createElement(\"tr\");\n  tableRow.appendChild(newTableRow);\n\n  createEditButton();\n  //checkbox dont need a argument\n  createCheckbox();\n  //first argument\n  createTitle();\n  //second argument\n  createDate();\n  //third argument\n  createPriority();\n  //fourth argument\n  createComment();\n\n  function createTaskProperty(\n    elementProperty,\n    elementClass,\n    appendTo,\n    elementValue,\n    elementType\n  ) {\n    const newItem = document.createElement(elementProperty);\n    newItem.classList.add(elementClass);\n    appendTo.appendChild(newItem);\n    newItem.value = elementValue;\n    newItem.type = elementType;\n    return newItem;\n  }\n  function createCheckbox() {\n    const newTaskCheck = createTaskProperty(\"td\", \"checkbox-td\", newTableRow);\n\n    const newTaskCheckWrapper = createTaskProperty(\n      \"div\",\n      \"checkbox-wrapper\",\n      newTaskCheck\n    );\n    const taskCheckBox = createTaskProperty(\n      \"input\",\n      \"task-checkbox\",\n      newTaskCheckWrapper,\n      \"\",\n      \"checkbox\"\n    );\n  }\n  function createTitle() {\n    const newTaskTitle = createTaskProperty(\"td\", \"title-wrapper\", newTableRow);\n\n    const newTitleInput = createTaskProperty(\n      \"input\",\n      \"todo-title\",\n      newTaskTitle,\n      taskTitle\n    );\n    if (!newTitleInput.value) {\n      newTitleInput.placeholder = \"untitled\";\n    }\n    if (newTitleInput.value.trim().length === 0) {\n      newTitleInput.placeholder = \"untitled\";\n\n      return (newTitleInput.value = \"\");\n    }\n  }\n  function createDate() {\n    const newTaskDate = createTaskProperty(\"td\", \"date-wrapper\", newTableRow);\n\n    const taskDateInput = createTaskProperty(\n      \"input\",\n      \"todo-date\",\n      newTaskDate,\n      taskDate,\n      \"date\"\n    );\n  }\n  function createPriority() {\n    const priorityWrapper = document.createElement(\"select\");\n    priorityWrapper.classList.add(\"todo-priority\");\n\n    const priorities = [\"High\", \"Medium\", \"Low\"];\n    for (const priority of priorities) {\n      const option = document.createElement(\"option\");\n      option.value = priority.toLowerCase();\n      option.textContent = priority;\n      priorityWrapper.appendChild(option);\n    }\n\n    const setTaskPriority = document.querySelector(\".change-priority\");\n\n    priorityWrapper.value = setTaskPriority.value;\n\n    const newTaskPriority = document.createElement(\"td\");\n    newTaskPriority.classList.add(\"priority-wrapper\");\n    newTaskPriority.appendChild(priorityWrapper);\n    newTableRow.appendChild(newTaskPriority);\n  }\n  function createComment() {}\n\n  function createEditButton() {\n    const taskIconWrapper = document.querySelector(\".task-icon-wrapper\");\n    taskIconWrapper.style.display = \"none\";\n\n    taskIconWrapper.addEventListener(\"click\", handleTaskModal);\n    function handleTaskModal() {\n      const taskModal = document.querySelector(\".task-menu-sm\");\n      const taskModalOverlay = document.querySelector(\".task-menu-overlay\");\n      const newTableRowPositions = newTableRow.getBoundingClientRect();\n\n      taskModal.style.top = `${newTableRowPositions.top}px`;\n      taskModal.style.left = `${newTableRowPositions.left}px`;\n      taskModal.classList.remove(\"hidden\");\n      if (!taskModal.classList.contains(\"hidden\")) {\n        taskModalOverlay.classList.remove(\"hidden\");\n        taskModalOverlay.addEventListener(\"click\", () => {\n          taskModal.classList.add(\"hidden\");\n          taskModalOverlay.classList.add(\"hidden\");\n        });\n      }\n    }\n\n    newTableRow.addEventListener(\"mouseover\", handleButtonPosition);\n\n    handleButtonExistins(taskIconWrapper, \"mouseover\", taskIconWrapper, \"flex\");\n    handleButtonExistins(taskIconWrapper, \"mouseout\", taskIconWrapper, \"none\");\n    handleButtonExistins(newTableRow, \"mouseout\", taskIconWrapper, \"none\");\n\n    function handleButtonPosition() {\n      const newTableRowPositions = newTableRow.getBoundingClientRect();\n      taskIconWrapper.style.top = `${newTableRowPositions.top}px`;\n      taskIconWrapper.style.left = newTableRowPositions.left - 40 + \"px\";\n      taskIconWrapper.style.display = \"flex\";\n    }\n    function handleButtonExistins(target, event, parent, displayItem) {\n      target.addEventListener(event, function () {\n        parent.style.display = displayItem;\n      });\n    }\n  }\n}\n\nmanageItem();\nselectProject();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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