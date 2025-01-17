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
        this.#count++;
    }
    Clear() {
        this.#count = 0;
        this.#items = {};
    }
    // get Items() {
    //     return this.#items;
    // }
}

// const arr = new ArrayList();
// arr.Add("hello");
// arr.Add("world");
// arr.Add("!");
// arr.Add("!");
// arr.Add("!");
// console.log(arr.Items);
// console.log(arr.Count)
// arr.Clear();
// console.log(arr.Items);
// console.log(arr.Count);