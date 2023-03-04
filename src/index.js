import sidebarJS from "./modules/sidebar";
import manageItem from "./modules/todo";
import manageTodos from "./modules/manageTodo";

sidebarJS();
manageItem();
manageTodos();

localStorage.setItem("lastname", "enes");
console.log(localStorage.lastname);
