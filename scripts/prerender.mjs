// scripts/prerender.mjs
// Runs after `vite build`. Starts a local static server for dist/, visits
// every route in a real headless browser, and saves each page's fully
// rendered HTML to the matching path, so GitHub Pages can serve real,
// complete pages instead of one empty shell for every route.

import puppeteer from 'puppeteer'
import { createServer } from 'http'
import handler from 'serve-handler'
import { mkdir, writeFile, readFile } from 'fs/promises'
import path from 'path'

const routes = [
  '/',
  '/destinations',
  '/experiences',
  '/sample-itineraries',
  '/about',
  '/faq',
  '/plan-my-trip',
  '/contact',
]

const base = '/din-safaris'
const port = 4174
const distDir = path.resolve('dist')

async function main() {
  // 1. Serve dist/ locally, understanding the "/din-safaris" prefix the way
  //    GitHub Pages will, and falling back to index.html for any page route
  //    that doesn't have its own pre-rendered file yet.
  const server = createServer((req, res) => {
    let url = req.url
    if (url === base || url === `${base}/`) {
      url = '/'
    } else if (url.startsWith(`${base}/`)) {
      url = url.slice(base.length)
    }
    req.url = url
    return handler(req, res, {
      public: distDir,
      rewrites: [{ source: '**', destination: '/index.html' }],
    })
  })
  await new Promise((resolve) => server.listen(port, '127.0.0.1', resolve))
  console.log(`Local server running at http://localhost:${port}`)

  // 2. Launch a real, invisible browser.
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  for (const route of routes) {
    const url = `http://127.0.0.1:${port}${base}${route}`
    console.log(`Rendering ${route} ...`)

    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
    const html = await page.content()

    // 3. Save it to the matching path in dist/, e.g. /about -> dist/about/index.html
    const outDir = route === '/' ? distDir : path.join(distDir, route)
    await mkdir(outDir, { recursive: true })
    await writeFile(path.join(outDir, 'index.html'), html)
  }

  await browser.close()
  server.close()
  console.log('Pre-rendering complete.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})