// checking_usernames.ts

// Make a list of current usernames
const current_users: string[] = ["john", "mary", "jane", "alice", "bob"];

// Make a list of new usernames
const new_users: string[] = ["jOhn", "anne", "peter", "JANE", "mike"];

// Loop through new_users list
for (const new_user of new_users) {
    // Check if new username exists in current_users (case insensitive)
    if (current_users.some(user => user.toLowerCase() === new_user.toLowerCase())) {
        console.log(`Username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`Username '${new_user}' is available.`);
    }
}
