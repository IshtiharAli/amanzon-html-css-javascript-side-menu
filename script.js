const sidebarNavigationEl = document.getElementById(
  "sidebar-container-navigation-id"
);
const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar");
const sidebarCloseNavigationEl = document.getElementById(
  "sidebar-navigation-close"
);

sidebarOpenNavigationEl.addEventListener("click", () => {
  sidebarNavigationEl.classList.toggle("sidebar-show");
});

sidebarCloseNavigationEl.addEventListener("click", () => {
  sidebarNavigationEl.classList.toggle("sidebar-show");
});

// for See All items  sub menu

const seeAllItems = document.querySelectorAll(".sidebar-items .down");
const seeLessButtons = document.querySelectorAll(
  ".sidebar-items .see-less-button"
);

seeAllItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
    const submenu = item.nextElementSibling;
    const seeLessButton = submenu.querySelector(".see-less-button");
    seeLessButton.addEventListener("click", () => {
      item.classList.remove("open");
      submenu.style.maxHeight = null;
    });
    if (submenu.style.maxHeight) {
      submenu.style.maxHeight = null;
    } else {
      submenu.style.maxHeight = submenu.scrollHeight + "px";
    }
  });
});

// for Amazon Music Sub Menu

