import sidebarJS from "./modules/sidebar.js";
import manageItem from "./modules/todo.js";

sidebarJS();
manageItem();
manageTodos();

function manageTodos() {
  const todos = [];
  const sidebar = document.querySelector(".sidebar");

  //push todo to todos array
  function addTodo(project, todo) {
    todos.push({
      project: project,
      todo: todo,
    });
  }
  //filter todos by the project name
  function getTodos(project) {
    return todos.filter((t) => t.project === project);
  }
  //--------------------------------------------------------------

  //all tasks are the todo array
  const submitTask = document.querySelector(".task-submit");
  submitTask.addEventListener("click", () => {
    const selectedProject = sidebar.querySelector(".selected");
    const addedTask = document.querySelectorAll(".new-task");
    addedTask.forEach((task) => {
      addTodo(selectedProject.innerText, task);
    });
    console.log(todos);
  });

  //-----------------------------------------------------------------------
  //filter todos by category
  const allProjects = document.querySelectorAll(".wrapper-project-item");
  allProjects.forEach((project) => {
    project.addEventListener("click", () => {
      getTodos(project);
    });
  });
}
