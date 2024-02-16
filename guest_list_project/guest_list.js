// guest_list.ts
// Define an array of guests
var guests = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie"];
// Loop through the array and print an invitation message for each guest
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. Please join us for a memorable evening."));
});
