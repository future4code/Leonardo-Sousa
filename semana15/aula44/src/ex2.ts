// a) ↓ A entrada são dois números e a saída são as estatísticas deles: maior, menor e média.
// ↓ Tipagem

const numeros: number[] = [3, 6]

function obterEstatisticas(numeros: number[]): {} {
  const numerosOrdenados: number[] = numeros.sort(
    (a, b) => a - b
  )

  let soma: number = 0

  for (let num of numeros) {
    soma = soma + num
  }

  const estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length
  }

  return estatisticas
}

console.log(obterEstatisticas(numeros))

// b) ↓ Uma outra variável que compõe essa função é um array com type number, as tipagens que 
// usei foram: soma: number, numerosOrdenados: number[], numeros: number[].

// c) ↓ 

const amostraDeDados = {

  numeros: [21, 18, 65, 44, 15, 18],

  obterEstatisticas: (numeros: number[]) => {
    const numerosOrdenados: number[] = numeros.sort(
      (a, b) => a - b
    )
  
    let soma: number = 0
  
    for (let num of numeros) {
      soma = soma + num
    }
  
    const estatisticas = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length
    }
  
    return estatisticas
  }
}

console.log(amostraDeDados.obterEstatisticas(amostraDeDados.numeros))

