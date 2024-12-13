const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

class Person {
    constructor(data) {
        this.firstname1 = data.firstname1;
        this.firstname2 = data.firstname2 || '';
        this.lastname = data.lastname;
    }
    static init() {
        return array.map(item => new Person(item));
    }
    render(tbody) {
        const row = document.createElement('tr');
        createCell(row, this.lastname);
        createCell(row, this.firstname1, this.firstname2 ? 1 : 2);
        this.firstname2 ? createCell(row, this.firstname2) : '';
        tbody.appendChild(row);
    }
}

function createCell(row, text, colspan=1, tag='td') {
    const cell = document.createElement(tag);
    cell.innerHTML = text;
    cell.colSpan = colspan;
    row.appendChild(cell);
    return cell;
}

class FormController {
    #form
    #tbody
    constructor(form, tbody) {
        this.#form = form;
        this.#tbody = tbody;
        this.#form.addEventListener('submit', (e) => this.submit(e));
    }
    submit(e) {
        e.preventDefault();
        const obj = {
            lastname: this.lastname,
            firstname1: this.firstname1,
            firstname2: this.firstname2
        }
        const person = new Person(obj);
        person.render(this.#tbody);
        this.#form.reset();
    }
    #getInputs(id) {
        return this.#form.querySelector('#' + id);
    }
    get lastname() {
        return this.#getInputs("lastname").value;
    }
    get firstname1() {
        return this.#getInputs("firstname1").value;
    }
    get firstname2() {
        return this.#getInputs("firstname2").value;
    }
}

function init() {
    const tbody = document.getElementById("tbodyId");
    const form = document.getElementById('form');
    const people = Person.init();
    const controller = new FormController(form, tbody);

    people.map(item => item.render(tbody));


}

init();



