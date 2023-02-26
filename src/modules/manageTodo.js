import { createNewTask } from "./todo";

export const todos = [];
// eslint-disable-next-line import/no-mutable-exports
export let taskCounter = 0;

export default function manageTodos() {
  let allProjects = document.querySelectorAll(".wrapper-project-item");
  const submitTask = document.querySelector(".task-submit");
  const newProjetButton = document.getElementById("btnNewProject");

  function addTodo(id, project, todo) {
    todos.push({ id, project, todo });
  }

  function addNewTask() {
    const selectedProject = document.querySelector(".sidebar .selected");
    const addedTask = document.querySelectorAll(".new-task");
    addedTask.forEach((task) => {
      if (!task.classList.contains("added")) {
        addTodo((taskCounter += 1), selectedProject.innerText, task);
        task.classList.add("added");
      }
    });
  }

  function getTodos(project) {
    console.log(todos);
    return todos.filter((t) => t.project === project);
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

          createNewTask(
            todoTitle.innerText,
            todoDate.value,
            todoComment.value,
            todoPriority.value
          );
        });
      });
    });
  }

  submitTask.addEventListener("click", addNewTask);

  newProjetButton.addEventListener("click", () => {
    allProjects = document.querySelectorAll(".wrapper-project-item");
    displayTodos();
  });

  displayTodos();
  // i think something wrong here
}
