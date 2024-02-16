// t_shirt.ts

// Define a function called make_shirt() that accepts a size and message
function make_shirt(size: string, message: string): void {
    // Print a sentence summarizing the size of the shirt and the message printed on it
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}"`);
}

// Call the make_shirt() function with a size and message
make_shirt('XL', 'I love TypeScript!');
