const btnNewProject = document.getElementById("btnNewProject");

btnNewProject.addEventListener("click", () => {
  addNewProject();
  selectProject();
});

function selectProject() {
  const allProjects = document.querySelectorAll(".wrapper-project-item");
  const mainTitle = document.getElementById("mainTitle");

  allProjects.forEach((item) => {
    item.addEventListener("click", (e) => {
      allProjects.forEach((el) => {
        item.classList.add("selected");
        mainTitle.textContent = item.textContent;
        if (el !== item) {
          el.classList.remove("selected");
        }
      });
    });
  });
  allProjects.forEach((item) => {
    item.addEventListener("dblclick", () => {
      item.remove();
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
  createProject.appendChild(projectIcon);

  //----------------

  function generateItem() {
    const createItemName = document.createElement("input");
    createProject.appendChild(createItemName);

    createItemName.addEventListener("change", () => {
      const h5 = document.createElement("h5");
      h5.innerText = createItemName.value;
      h5.classList.add("project-item-name");
      createProject.replaceChild(h5, createItemName);
    });
  }

  function edtiItemTitle() {}

  generateItem();

  //---------------------------------------------
  const userProjectsWrapper = document.querySelector(".wrapper-user-projects");
  userProjectsWrapper.appendChild(createProject);
}

selectProject();
