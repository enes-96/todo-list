import sidebarJS from "./modules/sidebar.js";
import manageItem from "./modules/todo.js";
import { createNewTask } from "./modules/todo.js";
sidebarJS();
manageItem();
manageTodos();

function manageTodos() {
  //we store here our tasks
  const todos = [];
  const submitTask = document.querySelector(".task-submit");

  function addTodo(project, todo) {
    todos.push({ project, todo });
  }
  function getTodos(project) {
    return todos.filter((t) => t.project === project);
  }

  submitTask.addEventListener("click", () => {
    //select project from sidebar
    const sidebar = document.querySelector(".sidebar");
    const selectedProject = sidebar.querySelector(".selected");
    //here or above idonno you select the arguments for each task

    //add created task to the project
    const addedTask = document.querySelectorAll(".new-task");
    addedTask.forEach((task) => {
      if (!task.classList.contains("added")) {
        //then add ehre
        addTodo(selectedProject.innerText, task);
        task.classList.add("added");
      }
    });
  });
  //select project from sidebar
  const allProjects = document.querySelectorAll(".wrapper-project-item");
  allProjects.forEach((project) => {
    project.addEventListener("click", () => {
      //remove all the tasks from html
      const addedTask = document.querySelectorAll(".new-task");
      addedTask.forEach((task) => {
        task.remove();
      });
      //filter the items for each project
      getTodos(project.innerText).forEach((todo) => {
        //here create it tasktitle,taskdate,taskcomment
        const todoTitle = todo.todo.querySelector(".todo-title");
        const todoDate = todo.todo.querySelector(".todo-date");
        const todoComment = todo.todo.querySelector(".user-added-comment");
        //
        createNewTask(todoTitle.value, todoDate.value, todoComment.value);
      });
    });
  });
}
//i need to select the title of foreach todo
//i need to select the date value of foreach todo
//i need to select the comment of foreach todo
//i need to select the priority of foreach todo
