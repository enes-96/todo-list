export default function sidebarJS() {
  const mainSection = document.getElementById("main");
  const newProjectButton = document.getElementById("btnNewProject");

  function selectProject() {
    const allProjects = document.querySelectorAll(".wrapper-project-item");
    const mainTitle = document.getElementById("mainTitle");
    allProjects.forEach((item) => {
      // eslint-disable-next-line no-param-reassign
      item.style.cursor = "pointer";
      item.addEventListener("click", () => {
        item.classList.add("selected");
        mainTitle.textContent = item.textContent;
        mainSection.classList.remove("hidden");

        allProjects.forEach((el) => {
          if (el !== item) {
            el.classList.remove("selected");
          }
        });
      });
    });
  }
  function addNewProject() {
    const userProjectsContainer = document.querySelector(".wrp-user-projct");
    const createProject = document.createElement("div");
    createProject.style.cursor = "default";
    createProject.classList.add("wrapper-project-item", "project-item");

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

    const createProjectNameInput = document.createElement("input");
    createProjectNameInput.classList.add("projectNameInput");
    createProject.appendChild(createProjectNameInput);
    window.setTimeout(() => createProjectNameInput.focus(), 0);

    const newProjectName = document.createElement("h5");

    function handleKeydown(e) {
      if (e.key === "Enter") {
        newProjectName.textContent = e.target.value;
        newProjectName.classList.add("project-item-name");
        createProject.replaceChild(newProjectName, createProjectNameInput);
        if (!newProjectName.innerText) {
          createProject.remove();
          mainSection.classList.add("hidden");
        }
      }
    }
    function handleBlur() {
      newProjectName.textContent = createProjectNameInput.value;
      newProjectName.classList.add("project-item-name");
      createProject.replaceChild(newProjectName, createProjectNameInput);
      if (!newProjectName.innerText) {
        createProject.remove();
        mainSection.classList.add("hidden");
      }
    }
    function editProject() {
      function editItem(item) {
        item.replaceChild(createProjectNameInput, newProjectName);
        window.setTimeout(() => createProjectNameInput.focus(), 0);
      }
      const projectItems = document.querySelectorAll(".project-item");
      const editBtn = document.querySelector(".edit-user-project");

      editBtn.addEventListener("click", () => {
        projectItems.forEach((item) => {
          if (item.classList.contains("selected")) {
            editItem(item);
          }
        });
      });
    }

    function addContextMenu(contextItem) {
      const contextContainer = document.querySelector(".context-menu");
      contextContainer.addEventListener("contextmenu", (e) => {
        e.preventDefault();
      });

      function handleContextMenu(e) {
        if (contextItem.classList.contains("selected")) {
          contextContainer.style.left = `${e.clientX + window.scrollX}px`;
          contextContainer.style.top = `${e.clientY + window.scrollY}px`;
          contextContainer.style.display = "block";
          e.preventDefault();
        }
      }
      contextItem.addEventListener("contextmenu", handleContextMenu);
      document.body.addEventListener("click", () => {
        contextContainer.style.display = "none";
      });
    }
    function deleteProject() {
      const projectItems = document.querySelectorAll(".project-item");
      const deleteBtn = document.querySelector(".delete-user-project");
      deleteBtn.addEventListener("click", () => {
        projectItems.forEach((item) => {
          if (item.classList.contains("selected")) {
            item.remove();
            mainSection.classList.add("hidden");
          }
        });
      });
    }

    createProjectNameInput.addEventListener("keydown", handleKeydown);
    createProjectNameInput.addEventListener("blur", handleBlur);

    userProjectsContainer.appendChild(createProject);
    addContextMenu(createProject);

    deleteProject();
    editProject();
  }

  selectProject();

  newProjectButton.addEventListener("click", () => {
    addNewProject();
    selectProject();
  });
}
