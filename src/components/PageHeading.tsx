// src/components/PageHeading.tsx
// The green title band at the top of every inner page. Holds the page's single <h1>.

type PageHeadingProps = {
  title: string
  intro: string
}

function PageHeading({ title, intro }: PageHeadingProps) {
  return (
    <div className="bg-forest px-6 py-12 text-cream md:py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg opacity-90">{intro}</p>
      </div>
    </div>
  )
}

export default PageHeading