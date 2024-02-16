// sandwiches.ts
// Define a function that accepts an array of sandwich items
function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    console.log("Bread: White");
    console.log("Items:");
    items.forEach(function (item) {
        console.log("- " + item);
    });
    console.log("Enjoy your sandwich!\n");
}
// Call the function three times with different numbers of arguments
orderSandwich("Cheese", "Tomato", "Lettuce");
orderSandwich("Ham", "Cheese");
orderSandwich("Turkey", "Bacon", "Avocado", "Mayonnaise");
