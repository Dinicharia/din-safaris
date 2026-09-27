// src/utils/publicUrl.ts
// Builds a correct path to a file in the public/ folder, accounting for
// GitHub Pages serving the site from a sub-folder (set up in Phase 14).

export function publicUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}