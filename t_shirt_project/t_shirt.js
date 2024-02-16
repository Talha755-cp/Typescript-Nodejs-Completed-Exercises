// t_shirt.ts
// Define a function called make_shirt() that accepts a size and message
function make_shirt(size, message) {
    // Print a sentence summarizing the size of the shirt and the message printed on it
    console.log("The shirt size is ".concat(size, " and the message printed on it is: \"").concat(message, "\""));
}
// Call the make_shirt() function with a size and message
make_shirt('XL', 'I love TypeScript!');
