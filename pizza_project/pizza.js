// pizza.ts
// Define an array with three kinds of favorite pizza
var pizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
// Use a for loop to print the name of each pizza
console.log("Printing pizza names:");
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var pizza = pizzas_1[_i];
    console.log(pizza);
}
// Modify the for loop to print a sentence using the name of the pizza
console.log("\nPrinting pizza sentences:");
for (var _a = 0, pizzas_2 = pizzas; _a < pizzas_2.length; _a++) {
    var pizza = pizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
// Add a line at the end of the program stating how much you like pizza
console.log("\nI really love pizza!");
