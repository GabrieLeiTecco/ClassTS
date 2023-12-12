class Conta{
    nome: string
    saldo: number

    constructor(nome:string){
        this.nome = nome
        this.saldo = 0
    }

    operacoes(){
        alert(this.nome+", o que você quer fazer?")
        let fim = false
        while(fim == false){
            let oper = String(prompt("Sacar, depositar, listar saldo ou sair")).toLowerCase()
            if (oper == 'sacar'){
                this.sacar()
                fim = true
            }else if(oper == 'depositar'){
                this.depositar()
                fim = true
            }else if(oper == 'listar saldo'){
                this.listar()
                fim = true
            }else if(oper == 'sair'){
                fim = true
            }
            else{
                alert('Sacar, depositar ou listar saldo')
        }
        }
    }

    sacar(){
        let valor = Number(prompt("Quanto você quer sacar? "))
        if (valor > this.saldo){
            alert("Você não tem saldo o suficiente")
            this.operacoes()
        }else{
            this.saldo = this.saldo - valor
            this.operacoes()
        }
    }

    depositar(){
        let valor = Number(prompt("Quanto você quer depositar? "))
        this.saldo = this.saldo + valor
        this.operacoes()
    }

    listar(){
        alert(this.nome+", seu saldo atual é de: "+this.saldo)
        this.operacoes()
    }
}

let nome : string = String(prompt("Digite seu nome: "))
let conta = new Conta(nome)
conta.operacoes()
