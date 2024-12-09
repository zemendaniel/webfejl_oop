/**
 * @type {{
 *   firstName: string;
 *   lastName: string;
 *   products: string[];
 *   area: string;
 * }[]}
 */
const companionList = [
    {
        firstName: 'Géza',
        lastName: 'Kiss',
        area: 'plastic',
        products: ['kisauto', 'barbibaba']
    },
    {
        firstName: 'Ferenc',
        lastName: 'Tóth',
        area: 'paper',
        products: ['könyv']
    },
    {
        firstName: 'Gábor',
        lastName: 'Nagy',
        area: 'plastic',
        products: ['zokni']
    },
]
const factory = new Factory();
factory.addArea("plastic");
factory.addArea("paper");

document.getElementById('companion').addEventListener('submit',function(e){
    e.preventDefault();
    const form =  e.currentTarget
    addCompanion(form);
    form.reset();
});

document.getElementById('product').addEventListener('submit',function(e){
    e.preventDefault();
    const form = e.currentTarget;
    addProductForm(form);
});

document.getElementById('area').addEventListener('submit',function(e){
    e.preventDefault();
    const form = e.currentTarget;
    factory.addArea(form.areaName.value);
    form.reset();
});

/**
 * table render
 */
function initTable(){

    for (const companion of companionList) {
        const newCompanion = new Companion(factory.newId(), companion.firstName, companion.lastName, companion.area);
        for (const product of companion.products) {
            newCompanion.addProduct(product, true);
        }
        factory.addCompanion(newCompanion);
    }
}


initTable()

/**
 * 
 * eventlistener callback for the button click of companion
 * 
 * @param {EventTarget} e 
 */
function checkEventListener(e){
    const row = e.currentTarget.parentElement.parentElement;
    const companionId = row.id;
    const companion = factory.getCompanion(companionId);
    refreshProductList(companion);
}
