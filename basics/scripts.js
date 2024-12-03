class Player {
    constructor(nickname) {
        this.nickname = nickname;
        this.playedMatches = 0;
    }
    play() {
        this.playedMatches++;
    }
    getTierLevel() {
        if (this.playedMatches <= 3) {
            return "A";
        }
        else if (this.playedMatches > 3 && this.playedMatches <= 6) {
            return "B";
        }
        else {
            return "C";
        }
    }
}

// function Player(nickname) {
//     this.nickname = nickname;
//     this.playedMatches = 0;
// }
// Player.prototype.play = function () {
//     this.playedMatches++;
// };
// Player.prototype.getTierLevel = function () {
//     if (this.playedMatches <= 3) {
//         return "A";
//     }
//     else if (this.playedMatches > 3 && this.playedMatches <= 6) {
//         return "B";
//     }
//     else {
//         return "C";
//     }
// }

function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
}

function Student(name, school) {
    Person.call(this, name);
    this.school = school;
}

Object.setPrototypeOf(Student, Person);

const student = new Student("John", "MIT");
console.log(student);


const gomszab = new Player("gomszab");
gomszab.play();
console.log(gomszab);
console.log(gomszab.getTierLevel());


class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(name, sound) {
        super(name, sound);
    }
    fly() {
        console.log("I'm flying");
    }
}

class Mammal extends Animal {
    constructor(name, sound) {
        super(name, sound);
    }
    walk() {
        console.log("I'm walking");
    }
}

const parrot = new Bird("Parrot", "Chirp chirp");
const dog = new Mammal("Dog", "Woof woof");

console.log(parrot);
parrot.makeSound();
parrot.fly();

console.log(dog);
dog.makeSound();
dog.walk();