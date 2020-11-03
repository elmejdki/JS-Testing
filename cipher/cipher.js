export default function cipher(string, shift) {
  let result = '';
  const strArr = string.split('');

  const counter = shift % 25;

  strArr.forEach(char => {
    const code = char.charCodeAt(0);

    if (char === ' ') {
      result += char;
    } else if (counter > 0 && (code === 122 || code === 90)) {
      result += String.fromCharCode(code - 26 + counter);
    } else {
      result += String.fromCharCode(code + counter);
    }
  });

  return result;
}
