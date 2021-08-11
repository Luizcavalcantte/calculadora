var tela = document.getElementById("tela");

function addNum(num) {
  tela.innerHTML += num;
}

function resultado() {
  tela.innerHTML = eval(tela.innerHTML);
}

function limparTela() {
  tela.innerHTML = "";
}

function apagar() {
  tela.innerHTML = tela.innerHTML.substring(0, tela.innerHTML.length - 1);
}
