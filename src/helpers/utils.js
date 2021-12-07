export function tryParseInt(text) {
  const parsed = parseInt(text)
  if (isNaN(parsed)) {
    return ''
  }
  return parsed
}
