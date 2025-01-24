class ArrayList {
    #count
    #items
    #arrayTable
    // /**
    //  * @type {number}
    //  * */
    // get Count() {
    //     return this.#count;
    // }
    /**
     * @param {TableHTMLArray} arrayTable
     **/
    constructor(arrayTable=null) {
        this.#count = 0;
        this.#items = {};
        Object.defineProperty(this, "Count", {get: () => this.#count});
        this.#arrayTable = arrayTable;
    }
    Add(item) {
        this.#items[this.#count] = item;
        const i = this.Count;
        Object.defineProperty(this, i, {get: () => this.#items[i],
            set: (value) => this.#items[i] = value, enumerable: true, configurable: true});
        this.#count++;
        if (this.#arrayTable) {
            this.#arrayTable.addPersonRow(item);
        }
    }
    Clear() {
        this.#count = 0;
        for (const i in this) {
            delete this.#items[i];
            delete this[i];
        }
    }
    Contains(item) {
        for (const i in this.#items) {
            if (this.#items[i] === item) {
                return true;
            }
        }
        return false;
    }
}

const alma = {};
Object.defineProperty(alma, "nev", {value : "Cirmi", writable : true});
alma.nev = "asd";
console.log(alma);
console.log(alma.nev);

const arr = new ArrayList();
arr.Add("hello");
arr.Add("Cirmi");
arr[1] = "Kossuth Lajos";
console.log(arr[0]);
console.log(arr[1]);
console.log(arr.Count)
arr.Clear();
arr.Add({"nev" : "Cirmi"})

const arr2 = new ArrayList();
arr2.Add(0);
arr2.Add(1);
arr2.Add(2);
arr2.Add(3);
console.log(arr2.Contains(5));
console.log(arr2.Contains(2));


class TableHTMLArray extends HTMLElement {
    #tbody
    constructor() {
        super();

    }
    connectedCallback() {
        const table = document.createElement("table");
        this.#tbody = document.createElement("tbody");
        const thead = document.createElement("thead");
        table.appendChild(thead);
        table.appendChild(this.#tbody);
        this.appendChild(table);
    }
    /**
     *
     * @param {{nev: string, eletkor: number}} person An object containing the person's name and age
     */
    addPersonRow(person) {
        const row = document.createElement("tr");
        for (const key in person) {
            const cell = document.createElement("td");
            cell.innerHTML = person[key];
            row.appendChild(cell);
        }
        this.#tbody.appendChild(row);
    }
}

customElements.define("array-table", TableHTMLArray);
const arrayTable = new TableHTMLArray();
document.body.appendChild(arrayTable);

const arr3 = new ArrayList(arrayTable);

arrayTable.addPersonRow({nev: "Cirmi", eletkor: 30});
arrayTable.addPersonRow({nev: "Cirmi", eletkor: 30});
arrayTable.addPersonRow({nev: "Cirmi", eletkor: 30});

arr3.Add({nev: "Cicvarek", eletkor: 1});
arr3.Add({nev: "Cicvarek", eletkor: 1});
arr3.Add({nev: "Cicvarek", eletkor: 1});