// Define the Animal class
class Animal {
    constructor(species) {
        this._species = species; // Private variable for species
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to log the sound the animal makes
    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

// Define the Cat class that extends Animal
class Cat extends Animal {
    purr() {
        console.log("purr");
    }
}

// Define the Dog class that extends Animal
class Dog extends Animal {
    bark() {
        console.log("woof");
    }
}

