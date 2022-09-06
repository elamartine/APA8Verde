export default function showMenu() {
  const showButton = document.querySelector(".fa-solid.fa-bars");
  const closeButton = document.querySelector(".fa-solid.fa-xmark");
  const body = document.querySelector("body");

  showButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);

  function openMenu() {
    body.classList.add("menu-expanded");
  }

  function closeMenu() {
    body.classList.remove("menu-expanded");
  }
}
