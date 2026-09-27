// src/components/PageHeading.tsx
// The title band at the top of every inner page. Holds the page's single <h1>.
// Taller than before, with an adjustable focus point so tall subjects
// (like an elephant) aren't cropped awkwardly.

import heroImg from '../assets/hero.jpg'

type PageHeadingProps = {
  title: string
  intro: string
  image?: string
  imagePosition?: string
}

function PageHeading({ title, intro, image = heroImg, imagePosition = 'center' }: PageHeadingProps) {
  return (
    <div className="relative min-h-[20rem] overflow-hidden bg-forest text-cream md:min-h-[26rem]">
      <img src={image} alt="" aria-hidden="true" style={{ objectPosition: imagePosition }} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/75 via-forest/35 to-forest/10" />
      <div className="relative flex h-full min-h-[20rem] items-end px-6 pb-10 md:min-h-[26rem] md:pb-14">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="font-display text-4xl font-bold md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-lg opacity-90">{intro}</p>
        </div>
      </div>
    </div>
  )
}

export default PageHeading