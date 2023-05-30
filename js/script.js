// Selecionando os elementos
const links = document.querySelectorAll(".header_menu a");
// Função para cada link
function ativarlinks(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarlinks);
