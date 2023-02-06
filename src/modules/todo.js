export default function manageItem() {
  //new task button
  document.body.querySelector(".add-new-task").addEventListener("click", () => {
    toggleModal();
  });

  const taskModal = document.querySelector(".modal");

  function submitTask() {
    //submit button
    taskModal.querySelector(".task-submit").addEventListener("click", () => {
      const setTaskName = taskModal.querySelector(".change-title");
      const setTasDate = taskModal.querySelector(".change-date");
      const setTaskPriority = document.querySelector(".change-priority");
      const setTaskComment = taskModal.querySelector(".comment");
      createNewTask(setTaskName.value, setTasDate.value, setTaskComment.value);

      //reset modal
      setTaskName.value = "";
      setTasDate.value = "";
      setTaskPriority.value = "";
      setTaskComment.value = "";
      toggleModal();
    });
  }

  function deleteTask() {
    const taskDeleteButton = taskModal.querySelector(".task-delete");
    taskDeleteButton.addEventListener("click", toggleModal);
  }

  function toggleModal() {
    const overlay = document.querySelector(".overlay");
    taskModal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  }

  submitTask();
  deleteTask();
}
const todos = [];

function createNewTask(taskTitle, taskDate, taskComment) {
  //select the table body
  const tableRow = document.querySelector("tbody");
  //create new table row
  const newTableRow = document.createElement("tr");
  //every createt task gets the clas new-task
  newTableRow.classList.add("new-task");
  //append the tasl to the table body
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
  //dublicate task
  dublicateTask();

  function createEditButton() {
    // icon with 3 dots left of the task on hover
    const taskIcon = document.querySelector(".task-icon-wrapper");
    taskIcon.style.display = "none";

    //dots icon appear when hover,and hover out when mouseout
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
    //open modal if click the dots
    taskIcon.addEventListener("click", handleTaskModal);

    function handleTaskModal() {
      //find the position of the hovered row
      const newTableRowPositions = newTableRow.getBoundingClientRect();
      //modal container
      const taskModalSmall = document.querySelector(".task-menu-sm");
      const taskModalOverlay = document.querySelector(".task-menu-overlay");
      //set position right of the dots icon
      taskModalSmall.style.top = `${newTableRowPositions.top}px`;
      taskModalSmall.style.left = `${newTableRowPositions.left}px`;
      taskModalSmall.classList.remove("hidden");
      //click overlay to hide
      taskModalOverlay.classList.remove("hidden");
      taskModalOverlay.addEventListener("click", () => {
        taskModalSmall.classList.add("hidden");
        taskModalOverlay.classList.add("hidden");
      });
    }
  }
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
    const newTaskTitleWrapper = createTaskProperty(
      "div",
      "title-icon-wrapper",
      newTaskTitle
    );
    const newTitleInput = createTaskProperty(
      "input",
      "todo-title",
      newTaskTitleWrapper,
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
    const newTaskComment = createTaskProperty(
      "td",
      "comment-wrapper",
      newTableRow
    );
    const wrapperIconComment = createTaskProperty(
      "div",
      "wrapperIconComment",
      newTaskComment
    );
    const newComment = createTaskProperty(
      "input",
      "user-added-comment",
      wrapperIconComment,
      taskComment
    );
    const projectIcon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    function createIcon(appendTo) {
      const iconPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      iconPath.setAttributeNS(
        null,
        "d",
        "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
      );
      projectIcon.setAttribute("viewBox", "0 0 24 24");
      projectIcon.appendChild(iconPath);
      projectIcon.classList.add("item-logo");
      appendTo.appendChild(projectIcon);
    }
    createIcon(wrapperIconComment);

    if (newComment.value.trim().length === 0) {
      newComment.value = "";
    }
    newTaskComment.addEventListener("click", () => {
      newComment.style.display = "block";
      projectIcon.style.display = "none";
    });
    newTaskComment.addEventListener("dblclick", () => {
      newComment.style.display = "none";
      projectIcon.style.display = "block";
    });
  }
  function deleteAddedTask() {
    const allTasks = document.querySelectorAll(".new-task");
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
    const removeTaskButton = document.querySelector(".delete-task");
    removeTaskButton.addEventListener("click", () => {
      const selectedTask = document.querySelector(".task-selected");
      if (selectedTask) {
        const taskModalSmall = document.querySelector(".task-menu-sm");
        taskModalSmall.classList.add("hidden");
        selectedTask.remove();
      }
    });
  }
  function dublicateTask() {
    const dublicateTaskButton = document.querySelector(".dublicate-task");
    dublicateTaskButton.addEventListener("click", () => {
      const selectedTask = document.querySelector(".task-selected");
      const selectedTaskTitle = selectedTask.querySelector(".todo-title").value;
      const selectedTaskComment = selectedTask.querySelector(
        ".user-added-comment"
      ).value;

      const dublicatedTask = createNewTask(
        selectedTaskTitle,
        "",
        selectedTaskComment
      );
      const taskModalSmall = document.querySelector(".task-menu-sm");
      taskModalSmall.classList.add("hidden");
    });
  }
}
