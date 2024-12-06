
class Factory {
 // TODO 1, 2, 3, 4, 9, 10
    constructor() {
        this.companionList = [];
    }
    addCompanion(companion) {
        this.companionList.push(companion);
        createRow(companion);
        const selector = document.getElementById("companionlist");
        const option = document.createElement("option");
        option.value = companion.id;
        option.innerHTML = companion.lastname + " " + companion.firstname;
        selector.appendChild(option);
    }
    newId(){
        return this.companionList.length
    }
    getCompanion(id){
        return this.companionList[id]
    }
}

class Companion {
 // TODO 5
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