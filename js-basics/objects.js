const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function() {
        console.log(`${this.name[0]} ${this.name[1]}`);
    }
}


const person1 = {
    name: "Chris",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
};
  
const person2 = {
    name: "Deepti",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
};

  



function Person(name) {
    this.name = name;

    this.introduceSelf = function() {
        console.log(`Hi I'm ${this.name}`);
    }
}

const salva = new Person("Salva");
const frankies = new Person("Frankies")

frankies.name = "John"

frankies.introduceSelf();


class NewPerson {
    constructor (name, age) {

        if (typeof age != 'number') {
            throw new Error("Age must be a number");
        }

        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

const np1 = new NewPerson("alice", "tjh");

console.log(typeof np1.age);

np1.greet();
