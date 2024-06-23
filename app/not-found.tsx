import Link from 'next/link'

export const runtime = 'edge'

export default function NotFoundPage() {
  return (
    <div className="h-screen">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/shopped">Return Home</Link>
    </div>
  )
}
