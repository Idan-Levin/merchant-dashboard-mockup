// Products
let productIdCounter = 1;
let products = [];

function showAddProductForm() {
    document.getElementById('add-product-form').style.display = 'block';
}

function toggleOnChainFields() {
    var productType = document.getElementById('product-type').value;
    var onChainFields = document.getElementById('onchain-fields');
    if (productType === 'onchain') {
        onChainFields.style.display = 'block';
    } else {
        onChainFields.style.display = 'none';
    }
}

function addProduct() {
    var name = document.getElementById('product-name').value;
    var description = document.getElementById('product-description').value;
    var type = document.getElementById('product-type').value;
    var price = document.getElementById('product-price').value;
    var currency = document.getElementById('product-currency').value;
    var contractAddress = document.getElementById('contract-address').value;
    var functionCall = document.getElementById('function-call').value;
    var functionDescription = document.getElementById('function-description').value;

    var product = {
        id: productIdCounter,
        name: name,
        description: description,
        type: type,
        price: price,
        currency: currency,
        contractAddress: contractAddress,
        functionCall: functionCall,
        functionDescription: functionDescription
    };

    products.push(product);
    productIdCounter++;
    renderProductList();
    closeModal('add-product-form');
    clearProductForm();
}

function editProduct(id) {
    var product = products.find(p => p.id === id);
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-description').value = product.description;
    document.getElementById('product-type').value = product.type;
    toggleOnChainFields();
    document.getElementById('product-price').value = product.price;
    document.getElementById('product-currency').value = product.currency;
    document.getElementById('contract-address').value = product.contractAddress;
    document.getElementById('function-call').value = product.functionCall;
    document.getElementById('function-description').value = product.functionDescription;

    document.getElementById('add-product-form').style.display = 'block';

    products = products.filter(p => p.id !== id);
}

function deleteProduct(id) {
    products = products.filter(p => p.id !== id);
    renderProductList();
}

function renderProductList() {
    var productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        var productItem = document.createElement('tr');
        var productDetails = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.type}</td>
            <td>${product.price} ${product.currency}</td>
            <td>${product.type === 'onchain' ? product.contractAddress : 'N/A'}</td>
            <td>${product.type === 'onchain' ? product.functionCall : 'N/A'}</td>
            <td>${product.type === 'onchain' ? product.functionDescription : 'N/A'}</td>
            <td>
                <button class="edit-button" onclick="editProduct(${product.id})">Edit</button>
                <button class="delete-button" onclick="deleteProduct(${product.id})">Delete</button>
            </td>`;
        productItem.innerHTML = productDetails;
        productList.appendChild(productItem);
    });
}

function clearProductForm() {
    document.getElementById('product-name').value = '';
    document.getElementById('product-description').value = '';
    document.getElementById('product-type').value = 'offchain';
    document.getElementById('product-price').value = '';
    document.getElementById('product-currency').value = 'ETH';
    document.getElementById('contract-address').value = '';
    document.getElementById('function-call').value = '';
    document.getElementById('function-description').value = '';
    document.getElementById('onchain-fields').style.display = 'none';
}

function filterProducts() {
    var searchInput = document.getElementById('product-search').value.toLowerCase();
    var filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchInput));
    renderProductList(filteredProducts);
}
