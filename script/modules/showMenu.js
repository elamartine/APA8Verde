export default function showMenu() {
  const Button = document.querySelector(".menu.menu1");
  const body = document.querySelector("body");

  Button.addEventListener("click", clickOnHamburguer);

  function clickOnHamburguer() {
    body.classList.toggle("menu-expanded");
  }

  document.querySelectorAll(".menu").forEach((menu) => {
    menu.addEventListener("click", () => {
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
      } else {
        menu.classList.add("active");
      }
    });
  });
}
