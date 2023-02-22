import sidebarJS from "./modules/sidebar.js";
import manageItem from "./modules/todo.js";
import { manageTodos } from "./modules/manageTodo.js";

sidebarJS();
manageItem();
manageTodos();

// when i change somehting on each todo, and change categories it resets
const todoTitle = document.querySelectorAll(".todo-title");

todoTitle.forEach((title) => {
  title.addEventListener("keydown", () => {
    console.log("1");
  });
});
