// Define uma variável para armazenar a última posição de scroll
let ultimaPosicaoScroll = window.scrollY;

window.addEventListener('scroll', function() {
  // Obtém a posição atual de scroll
  let posicaoAtualScroll = window.scrollY;
  var header = document.querySelector('header');

  // Verifica se a posição de scroll atual é maior que a última posição de scroll
  if (posicaoAtualScroll > ultimaPosicaoScroll){
    // Se for, esconde o header
    header.style.top = '-100px'; // Ajuste este valor conforme a altura do seu header
  } else {
    // Se não, mostra o header
    header.style.top = '0';
  }
  // Atualiza a última posição de scroll para a posição atual
  ultimaPosicaoScroll = posicaoAtualScroll;
});



const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const menuLateral = document.querySelector('.menu-lateral');

menu.addEventListener('click', () =>{
    menuLateral.classList.add('open');
})
menuLateral.addEventListener('click', () =>{
    menuLateral.classList.remove('open');
})
overlay.addEventListener('click', () =>{
    menuLateral.classList.remove('open');
})