import sidebarJS from "./modules/sidebar.js";
import manageItem from "./modules/todo.js";

sidebarJS();
manageItem();

const fixedProjects = document.querySelectorAll(".wrapper-project-item");
fixedProjects.forEach((project) => {
  project.addEventListener("click", () => {
    const tasks = document.querySelectorAll(".new-task");
    tasks.forEach((task) => {
      task.remove();
      console.log(task);
    });
  });
});
