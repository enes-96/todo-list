import sidebarJS from "./modules/sidebar.js";
import manageItem from "./modules/todo.js";

sidebarJS();
manageItem();
manageTodos();

function manageTodos() {
  const todos = [];
  const sidebar = document.querySelector(".sidebar");
  const submitButton = document.querySelector(".task-submit");

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
  //
  submitButton.addEventListener("click", () => {
    //i need to select all the new taks this selects always the first
    const newTask = document.querySelector(".new-task");
    const taskValue = newTask.querySelector(".todo-title");
    const selectedProject = sidebar.querySelector(".selected");

    addTodo(selectedProject.innerText, taskValue.value);
    console.log(todos);
  });

  const allProjects = document.querySelectorAll(".wrapper-project-item");
  allProjects.forEach((project) => {
    project.addEventListener("click", () => {});
  });
}
//all todos are in to-do
//when use clicks today, filter the todo array and show only the todays
