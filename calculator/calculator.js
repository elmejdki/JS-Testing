const calculator = {
  add: (...args) => (
    args.reduce((accumulator, current) => accumulator + current)
  ),

  subtract: (...args) => (
    args.reduce((accumulator, current) => accumulator - current)
  ),

  multiply: (...args) => (
    args.reduce((accumulator, current) => accumulator * current)
  ),

  divide: (...args) => (
    args.reduce((accumulator, current) => accumulator / current)
  ),
};

export default calculator;
