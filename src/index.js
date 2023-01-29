document.getElementById("btnNewProject").addEventListener("click", () => {
  addNewProject();
  selectProject();
});

function selectProject() {
  const allProjects = document.querySelectorAll(".wrapper-project-item");
  const mainTitle = document.getElementById("mainTitle");

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

  // first create a input and append to item wrapper
  const createProjectNameInput = document.createElement("input");
  createProject.appendChild(createProjectNameInput);
  //focus on input
  window.setTimeout(() => createProjectNameInput.focus(), 0);

  //dynamicly type title
  createProjectNameInput.addEventListener("input", (e) => {
    mainTitle.textContent = e.target.value;
  });

  const newProjectName = document.createElement("h5");
  //user enter , transform input to h5
  createProjectNameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      newProjectName.textContent = e.target.value;
      console.log(e.target.value);
      newProjectName.classList.add("project-item-name");
      createProject.replaceChild(newProjectName, createProjectNameInput);
      //if input is empty remove item
      if (!newProjectName.innerText) {
        createProject.remove();
      }
    }
  });

  //edit project
  function editProject() {
    const projectItems = document.querySelectorAll(".project-item");
    const editBtn = document.querySelector(".edit-user-project");
    editBtn.addEventListener("click", () => {
      projectItems.forEach((item) => {
        if (item.classList.contains("selected")) {
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
//delete from context menu
function deleteProject() {
  const projectItems = document.querySelectorAll(".project-item");
  const deleteBtn = document.querySelector(".delete-user-project");
  //if project is selected,then it can be deletet
  deleteBtn.addEventListener("click", () => {
    projectItems.forEach((item) => {
      if (item.classList.contains("selected")) {
        item.remove();
        mainTitle.innerHtml = "";
      }
    });
  });
}

selectProject();
//--------------------------------------------------sidebar
const buttonNewTask = document.body.querySelector(".add-new-task");
const taskModal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");
buttonNewTask.addEventListener("click", () => {
  toggleModal();
});
const taskSubmit = taskModal.querySelector(".task-submit");
taskSubmit.addEventListener("click", toggleModal);

const taskDelete = taskModal.querySelector(".task-delete");
taskDelete.addEventListener("click", toggleModal);
function toggleModal() {
  taskModal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}
