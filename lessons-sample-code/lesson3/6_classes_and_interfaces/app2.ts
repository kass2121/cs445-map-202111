/**
 * app2.ts
 */
class Meditator {
        name: string;
        constructor(name: string) { this.name = name }
        meditate(duration: number = 20) {
            console.log(this.name + " is meditating for " + duration + " mins!");
        }
}
class Sidha extends Meditator {
    constructor(name: string) { super(name) }
    meditate(duration: number = 40) {
        console.log('Meditation started')
        super.meditate(duration);
    }
}
// let john = new Sidha("John");
let john = new Sidha("John");
john.meditate();  // Meditation started John is meditating for 40 mins!
let anna = new Meditator("Anna");
anna.meditate();

let bob: Meditator = new Sidha("Bob");
bob.meditate(); // Meditation started Bob is meditating for 40 mins!

bob = new Meditator("Bob2");
bob.meditate(); // Bob2 is meditating for 20 mins!

let i: any;
i = 1;
i = "hello";
i = [1,2,3];
// For union type, (string | number)
// let j: (string | number);
// j = "hello";
// j = 1;
// j = false; // this gives compile error because false is boolean (not string or number)
    