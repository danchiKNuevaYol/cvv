const bg = document.getElementById("bg");
const sideMenu = document.getElementById("sideMenu");
const clo = document.getElementById("clo");
bg.addEventListener("click", () => {
  sideMenu.classList.toggle("active");
});
clo.addEventListener("click", (e) => {
  e.preventDefault();
  sideMenu.classList.remove("active");
});