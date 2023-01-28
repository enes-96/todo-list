const userProjectsContainer = document.querySelector(".wrapper-user-projects");

document.getElementById("btnNewProject").addEventListener("click", () => {
  addNewProject();
  selectProject();
});

function selectProject() {
  const allProjects = document.querySelectorAll(".wrapper-project-item");
  const mainTitle = document.getElementById("mainTitle");

  allProjects.forEach((item) => {
    item.addEventListener("click", (e) => {
      item.classList.add("selected");
      mainTitle.textContent = item.textContent;
      allProjects.forEach((el) => {
        if (el !== item) {
          el.classList.remove("selected");
        }
      });
    });
  });
  const projectItems = document.querySelectorAll(
    ".wrapper-user-projects .wrapper-project-item"
  );
  projectItems.forEach((item) => addContextMenu(item));
}

function addNewProject() {
  const createProject = document.createElement("div");
  createProject.classList.add("wrapper-project-item");
  function createIcon() {
    const projectIcon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    const iconPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    iconPath.setAttributeNS(
      null,
      "d",
      "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
    );
    projectIcon.setAttribute("viewBox", "0 0 24 24");
    projectIcon.appendChild(iconPath);
    projectIcon.classList.add("item-logo");
    createProject.appendChild(projectIcon);
  }
  createIcon();

  //----------------

  const createProjectNameInput = document.createElement("input");
  createProject.appendChild(createProjectNameInput);
  const newProjectName = document.createElement("h5");

  createProjectNameInput.addEventListener("input", (e) => {
    mainTitle.textContent = e.target.value;
  });
  createProjectNameInput.addEventListener("focusout", (e) => {
    newProjectName.innerText = e.target.value;
    newProjectName.classList.add("project-item-name");
    createProject.replaceChild(newProjectName, createProjectNameInput);
  });

  //---------------------------------------------
  userProjectsContainer.appendChild(createProject);
}

function addContextMenu(contextItem) {
  const contextContainer = document.querySelector(".context-menu");
  contextItem.addEventListener("contextmenu", handleContextMenu);

  function handleContextMenu(e) {
    contextContainer.classList.toggle("hidden");
    contextContainer.style.left = `${e.clientX + window.scrollX}px`;
    contextContainer.style.top = `${e.clientY + window.scrollY}px`;
    e.preventDefault();
  }

  document.body.addEventListener("click", () => {
    contextContainer.classList.add("hidden");
  });
}

selectProject();
