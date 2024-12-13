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
    render() {
        const tbody = document.getElementById('tbodyId');
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

const people = Person.init();
people.map(item => item.render());

