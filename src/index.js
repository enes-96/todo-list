import sidebarJS from "./modules/sidebar";
import manageItem from "./modules/todo";
import manageTodos, { todos } from "./modules/manageTodo";

sidebarJS();
manageItem();
manageTodos();

let data = {};

function loadDataFromLocalStorage() {
  const savedData = localStorage.getItem("todoData");
  if (savedData) {
    data = JSON.parse(savedData);
    todos.push(...data);
  }
}
loadDataFromLocalStorage();
