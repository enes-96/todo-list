import sidebarJS from "./sidebar.js";

sidebarJS();

//new item modal
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
  newTableRow.classList.add("new-task");
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
  //delete task
  deleteAddedTask();

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
  function createComment() {
    const addCommentButton = document.querySelector(".comment-task");

    addCommentButton.addEventListener("click", () => {
      const selectedTask = document.querySelector(".task-selected");
      const taskModalSmall = document.querySelector(".task-menu-sm");
      const commentContainer = document.querySelector(".comment-box");
      const commentOverlay = document.querySelector(".comment-box-overlay");

      if (selectedTask) {
        commentContainer.classList.remove("hidden");
        commentOverlay.classList.remove("hidden");
        taskModalSmall.classList.add("hidden");
      }

      commentOverlay.addEventListener("click", () => {
        commentContainer.classList.add("hidden");
        commentOverlay.classList.add("hidden");
        const taskTitle = document.querySelector(".title-wrapper");
        //

        taskTitle.style.backgroundColor = "blue";
      });
    });
  }
  function deleteAddedTask() {
    const allTasks = document.querySelectorAll(".new-task");
    const removeTaskButton = document.querySelector(".delete-task");
    allTasks.forEach((item) => {
      item.addEventListener("mouseover", (e) => {
        item.classList.add("task-selected");
        allTasks.forEach((el) => {
          if (el !== item) {
            el.classList.remove("task-selected");
          }
        });
      });
    });

    removeTaskButton.addEventListener("click", () => {
      const selectedTask = document.querySelector(".task-selected");
      if (selectedTask) {
        const taskModalSmall = document.querySelector(".task-menu-sm");
        taskModalSmall.classList.add("hidden");
        selectedTask.remove();
      }
    });
  }
  function createEditButton() {
    const taskIcon = document.querySelector(".task-icon-wrapper");
    taskIcon.style.display = "none";

    //open modal if click the dots
    taskIcon.addEventListener("click", handleTaskModal);

    function handleTaskModal() {
      const newTableRowPositions = newTableRow.getBoundingClientRect();
      //modal container
      const taskModalSmall = document.querySelector(".task-menu-sm");
      const taskModalOverlay = document.querySelector(".task-menu-overlay");

      taskModalSmall.style.top = `${newTableRowPositions.top}px`;
      taskModalSmall.style.left = `${newTableRowPositions.left}px`;
      taskModalSmall.classList.remove("hidden");
      if (!taskModalSmall.classList.contains("hidden")) {
        taskModalOverlay.classList.remove("hidden");
        taskModalOverlay.addEventListener("click", () => {
          taskModalSmall.classList.add("hidden");
          taskModalOverlay.classList.add("hidden");
        });
      }
    }

    //dots icon appear when hover
    newTableRow.addEventListener("mouseover", handleButtonPosition);
    handleButtonExistins(taskIcon, "mouseover", taskIcon, "flex");
    handleButtonExistins(taskIcon, "mouseout", taskIcon, "none");
    handleButtonExistins(newTableRow, "mouseout", taskIcon, "none");

    function handleButtonPosition() {
      const newTableRowPositions = newTableRow.getBoundingClientRect();
      taskIcon.style.top = `${newTableRowPositions.top}px`;
      taskIcon.style.left = newTableRowPositions.left - 40 + "px";
      taskIcon.style.display = "flex";
    }
    function handleButtonExistins(target, event, parent, displayItem) {
      target.addEventListener(event, function () {
        parent.style.display = displayItem;
      });
    }
  }
}

manageItem();
