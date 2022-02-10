const curry = (f, ...xs) => xs.length < f.length
  ? (...ys) => curry(f, ...xs.concat(ys))
  : f(...xs)

module.exports = curry
