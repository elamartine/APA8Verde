const contentMain = document.querySelector(".conteudo-main");
const sectionObjetivos = document.querySelector(".section-objetivos");

window.addEventListener("resize", () => {
  const height = contentMain.clientHeight;
  contentMain.style.bottom = `-${height / 2}px`;
  sectionObjetivos.style.paddingTop = `${height / 2 + 36}px`;
  console.log(`${height / 2}px`);
});

window.addEventListener("load", () => {
  const height = contentMain.clientHeight;
  contentMain.style.bottom = `-${height / 2}px`;
  sectionObjetivos.style.paddingTop = `${height / 2 + 36}px`;
  console.log(`${height / 2}px`);
});
