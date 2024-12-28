// Declara um array vazio chamado amigos para armazenar os nomes dos amigos.
let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if(amigo.value == ''){
        alert('Informe o nome do amigo!');
        return; 
    }
    let lista = document.getElementById('lista-amigos');
    // Adiciona o valor do campo de texto ao array amigos.
    amigos.push(amigo.value);
    // Verifica se a lista está vazia. Se estiver, adiciona o novo amigo.
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    // Limpa o campo de texto após adicionar o amigo.
    amigo.value = '';
}

function sortear() {
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    // laço for percorre todos os elementos do array amigos, utilizando o índice i como contador
    //O loop executa de 0 até o último índice
    for (let i = 0; i < amigos.length; i++) {
        // Verifica se é o último amigo da lista para fazer o emparelhamento com o primeiro.
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        // Caso contrário, emparelha com o próximo amigo da lista.
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}