const btnNewProject = document.getElementById("btnNewProject");

function selectProject() {
  const dateProjects = document.querySelectorAll(".wrapper-project-item");
  const mainTitle = document.querySelector(".main-title");
  dateProjects.forEach((item) => {
    item.addEventListener("click", (e) => {
      dateProjects.forEach((el) => {
        item.classList.add("selected");
        mainTitle.textContent = item.textContent;
        if (el !== item) {
          el.classList.remove("selected");
        }
      });
    });
  });
}
function addNewProject() {
  const createProject = document.createElement("div");
  createProject.classList.add("wrapper-project-item");

  const projectIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttributeNS(
    null,
    "d",
    "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
  );
  projectIcon.setAttribute("viewBox", "0 0 24 24");
  projectIcon.appendChild(path);
  projectIcon.classList.add("item-logo");

  const userProjectsWrapper = document.body.querySelector(
    ".wrapper-user-projects"
  );
  const projectItemName = document.createElement("h5");
  projectItemName.textContent = "new item";
  projectItemName.classList.add("project-item-name");
  createProject.appendChild(projectIcon);
  createProject.appendChild(projectItemName);
  userProjectsWrapper.appendChild(createProject);
}
selectProject();
btnNewProject.addEventListener("click", () => {
  addNewProject();
  selectProject();
});
