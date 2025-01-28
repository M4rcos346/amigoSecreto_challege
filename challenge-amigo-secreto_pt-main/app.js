let amigos = [];

function adicionarAmigo() {
  let nomes = document.querySelector("input").value.trim(); //remove espaços em branco antes e depois do nome
  
  let regex = /^[a-zA-ZÀ-ÿ\s]+$/; //permissão só de acentos, caracteres especiais e numeros não aceita

  if (nomes === "") {
    alert("Por favor, preencha o campo!");
  } else if (!regex.test(nomes)) {
    alert("O nome não pode conter números ou caracteres especiais."); 
  } else if (amigos.includes(nomes)) {
    alert("Este nome já está na lista de amigos.");
  } else {
    amigos.push(nomes);
    atualizarLista();
  }
  
  limparCampo();
}

function limparCampo() {
  let nome = document.querySelector("input");
  nome.value = "";
}

function atualizarLista() {
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

function novoSorteio() {
  // Verifica se tem 3 amigos na lista
  if (amigos.length < 3) {
    alert("É necessário ter pelo menos 3 amigos para realizar o sorteio.");
    return; // Sai da função se não houver amigos suficientes
  }

  // Limpa a lista de amigos após o sorteio
  amigos = [];
  atualizarLista(); // Atualiza a lista na interface

  // Limpa o resultado exibido
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpa o conteúdo do resultado
}