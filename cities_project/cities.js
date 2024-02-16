// cities.ts
// Define the describe_city function
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the describe_city function for three different cities
describe_city("Karachi");
describe_city("London", "UK");
describe_city("New York", "USA");
