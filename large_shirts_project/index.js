// index.ts
// Define a function makeShirt that accepts two optional parameters: size and message
function makeShirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the message: ").concat(message));
}
// Create a large shirt with the default message
makeShirt();
// Create a medium shirt with the default message
makeShirt("medium");
// Create a shirt of any size with a different message
makeShirt("small", "Hello, World!");
