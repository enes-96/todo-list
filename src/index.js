document.getElementById("btnNewProject").addEventListener("click", () => {
  addNewProject();
  selectProject();
});

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

  // first create a input and append to item wrapper
  const createProjectNameInput = document.createElement("input");
  createProject.appendChild(createProjectNameInput);
  window.setTimeout(() => createProjectNameInput.focus(), 0);

  createProjectNameInput.addEventListener("input", (e) => {
    mainTitle.textContent = e.target.value;
  });

  const newProjectName = document.createElement("h5");
  //user enter , transform input to h5
  createProjectNameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      newProjectName.textContent = e.target.value;
      console.log(e.target.value);
      newProjectName.classList.add("project-item-name");
      createProject.replaceChild(newProjectName, createProjectNameInput);
      //if input is empty remove item
      if (!newProjectName.innerText) {
        createProject.remove();
      }
    }
  });

  //edit project
  function editProject() {
    const projectItems = document.querySelectorAll(".project-item");
    const editBtn = document.querySelector(".edit-user-project");
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
  }

  contextContainer.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

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
//--------------------------------------------------sidebar
function manageItem() {
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
      const setTaskPriority = taskModal.querySelector(".change-priority");

      console.log(setTaskPriority.value);
      createNewTask(setTaskName.value, setTasDate.value, setTaskPriority.value);
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
//--------------------
function createNewTask(taskTitle, taskDate, taskPriority) {
  const table = document.querySelector(".table");

  const newTableRow = document.createElement("tr");
  table.appendChild(newTableRow);

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
  const newTaskCheck = createTaskProperty("td", "checkbox-td", newTableRow);

  const newTaskCheckWrapper = createTaskProperty(
    "div",
    "checkbox-wrapper",
    newTaskCheck
  );
  const taskCheckBox = createTaskProperty(
    "input",
    "task-checkbox",
    newTaskCheckWrapper
  );
  taskCheckBox.type = "checkbox";

  const newTaskTitle = createTaskProperty("td", "title-wrapper", newTableRow);

  const newTitleInput = createTaskProperty(
    "input",
    "todo-title",
    newTaskTitle,
    taskTitle
  );

  const newTaskDate = createTaskProperty("td", "date-wrapper", newTableRow);

  const taskDateInput = createTaskProperty(
    "input",
    "todo-date",
    newTaskDate,
    taskDate,
    "date"
  );

  const newTaskPriority = createTaskProperty(
    "td",
    "priority-wrapper",
    newTableRow
  );

  //const prioritysWrapper = createTaskProperty("select","todo-priority",newTaskPriority)

  const prioritysWrapper = document.createElement("select");
  prioritysWrapper.classList.add("todo-priority");
  newTaskPriority.appendChild(prioritysWrapper);
  //

  const priorityHigh = createTaskProperty(
    "option",
    "option-high",
    prioritysWrapper,
    "high"
  );
  priorityHigh.textContent = "High";

  const priorityMedium = createTaskProperty(
    "option",
    "option-medium",
    prioritysWrapper,
    "medium"
  );
  priorityMedium.textContent = "Medium";

  const priorityLow = createTaskProperty(
    "option",
    "option-low",
    prioritysWrapper,
    "low"
  );
  priorityLow.textContent = "Low";

  const priorityValue = prioritysWrapper.value;
  console.log(alert(prioritysWrapper.textContent));
}
manageItem();
selectProject();
