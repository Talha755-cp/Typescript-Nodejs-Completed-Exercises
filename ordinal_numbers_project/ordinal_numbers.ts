// ordinal_numbers.ts

// Store the numbers 1 through 9 in an array
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (const num of numbers) {
    // Use an if-else chain inside the loop to print the proper ordinal ending for each number
    let ordinalEnding: string;
    if (num === 1) {
        ordinalEnding = "st";
    } else if (num === 2) {
        ordinalEnding = "nd";
    } else if (num === 3) {
        ordinalEnding = "rd";
    } else {
        ordinalEnding = "th";
    }
    // Print the result on a separate line
    console.log(`${num}${ordinalEnding}`);
}
