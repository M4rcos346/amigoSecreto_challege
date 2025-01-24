let amigos = [];

function adicionarAmigo() {
  let nomes = document.querySelector("input").value.trim(); // Remove espaços em branco antes e depois do nome
  
  // permitir apenas letras maiúsculas e minúsculas e espaços
  let regex = /^[a-zA-Z\s]+$/;
  
  // verifica que não pode estar vazio o com caracter especial
  if (nomes === "") {
    alert("Por favor, preencha o campo!");
  } else if (!regex.test(nomes)) {
    alert("O nome não pode conter números ou caracteres especiais."); 
  } else if (amigos.includes(nomes)) {  //verifa se nome eestá na lista e não repete
    alert("Este nome já está na lista de amigos.");
  } else {
    amigos.push(nomes);  //adicina a lista e armazena
    atualizarLista();
  }
  
  limparCampo();
}

function limparCampo() {
  let nome = document.querySelector("input");
  nome.value = "";
}

function atualizarLista() { //armazenar o nome na lista
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  let armazenaNomes = '';
  
  for (let i = 0; i < amigos.length; i++) {
    armazenaNomes += `<li>${amigos[i]}</li>`;
  }

  lista.innerHTML = armazenaNomes;
}

function sortearNomes(amigos) {
  if (amigos.length === 0) {
    return "Não há amigos disponíveis.";
  }

  let sortear = Math.floor(Math.random() * amigos.length);
  return amigos[sortear];
}

function sortearAmigo() {
  if (amigos.length < 3) {
    alert("É necessário ter pelo menos 3 amigos para realizar o sorteio.");
    return;
  }

  let amigoSelecionado = sortearNomes(amigos);
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `O amigo sorteado é: ${amigoSelecionado}`;
}