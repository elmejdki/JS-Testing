export default (function() {
  const add = (...args) => {
    return args.reduce(function (accumulator, current) {
      return accumulator + current;
    })
  }

  const subtract = (...args) => {
    return args.reduce(function (accumulator, current) {
      return accumulator - current;
    })
  }

  const multiply = (...args) => {
    return args.reduce(function (accumulator, current) {
      return accumulator * current;
    })
  }

  const divide = (...args) => {
    return args.reduce(function (accumulator, current) {
      return accumulator / current;
    })
  }

  return {
    add,
    subtract,
    multiply,
    divide
  }
})();
