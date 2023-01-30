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

eval("document.getElementById(\"btnNewProject\").addEventListener(\"click\", () => {\n  addNewProject();\n  selectProject();\n});\n\nfunction selectProject() {\n  const allProjects = document.querySelectorAll(\".wrapper-project-item\");\n  const mainTitle = document.getElementById(\"mainTitle\");\n\n  //loop over all projects and listen for click\n  allProjects.forEach((item) => {\n    item.addEventListener(\"click\", (e) => {\n      item.classList.add(\"selected\");\n      mainTitle.textContent = item.textContent;\n      allProjects.forEach((el) => {\n        if (el !== item) {\n          el.classList.remove(\"selected\");\n        }\n      });\n    });\n  });\n}\n\nfunction addNewProject() {\n  const userProjectsContainer = document.querySelector(\".wrp-user-projct\");\n\n  //item wrapper (icon and name) and syling\n  const createProject = document.createElement(\"div\");\n  createProject.classList.add(\"wrapper-project-item\", \"project-item\");\n\n  (function createIcon() {\n    const projectIcon = document.createElementNS(\n      \"http://www.w3.org/2000/svg\",\n      \"svg\"\n    );\n    const iconPath = document.createElementNS(\n      \"http://www.w3.org/2000/svg\",\n      \"path\"\n    );\n    iconPath.setAttributeNS(\n      null,\n      \"d\",\n      \"M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9\"\n    );\n    projectIcon.setAttribute(\"viewBox\", \"0 0 24 24\");\n    projectIcon.appendChild(iconPath);\n    projectIcon.classList.add(\"item-logo\");\n    createProject.appendChild(projectIcon);\n  })();\n\n  // first create a input and append to item wrapper\n  const createProjectNameInput = document.createElement(\"input\");\n  createProject.appendChild(createProjectNameInput);\n  window.setTimeout(() => createProjectNameInput.focus(), 0);\n\n  createProjectNameInput.addEventListener(\"input\", (e) => {\n    mainTitle.textContent = e.target.value;\n  });\n\n  const newProjectName = document.createElement(\"h5\");\n  //user enter , transform input to h5\n  createProjectNameInput.addEventListener(\"keydown\", (e) => {\n    if (e.key === \"Enter\") {\n      newProjectName.textContent = e.target.value;\n      console.log(e.target.value);\n      newProjectName.classList.add(\"project-item-name\");\n      createProject.replaceChild(newProjectName, createProjectNameInput);\n      //if input is empty remove item\n      if (!newProjectName.innerText) {\n        createProject.remove();\n      }\n    }\n  });\n\n  //edit project\n  function editProject() {\n    const projectItems = document.querySelectorAll(\".project-item\");\n    const editBtn = document.querySelector(\".edit-user-project\");\n    editBtn.addEventListener(\"click\", () => {\n      projectItems.forEach((item) => {\n        if (item.classList.contains(\"selected\")) {\n          editItem(item);\n        }\n      });\n    });\n    //transform h5 title to input\n    function editItem(item) {\n      item.replaceChild(createProjectNameInput, newProjectName);\n      window.setTimeout(() => createProjectNameInput.focus(), 0);\n    }\n  }\n\n  //append item to his wrapper\n  userProjectsContainer.appendChild(createProject);\n  addContextMenu(createProject);\n  deleteProject();\n  editProject();\n}\n\n//right click function\nfunction addContextMenu(contextItem) {\n  const contextContainer = document.querySelector(\".context-menu\");\n  contextItem.addEventListener(\"contextmenu\", handleContextMenu);\n\n  function handleContextMenu(e) {\n    contextContainer.style.left = `${e.clientX + window.scrollX}px`;\n    contextContainer.style.top = `${e.clientY + window.scrollY}px`;\n    contextContainer.style.display = \"block\";\n    e.preventDefault();\n  }\n\n  contextContainer.addEventListener(\"contextmenu\", (e) => {\n    e.preventDefault();\n  });\n\n  document.body.addEventListener(\"click\", () => {\n    contextContainer.style.display = \"none\";\n  });\n}\n//delete from context menu\nfunction deleteProject() {\n  const projectItems = document.querySelectorAll(\".project-item\");\n  const deleteBtn = document.querySelector(\".delete-user-project\");\n  //if project is selected,then it can be deletet\n  deleteBtn.addEventListener(\"click\", () => {\n    projectItems.forEach((item) => {\n      if (item.classList.contains(\"selected\")) {\n        item.remove();\n        mainTitle.innerHtml = \"\";\n      }\n    });\n  });\n}\n//--------------------------------------------------sidebar\nfunction manageItem() {\n  document.body.querySelector(\".add-new-task\").addEventListener(\"click\", () => {\n    toggleModal();\n  });\n\n  const taskModal = document.querySelector(\".modal\");\n\n  function submitTask() {\n    const taskSubmit = taskModal.querySelector(\".task-submit\");\n    taskSubmit.addEventListener(\"click\", () => {\n      toggleModal();\n      const setTaskName = taskModal.querySelector(\".change-title\");\n      const setTasDate = taskModal.querySelector(\".change-date\");\n      const setTaskPriority = taskModal.querySelector(\".change-priority\");\n\n      console.log(setTaskPriority.value);\n      createNewTask(setTaskName.value, setTasDate.value, setTaskPriority.value);\n    });\n  }\n\n  function deleteTask() {\n    const taskDeleteButton = taskModal.querySelector(\".task-delete\");\n    taskDeleteButton.addEventListener(\"click\", toggleModal);\n  }\n\n  function toggleModal() {\n    taskModal.classList.toggle(\"hidden\");\n    const overlay = document.querySelector(\".overlay\");\n    overlay.classList.toggle(\"hidden\");\n  }\n\n  submitTask();\n  deleteTask();\n}\n//--------------------\nfunction createNewTask(taskTitle, taskDate, taskPriority) {\n  const table = document.querySelector(\".table\");\n\n  const newTableRow = document.createElement(\"tr\");\n  table.appendChild(newTableRow);\n\n  function createTaskProperty(\n    elementProperty,\n    elementClass,\n    appendTo,\n    elementValue,\n    elementType\n  ) {\n    const newItem = document.createElement(elementProperty);\n    newItem.classList.add(elementClass);\n    appendTo.appendChild(newItem);\n    newItem.value = elementValue;\n    newItem.type = elementType;\n    return newItem;\n  }\n  const newTaskCheck = createTaskProperty(\"td\", \"checkbox-td\", newTableRow);\n\n  const newTaskCheckWrapper = createTaskProperty(\n    \"div\",\n    \"checkbox-wrapper\",\n    newTaskCheck\n  );\n  const taskCheckBox = createTaskProperty(\n    \"input\",\n    \"task-checkbox\",\n    newTaskCheckWrapper\n  );\n  taskCheckBox.type = \"checkbox\";\n\n  const newTaskTitle = createTaskProperty(\"td\", \"title-wrapper\", newTableRow);\n\n  const newTitleInput = createTaskProperty(\n    \"input\",\n    \"todo-title\",\n    newTaskTitle,\n    taskTitle\n  );\n\n  const newTaskDate = createTaskProperty(\"td\", \"date-wrapper\", newTableRow);\n\n  const taskDateInput = createTaskProperty(\n    \"input\",\n    \"todo-date\",\n    newTaskDate,\n    taskDate,\n    \"date\"\n  );\n\n  const newTaskPriority = createTaskProperty(\n    \"td\",\n    \"priority-wrapper\",\n    newTableRow\n  );\n\n  //const prioritysWrapper = createTaskProperty(\"select\",\"todo-priority\",newTaskPriority)\n\n  const prioritysWrapper = document.createElement(\"select\");\n  prioritysWrapper.classList.add(\"todo-priority\");\n  newTaskPriority.appendChild(prioritysWrapper);\n  //\n\n  const priorityHigh = createTaskProperty(\n    \"option\",\n    \"option-high\",\n    prioritysWrapper,\n    \"high\"\n  );\n  priorityHigh.textContent = \"High\";\n\n  const priorityMedium = createTaskProperty(\n    \"option\",\n    \"option-medium\",\n    prioritysWrapper,\n    \"medium\"\n  );\n  priorityMedium.textContent = \"Medium\";\n\n  const priorityLow = createTaskProperty(\n    \"option\",\n    \"option-low\",\n    prioritysWrapper,\n    \"low\"\n  );\n  priorityLow.textContent = \"Low\";\n\n  const priorityValue = prioritysWrapper.value;\n  console.log(alert(prioritysWrapper.textContent));\n}\nmanageItem();\nselectProject();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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