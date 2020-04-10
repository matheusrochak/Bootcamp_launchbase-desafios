//Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
//Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.
//As tecnologias também devem ser objetos contendo nome e especialidade

const usario = {
    nome: "matheus",
    idade :22,
        tecno :[
            {nome:"c++", especialidade:"desktop"},
               {nome:"Python", especialidade: "data sciencee"},
               { nome: "java script ", especialidade: "web mobile"}
                ]

}


console.log(`O usuário ${usario.nome}  tem idade ${usario.idade} e usa a tecnologia ${usario.tecno[0].nome} com especialidade em ${usario.tecno[0].especialidade}`)