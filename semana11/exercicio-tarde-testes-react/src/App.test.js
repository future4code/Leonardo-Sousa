import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe('Renderizacao inicial', () => { // ---------------------------------------
  test('Input existir na tela', () => {
    const {getByPlaceholderText} = render(<App/>)
    const input = getByPlaceholderText('Novo post')

    expect(input).toBeInTheDocument()
  })
  test('Botao existir na tela', () => {
    const {getByText} = render(<App/>)
    const botaoAdd = getByText('Adicionar')

    expect(botaoAdd).toBeInTheDocument()
  })
})

describe('Ao adicionar post', () => { // ---------------------------------------
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
  test('Adicionar post', () => { 
    const {getByPlaceholderText, getByText} = render(<App/>)
    const input = getByPlaceholderText('Novo post')
    const botaoAdd = getByText('Adicionar')

    fireEvent.change(input, {
      target: {
        value: 'novo post'
      }
    })
    fireEvent.click(botaoAdd)

    expect(getByText(/novo post/)).toBeInTheDocument()
  })
  test('Limpar input', () => {
    const {getByPlaceholderText, getByText} = render(<App/>)
    const input = getByPlaceholderText('Novo post')
    const botaoAdd = getByText('Adicionar')

    fireEvent.change(input, {
      target: {
        value: 'novo post'
      }
    })
    fireEvent.click(botaoAdd)

    expect(input).toHaveValue('')
  })
})

describe('Funcionalidade dos botoes', () => { // ---------------------------------------
  test('Curtir', () => {
    const {getByPlaceholderText, getByText} = render(<App/>)
    
    const input = getByPlaceholderText('Novo post')
    fireEvent.change(input, {
      target: {
        value: 'novo post'
      }
    })

    const botaoAdd = getByText('Adicionar')
    fireEvent.click(botaoAdd)

    const botaoCurtir = getByText('Curtir')
    fireEvent.click(botaoCurtir)

    expect(getByText("Descurtir")).toBeInTheDocument()
  })
  test('Descurtir', () => {
    const {getByPlaceholderText, getByText} = render(<App/>)
    
    const input = getByPlaceholderText('Novo post')
    fireEvent.change(input, {
      target: {
        value: 'novo post'
      }
    })
    
    const botaoAdd = getByText('Adicionar')
    fireEvent.click(botaoAdd)

    const botaoCurtir = getByText('Curtir')
    fireEvent.click(botaoCurtir)

    const botaoDescurtir = getByText('Descurtir')
    fireEvent.click(botaoDescurtir)

    expect(getByText("Curtir")).toBeInTheDocument()
  })
  test('Apagar e conferir posts na tela', () => {
    const {getByPlaceholderText, getByText} = render(<App/>)
    
    const input = getByPlaceholderText('Novo post')
    fireEvent.change(input, {
      target: {
        value: 'novo post'
      }
    })
    
    const botaoAdd = getByText('Adicionar')
    fireEvent.click(botaoAdd)

    const botaoApagar = getByText('Apagar')
    fireEvent.click(botaoApagar)

    expect(getByText("Nenhum Post")).toBeInTheDocument()
  })
})

