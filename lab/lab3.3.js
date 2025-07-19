// Sort an integer array from min to max
// Input: [12, 34, 1, 16, 28]
// Expected output: [1, 12, 16, 28, 34]

let input = [12, 34, 1, 16, 28];

for (let i = 0; i < input.length - 1; i++) {
  for (let j = 0; j < input.length - 1 - i; j++) {
    if (input[j] > input[j + 1]) {
      let temp = input[j];
      input[j] = input[j + 1];
      input[j + 1] = temp;
    }
  }
}
console.log(input); 

