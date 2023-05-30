// Efeito de seleção de página
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
// Enviar informação de bicicleta para orçamento
const parametros = new URLSearchParams(location.search);
function ativarproduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarproduto);
// Perguntas frequentes, efeito
const perguntas = document.querySelectorAll(".perguntas button");
function ativarpergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
  console.log(controls);
}
function eventoperguntas(pergunta) {
  pergunta.addEventListener("click", ativarpergunta);
}
