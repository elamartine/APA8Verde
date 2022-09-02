const contentMain = document.querySelector(".conteudo-main");
const sectionObjetivos = document.querySelector(".section-objetivos");

window.addEventListener("resize", () => {
  const heightContentMain = contentMain.clientHeight;
  contentMain.style.bottom = `-${heightContentMain / 2}px`;
  sectionObjetivos.style.paddingTop = `${heightContentMain / 2 + 36}px`;
});

window.addEventListener("load", () => {
  const heightContentMain = contentMain.clientHeight;
  contentMain.style.bottom = `-${heightContentMain / 2}px`;
  sectionObjetivos.style.paddingTop = `${heightContentMain / 2 + 36}px`;
});
