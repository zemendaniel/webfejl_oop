/**
 * @typedef {{nev: string, eletkor: number}} Person
 *
 * @callback UpdateCallback
 * @param {Person[]} array An array of Person objects
 * @returns {void}
 * */

class DataManager {
    /**
     * @type {Person[]}
     * */
    #array
    /**
     * @type {UpdateCallback}
     * */
    #updateCallback

    /**
     * @param {Person[]} array
     * */
    constructor(array=[]) {
        this.#array = array
        this.#updateCallback = () => {}
    }
    /**
     * @param {UpdateCallback} callback
     * */
    setUpdateCallback(callback) {
        this.#updateCallback = callback
        this.#updateCallback(this.#array)
    }
    /**
     * @param {Person} person
     * */
    add(person) {
        this.#array.push(person)
        this.#updateCallback(this.#array)
    }
    filter(filterCallback) {
        const results = []
        for (const person of this.#array) {
            if (filterCallback(person)) {
                results.push(person)
            }
        }
        this.#updateCallback(results)
    }
    order(orderCallback) {
        const results = [...this.#array];
        results.sort(orderCallback);
        this.#updateCallback(results);
    }

}

class DataTable {
    /**
     * @param {DataManager} dataManager
     * */
    constructor(dataManager) {
        const table = document.createElement('table')
        document.body.appendChild(table)
        this.tbody = document.createElement('tbody')
        table.appendChild(this.tbody)
        this.thead = document.createElement('thead')
        table.appendChild(this.thead)

        const th = document.createElement('th')
        th.innerHTML = 'Név'
        th.addEventListener('click', () => {
            dataManager.order((a, b) => a.nev.localeCompare(b.nev));
        })
        this.thead.appendChild(th)
        const th2 = document.createElement('th')
        th2.innerHTML = 'Életkor'
        th2.addEventListener('click', () => {
            dataManager.order((a, b) => a.eletkor - b.eletkor);
        })
        this.thead.appendChild(th2)

        dataManager.setUpdateCallback(persons => {
            this.#renderTable(persons)
        })
    }
    #renderTable(persons) {
        this.tbody.innerHTML = ''
        for (const person of persons) {
            const tr = document.createElement('tr')
            for (const key in person) {
                const td = document.createElement('td')
                td.innerHTML = person[key]
                tr.appendChild(td)
                this.tbody.appendChild(tr)
            }
        }
    }
}

const dataManager = new DataManager([{nev: 'John', eletkor: 30}, {nev: 'Jane', eletkor: 25}, {nev: 'Bob', eletkor: 40}])
const dataTable = new DataTable(dataManager)

const input = document.createElement('input')
document.body.appendChild(input)
input.type = "file"
input.addEventListener("change", (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = () => {
        const fileContent = reader.result;
        const stringArray = fileContent.split("\n")
        stringArray.forEach(line => {
            const tmp = line.split(";")
            dataManager.add({nev: tmp[0], eletkor: Number(tmp[1])})
        })
    }
})
