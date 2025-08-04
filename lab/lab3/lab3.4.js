// Merge 2 SORTED integer array into one SORTED array
// Array 01: [1, 12, 16, 28, 34]
// Array 02: [1, 13, 16, 27, 99]

// Expected output: [1, 1, 12, 13, 16, 16, 27, 28, 34, 99]

let array01 = [1, 12, 16, 28, 34];
let array02 = [1, 13, 16, 27, 99];

// Merge 2 arrays
let mergedArray = array01.concat(array02);

// Sort the merged array
for (let i = 0; i < mergedArray.length - 1; i++) {
  for (let j = 0; j < mergedArray.length - i - 1; j++) {
    if (mergedArray[j] > mergedArray[j + 1]) {
      // Swap the positions of two elements if they are in the wrong order
      let temp = mergedArray[j];
      mergedArray[j] = mergedArray[j + 1];
      mergedArray[j + 1] = temp;
    }
  }
}

// Print the result
console.log("Sorted Array:", mergedArray);