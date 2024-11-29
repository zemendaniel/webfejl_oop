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
