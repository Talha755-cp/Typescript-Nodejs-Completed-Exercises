// sandwiches.ts

// Define a function that accepts an array of sandwich items
function orderSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    console.log("Bread: White");
    console.log("Items:");
    items.forEach(item => {
        console.log("- " + item);
    });
    console.log("Enjoy your sandwich!\n");
}

// Call the function three times with different numbers of arguments
orderSandwich("Cheese", "Tomato", "Lettuce");
orderSandwich("Ham", "Cheese");
orderSandwich("Turkey", "Bacon", "Avocado", "Mayonnaise");
