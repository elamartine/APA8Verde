export default function backToTop() {
  window.addEventListener("scroll", () => {
    if (scrollY > 800) {
      document.getElementById("backToTopButton").classList.add("show");
      console.log("maior que 400px");
    } else {
      document.getElementById("backToTopButton").classList.remove("show");
      console.log("menor que 400px");
    }
  });
}
