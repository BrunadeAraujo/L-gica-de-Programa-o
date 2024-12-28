// Declara um array vazio chamado amigos para armazenar os nomes dos amigos.
let amigos = [];

// Função para adicionar um amigo à lista.
function adicionar() {
    // Seleciona o elemento de entrada de texto com o ID 'nome-amigo'.
    let amigo = document.getElementById('nome-amigo');
    // Seleciona o elemento com o ID 'lista-amigos' onde a lista de amigos será exibida.
    let lista = document.getElementById('lista-amigos');

    // Adiciona o valor do campo de texto ao array amigos.
    amigos.push(amigo.value);

    // Verifica se a lista está vazia. Se estiver, adiciona o novo amigo.
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    // Se não estiver vazia, adiciona o novo amigo com uma vírgula separando os nomes.
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    // Limpa o campo de texto após adicionar o amigo.
    amigo.value = '';
}

// Função para realizar o sorteio.
function sortear() {
    // Embaralha a lista de amigos.
    embaralhar(amigos);

    // Seleciona o elemento onde o resultado do sorteio será exibido.
    let sorteio = document.getElementById('lista-sorteio');
    // Itera sobre a lista de amigos para criar as combinações do amigo secreto.
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

// Função para embaralhar a lista de amigos usando o algoritmo Fisher-Yates.
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        // Gera um índice aleatório.
        const indiceAleatorio = Math.floor(Math.random() * indice);
        // Troca os elementos de posição no array.
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

// Função para reiniciar o sorteio, limpando as listas.
function reiniciar() {
    // Limpa o array de amigos.
    amigos = [];
    // Limpa o conteúdo dos elementos HTML que exibem as listas de amigos e sorteio.
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}