import sidebarJS from "./modules/sidebar";
import manageItem from "./modules/todo";
import manageTodos, { todos } from "./modules/manageTodo";

sidebarJS();
manageItem();
manageTodos();

let data = {};
//every time new task created this function
export function saveDataToLocalStorage() {
  localStorage.setItem("todoData", JSON.stringify(todos));
}
export function saveProjectToLocalStorage() {
  localStorage.setItem("projectData", JSON.stringify());
}
function loadDataFromLocalStorage() {
  let savedData = localStorage.getItem("todoData");
  if (savedData) {
    data = JSON.parse(savedData);
    todos.push(...data);
  }
}
loadDataFromLocalStorage();
console.log(todos);
