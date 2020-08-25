type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// a) Rodando no terminal o comando "tsc" 

// b) Teria que criar um arquivo tsconfig.json rodando o comando "tsc --init" e configurar a 
// rota relativa para os arquivos serem transpilados.

// c) Podemos transpilar varios arquivos rodando o comando tsc seguido de todos os nomes dos
// arquivos ou rodar apenas o tsc que tranpilará todos os arquivos .ts