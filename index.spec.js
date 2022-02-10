const curry = require('./index.js')

const multiply = (x, y) => x * y
const subtract = (x, y) => x - y

describe('curry', () => {
  it('Accepts curried args', () => {
    const sample = multiply(2, 3)
    const result = curry(multiply)(2, 3)

    expect(result).toEqual(sample)
  })

  it('Accepts uncurried args', () => {
    const sample = multiply(2, 3)
    const result = curry(multiply, 2, 3)

    expect(result).toEqual(sample)
  })

  it('Accepts both curried and uncurried args at the same time', () => {
    const sample = multiply(2, 3)
    const result = curry(multiply, 2)(3)

    expect(result).toEqual(sample)
  })

  it('Allows skipping intermediary args', () => {
    const sample = multiply(2, 3)
    const result = curry(multiply)()(2)()()()(3)

    expect(result).toEqual(sample)
  })

  it('Ignores excessive args', () => {
    const sample = multiply(2, 3)
    const result = curry(multiply)(2, 3, 4, 5)

    expect(result).toBe(sample)
  })

  it('Respects non-associative operations', () => {
    const sample = subtract(2, 3)
    const correctResult = curry(subtract)(2, 3)
    const incorrectResult = curry(subtract)(3, 2)

    expect(correctResult).toEqual(sample)
    expect(incorrectResult).not.toEqual(sample)
  })
})
