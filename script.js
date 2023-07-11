// side bar container navigation
// const sidebarNavigationEl = document.getElementById(
//   "sidebar-container-navigation-id"
// );
// const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar");

// sidebarOpenNavigationEl = addEventListener("click", () => {
//   sidebarNavigationEl.classList.toggle(".slidebar-show");
// });





// const sidebarNavigationEl = document.getElementById(
//   "sidebar-container-navigation-id"
// );
// const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar");
// const sidebarCloseNavigationEl = document.getElementById(
//   "sidebar-navigation-close"
// );

// sidebarOpenNavigationEl.addEventListener("click", () => {
//   sidebarNavigationEl.classList.toggle("sidebar-show");
// });

// sidebarCloseNavigationEl.addEventListener("click", () => {
//   sidebarNavigationEl.classList.toggle("sidebar-show");
// });




// const sidebarNavigationEl = document.getElementById("sidebar-container-navigation-id");
// const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar");
// const sidebarCloseNavigationEl = document.getElementById("sidebar-navigation-close");

// sidebarOpenNavigationEl.addEventListener("click", () => {
//   sidebarNavigationEl.classList.toggle("sidebar-show");
// });

// sidebarCloseNavigationEl.addEventListener("click", () => {
//   sidebarNavigationEl.classList.toggle("sidebar-show");
// });

// const submenuItems = document.querySelectorAll(".sidebar-items .down");

// submenuItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("open");
//     const submenu = item.nextElementSibling;
//     if (submenu.style.maxHeight) {
//       submenu.style.maxHeight = null;
//     } else {
//       submenu.style.maxHeight = submenu.scrollHeight + "px";
//     }
//   });
// });




const sidebarNavigationEl = document.getElementById("sidebar-container-navigation-id");
const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar");
const sidebarCloseNavigationEl = document.getElementById("sidebar-navigation-close");

sidebarOpenNavigationEl.addEventListener("click", () => {
  sidebarNavigationEl.classList.toggle("sidebar-show");
});

sidebarCloseNavigationEl.addEventListener("click", () => {
  sidebarNavigationEl.classList.toggle("sidebar-show");
});

const submenuItems = document.querySelectorAll(".sidebar-items .down");

submenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
    const submenu = item.nextElementSibling;
    if (submenu.style.maxHeight) {
      submenu.style.maxHeight = null;
    } else {
      submenu.style.maxHeight = submenu.scrollHeight + "px";
    }
  });
});




// const sidebarNavigationEl = document.getElementById("sidebar-container-navigation-id");
// const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar");
// const sidebarCloseNavigationEl = document.getElementById("sidebar-navigation-close");

// sidebarOpenNavigationEl.addEventListener("click", () => {
//   sidebarNavigationEl.classList.toggle("sidebar-show");
// });

// sidebarCloseNavigationEl.addEventListener("click", () => {
//   sidebarNavigationEl.classList.toggle("sidebar-show");
// });

// const submenuItems = document.querySelectorAll(".sidebar-items .down");

// submenuItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("open");
//     const submenu = item.nextElementSibling;
//     submenu.style.display = item.classList.contains("open") ? "block" : "none";
//   });
// });





