// Copying an array using spread
const colors = ["red", "blue", "green"];
const copyColors =[...colors];
copyColors[0] ="yellow";
console.log(colors)
console.log(copyColors);

//using spead to add an item to an array
const pets = ["dog","cat"];
const morePets = [...pets, "rabbit"];
console.log(morePets);
console.log(pets);

//using spread to merge two arrays
const fruits = ["apple", "banana"]
const vegetables = ["carrot", "broccoli"]
const food =[...fruits, ...vegetables];
console.log(food);



//🔹 Merging Arrays of Objects

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 }
];

const morePeople = [
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 }
];

const allPeople = [...people, ...morePeople];

console.log(allPeople.name);


//update object and Array items using spread
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "1984", author: "George Orwell" }
]

const updatedBooks = [...books];
updatedBooks[1] = {...updatedBooks[1], author: "Orwell"};
console.log(updatedBooks);

//using Map
const products = [
    {name: "Shirt", price:20 },
    {name: "Shoes", price:50 }   
]
const newPrice = products.map((product) => (product.price)+ product.price * 0.1)
console.log(newPrice);

//using Filter
const users = [
    { name: "Alice", isActive: true },
    { name: "Bob", isActive: false },
    { name: "Charlie", isActive: true }
];

const activeUsers = users.filter(user => user.isActive === true);

console.log(activeUsers);

//destructuring

const product = {
    name: "Laptop",
    price: 1000,
    brand: "Dell"
};

const {name, price} = product;
console.log(name, price);
