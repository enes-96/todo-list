import sidebarJS from "./modules/sidebar.js";
import manageItem from "./modules/todo.js";
import { createNewTask } from "./modules/todo.js";
sidebarJS();
manageItem();
manageTodos();

function manageTodos() {
  const todos = [];

  const submitTask = document.querySelector(".task-submit");
  submitTask.addEventListener("click", addNewTask);

  function addTodo(project, todo) {
    todos.push({ project, todo });
  }
  function getTodos(project) {
    return todos.filter((t) => t.project === project);
  }
  function addNewTask() {
    const selectedProject = document.querySelector(".sidebar .selected");
    const newTasks = document.querySelectorAll(".new-task");

    for (let i = 0; i < newTasks.length; i++) {
      const newTask = newTasks[i];

      if (!newTask.classList.contains("added")) {
        addTodo(selectedProject.textContent, newTask);
        newTask.classList.add("added");
      }
    }
  }

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
        const todoPriority = todo.todo.querySelector(".todo-priority");
        //
        createNewTask(
          todoTitle.value,
          todoDate.value,
          todoComment.value,
          todoPriority.value
        );
      });
      console.clear();
      console.log(getTodos(project.innerText));
    });
  });
}

//i need to select the priority of foreach todo
// when i change somehting on each todo, and change categories it resets
