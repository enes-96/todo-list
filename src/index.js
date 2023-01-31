document.getElementById("btnNewProject").addEventListener("click", () => {
  addNewProject();
  selectProject();
});
//sidebar select
function selectProject() {
  const allProjects = document.querySelectorAll(".wrapper-project-item");
  const mainTitle = document.getElementById("mainTitle");

  //loop over all projects and listen for click
  allProjects.forEach((item) => {
    item.addEventListener("click", (e) => {
      item.classList.add("selected");
      mainTitle.textContent = item.textContent;
      allProjects.forEach((el) => {
        if (el !== item) {
          el.classList.remove("selected");
        }
      });
    });
  });
}
//sidebar
function addNewProject() {
  const userProjectsContainer = document.querySelector(".wrp-user-projct");

  //item wrapper (icon and name) and syling
  const createProject = document.createElement("div");
  createProject.classList.add("wrapper-project-item", "project-item");

  (function createIcon() {
    const projectIcon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    const iconPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    iconPath.setAttributeNS(
      null,
      "d",
      "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
    );
    projectIcon.setAttribute("viewBox", "0 0 24 24");
    projectIcon.appendChild(iconPath);
    projectIcon.classList.add("item-logo");
    createProject.appendChild(projectIcon);
  })();

  const createProjectNameInput = document.createElement("input");
  createProject.appendChild(createProjectNameInput);
  window.setTimeout(() => createProjectNameInput.focus(), 0);

  createProjectNameInput.addEventListener("input", (e) => {
    mainTitle.textContent = e.target.value;
  });

  const newProjectName = document.createElement("h5");
  createProjectNameInput.addEventListener("keydown", handleInputToTitle);

  function handleInputToTitle(e) {
    if (e.key === "Enter") {
      newProjectName.textContent = e.target.value;
      newProjectName.classList.add("project-item-name");
      createProject.replaceChild(newProjectName, createProjectNameInput);
      //if input is empty remove item
      if (!newProjectName.innerText) {
        createProject.remove();
      }
    }
  }
  function editProject() {
    const projectItems = document.querySelectorAll(".project-item");
    const editBtn = document.querySelector(".edit-user-project");
    //edit only the selected item
    editBtn.addEventListener("click", () => {
      projectItems.forEach((item) => {
        if (item.classList.contains("selected")) {
          editItem(item);
        }
      });
    });
    //transform h5 title to input
    function editItem(item) {
      item.replaceChild(createProjectNameInput, newProjectName);
      window.setTimeout(() => createProjectNameInput.focus(), 0);
    }
  }

  //append item to his wrapper
  userProjectsContainer.appendChild(createProject);
  addContextMenu(createProject);
  deleteProject();
  editProject();
}
//right click function
function addContextMenu(contextItem) {
  const contextContainer = document.querySelector(".context-menu");
  contextItem.addEventListener("contextmenu", handleContextMenu);

  function handleContextMenu(e) {
    contextContainer.style.left = `${e.clientX + window.scrollX}px`;
    contextContainer.style.top = `${e.clientY + window.scrollY}px`;
    contextContainer.style.display = "block";
    e.preventDefault();
    contextContainer.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }

  document.body.addEventListener("click", () => {
    contextContainer.style.display = "none";
  });
}
//delete from context menu
function deleteProject() {
  const projectItems = document.querySelectorAll(".project-item");
  const deleteBtn = document.querySelector(".delete-user-project");
  //if project is selected,then it can be deletet
  deleteBtn.addEventListener("click", () => {
    projectItems.forEach((item) => {
      if (item.classList.contains("selected")) {
        item.remove();
        mainTitle.innerHtml = "";
      }
    });
  });
}

function manageItem() {
  //new task button
  document.body.querySelector(".add-new-task").addEventListener("click", () => {
    toggleModal();
  });
  const taskModal = document.querySelector(".modal");

  function submitTask() {
    const taskSubmit = taskModal.querySelector(".task-submit");

    taskSubmit.addEventListener("click", () => {
      toggleModal();
      const setTaskName = taskModal.querySelector(".change-title");
      const setTasDate = taskModal.querySelector(".change-date");
      const setTaskPriority = document.querySelector(".change-priority");
      const setTaskComment = document.querySelector(".comment");
      createNewTask(setTaskName.value, setTasDate.value);

      //reset modal
      setTaskName.value = "";
      setTasDate.value = "";
      setTaskPriority.value = "";
    });
  }

  function deleteTask() {
    const taskDeleteButton = taskModal.querySelector(".task-delete");
    taskDeleteButton.addEventListener("click", toggleModal);
  }

  function toggleModal() {
    taskModal.classList.toggle("hidden");
    const overlay = document.querySelector(".overlay");
    overlay.classList.toggle("hidden");
  }

  submitTask();
  deleteTask();
}

