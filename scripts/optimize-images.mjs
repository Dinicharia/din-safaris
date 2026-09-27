// scripts/optimize-images.mjs
// One-time (or re-run whenever needed) image optimizer.
// Resizes each photo to a sensible maximum width and compresses it,
// overwriting the original file at the same path, same filename.

import sharp from 'sharp'
import { readdir, rename } from 'fs/promises'
import path from 'path'

// [folder, max width in pixels, JPEG quality]
// Wider photos (full-bleed hero/backgrounds) get more width; card photos need less.
const targets = [
  ['src/assets', 2200, 88],
  ['public/images', 2200, 88],
  ['public/images/destinations', 1400, 85],
  ['public/images/experiences', 1400, 85],
]

async function optimizeFolder(folder, maxWidth, quality) {
  let entries
  try {
    entries = await readdir(folder, { withFileTypes: true })
  } catch {
    return
  }

  for (const entry of entries) {
    if (!entry.isFile()) continue
    if (!/\.(jpe?g)$/i.test(entry.name)) continue

    const filePath = path.join(folder, entry.name)
    const tempPath = filePath + '.tmp'

    const before = (await sharp(filePath).metadata()).size ?? 0

    await sharp(filePath)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toFile(tempPath)

    await rename(tempPath, filePath)

    const afterStat = await sharp(filePath).metadata()
    console.log(`${filePath}: ${(before / 1024).toFixed(0)} KB -> ${((afterStat.size ?? 0) / 1024).toFixed(0)} KB`)
  }
}

for (const [folder, maxWidth, quality] of targets) {
  await optimizeFolder(folder, maxWidth, quality)
}

console.log('Done.')