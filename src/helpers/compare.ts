export function compare (a: object, b: object): number {
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1
  }
  // a must be equal to b
  return 0
}
