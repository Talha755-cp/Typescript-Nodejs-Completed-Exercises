interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow arbitrary number of keyword arguments
}

function createCar(manufacturer: string, model: string, ...args: { [key: string]: any }): Car {
    return {
        manufacturer,
        model,
        ...args
    };
}

// Call the function with required information and additional name-value pairs
const myCar: Car = createCar("Toyota", "Camry", color: "red", feature: "sunroof");

// Print the object returned by the function
console.log(myCar);
