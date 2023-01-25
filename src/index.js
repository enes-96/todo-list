function selectProject() {
  const mainTitle = document.querySelector(".main-title");
  const table = document.querySelector(".table-wrapper");

  const dateProjects = document.querySelectorAll(".wrapper-date-item");
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

  const newProjects = document.querySelectorAll(".wrapper-project-item");
  newProjects.forEach((item) => {
    item.addEventListener("click", (e) => {
      newProjects.forEach((el) => {
        mainTitle.textContent = item.textContent;
        item.classList.add("selected");
        if (el !== item) {
          el.classList.remove("selected");
        }
      });
    });
  });
}
selectProject();
