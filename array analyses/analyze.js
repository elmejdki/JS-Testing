export default function (arr) {
  const obj = {
    average: () => {
      let sum = 0;
      arr.forEach(element => {
        sum = sum + element;
      });

      return sum / arr.length
    },
    min: () => {
      return Math.min(...arr)
    },
    max: () => {
      return Math.max(...arr)
    },
    length: () => {
      return arr.length
    }
  }

  return obj;
}
