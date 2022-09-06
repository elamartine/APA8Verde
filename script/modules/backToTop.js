export default function backToTop() {
  window.addEventListener("scroll", () => {
    if (scrollY > 800) {
      document.getElementById("backToTopButton").classList.add("show");
    } else {
      document.getElementById("backToTopButton").classList.remove("show");
    }
  });
}
