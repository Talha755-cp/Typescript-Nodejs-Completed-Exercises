// shrinking_guest_list.ts
// Define the initial list of guests
var guests = ["Alice", "Bob", "Charlie", "David", "Eve"];
// Print message about inviting only two people
console.log("Sorry, the dinner table will only accommodate two guests.");
// Remove guests from the list one at a time until only two names remain
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", you're uninvited to the dinner."));
}
// Print a message to each of the two remaining guests
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("".concat(guest, ", you're still invited to the dinner."));
}
// Remove the last two names from the list
guests.pop();
guests.pop();
// Print the empty list
console.log("Guest list after removing last two names:", guests);
