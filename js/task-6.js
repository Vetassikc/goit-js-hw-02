let input;
const numbers = [];
let total = 0;
while (input !== null) {
  input = prompt('Введите число');
  if (input > 0) {
    numbers.push(Number(input));
  }
}

for (const number of numbers) {
  total += number;
}
console.log(total);
