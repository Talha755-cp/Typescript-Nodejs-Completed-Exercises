// objects.ts

// Define a TypeScript interface to represent an item
interface Item {
    name: string;
    price: number;
    quantity: number;
}

// Create objects containing items
const item1: Item = {
    name: "Laptop",
    price: 999.99,
    quantity: 1
};

const item2: Item = {
    name: "Phone",
    price: 699.99,
    quantity: 2
};

// Print the objects
console.log("Item 1:", item1);
console.log("Item 2:", item2);
