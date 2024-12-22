function comprar(){
    let tipo = document.getElementById('tipo-ingresso'); //armazena a variável tipo para obter o id do html
    let qtd = parseInt(document.getElementById('qtd').value); //.value retorna o que o usuário digitou nesse campo.
    
    if(tipo.value == 'pista'){ //se o tipo for igual ao valor "pista" do html
        comprarPista(qtd); //essa função vai ser executada
    } else if(tipo.value == 'superior'){
        comprarSuperior(qtd);
    } else{
        comprarInferior(qtd);
    }
}

function comprarPista(qtd){ 
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent); //obter a quantidade de ingressos disponíveis para a pista e armazená-la em uma variável.
    if (qtd > qtdPista){  //se o usuário digitou nesse campo um número maior do que está disponível...
        alert('Quantidade indisponível para tipo pista');
    } else{
        qtdPista = qtdPista - qtd; //realiza a subtração da quantidade de ingressos comprados (qtd) da quantidade disponível (qtdPista)
        document.getElementById('qtd-pista').textContent = qtdPista; //atualiza a quantidade de ingressos disponíveis na interface do usuário
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent); //obter a quantidade de ingressos disponíveis para a pista e armazená-la em uma variável.
    if (qtd > qtdSuperior){  //se o usuário digitou nesse campo um número maior do que está disponível...
        alert('Quantidade indisponível para tipo superior');
    } else{
        qtdSuperior = qtdSuperior - qtd; //realiza a subtração da quantidade de ingressos comprados (qtd) da quantidade disponível (qtdPista)
        document.getElementById('qtd-superior').textContent = qtdSuperior; //atualiza a quantidade de ingressos disponíveis na interface do usuário
        alert('Compra realizada com sucesso!');
    }

}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent); //obter a quantidade de ingressos disponíveis para a pista e armazená-la em uma variável.
    if (qtd > qtdInferior){  //se o usuário digitou nesse campo um número maior do que está disponível...
        alert('Quantidade indisponível para tipo inferior');
    } else{
        qtdInferior = qtdInferior - qtd; //realiza a subtração da quantidade de ingressos comprados (qtd) da quantidade disponível (qtdPista)
        document.getElementById('qtd-inferior').textContent = qtdInferior; //atualiza a quantidade de ingressos disponíveis na interface do usuário
        alert('Compra realizada com sucesso!');
    }

}