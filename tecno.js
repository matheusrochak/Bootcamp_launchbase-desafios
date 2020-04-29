//  criar um array  de usuarios


// criei o array de usuarios 
 const usuarios = [
     {
         nome: `carlos`, tecnologias :[`HTML`, `CSS`]
     },
     {
        nome: `JASMINE`, tecnologias :[ `JAVASCRIPT`, `CSS`]
     },
     {
        nome: `TUANE`, tecnologias :[ `HTML`, `NODEJS`]
     }
 ]


   //  PARA VARIAVEL ATÉ OBJETO 
   // ELE VAI IMPRIMIR TODOS OS USUARIOS DO OBJETO 
   // JOIN (`,`) - PARA PEGAR OS DOIS TIPOS 
   
     for(let usuario of usuarios){
       console.log(`${usuario.nome}, trabalha com ${usuario.tecnologias.join(`,`)}`)
     }
 

// FUNCAO CHECAR USUARIO RECEBER UMA VARIAVEL ALEATORIA - NESSE CASO USUARIO 
// FAZ A VERIFICAÇÃO 
function checarusuario(usuario){
    for (let tecnologia of usuario.tecnologias){
        if(tecnologia == `CSS`)
        return true
    }
    
    return false
  
    
}

// UM FOR PARA VER QUAIS USUARIOS TEM CSS 

for (let i = 0; i < usuarios.length; i++) {
    // CRIOU UMA VARIAVEL PARA RECBER CSS = DENTRO DELA PASSA A FUNÇÃO E PERCORRE COM I OS USUARIOS 
    const usuarioTrabalhaComCSS = checarusuario(usuarios[i])
    // SE O USUARIO TIVER DENTRO IMPRIME 
    if(usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}
