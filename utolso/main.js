class Person {
    #name
    #birth
    constructor(name, birth, mental) {
        this.#name = name;
        this.#birth = birth;
        this.mental = mental;
    }
    get name() {
        return this.#name
    }
    set name(value) {
        this.#name = value
    }
    get birth() {
        return this.#birth
    }
}

const person = new Person("Lakatos", "1990.01.01", "boldog");

class PersonView {
    constructor(person) {
        this.person = person;
        this.div = document.createElement('div')
        document.body.appendChild(this.div)
        this.div.innerText = `${this.person.name}-${this.person.birth}-${this.person.mental}`

        this.sp = document.createElement('span')
        this.div.appendChild(this.sp)
    }
    set span(value) {
        this.sp.innerText = value
    }
}

const personView = new PersonView(person);

const btn = document.createElement('button')
btn.innerText = "Névcsere"
btn.onclick = () => {
    person.name = "Ács"
}
document.body.appendChild(btn)
const personView2 = new PersonView(person);

const btn2 = document.createElement('button')
btn2.innerText = "Mentális csere"
btn2.onclick = () => {
    person.mental = "nem boldog"
    console.log(person)
}
document.body.appendChild(btn2)

const btn3 = document.createElement('button')
btn3.innerText = "Spanolás"
btn3.onclick = () => {
    personView2.span = "aaaa"
}
document.body.appendChild(btn3)

class ButtonField {
    #cssClass
    #buttons = []
    #div
    constructor(cssClass, buttonLabels, megoldas) {
        this.#cssClass = cssClass
        this.#div = document.createElement('div')
        this.#div.classList.add(cssClass)
        document.body.appendChild(this.#div)
        buttonLabels.forEach(label => {
            const button = document.createElement('button')
            button.innerText = label
            button.onclick = () => {
                megoldas.add(label)
            }
            this.#buttons.push(button)
            this.#div.appendChild(button)
        })
    }
}

class Megoldas {
    #solutions = []
    #callback
    constructor() {
        this.#solutions = []
    }
    add(solution) {
        this.#solutions.push(solution)
        if (this.#callback) {
            this.#callback(solution)
        }
    }
    setCallback(callback) {
        this.#callback = callback
    }
}

const megoldas = new Megoldas()
const buttonField = new ButtonField("button-container", ["Gomb1", "Gomb2", "Gomb3"], megoldas)

const divField = new DivField(megoldas)

class DivField {
    #div
    constructor(megoldas) {
        this.#div = document.createElement('div')
        document.body.appendChild(this.#div)
        megoldas.setCallback((value) => {
            const newDiv = document.createElement('div')
            newDiv.innerText = value
            this.#div.appendChild(newDiv)
        })
    }
}
