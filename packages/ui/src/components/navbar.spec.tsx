import { render } from '@testing-library/react'
import Navbar from './navbar'

it('should render component navbar only example', () => {
  const DOM = render(<Navbar background="#FFF" />)

  expect(DOM.getByText(/Login/).tagName).toBe('A')
})
