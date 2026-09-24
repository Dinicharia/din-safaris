// src/pages/Home.tsx
// Temporary page to test the design system. Real home page comes in Phase 6.

import logo from '../assets/logo-mark.svg'

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6 text-center">
      <img src={logo} alt="Din Safaris logo" className="h-28 w-28" />
      <h1 className="font-display text-5xl font-bold text-forest">Din Safaris</h1>
      <p className="max-w-md text-earth">Website under construction.</p>
      <a href="#" className="rounded-full bg-gold px-6 py-3 font-medium text-ink hover:brightness-110">Plan My Trip</a>
    </main>
  )
}

export default Home