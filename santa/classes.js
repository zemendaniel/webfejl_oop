
class Factory {
    constructor() {
        this.companionList = [];
    }
    addCompanion(companion) {
        this.companionList.push(companion);
        createRow(companion);
        appendToSelector(companion.id, companion.lastname + " " + companion.firstname);
    }
    newId(){
        return this.companionList.length
    }
    getCompanion(id){
        return this.companionList[id]
    }
}

class Companion {
    constructor(id, firstname, lastname, area) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.area = area;
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
}