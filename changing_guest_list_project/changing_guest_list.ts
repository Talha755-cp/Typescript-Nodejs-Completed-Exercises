// changing_guest_list.ts

// Define an array to store the guest list
const guestList: string[] = ["Alice", "Bob", "Charlie", "David"];

// Print the original guest list
console.log("Original Guest List:");
guestList.forEach(guest => console.log(guest));

// Identify the guest who can't make it
const cantMakeIt: string = "Charlie";

// Print a message about the guest who can't make it
console.log(`\nUnfortunately, ${cantMakeIt} can't make it to the dinner.\n`);

// Modify the list, replacing the guest who can't make it with a new person
const newInvitee: string = "Eve";
const indexToRemove: number = guestList.indexOf(cantMakeIt);
if (indexToRemove !== -1) {
    guestList.splice(indexToRemove, 1, newInvitee);
}

// Print the updated guest list
console.log("Updated Guest List:");
guestList.forEach(guest => console.log(guest));

// Print invitation messages for each person in the list
console.log("\nInvitation Messages:");
guestList.forEach(guest => console.log(`Dear ${guest}, please join us for dinner!`));
