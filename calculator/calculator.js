const add = (...args) => (
  args.reduce((accumulator, current) => accumulator + current)
);

const subtract = (...args) => (
  args.reduce((accumulator, current) => accumulator - current)
);

const multiply = (...args) => (
  args.reduce((accumulator, current) => accumulator * current)
);

const divide = (...args) => (
  args.reduce((accumulator, current) => accumulator / current)
);

export {
  add,
  subtract,
  multiply,
  divide,
};
