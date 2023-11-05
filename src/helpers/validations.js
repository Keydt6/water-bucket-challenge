export const validateInput = (elements, control) => {
  const input = elements.namedItem(control)
  const isInput = input instanceof HTMLInputElement
  if (!isInput || control === null) return null

  return input
}

export const isEmpty = (value) => {
  if (value === null || value === undefined || value === '') {
    return true
  }

  if (Array.isArray(value) && value.length === 0) {
    return true
  }

  return false
}

export const integerNoNegativeValidator = (value) => {
  if (isEmpty(value)) {
    return true
  }

  if (Array.isArray(value)) {
    return value.every((val) => /^[0-9]+$/.test(String(val)))
  }

  return /^[0-9]+$/.test(String(value)) || false
}
