import { createNewTask } from "./todo.js";

export function manageTodos() {
  const todos = [];
  const submitTask = document.querySelector(".task-submit");

  submitTask.addEventListener("click", addNewTask);

  displayTodos();

  function addTodo(project, todo) {
    todos.push({ project, todo });
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
    let allProjects = document.querySelectorAll(".wrapper-project-item");

    allProjects.forEach((project) => {
      project.addEventListener("click", () => {
        const addedTask = document.querySelectorAll(".new-task");
        addedTask.forEach((task) => {
          task.remove();
        });
        getTodos(project.innerText).forEach((todo) => {
          const todoTitle = todo.todo.querySelector(".todo-title");
          const todoDate = todo.todo.querySelector(".todo-date");
          const todoComment = todo.todo.querySelector(".user-added-comment");
          const todoPriority = todo.todo.querySelector(".todo-priority");
          //
          createNewTask(
            todoTitle.value,
            todoDate.value,
            todoComment.value,
            todoPriority.value
          );
        });
      });
    });
  }
}
