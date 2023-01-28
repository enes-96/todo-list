document.getElementById("btnNewProject").addEventListener("click", () => {
  addNewProject();
  selectProject();
});

function selectProject() {
  const allProjects = document.querySelectorAll(".wrapper-project-item");

  const mainTitle = document.getElementById("mainTitle");
  const projectItems = document.querySelectorAll(
    ".wrapper-user-projects .wrapper-project-item"
  );
  //loop over all projects and listen for click
  allProjects.forEach((item) => {
    item.addEventListener("click", (e) => {
      //add the selected effect
      item.classList.add("selected");
      mainTitle.textContent = item.textContent;
      //if user clicks another projects remove previous one
      allProjects.forEach((el) => {
        if (el !== item) {
          el.classList.remove("selected");
        }
      });
    });
  });
}

function addNewProject() {
  //new projects comes in there
  const userProjectsContainer = document.querySelector(".wrp-user-projct");

  //item wrapper (icon and name) and syling
  const createProject = document.createElement("div");
  createProject.classList.add("wrapper-project-item");

  (function createIcon() {
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
  })();

  // first create a input and append to item wrapper
  const createProjectNameInput = document.createElement("input");
  createProject.appendChild(createProjectNameInput);
  window.setTimeout(() => createProjectNameInput.focus(), 0);

  //dynamicly type title
  createProjectNameInput.addEventListener("input", (e) => {
    mainTitle.textContent = e.target.value;
  });
  //turn to title
  createProjectNameInput.addEventListener("focusout", (e) => {
    const newProjectName = document.createElement("h5");
    newProjectName.innerText = e.target.value;
    newProjectName.classList.add("project-item-name");
    createProject.replaceChild(newProjectName, createProjectNameInput);
    if (newProjectName.innerText === "") {
      createProject.remove();
    }
  });

  //listen for right click
  addContextMenu(createProject);
  userProjectsContainer.appendChild(createProject);
}

//right click listener
function addContextMenu(contextItem) {
  const contextContainer = document.querySelector(".context-menu");
  contextItem.addEventListener("contextmenu", handleContextMenu);

  function handleContextMenu(e) {
    contextContainer.style.left = `${e.clientX + window.scrollX}px`;
    contextContainer.style.top = `${e.clientY + window.scrollY}px`;
    contextContainer.style.display = "block";
    e.preventDefault();
  }
  document.body.addEventListener("click", () => {
    contextContainer.style.display = "none";
  });
  contextContainer.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
}

function deleteProjects() {
  const userProjects = document.querySelectorAll(
    ".wrp-user-projct .wrapper-project-item"
  );
}
selectProject();
