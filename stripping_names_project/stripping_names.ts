// stripping_names.ts

// Store the person's name with whitespace characters
const nameWithWhitespace: string = "\t\n  John Doe   \t\n";

// Print the name with whitespace
console.log("Name with whitespace:", nameWithWhitespace);

// Strip the whitespace from the name
const strippedName: string = nameWithWhitespace.trim();

// Print the stripped name
console.log("Stripped name:", strippedName);
