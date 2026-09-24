// src/pages/NotFound.tsx
// Shown when someone visits an address that doesn't exist.

import Button from '../components/Button'

function NotFound() {
  return (
    <main className="px-6 py-24 text-center">
      <h1 className="font-display text-4xl font-bold text-forest">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-earth">Sorry, we couldn&apos;t find that page. It may have moved, or the address may be mistyped.</p>
      <div className="mt-8">
        <Button href="/">Back to home</Button>
      </div>
    </main>
  )
}

export default NotFound