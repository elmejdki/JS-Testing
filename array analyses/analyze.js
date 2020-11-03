export default function (arr) {
  const average = () => {
    let sum = 0;
    arr.forEach(element => {
      sum += element;
    });

    return sum / arr.length;
  };

  const min = () => Math.min(...arr);

  const max = () => Math.max(...arr);

  const length = () => arr.length;

  return {
    average: average(),
    min: min(),
    max: max(),
    length: length(),
  };
}
