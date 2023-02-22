import { createNewTask } from "./todo.js";
export const todos = [];
export let taskCounter = 1;
export function manageTodos() {
  let allProjects = document.querySelectorAll(".wrapper-project-item");
  const submitTask = document.querySelector(".task-submit");
  const newProjetButton = document.getElementById("btnNewProject");

  submitTask.addEventListener("click", addNewTask);

  newProjetButton.addEventListener("click", () => {
    allProjects = document.querySelectorAll(".wrapper-project-item");
    displayTodos();
  });

  function addTodo(id, project, todo) {
    todos.push({ id, project, todo });
  }

  function getTodos(project) {
    return todos.filter((t) => t.project === project);
  }

  function addNewTask() {
    const selectedProject = document.querySelector(".sidebar .selected");
    const addedTask = document.querySelectorAll(".new-task");
    addedTask.forEach((task) => {
      if (!task.classList.contains("added")) {
        addTodo(taskCounter++, selectedProject.innerText, task);
        task.classList.add("added");
      } else return;
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

          //

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
  displayTodos();
}
