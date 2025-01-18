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
            set: (value) => this.#items[i] = value, enumerable: true, configurable: true});
        this.#count++;
    }
    Clear() {
        this.#count = 0;
        for (const i in this.#items) {
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