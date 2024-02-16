// cities.ts

// Define the describe_city function
function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

// Call the describe_city function for three different cities
describe_city("Karachi");
describe_city("London", "UK");
describe_city("New York", "USA");
