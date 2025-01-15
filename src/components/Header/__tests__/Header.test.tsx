import { screen } from '@testing-library/react'
import Header from '..'
import { renderizarComProvicer } from '../../../utils/tests'

describe('Teste para o componente header', () => {
  test('Deve renderizar corretamente', () => {
    renderizarComProvicer(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument
  })

  test('Deve redenrizar com 2 itens no carrinho', () => {
    renderizarComProvicer(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows'],
              preco: 150.9,
              precoAntigo: 199.9,
              titulo: 'Elden Ring'
            },
            {
              id: 2,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows', 'PS5', 'Xbox Series S/X'],
              preco: 199.9,
              precoAntigo: 299.9,
              titulo: 'Hogwarts Legacy'
            }
          ]
        }
      }
    })
    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
