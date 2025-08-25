// src/utils/mask.js
export function maskId(id) {
  if (!id) return ''
  const len = id.length
  if (len <= 3) return id
  return id.slice(0, 3) + '*'.repeat(len - 3)
}
