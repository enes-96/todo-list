import sidebarJS from "./modules/sidebar.js";
import manageItem from "./modules/todo.js";

sidebarJS();
manageItem();
manageTodos();

function manageTodos() {
  const todos = [];
  const sidebar = document.querySelector(".sidebar");
  const submitTask = document.querySelector(".task-submit");
  const table = document.querySelector("tbody");

  function addTodo(project, todo) {
    todos.push({ project, todo });
  }
  function getTodos(project) {
    return todos.filter((t) => t.project === project);
  }

  //all tasks are the todo array
  submitTask.addEventListener("click", () => {
    const selectedProject = sidebar.querySelector(".selected");
    const addedTask = document.querySelectorAll(".new-task");
    addedTask.forEach((task) => {
      if (!task.classList.contains("added")) {
        addTodo(selectedProject.innerText, task);
        task.classList.add("added");
      }
    });
    console.log(todos);
  });

  const allProjects = document.querySelectorAll(".wrapper-project-item");
  allProjects.forEach((project) => {
    project.addEventListener("click", () => {
      console.log(getTodos(project.innerText));
    });
  });
}
