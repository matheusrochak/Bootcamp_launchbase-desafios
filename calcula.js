const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];
    
  // uma função onde calcula saldo e recebe parametro de receitas e desepesas 
  // dentro dela recebo o valor da fução soma onde tem o for 
  
  function calculaSaldo(receitas, despesas){

    const receita = soma(receitas)
    const despesa = soma(despesas)
    return receita - despesa
  }
  // soma faz um for 
  //  soma ( numeros) onde tem o numero entra receita  e despesas 
  // sai a soma 
  // essa soma vai para calculasaldo e armaze o valor em receita e despesas 
  function soma(nnumero){
      let cont = 0;
      for (let num of numeros){
          cont = cont +num
      }
      return soma 
  }

  // outro for para percorrer o vetor 
  // saldo vai receber o calculo de (receita - despesa )
  // 

  for (let user of usuarios){
      const saldo = calculaSaldo(user.receitas , user.despesas)

      if (saldo > 0) {
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    } else {
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
  }
 
  