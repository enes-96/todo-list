// eslint-disable-next-line import/no-cycle
import { createNewTask } from "./todo";

export const todos = [];
// eslint-disable-next-line import/no-mutable-exports
export let taskCounter = 0;

export default function manageTodos() {
  let allProjects = document.querySelectorAll(".wrapper-project-item");
  const submitTask = document.querySelector(".task-submit");
  const newProjetButton = document.getElementById("btnNewProject");

  function addTodo(id, project, todo, title, todoDay) {
    // eslint-disable-next-line object-curly-newline
    todos.push({ id, project, todo, title, todoDay });
  }

  function addNewTask() {
    const selectedProject = document.querySelector(".sidebar .selected");
    const addedTask = document.querySelectorAll(".new-task");
    addedTask.forEach((task) => {
      const taskTitle = task.querySelector(".todo-title");
      const taskDate = task.querySelector(".todo-date");
      if (!task.classList.contains("added")) {
        addTodo(
          (taskCounter += 1),
          selectedProject.innerText,
          task,
          taskTitle.textContent,
          taskDate.value
        );
        task.classList.add("added");
      }
    });
  }

  function getTodos(project) {
    return todos.filter((t) => t.project === project);
  }

  function displayTodos() {
    allProjects.forEach((project) => {
      project.addEventListener("click", () => {
        const addedTask = document.querySelectorAll(".new-task");
        addedTask.forEach((task) => task.remove());
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        const currentDate = `${year}-${month}-${day}`;

        const removeButton = document.querySelector(".add-new-task");

        if (project.innerText === "Todos") {
          removeButton.classList.add("hideButton");
          todos.forEach((task) => {
            const todoTitle = task.todo.querySelector(".todo-title");
            const todoDate = task.todo.querySelector(".todo-date");
            const todoComment = task.todo.querySelector(".user-added-comment");
            const todoPriority = task.todo.querySelector(".todo-priority");

            createNewTask(
              todoTitle.innerText,
              todoDate.value,
              todoComment.value,
              todoPriority.value
            );
          });
        }
        if (project.innerText === "Today") {
          removeButton.classList.remove("hideButton");
          const todayTodos = todos.filter(
            (task) => task.todoDay === currentDate
          );
          todayTodos.forEach((task) => {
            const todoTitle = task.todo.querySelector(".todo-title");
            const todoDate = task.todo.querySelector(".todo-date");
            const todoComment = task.todo.querySelector(".user-added-comment");
            const todoPriority = task.todo.querySelector(".todo-priority");

            createNewTask(
              todoTitle.innerText,
              todoDate.value,
              todoComment.value,
              todoPriority.value
            );
          });
        }
        if (project.innerText === "Upcoming") {
          removeButton.classList.remove("hideButton");

          const plannedTodos = todos.filter(
            (task) => task.todoDay !== currentDate && task.todoDay !== ""
          );
          plannedTodos.forEach((task) => {
            const todoTitle = task.todo.querySelector(".todo-title");
            const todoDate = task.todo.querySelector(".todo-date");
            const todoComment = task.todo.querySelector(".user-added-comment");
            const todoPriority = task.todo.querySelector(".todo-priority");

            createNewTask(
              todoTitle.innerText,
              todoDate.value,
              todoComment.value,
              todoPriority.value
            );
          });
        }
        if (project.innerText === "Anytime") {
          removeButton.classList.remove("hideButton");
          const nonDate = todos.filter((task) => task.todoDay === "");
          nonDate.forEach((task) => {
            const todoTitle = task.todo.querySelector(".todo-title");
            const todoDate = task.todo.querySelector(".todo-date");
            const todoComment = task.todo.querySelector(".user-added-comment");
            const todoPriority = task.todo.querySelector(".todo-priority");

            createNewTask(
              todoTitle.innerText,
              todoDate.value,
              todoComment.value,
              todoPriority.value
            );
          });
        } else {
          getTodos(project.innerText).forEach((todo) => {
            const todoTitle = todo.todo.querySelector(".todo-title");
            const todoDate = todo.todo.querySelector(".todo-date");
            const todoComment = todo.todo.querySelector(".user-added-comment");
            const todoPriority = todo.todo.querySelector(".todo-priority");
            //
            createNewTask(
              todoTitle.innerText,
              todoDate.value,
              todoComment.value,
              todoPriority.value
            );
          });
        }
      });
    });
  }

  submitTask.addEventListener("click", addNewTask);

  newProjetButton.addEventListener("click", () => {
    allProjects = document.querySelectorAll(".wrapper-project-item");
    displayTodos();
  });
  displayTodos();
}
