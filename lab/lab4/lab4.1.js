let array = [1, 1, 5, 4, 5];

let currentMinValue = array[0];
let currentMaxValue = array[0];

for (let index = 1; index < array.length; index++) {
  const currentValue = array[index];
  if (currentValue < currentMinValue) {
    currentMinValue = currentValue;
  }
  if (currentValue > currentMaxValue) {
    currentMaxValue = currentValue;
  }
}

console.log(`Min value: ${currentMinValue}`);
console.log(`Max value: ${currentMaxValue}`);