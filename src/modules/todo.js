const todos = [];
let taskCounter = 1;

export default function manageItem() {
  const newTaskButton = document.querySelector(".add-new-task");
  const taskModal = document.querySelector(".modal");

  function toggleModal() {
    const overlay = document.querySelector(".overlay");
    taskModal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  }

  newTaskButton.addEventListener("click", () => {
    toggleModal();
  });

  function submitTask() {
    const taskSubmitButton = taskModal.querySelector(".task-submit");

    // eslint-disable-next-line consistent-return
    taskSubmitButton.addEventListener("click", () => {
      const setTaskName = taskModal.querySelector(".change-title");
      const setTasDate = taskModal.querySelector(".change-date");
      const setTaskPriority = document.querySelector(".change-priority");
      const setTaskComment = taskModal.querySelector(".comment");
      //
      if (!setTaskName.value) {
        return alert("dont forget title");
      }
      if (!setTaskPriority.value) {
        return alert("priority???");
      }
      // eslint-disable-next-line no-use-before-define
      createNewTask(
        setTaskName.value,
        setTasDate.value,
        setTaskComment.value,
        setTaskPriority.value
      );

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
  submitTask();
  deleteTask();
}

export function createNewTask(taskTitle, taskDate, taskComment, taskPriority) {
  const tableBody = document.querySelector("tbody");
  const newRow = document.createElement("tr");

  newRow.setAttribute("id", taskCounter);
  taskCounter += 1;
  newRow.classList.add("new-task");
  tableBody.appendChild(newRow);

  function createTaskProperty(
    elementProperty,
    className,
    appendTo,
    value,
    type
  ) {
    const newItem = document.createElement(elementProperty);
    newItem.classList.add(className);
    newItem.value = value;
    newItem.type = type;
    appendTo.appendChild(newItem);
    return newItem;
  }
  function createCheckbox() {
    const checkboxTd = createTaskProperty("td", "checkbox-td", newRow);
    const checkboxWrapper = createTaskProperty(
      "div",
      "checkbox-wrapper",
      checkboxTd
    );
    createTaskProperty(
      "input",
      "task-checkbox",
      checkboxWrapper,
      "",
      "checkbox"
    );
  }
  function createTitle() {
    const newTaskTitle = createTaskProperty("td", "title-wrapper", newRow);
    const newTaskTitleWrapper = createTaskProperty(
      "div",
      "title-icon-wrapper",
      newTaskTitle
    );
    const newTitleInput = createTaskProperty(
      "h4",
      "todo-title",
      newTaskTitleWrapper
    );
    newTitleInput.textContent = taskTitle;
    if (!newTitleInput.textContent) {
      newTitleInput.textContent = "untitled";
      newTitleInput.style.color = "#c4c4c4";
    }
  }
  function createDate() {
    const newTaskDate = createTaskProperty("td", "date-wrapper", newRow);

    const taskDateInput = createTaskProperty(
      "input",
      "todo-date",
      newTaskDate,
      taskDate,
      "date"
    );
    taskDateInput.style.pointerEvents = "none";
  }
  function createPriority() {
    const priorities = ["High", "Medium", "Low"];
    const priorityWrapper = document.createElement("select");
    priorityWrapper.classList.add("todo-priority");
    priorityWrapper.style.pointerEvents = "none";

    priorities.forEach((priority) => {
      const option = document.createElement("option");
      option.value = priority.toLowerCase();
      option.textContent = priority;
      priorityWrapper.appendChild(option);
    });

    priorityWrapper.value = taskPriority;

    const newTaskPriority = document.createElement("td");
    newTaskPriority.classList.add("priority-wrapper");
    newTaskPriority.appendChild(priorityWrapper);
    newRow.appendChild(newTaskPriority);
  }
  function createComment() {
    const newTaskComment = createTaskProperty("td", "comment-wrapper", newRow);
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
    newComment.style.pointerEvents = "none";

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

    if (!newComment.value) {
      newComment.value = "NO COMMENTO";
      newComment.style.color = "#c4c4c4";
    }

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
  function createDelete() {
    const buttonTd = createTaskProperty("td", "delete-td", newRow);
    buttonTd.classList.add("del-button");

    newRow.addEventListener("mouseenter", () => {
      buttonTd.classList.remove("del-button");
      buttonTd.classList.add("del-show");
    });
    newRow.addEventListener("mouseleave", () => {
      buttonTd.classList.add("del-button");
      buttonTd.classList.remove("del-show");
    });
    const buttonWrapper = createTaskProperty(
      "div",
      "delete-button-wrapper",
      buttonTd
    );
    const deleteButton = createTaskProperty(
      "button",
      "delete-button",
      buttonWrapper
    );
    deleteButton.textContent = "✕";
    deleteButton.style.cursor = "pointer";

    buttonWrapper.addEventListener("click", () => {
      const taskToRemove = todos.findIndex(
        (todo) => newRow.id === todo.todo.id
      );
      todos.splice(taskToRemove, 1);
      buttonTd.parentNode.remove();
    });
  }
  function createEdit() {
    const taskModal = document.querySelector(".modal");
    const editTd = createTaskProperty("td", "edit-td", newRow);
    editTd.classList.add("hidden");

    newRow.addEventListener("mouseenter", () => {
      editTd.classList.remove("hidden");
    });
    newRow.addEventListener("mouseleave", () => {
      editTd.classList.add("hidden");
    });
    const editButtonWrapper = createTaskProperty(
      "div",
      "edit-button-wrapper",
      editTd
    );
    const editButton = createTaskProperty(
      "h5",
      "edit-button",
      editButtonWrapper
    );
    editButton.textContent = "edit";
    editButton.style.cursor = "pointer";

    function editModal() {
      const editTaskButton = taskModal.querySelector(".task-edit");
      editTaskButton.classList.remove("hidden");

      const setTaskName = taskModal.querySelector(".change-title");
      const setTasDate = taskModal.querySelector(".change-date");
      const setTaskPriority = document.querySelector(".change-priority");
      const setTaskComment = taskModal.querySelector(".comment");

      setTaskName.value = taskTitle;
      setTasDate.value = taskDate.value;
      setTaskPriority.value = taskPriority;
      setTaskComment.value = taskComment;

      //
      const overlay = document.querySelector(".overlay");
      taskModal.classList.toggle("hidden");
      overlay.classList.toggle("hidden");

      editTaskButton.addEventListener("click", () => {
        const targetTask = editButton.closest(".new-task");
        if (targetTask) {
          const targetTitle = targetTask.querySelector(".todo-title");
          const targetDate = targetTask.querySelector(".todo-date");
          const targetPriority = targetTask.querySelector(".todo-priority");
          const targetComment = targetTask.querySelector(".user-added-comment");

          targetTitle.textContent = setTaskName.value;
          targetDate.value = setTasDate.value;
          targetPriority.value = setTaskPriority.value;
          targetComment.value = setTaskComment.value;
        }
        taskModal.classList.add("hidden");
        overlay.classList.add("hidden");
      });
    }
    editButton.addEventListener("click", () => {
      editModal();
    });
  }

  createCheckbox();
  createTitle();
  createDate();
  createPriority();
  createComment();
  createEdit();
  createDelete();
}
