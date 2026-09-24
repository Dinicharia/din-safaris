// src/data/seo.ts
// The title and description search engines show for each page.
// Draft wording: please review. Nothing here claims prices, awards or partnerships.
// Keep titles under about 60 characters and descriptions under about 160.

export const siteName = 'Din Safaris'

export type PageSeo = {
  title: string
  description: string
}

export const pageSeo: Record<string, PageSeo> = {
  '/': {
    title: 'Kenya safari and trip planning',
    description: 'Din Safaris plans and arranges Kenya trips: safaris, airport transfers, stays and charter flights. Tell us your ideas and get a personalised quote.',
  },
  '/destinations': {
    title: 'Kenya safari destinations',
    description: 'Explore Kenya destinations including the Maasai Mara, Amboseli, Lake Nakuru, Samburu, Nairobi and the coast, and tell us where you would like to go.',
  },
  '/experiences': {
    title: 'Kenya safari experiences',
    description: 'From wildlife and family safaris to beach and safari trips and private holidays, see the kinds of Kenya trip Din Safaris can arrange for you.',
  },
  '/sample-itineraries': {
    title: 'Sample Kenya safari itineraries',
    description: 'See sample Kenya safari itineraries from Din Safaris, then request a personalised quote for a trip planned around you.',
  },
  '/about': {
    title: 'About us',
    description: 'Din Safaris is a Kenya-based travel business that plans and arranges trips around what you want to see and do.',
  },
  '/faq': {
    title: 'Kenya trip planning FAQ',
    description: 'Answers to common questions about planning a Kenya trip with Din Safaris: transfers, families, custom itineraries and payment terms.',
  },
  '/plan-my-trip': {
    title: 'Plan my Kenya trip',
    description: 'Tell Din Safaris about the Kenya trip you have in mind and get a ready-made message to send us for a personalised quote.',
  },
  '/contact': {
    title: 'Contact us',
    description: 'Contact Din Safaris on WhatsApp or by email to ask questions or start planning your Kenya trip.',
  },
}

export const notFoundSeo: PageSeo = {
  title: 'Page not found',
  description: 'The page you were looking for could not be found.',
}