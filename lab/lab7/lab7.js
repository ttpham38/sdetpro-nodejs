// **
//  * Given string: Hello ban, tui ten Teo, ban cung cung ten Teo luon ah
//  * --> output:
//  * Hey: 1
//  * ban: 2
//  * tui: 1
//  * ten: 2
//  * Teo: 2
//  * ...
//  */
// Please solve the excersize for countWords by using object, not a Map (do NOT use Object.entries() method to get a map)
// The program need to allow user to input a sentence, not hard code (optional)

const readline = require('readline');

// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to count words using an object
function countWords(sentence) {
    // Convert to lowercase and split into words
    // Remove punctuation and split by spaces
    const words = sentence
        .toLowerCase()
        .replace(/[,!?.;]/g, '') // Remove common punctuation
        .split(/\s+/);
    
    // Create object to store word counts
    const wordCount = {};
    
    // Count occurrences of each word
    for (const word of words) {
        // Skip empty strings
        if (word.trim() === '') continue;
        
        // If word exists, increment count; otherwise, initialize to 1
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }
    
    // Print results
    for (const word in wordCount) {
        console.log(`${word}: ${wordCount[word]}`);
    }
}

// Prompt user for input
rl.question('Please enter a sentence: ', (sentence) => {
    // Validate input
    if (!sentence.trim()) {
        console.log('No input provided!');
    } else {
        countWords(sentence);
    }
    
    // Close readline interface
    rl.close();
});