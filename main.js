// #1. Write a function that parses through the below object and displays all of their favorite food dishes as shown:

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}

for (let i = 0; i < Object.keys(person3).length; i++) {
    console.log(Object.values(person3)[i])
}

// #2. Write an object prototype for a person that has a name and age, has a printInfo method, and also has a method
// that increments the persons age by 1 each time the method is called. Create two people using the 'new' keyword, and
// print both of their infos and increment one persons age by 3 years. Use an arrow function for both methods

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.printInfo = () =>  {
        console.log(`This person goes by the name of ${this.name} and is ${this.age} years old.`)
    }

    this.addAge = (num) => {
        console.log(`This person is ${age + num} years old.`)
    }
}

let personOne = new Person('Grace', 23)
console.log(personOne.printInfo())

let personTwo = new Person('Jake', 37)
console.log(personTwo.printInfo())
console.log(personTwo.addAge(3))

// #3. Create a promised based function that will check a string to determine if it's length is greater than 10. If the
// length is greater than 10, console.log "Big word". If the length of the string is less than 10, console.log "Small
// Number"

var string = '10'

function checkStringLength() {
    return new Promise(() => {
        if (string.length > 10) {
            console.log(`Big word`)
        } else {
            console.log(`Small Number`)
        }
        console.log(string.length)
    })
}

const promise = checkStringLength()