class Animal {
  constructor (nome, idade) {
    this.nome = nome
    this.idade = idade
  }

  comer () {
    console.log(`${this.nome} está comendo!`)
  }

  andar () {
    console.log(`${this.nome} está andando!`)
  }
}

class Gato extends Animal {
  constructor (nome, idade, cor, raca) {
    super(nome, idade)
    this.cor = cor
    this.raca = raca
  }

  miar () {
    console.log(`Oi, eu sou ${this.nome}, minha cor é ${this.cor} e sou ${this.raca}.`)
  }
}

let gatinho = new Gato('Felps', 5, 'Branco', 'Persa')

gatinho.miar()
gatinho.andar()
gatinho.comer()