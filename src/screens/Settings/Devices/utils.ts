export function getDate(n: number | undefined) {
  if (!n) return 'Unknown'
  return 'On ' + new Date(n).toLocaleString()
}
