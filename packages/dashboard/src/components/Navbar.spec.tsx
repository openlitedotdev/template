import { render, screen } from '@testing-library/react'

it('should render tag name `button`', () => {
  render(<button>Hola</button>)

  const button = screen.getByText('Hola')

  expect(button.tagName.toLowerCase()).toBe('button')
})
