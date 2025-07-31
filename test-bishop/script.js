// document.addEventListener("DOMContentLoaded", function () {
//   const hamburger = document.getElementById("hamburger");
//   const menu = document.getElementById("menu");

//   hamburger.addEventListener("click", function () {
//     menu.classList.toggle("show");
//   });
// });


const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", () => {
      if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";
      } else {
        menu.style.display = "none";
      }
    });