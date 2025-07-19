// Finding maximum value/minimum value from an integer array
function sortArrayAscending(arr) {
  return arr.sort((a, b) => a - b);
}
// Input data
const input = [12, 34, 1, 16, 28];

// Call the function and print the result
const output = sortArrayAscending(input);
console.log(`Expected output: ${output}`);
