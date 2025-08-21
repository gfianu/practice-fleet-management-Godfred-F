/*
Instructions
Clothing
Define a Clothing class with properties name, color, material, and isDirty.
isDirty should always be false at instantiation of an object.
Add a describe() method that prints a statement using the values stored in the object's other properties. The statement should read differently depending on whether the clothing item is dirty or not.
Add a wear() method outside the constructor that changes the value of isDirty and prints a notification.
Add a launder() method outside the constructor that changes the value of isDirty and prints a notification.
Instantiate at least 3 different kinds of clothing with unique properties.
Use the describe() method to print descriptions of each clothing item.
Use the wear() method on two of the clothing items.
Use the launder() method on one of the dirty clothing items and describe() it again.
*/
// Clothing Class
class Clothing{
    constructor(name, color, material){
        this.name = name;
        this.color = color;
        this.material = material;
        this.isDirty = false;
    }
    // creating methods in Clothing class
    describe() {
        if (this.isDirty){
            console.log(`This ${this.color} ${this.material} ${this.name} is dirty!!! WASH NOW!`);
        } else {
            console.log(`This ${this.color} ${this.material} ${this.name} is clean!!! WEAR NOW!!`);
        } 
        // Alternative way to write code using a ternary operator:
        // console.log(`The ${this.name} is ${this.color} and made of ${this.material}. 
        // It is ${this.isDirty ? "dirty" : "clean"}.`);
    }

    wear() {
        this.isDirty = true;
        console.log(`This ${this.name} was worn and is now dirty.\u2639`);
    }
    launder() {
        this.isDirty = false;
        console.log(`This ${this.name} was washed and now its clean. BRAVO!`);
    }
}

// Instantiating three different kinds of clothing 
let tShirt = new Clothing ("T-Shirt", "Red", "Cotton");
let jeans = new Clothing ("Apple-Bottomed Jeans", "Black", "Denim");
let boots = new Clothing ("Boots with the fur", "Grey", "Leather");
let jacket = new Clothing ("Fall Jacket", "Tan", "Wool");

/* Using the describe() method to print descriptions of each clothing item.
Using the wear() method on two of the clothing items.
Using the launder() method on one of the dirty clothing items and describe() it again.
*/
tShirt.describe();
jeans.describe();
boots.describe();
jeans.wear();
tShirt.wear();
tShirt.describe();
tShirt.launder();
tShirt.describe();
