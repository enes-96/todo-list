export default function sidebarJS() {
  const mainSection = document.getElementById("main");
  document.getElementById("btnNewProject").addEventListener("click", () => {
    addNewProject();
    selectProject();
  });
  //sidebar select
  function selectProject() {
    const allProjects = document.querySelectorAll(".wrapper-project-item");
    const mainTitle = document.getElementById("mainTitle");

    //loop over all projects and listen for click
    allProjects.forEach((item) => {
      item.addEventListener("click", (e) => {
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
  //sidebar
  function addNewProject() {
    const userProjectsContainer = document.querySelector(".wrp-user-projct");

    //item wrapper (icon and name) and syling
    const createProject = document.createElement("div");
    createProject.classList.add("wrapper-project-item", "project-item");

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

    const createProjectNameInput = document.createElement("input");
    createProject.appendChild(createProjectNameInput);
    window.setTimeout(() => createProjectNameInput.focus(), 0);

    const newProjectName = document.createElement("h5");
    createProjectNameInput.addEventListener("keydown", handleInputToTitle);
    createProjectNameInput.addEventListener("focusout", () => {
      if (!newProjectName.innerText) {
        createProject.remove();
        mainSection.classList.add("hidden");
      }
    });

    function handleInputToTitle(e) {
      if (e.key === "Enter") {
        newProjectName.textContent = e.target.value;
        newProjectName.classList.add("project-item-name");
        createProject.replaceChild(newProjectName, createProjectNameInput);
        //if input is empty remove item
        //** */
        if (!newProjectName.innerText) {
          createProject.remove();
          mainSection.classList.add("hidden");
        }
      }
    }
    function editProject() {
      const projectItems = document.querySelectorAll(".project-item");
      const editBtn = document.querySelector(".edit-user-project");
      //edit only the selected item
      editBtn.addEventListener("click", () => {
        projectItems.forEach((item) => {
          if (item.classList.contains("selected")) {
            createProjectNameInput.addEventListener("input", (e) => {
              mainTitle.textContent = e.target.value;
            });
            editItem(item);
          }
        });
      });
      //transform h5 title to input
      function editItem(item) {
        item.replaceChild(createProjectNameInput, newProjectName);
        window.setTimeout(() => createProjectNameInput.focus(), 0);
      }
    }

    //append item to his wrapper
    userProjectsContainer.appendChild(createProject);
    addContextMenu(createProject);
    deleteProject();
    editProject();
  }

  //right click function
  function addContextMenu(contextItem) {
    const contextContainer = document.querySelector(".context-menu");

    contextItem.addEventListener("contextmenu", handleContextMenu);

    function handleContextMenu(e) {
      if (contextItem.classList.contains("selected")) {
        contextContainer.style.left = `${e.clientX + window.scrollX}px`;
        contextContainer.style.top = `${e.clientY + window.scrollY}px`;
        contextContainer.style.display = "block";
        e.preventDefault();
        contextContainer.addEventListener("contextmenu", (e) => {
          e.preventDefault();
        });
      }
    }

    document.body.addEventListener("click", () => {
      contextContainer.style.display = "none";
    });
  }
  //delete from context menu
  function deleteProject() {
    const projectItems = document.querySelectorAll(".project-item");
    const deleteBtn = document.querySelector(".delete-user-project");
    //if project is selected,then it can be deletet
    //** */
    deleteBtn.addEventListener("click", () => {
      projectItems.forEach((item) => {
        if (item.classList.contains("selected")) {
          item.remove();
          mainSection.classList.add("hidden");
        }
      });
    });
  }
  selectProject();
}
