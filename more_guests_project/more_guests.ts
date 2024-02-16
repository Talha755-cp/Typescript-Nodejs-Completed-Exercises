// more_guests.ts

// Initial list of guests
let guests: string[] = ["Alice", "Bob", "Charlie"];

// Print current list of guests
console.log("Current list of guests:");
guests.forEach(guest => console.log(guest));

// Inform about the bigger dinner table
console.log("We found a bigger dinner table!");

// Add a new guest to the beginning of the array
guests.unshift("David");

// Add a new guest to the middle of the array
guests.splice(Math.floor(guests.length / 2), 0, "Eve");

// Add a new guest to the end of the array using append()
guests.push("Frank");

// Print new set of invitation messages
console.log("\nNew set of invitation messages:");
guests.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner.`));
