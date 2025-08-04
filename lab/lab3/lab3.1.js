// Finding maximum value/minimum value from an integer array
function countOddEven(arr) {
  let oddCount = 0;
  let evenCount = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  return { odd: oddCount, even: evenCount };
}
// Declare an integer array
let intArr = [1, 2, 3, 4, 5];
// Call the function and store the result
let result = countOddEven(intArr);
console.log(`Odd numbers: ${result.odd}`);
console.log(`Even numbers: ${result.even}`);



