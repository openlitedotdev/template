import { render } from '@testing-library/react'
import type { NavItem } from 'types/navbar'
import { DashboardNav } from './dashboard-nav'

const items: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/',
    icon: 'dashboard',
    label: 'Dashboard',
  },
]

it('should return title menu', () => {
  const dom = render(<DashboardNav items={items} />)

  const span = dom.getByText('Dashboard') as HTMLSpanElement

  expect(span.textContent).toBe('Dashboard')
  expect(span.textContent?.length).toBeGreaterThan(0)
})

it('should return tag name', () => {
  const dom = render(<DashboardNav items={items} />)

  const span = dom.getByText('Dashboard') as HTMLSpanElement

  expect(span.tagName.toLowerCase()).toBe('span')
})

it('should return not found', () => {
  const dom = render(<DashboardNav items={items} />)

  try {
    dom.getByText('xxxx') as HTMLSpanElement
  }
  catch (error) {
    // Handle the error here, for example:
    console.error('Element with text \'xxxx\' not found')
    // Return here to prevent the test from failing
    return
  }

  // NOT execute this line
  expect(true).toBe(false)
})
