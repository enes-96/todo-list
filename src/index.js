import sidebarJS from "./modules/sidebar.js";
import manageItem from "./modules/todo.js";
import { createNewTask } from "./modules/todo.js";
sidebarJS();
manageItem();
manageTodos();

function manageTodos() {
  const todos = [];
  const sidebar = document.querySelector(".sidebar");
  const submitTask = document.querySelector(".task-submit");

  //here you add arguments like date, comment,priority,titel
  function addTodo(project, todo) {
    todos.push({ project, todo });
  }
  function getTodos(project) {
    return todos.filter((t) => t.project === project);
  }

  submitTask.addEventListener("click", () => {
    const selectedProject = sidebar.querySelector(".selected");
    const addedTask = document.querySelectorAll(".new-task");
    //here or above idonno you select the arguments for each task
    addedTask.forEach((task) => {
      if (!task.classList.contains("added")) {
        //then add ehre
        addTodo(selectedProject.innerText, task);
        task.classList.add("added");
      }
    });
  });

  const allProjects = document.querySelectorAll(".wrapper-project-item");
  allProjects.forEach((project) => {
    project.addEventListener("click", () => {
      const addedTask = document.querySelectorAll(".new-task");
      addedTask.forEach((task) => {
        task.remove();
      });
      getTodos(project.innerText).forEach((todo) => {
        //here create it
        createNewTask(todo);
      });
    });
  });
}
//i need to select the title of foreach todo
//i need to select the date value of foreach todo
//i need to select the comment of foreach todo
//i need to select the priority of foreach todo
