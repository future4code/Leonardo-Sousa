// a) ↓ A entrada são dois números e a saída são as estatísticas deles: maior, menor e média.
// ↓ Tipagem

type num = {
  numero: number,
}

const a: num = {
  numero: 22
}
const b: num = {
  numero: 8
}

const numeros: num[] = [a, b]

function obterEstatisticas(numeros: num[]): {} {
  const numerosOrdenados = numeros.sort(
    (a, b) => a - b
  )

  let soma = 0

  for (let num of numeros) {
    soma += num
  }

  const estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length
  }

  return estatisticas
}

// ) ↓

