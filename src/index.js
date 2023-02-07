import sidebarJS from "./modules/sidebar.js";
import manageItem from "./modules/todo.js";

sidebarJS();
manageItem();
manageTodos();

function manageTodos() {
  const todos = [];

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
  const submitButton = document.querySelector(".task-submit");
  submitButton.addEventListener("click", () => {
    const newTask = document.querySelectorAll(".new-task");
    const sidebar = document.querySelector(".sidebar");
    const selectedProject = sidebar.querySelector(".selected");

    newTask.forEach((task) => {
      addTodo(selectedProject.innerText, task);
    });
    console.log(todos);
  });

  const removeTaskButton = document.querySelector(".delete-task");
  removeTaskButton.addEventListener("click", () => {
    const selectedTask = document.querySelector(".task-selected");
    if (selectedTask) {
      const taskModalSmall = document.querySelector(".task-menu-sm");
      taskModalSmall.classList.add("hidden");
      selectedTask.remove();
    }
  });

  //filter todos by category
  const allProjects = document.querySelectorAll(".wrapper-project-item");
  allProjects.forEach((project) => {
    project.addEventListener("click", () => {
      getTodos(project);
    });
  });
}
//all todos are in to-do
//when use clicks today, filter the todo array and show only the todays
