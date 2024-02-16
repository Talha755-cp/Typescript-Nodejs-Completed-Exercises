// Define an array of usernames
let users: string[] = ["Alice", "Bob", "Charlie"];

// Check if the list of users is not empty
if (users.length === 0) {
    // If the list is empty, print the message
    console.log("We need to find some users!");
} else {
    // If the list is not empty, remove all usernames
    users = [];
}

// Print the message based on the list of users
if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    console.log("Usernames removed successfully.");
}
