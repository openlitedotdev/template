import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/categories/new')({
  component: () => <div>Hello /categories/new!</div>,
})
