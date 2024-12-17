function alterarStatus(id) { 
    // Define uma função chamada "alterarStatus", que recebe um parâmetro "id".
    // Essa função será usada para alterar o estado de um elemento específico baseado no "id" fornecido.
    
    let gameClicado = document.getElementById(`game-${id}`);     
    // Obtém o elemento HTML com o ID correspondente a "game-{id}" e o armazena na variável "gameClicado".
    
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    // Dentro do elemento "gameClicado", seleciona o elemento com a classe "dashboard__item__img".
    // Esse elemento provavelmente representa a imagem de um jogo.
    
    let botao = gameClicado.querySelector('.dashboard__item__button');
    // Dentro do elemento "gameClicado", seleciona o elemento com a classe "dashboard__item__button".
    // Esse elemento representa o botão de interação associado ao jogo.
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Verifica se a classe "dashboard__item__img--rented" está presente no elemento "imagem".
        // Essa classe indica que o jogo está alugado.

        imagem.classList.remove('dashboard__item__img--rented');
        // Remove a classe "dashboard__item__img--rented" da imagem, indicando que o jogo não está mais alugado.
        
        botao.classList.remove('dashboard__item__button--return');
        // Remove a classe "dashboard__item__button--return" do botão, alterando sua aparência ou estilo.
        
        botao.textContent = 'Alugar';
        // Altera o texto do botão para "Alugar", indicando que o jogo está disponível para aluguel.
    } else {
        // Caso a classe "dashboard__item__img--rented" não esteja presente (o jogo não está alugado):

        imagem.classList.add('dashboard__item__img--rented');
        // Adiciona a classe "dashboard__item__img--rented" à imagem, indicando que o jogo foi alugado.
        
        botao.textContent = 'Devolver';
        // Altera o texto do botão para "Devolver", indicando que o jogo está alugado e pode ser devolvido.
        
        botao.classList.add('dashboard__item__button--return');
        // Adiciona a classe "dashboard__item__button--return" ao botão, alterando sua aparência ou estilo.
    }
}
