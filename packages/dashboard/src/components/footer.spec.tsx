import { render } from '@testing-library/react'
import Footer from './footer'

it('the text should be greater 0', async () => {
  const dom = render(<Footer />)
  const elem = dom.getByText('Open Land')

  expect(elem.textContent?.length).toBeGreaterThan(0)
})

it('the text not should be less 0', async () => {
  const dom = render(<Footer />)
  const elem = dom.getByText('Open Land')

  expect(elem.textContent?.length).not.toBeLessThan(0)
})
