const dateProjects = document.querySelectorAll(".wrapper-project-item");

function selectProject() {
  const mainTitle = document.querySelector(".main-title");
  const table = document.querySelector(".table-wrapper");

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
addNewProject();
selectProject();
function addNewProject() {
  const btnNewProject = document.getElementById("btnNewProject");
  btnNewProject.addEventListener("click", () => {
    const createProject = document.createElement("div");
    createProject.classList.add("wrapper-project-item");
    createProject.textContent = "motehrfucker";
    const userProjectsWrapper = document.body.querySelector(
      ".wrapper-user-projects"
    );
    userProjectsWrapper.appendChild(createProject);
  });
}
