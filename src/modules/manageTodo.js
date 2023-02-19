import { createNewTask } from "./todo.js";
const todos = [];
export default todos;

export function manageTodos() {
  let allProjects = document.querySelectorAll(".wrapper-project-item");
  const submitTask = document.querySelector(".task-submit");
  const newProjetButton = document.getElementById("btnNewProject");

  submitTask.addEventListener("click", addNewTask);

  newProjetButton.addEventListener("click", () => {
    allProjects = document.querySelectorAll(".wrapper-project-item");
    displayTodos();
  });

  function addTodo(project, todo, pinned = false) {
    todos.push({ project, todo, pinned });
  }

  function getTodos(project) {
    return todos.filter((t) => t.project === project);
  }

  function addNewTask() {
    const selectedProject = document.querySelector(".sidebar .selected");
    const addedTask = document.querySelectorAll(".new-task");

    addedTask.forEach((task) => {
      if (!task.classList.contains("added")) {
        addTodo(selectedProject.innerText, task);
        task.classList.add("added");
      }
    });
  }

  function displayTodos() {
    allProjects.forEach((project) => {
      project.addEventListener("click", () => {
        const addedTask = document.querySelectorAll(".new-task");
        addedTask.forEach((task) => task.remove());

        getTodos(project.innerText).forEach((todo) => {
          const todoTitle = todo.todo.querySelector(".todo-title");
          const todoDate = todo.todo.querySelector(".todo-date");
          const todoComment = todo.todo.querySelector(".user-added-comment");
          const todoPriority = todo.todo.querySelector(".todo-priority");
          const isPinned = todo.pinned;

          //
          //
          createNewTask(
            todoTitle.value,
            todoDate.value,
            todoComment.value,
            todoPriority.value
          );

          if (isPinned) {
            const pinnedTasks = todos.filter((task) => task.pinned);

            pinnedTasks.forEach((task) => {
              task.todo.classList.remove("task-selected");
              task.todo.classList.remove("pinned");
              task.todo.classList.add("pin");

              console.log(task);
            });
          }
        });
      });
    });
  }
  displayTodos();
}
