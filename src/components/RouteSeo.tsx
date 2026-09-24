// src/components/RouteSeo.tsx
// Sets the browser tab title and the page description for whichever page is showing.
// It draws nothing on screen.

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { notFoundSeo, pageSeo, siteName } from '../data/seo'

// Finds a meta tag in <head>, creating it if it does not exist yet, and sets its content.
function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function RouteSeo() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Treat "/faq/" and "/faq" as the same page.
    const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
    const seo = pageSeo[path] ?? notFoundSeo
    const fullTitle = `${seo.title} | ${siteName}`

    document.title = fullTitle
    setMeta('name', 'description', seo.description)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', seo.description)
  }, [pathname])

  return null
}

export default RouteSeo