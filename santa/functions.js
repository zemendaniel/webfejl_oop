/**
 * Create a row for the companions table;
 * 
 * @param {Companion} companion 
 */
function createRow(companion){
    const table = document.getElementById('companions');
    const tbody = table.querySelector('tbody');
    const tableRow = document.createElement('tr');
    tableRow.id = companion.id;
    tbody.appendChild(tableRow);


    const name = createCell(tableRow);
    const area = createCell(tableRow);
    name.innerHTML = companion.fullName;
    area.innerHTML = companion.area;

    const action = createCell(tableRow)
    const button = document.createElement('button');
    button.innerHTML = 'Megtekint';
    action.appendChild(button)
    button.addEventListener('click', checkEventListener)
}

/**
 * Create a new td cell
 * 
 * @param {HTMLTableRowElement} parentElement 
 * @returns {HTMLTableCellElement}
 */
function createCell(parentElement){
    const newCell = document.createElement('td');
    parentElement.appendChild(newCell);
    return newCell;
}

/**
 * 
 * Append a new companion to the selector
 * 
 */
function appendToSelector(id, value){
    const productForm = document.getElementById('product')
    const selector = productForm.querySelector('#companionlist');

    const option = document.createElement('option');
    option.value = id;
    option.innerHTML = value;

    selector.appendChild(option);
}


/**
 * 
 * Refresh the productlist table
 * 
 * @param {Companion} companion 
 */
function refreshProductList(companion){

    const companionName = document.getElementById('companion_name');
    companionName.style.display = 'block';
    companionName.innerHTML = companion.fullName;
    const productTable = document.getElementById('products');
    productTable.style.display = 'table';
    const productTableBody = productTable.querySelector('tbody')
    productTableBody.innerHTML = '';
    for (const product of companion.products) {
        const productRow = document.createElement('tr');
        const productName = createCell(productRow);
        productName.innerHTML = product;
        productTableBody.appendChild(productRow);
    }
}

/**
 * 
 * Add companion function for the companion formelement
 * 
 * @param {HTMLFormElement} form 
 */
function addCompanion(form){
    const firstName =form.querySelector('#cfirstname')
    const lastname =form.querySelector('#clastname')
    const area = form.querySelector('#carea')
    const firstNameValue = firstName.value;
    const lastNameValue = lastname.value;
    const areaValue = area.value;
    const newCompanion = new Companion(factory.newId(), firstNameValue, lastNameValue, areaValue);
    factory.addCompanion(newCompanion);
}

/**
 * 
 * Add product function for the productformelement
 * 
 * @param {HTMLFormElement} form 
 */

function addProductForm(form){
    const selector =form.querySelector('#companionlist')
    const productName = form.querySelector('#productname')
    const companionId = selector.value;
    if (companionId === '') {
        return;
    }
    const product = productName.value;

    const companion = factory.getCompanion(companionId);
    companion.addProduct(product);
    form.reset();
}