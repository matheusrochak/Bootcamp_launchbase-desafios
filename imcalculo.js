    // calcular o imc 
    //Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa, por exemplo:
    //A partir desses dados armazene em uma constante chamada imc
    // o cálculo do índice de massa corporal definido pela fórmula abaixo:
    //peso / (altura * altura);
    // Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

    // SE o IMC maior ou igual a 30: Carlos você está acima do peso;
    // SE o IMC menor que 29.9: Carlos você não está acima do peso;

   // declaração das variavaeis 

    const nome = "matheus "
    const peso = 95
    const altura = 1.75
    const sexo = "masculino"

    // calculo imc 

    const imc = (peso/(altura *altura))

    // mensagem 

    if (imc >= 30){
        console.log ( ` ${nome} voce está acima do peso ` )
    }else{
        console.log ( ` ${nome} voce não esta acima do peso  ` )
    }
