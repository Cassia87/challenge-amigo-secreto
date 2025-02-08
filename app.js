
let amigos = [];

function adicionarAmigo(){
    resultado.innerHTML = '';
    let nomeDigitado = document.getElementById('amigo').value;
    if(nomeDigitado === ''){
        alert('Por favor, insira um nome');
        return false;
    } else {
        amigos.push(nomeDigitado);   
    }
    limparCampo();
}

function limparCampo() {
    let campo = document.getElementById('amigo');
    campo.value = '';
}

function atualizarLista(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach((nomeDigitado, i) =>  {
        const item = document.createElement("li");
        item.textContent = nomeDigitado;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo(){
    listaAmigos.innerHTML = '';
    if(amigos === ''){
        alert('Não há amigos a serem sorteados');
    } else {
       let indiceAleatorio = Math.floor(Math.random() * amigos.length);
       let amigoSorteado = amigos[indiceAleatorio];
       let resultado = document.getElementById('resultado');
       resultado.innerHTML = `O amigo sorteado é ${amigoSorteado}`;
    }
    amigos =  [];
}


