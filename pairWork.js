class Clothing{
    constructor(name, color, material){
        this.name = name;
        this.color = color;
        this.material = material;
        this.isDirty = false;
    }

    describe() {
        if (this.isDirty){
            console.log(`This ${this.color} ${this.material} ${this.name} is dirty!!! WASH NOW!`);
        } else {
            console.log(`This ${this.color} ${this.material} ${this.name} is clean!!! WEAR NOW!!`);
        }       
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

let tShirt = new Clothing ("T-Shirt", "Red", "Cotton");
let jeans = new Clothing ("Apple-Bottomed Jeans", "Black", "Denim");
let boots = new Clothing ("Boots with the fur", "Grey", "Leather");
let jacket = new Clothing ("Fall Jacket", "Tan", "Wool");

tShirt.describe();
jeans.describe();
boots.describe();
jeans.wear();
tShirt.wear();
tShirt.describe();
tShirt.launder();
tShirt.describe();
