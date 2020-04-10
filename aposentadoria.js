//Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos),
//O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
//Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos,
// enquanto a mulher precisa ter no mínimo 85 anos na soma;
//SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
//SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;

// declaração das variaveis 

const nome = "matheus"
const sexo = "masculino"
const idade = 19
const contribuicao = 3 

// verificar se é esta dentro

if(sexo == "masculino"){
    if((idade + contribuicao)>= 95){
        console.log(`${nome}, você pode se aposentar `)
    }
    else{
        console.log(`${nome}, você nao  pode se aposentar `)
    }
}

if(sexo == "femenino"){
    if((idade + contribuicao)>= 85){
        console.log(`${nome}, você pode se aposentar `)
    }
    else{
        console.log(`${nome}, você nao  pode se aposentar `)
    }
}

