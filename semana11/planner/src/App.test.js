import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe('Renderizacao inicial', () => { // ---------------------------------------
  test('Input existir na tela', () => {
    const {getByPlaceholderText} = render(<App/>)
    const input = getByPlaceholderText('Tarefa')

    expect(input).toBeInTheDocument()
  })
  test('Botao existir na tela', () => {
    const {getByText} = render(<App/>)
    const botaoAdd = getByText('CRIAR TAREFA')

    expect(botaoAdd).toBeInTheDocument()
  })
  test('Select existir na tela', () => {
    const {getByTestId} = render(<App/>)
    const selectDay = getByTestId('select')

    expect(selectDay).toBeInTheDocument()
  })
})


