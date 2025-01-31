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
    /**
     * @param {string} name
     * */
    filterName(name) {
        const results = []
        for (const person of this.#array) {
            if (person.nev.toLowerCase().includes(name.toLowerCase())) {
                results.push(person)
            }
        }
        this.#updateCallback(results)
    }
    /**
     * @param {number} age
     * */
    filterAge(age) {
        if (!age) {
            return this.#updateCallback(this.#array)
        }
        const results = []
        for (const person of this.#array) {
            if (person.eletkor === Number(age)) {
                results.push(person)
            }
        }
        this.#updateCallback(results)
    }
}

class DataTable {
    /**
     * @param {DataManager} dataManager
     * */
    constructor(dataManager) {
        const table = document.createElement('table')
        document.body.appendChild(table)
        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        dataManager.setUpdateCallback(persons => {
            tbody.innerHTML = ''
            for (const person of persons) {
                const tr = document.createElement('tr')
                for (const key in person) {
                    const td = document.createElement('td')
                    td.innerHTML = person[key]
                    tr.appendChild(td)
                    tbody.appendChild(tr)
                }
            }
        })

    }
}

const dataManager = new DataManager([{nev: 'John', eletkor: 30}, {nev: 'Jane', eletkor: 25}, {nev: 'Bob', eletkor: 40}])
const dataTable = new DataTable(dataManager)
