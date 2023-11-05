export const calculateGCD = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }

  return Math.abs(a)
}

export const isEvenNumber = (a) => {
  if (a % 2 === 0) {
    return true
  }
  return false
}
