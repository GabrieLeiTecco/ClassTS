// criar uma classe como base pra uma conta no caixaeletronico
// a classe tem que ter o nome e o saldo da conta
// e as funções de sacar dinheiro, depositar e listar saldo
// criar uma função que cria contas, e executa as funções da conta, como um caixaeletronico

class Conta{
    nome: string
    saldo: number

    constructor(nome : string){
        this.nome = nome
        this.saldo = 0
    }

    sacar(){
        let valor : number = Number(prompt('Quanto você quer sacar? '))
        if (valor > this.saldo){
            alert('Saldo insuficiente.')
        }else{
            this.saldo = this.saldo - valor
        }
    }

    depositar(){
        let valor : number = Number(prompt('Quanto você quer depositar? '))
        this.saldo = this.saldo + valor
    }

    listar(){
        alert(this.nome+', seu saldo atual é de: '+this.saldo)
    }
}
let contas : Array<string> = ['']
let saldos : Array<number> = [0]

function caixaEletronico(){
    let conta : any = criarConta()
    let rodando: boolean = true
    while(rodando == true){
    let oper : string = String(prompt('O que você quer fazer? '+'\n'+'(Sacar, depositar, ver saldo ou sair)')).toLowerCase()
    switch(oper){
        case 'sacar':
        conta.sacar()
        break

        case 'depositar':
        conta.depositar()
        break

        case 'ver saldo':
        conta.listar()
        break

        case 'sair':
        rodando = false
        break

        default:
        alert('Sacar, depositar ou ver saldo')
    }
    }
}

function criarConta(){
    let nome : string = String(prompt('Digite seu nome para criarmos uma conta: '))
    let conta = new Conta(nome)
    contas.push(conta.nome)
    saldos.push(conta.saldo)
    return conta
}

caixaEletronico()
