// src/components/MobileCta.tsx
// A slim "Plan My Trip" bar fixed to the bottom of the screen on phones only.

import Button from './Button'

function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sand bg-cream/95 p-3 backdrop-blur lg:hidden">
      <Button href="/plan-my-trip" className="block w-full text-center">Plan My Trip</Button>
    </div>
  )
}

export default MobileCta