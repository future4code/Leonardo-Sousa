import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { Post } from "./components/Post";

describe('Renderizacao inicial', () => {
  test('Input existir na tela', () => {
    const {getByPlaceholderText} = render(<App/>)
    const input = getByPlaceholderText('Novo post')

    expect(input).toBeInTheDocument()
  })
  test('Botao existir na tela', () => {
    const {getByText} = render(<App/>)
    const botao = getByText('Adicionar')

    expect(botao).toBeInTheDocument()
  })
})

describe('Adicionar post', () => {
  test('Controlar o input', () => {
    const {getByPlaceholderText} = render(<App/>)
    const input = getByPlaceholderText('Novo post')

    fireEvent.change(input, {
      target: {
        value: 'novo post'
      }
    })

    expect(input).toHaveValue('novo post')
  })
  test('Quando digita e adiciona, adicionar post', () => {
    const {getByPlaceholderText, getByText} = render(<App/>)
    const input = getByPlaceholderText('Novo post')
    const botao = getByText('Adicionar')

    fireEvent.change(input, {
      target: {
        value: 'novo post'
      }
    })
    fireEvent.click(botao)

    expect(getByText(/novo post/)).toBeInTheDocument()
  })
  // test('Quando adiciona post, limpar input', () => {
  //   const {getByPlaceholderText, getByText} = render(<App/>)
  //   const input = getByPlaceholderText('Novo post')
  //   const botao = getByText('Adicionar')

  //   fireEvent.change(input, {
  //     target: {
  //       value: 'novo post'
  //     }
  //   })
  //   fireEvent.click(botao)

  //   expect(input).toHaveValue('')
  // })
})
describe('Funcionalidade dos botoes', () => {
  test('Curtir e Descurtir', () => {
    const {getByPlaceholderText, getByText} = render(<App/>)
    const {getByText} = render(<Post/>)
    const botaoCurtir = getByText('Curtir')

    const input = getByPlaceholderText('Novo post')
    const botao = getByText('Adicionar')

    fireEvent.change(input, {
      target: {
        value: 'novo post'
      }
    })
    fireEvent.click(botao)

    fireEvent.click(botaoCurtir)

    expect(botaoCurtir("Descurtir")).toBeInTheDocument()
  })
})
