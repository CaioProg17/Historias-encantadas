const botoes = document.querySelectorAll(".som-card button");
const floresta = new Audio("sons/floresta.mp3");
botoes[0].addEventListener("click", function() {
floresta.play();
});
const mar = new Audio("sons/mar.mp3");
botoes[1].addEventListener("click", function() {
mar.play();
});
const noite = new Audio("sons/noite.mp3");
botoes[2].addEventListener("click", function() {
noite.play();
});