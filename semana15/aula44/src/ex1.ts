// a) ↓ Quando atribuído um número aparece um erro dizendo que o número
// não pode ser atribuído a uma variável do tipo string.
const minhaString: string = "Bananinha"

// b) ↓ Atribuindo dois tipos a ela.
const meuNumero: number | string = 2

// c) ↓
const person = {
  nome: "Lucas",
  idade: 23,
  corFavorita: "Preto"
}

// e) ↓ 
enum CORES {
  VERMELHO = "VERMELHO",
  LARANJA = "LARANJA",
  AMARELO = "AMARELO",
  VERDE = "VERDE",
  AZUL = "AZUL",
  INDIGO = "INDIGO",
  VIOLETA = "VIOLETA"
}

// d) ↓
type pessoa = {
  nome: string,
  idade: number,
  corFavorita: CORES
}

const leo: pessoa = {
  nome: "Leonardo",
  idade: 22,
  corFavorita: CORES.VERMELHO
}
const luck: pessoa = {
  nome: "Lucas",
  idade: 23,
  corFavorita: CORES.AMARELO
}
const pepe: pessoa = {
  nome: "Pedro",
  idade: 24,
  corFavorita: CORES.VERDE
}