let show = true;

const menuContent = document.querySelector(".list-menu");
const menuToggle = document.querySelector(".menu-toggle");
const navBar = document.querySelector(".content");

// Alterna o menu
menuToggle.addEventListener("click", () => {
  navBar.classList.toggle("on", show);
  show = !show;
});

// Fecha o menu ao clicar em um link
document.querySelectorAll(".list-menu li a").forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.remove("on");
    show = true;
  });
});
