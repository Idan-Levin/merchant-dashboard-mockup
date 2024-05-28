let products = [];
let productIdCounter = 1;

function addProduct() {
    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const type = document.getElementById('product-type').value;
    const price = document.getElementById('product-price').value;
    const currency = document.getElementById('product-currency').value;
    const contractAddress = document.getElementById('contract-address').value || 'N/A';
    const functionCall = document.getElementById('function-call').value || 'N/A';
    const functionDescription = document.getElementById('function-description').value || 'N/A';

    const product = {
        id: productIdCounter,
        name,
        description,
        type,
        price,
        currency,
        contractAddress,
        functionCall,
        functionDescription
    };

    products.push(product);
    productIdCounter++;
    renderProductList();
    closeModal('add-product-form');
    clearProductForm();
}

function renderProductList() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('tr');
        productItem.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.type}</td>
            <td>${product.price} ${product.currency}</td>
            <td>${product.contractAddress}</td>
            <td>${product.functionCall}</td>
            <td>${product.functionDescription}</td>
            <td>
                <button class="edit-button" onclick="editProduct(${product.id})">Edit</button>
                <button class="delete-button" onclick="deleteProduct(${product.id})">Delete</button>
            </td>
        `;
        productList.appendChild(productItem);
    });
}

function editProduct(productId) {
    // Implement edit functionality here
}

function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        products = products.filter(product => product.id !== productId);
        renderProductList();
    }
}

function toggleOnChainFields() {
    const productType = document.getElementById('product-type').value;
    const onchainFields = document.getElementById('onchain-fields');
    if (productType === 'onchain') {
        onchainFields.style.display = 'block';
    } else {
        onchainFields.style.display = 'none';
    }
}

function clearProductForm() {
    document.getElementById('product-name').value = '';
    document.getElementById('product-description').value = '';
    document.getElementById('product-type').value = 'offchain';
    document.getElementById('contract-address').value = '';
    document.getElementById('function-call').value = '';
    document.getElementById('function-description').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-currency').value = 'ETH';
}

function showAddProductForm() {
    document.getElementById('add-product-form').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function filterProducts() {
    const searchValue = document.getElementById('product-search').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchValue));
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    filteredProducts.forEach(product => {
        const productItem = document.createElement('tr');
        productItem.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.type}</td>
            <td>${product.price} ${product.currency}</td>
            <td>${product.contractAddress}</td>
            <td>${product.functionCall}</td>
            <td>${product.functionDescription}</td>
            <td>
                <button class="edit-button" onclick="editProduct(${product.id})">Edit</button>
                <button class="delete-button" onclick="deleteProduct(${product.id})">Delete</button>
            </td>
        `;
        productList.appendChild(productItem);
    });
}
