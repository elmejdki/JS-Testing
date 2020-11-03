export default function (arr) {
  const average = () => {
    let sum = 0;
    arr.forEach(element => {
      sum = sum + element;
    });

    return sum / arr.length
  }

  const min = () => {
    return Math.min(...arr)
  }

  const max = () => {
    return Math.max(...arr)
  }

  const length = () => {
    return arr.length
  }

  return {
    average: average(),
    min: min(),
    max: max(),
    length: length()
  };
}
