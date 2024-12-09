
class Factory {
    constructor() {
        this.companionList = [];
        this.areaList = [];
    }
    addArea(area) {
        if (!area || this.areaList.includes(area)) {
            return;
        }
        this.areaList.push(area);
        const selector = document.getElementById('carea');
        const option = document.createElement('option');
        option.value = area;
        option.innerHTML = area;
        selector.appendChild(option);
    }
    addCompanion(companion) {
        this.companionList.push(companion);
        createRow(companion);
        appendToSelector(companion.id, companion.fullName);
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
    addProduct(product, addOnLoad=false) {
        this.products.push(product);
        if (!addOnLoad) {
            refreshProductList(this);
        }
    }
    get fullName() {
        return this.lastname + " " + this.firstname;
    }
}