// shrinking_guest_list.ts

// Define the initial list of guests
const guests: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Print message about inviting only two people
console.log("Sorry, the dinner table will only accommodate two guests.");

// Remove guests from the list one at a time until only two names remain
while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, you're uninvited to the dinner.`);
}

// Print a message to each of the two remaining guests
for (const guest of guests) {
    console.log(`${guest}, you're still invited to the dinner.`);
}

// Remove the last two names from the list
guests.pop();
guests.pop();

// Print the empty list
console.log("Guest list after removing last two names:", guests);