function createNewTask(taskTitle, taskDate) {
  const tableRow = document.querySelector("tbody");
  const newTableRow = document.createElement("tr");
  tableRow.appendChild(newTableRow);

  createEditButton();
  //checkbox dont need a argument
  createCheckbox();
  //first argument
  createTitle();
  //second argument
  createDate();
  //third argument
  createPriority();
  //fourth argument
  createComment();

  function createTaskProperty(
    elementProperty,
    elementClass,
    appendTo,
    elementValue,
    elementType
  ) {
    const newItem = document.createElement(elementProperty);
    newItem.classList.add(elementClass);
    appendTo.appendChild(newItem);
    newItem.value = elementValue;
    newItem.type = elementType;
    return newItem;
  }
  function createCheckbox() {
    const newTaskCheck = createTaskProperty("td", "checkbox-td", newTableRow);

    const newTaskCheckWrapper = createTaskProperty(
      "div",
      "checkbox-wrapper",
      newTaskCheck
    );
    const taskCheckBox = createTaskProperty(
      "input",
      "task-checkbox",
      newTaskCheckWrapper,
      "",
      "checkbox"
    );
  }
  function createTitle() {
    const newTaskTitle = createTaskProperty("td", "title-wrapper", newTableRow);

    const newTitleInput = createTaskProperty(
      "input",
      "todo-title",
      newTaskTitle,
      taskTitle
    );
    if (!newTitleInput.value) {
      newTitleInput.placeholder = "untitled";
    }
    if (newTitleInput.value.trim().length === 0) {
      newTitleInput.placeholder = "untitled";

      return (newTitleInput.value = "");
    }
  }
  function createDate() {
    const newTaskDate = createTaskProperty("td", "date-wrapper", newTableRow);

    const taskDateInput = createTaskProperty(
      "input",
      "todo-date",
      newTaskDate,
      taskDate,
      "date"
    );
  }
  function createPriority() {
    const priorityWrapper = document.createElement("select");
    priorityWrapper.classList.add("todo-priority");

    const priorities = ["High", "Medium", "Low"];
    for (const priority of priorities) {
      const option = document.createElement("option");
      option.value = priority.toLowerCase();
      option.textContent = priority;
      priorityWrapper.appendChild(option);
    }

    const setTaskPriority = document.querySelector(".change-priority");

    priorityWrapper.value = setTaskPriority.value;

    const newTaskPriority = document.createElement("td");
    newTaskPriority.classList.add("priority-wrapper");
    newTaskPriority.appendChild(priorityWrapper);
    newTableRow.appendChild(newTaskPriority);
  }
  function createComment() {}

  function createEditButton() {
    const taskIconWrapper = document.querySelector(".task-icon-wrapper");
    taskIconWrapper.style.display = "none";

    taskIconWrapper.addEventListener("click", handleTaskModal);
    function handleTaskModal() {
      const taskModal = document.querySelector(".task-menu-sm");
      const taskModalOverlay = document.querySelector(".task-menu-overlay");
      const newTableRowPositions = newTableRow.getBoundingClientRect();

      taskModal.style.top = `${newTableRowPositions.top}px`;
      taskModal.style.left = `${newTableRowPositions.left}px`;
      taskModal.classList.remove("hidden");
      if (!taskModal.classList.contains("hidden")) {
        taskModalOverlay.classList.remove("hidden");
        taskModalOverlay.addEventListener("click", () => {
          taskModal.classList.add("hidden");
          taskModalOverlay.classList.add("hidden");
        });
      }
    }

    newTableRow.addEventListener("mouseover", handleButtonPosition);

    handleButtonExistins(taskIconWrapper, "mouseover", taskIconWrapper, "flex");
    handleButtonExistins(taskIconWrapper, "mouseout", taskIconWrapper, "none");
    handleButtonExistins(newTableRow, "mouseout", taskIconWrapper, "none");

    function handleButtonPosition() {
      const newTableRowPositions = newTableRow.getBoundingClientRect();
      taskIconWrapper.style.top = `${newTableRowPositions.top}px`;
      taskIconWrapper.style.left = newTableRowPositions.left - 40 + "px";
      taskIconWrapper.style.display = "flex";
    }
    function handleButtonExistins(target, event, parent, displayItem) {
      target.addEventListener(event, function () {
        parent.style.display = displayItem;
      });
    }
  }
}

manageItem();
selectProject();
