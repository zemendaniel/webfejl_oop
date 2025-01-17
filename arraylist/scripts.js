class ArrayList {
    #count
    #items
    /**
     * @type {number}
     * */
    get Count() {
        return this.#count;
    }
    constructor() {
        this.#count = 0;
        this.#items = {};
    }
    Add(item) {
        this.#items[this.#count] = item;
        const i = this.Count;
        Object.defineProperty(this, i, {get: () => this.#items[i],
            set: (value) => this.#items[i] = value});
        this.#count++;
    }
    Clear() {
        this.#count = 0;
        this.#items = {};
    }
}

const alma = {};
Object.defineProperty(alma, "nev", {value : "Cirmi", writable : true});
alma.nev = "asd";
// console.log(alma);
// console.log(alma.nev);

const arr = new ArrayList();
arr.Add("hello");
arr.Add("Cirmi");
arr[1] = "Kossuth Lajos";
console.log(arr[0]);
console.log(arr[1]);
// console.log(arr.Count)
// arr.Clear();
// arr.Add({"nev" : "Cirmi"})