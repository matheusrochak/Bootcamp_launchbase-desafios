//Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa.
// Os dados a serem armazenados são:

//Nome: Rocketseat
//Cor: Roxo
//Foco: Programação
//Endereço:
//Rua: Rua Guilherme Gembala
//Número: 260
    
    
    
    // tudo contido dentro de usuario 
    
    const usuario = {
        nome: " MATHEUS",
        // objeto empresa 
        empresa:{
            nome: "ROCKETSEAT ",
            cor: "ROXO",
            foco: "PROGRAMAÇÃO0",
            // objeto endereco
            endereco :{
                rua: "RUA GUILHERME GEMBALA",
                numero: 268

        }

    }

}

console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua} ${usuario.empresa.endereco.numero}`)