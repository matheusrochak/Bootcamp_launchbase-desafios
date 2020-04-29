
// criar objeto usuarios 

const user = {
    name: "Matheus ",
    transactions: [],
    balance: 0
};

// crie uma função para criar transação 
// puxei atraves do push o array dentro de user 
// e coloquei as condições 

function createTransaction(transaction) {

    user.transaction.push(transaction)

    if (transaction.type === `credit `) {

        user.balance = user.balance + transaction.value

    } else {
        user.balance = user.balance - transaction.value
    }

}

// relatorios 

function getHigherTransactionByType(type) {

    let higherTransaction
    let higherValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }
    return higherTransaction
}

function getAverageTransactionValue() {
    let soma = 0
    for (let transaction of user.transactions) {
        soma = soma + transaction.value
    }
    return soma / user.transactions.length

}
function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0
    }
    for (let transaction of user.transactions) {
        if (transaction.type === `credit`) {
            count.credit++

        } else {
            count.debit++
        }
        return count
    }
}
createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })
