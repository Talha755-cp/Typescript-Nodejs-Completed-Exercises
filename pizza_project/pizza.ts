// pizza.ts

// Define an array with three kinds of favorite pizza
const pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// Use a for loop to print the name of each pizza
console.log("Printing pizza names:");
for (let pizza of pizzas) {
    console.log(pizza);
}

// Modify the for loop to print a sentence using the name of the pizza
console.log("\nPrinting pizza sentences:");
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Add a line at the end of the program stating how much you like pizza
console.log("\nI really love pizza!");
