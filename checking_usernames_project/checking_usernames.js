// checking_usernames.ts
// Make a list of current usernames
var current_users = ["john", "mary", "jane", "alice", "bob"];
// Make a list of new usernames
var new_users = ["jOhn", "anne", "peter", "JANE", "mike"];
var _loop_1 = function (new_user) {
    // Check if new username exists in current_users (case insensitive)
    if (current_users.some(function (user) { return user.toLowerCase() === new_user.toLowerCase(); })) {
        console.log("Username '".concat(new_user, "' is not available. Please enter a new username."));
    }
    else {
        console.log("Username '".concat(new_user, "' is available."));
    }
};
// Loop through new_users list
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
