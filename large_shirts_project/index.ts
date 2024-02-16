// index.ts

// Define a function makeShirt that accepts two optional parameters: size and message
function makeShirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Creating a ${size} shirt with the message: ${message}`);
}

// Create a large shirt with the default message
makeShirt();

// Create a medium shirt with the default message
makeShirt("medium");

// Create a shirt of any size with a different message
makeShirt("small", "Hello, World!");
