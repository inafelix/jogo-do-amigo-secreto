let amigos = []; //a array que armazena os nomes dos amigos.

//a função para adicionar os nomes dos amigos.
function adicionarAmigo() { 
  let inputAmigo = document.getElementById('amigo');
  let nomeDoAmigo = inputAmigo.value.trim();
//uma validação para garantir que o campo não esteja vazio.
  if (nomeDoAmigo === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  amigos.push(nomeDoAmigo);
  inputAmigo.value = '';
  atualizarListaDeAmigos();
}
////percorre a array Amigos
function atualizarListaDeAmigos() {
  let listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';
////um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome
  for (let i = 0; i < amigos.length; i++) {
    let itemLista = document.createElement('li');
    itemLista.textContent = amigos[i];
    listaAmigos.appendChild(itemLista);
  }
}
//função que selecione aleatoriamente um dos nomes armazenados no array amigos
function sortearAmigo() {
  if (amigos.length === 0) { ////Validar que há amigos disponíveis
    alert('Adicione os nomes dos amigos para sortear');
    return;
  }
////Gerar um índice aleatório
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
