// greetings.ts
// Define an array of names
var names = ["John", "Jane", "Doe", "Alice"];
// Print a personalized message to each person in the array
names.forEach(function (name) {
    console.log("Hello ".concat(name, ", welcome to the greetings program!"));
});
