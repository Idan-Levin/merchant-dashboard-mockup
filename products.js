// Products
let productIdCounter = 1;

function showAddProductForm() {
    document.getElementById('add-product-form').style.display = 'block';
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

    var productList = document.getElementById('product-list');
    var productItem = document.createElement('div');
    productItem.className = 'product-item';
    var productDetails = `<p><strong>${name}</strong> - ${description} (${type}, ${price} ${currency})</p>
                          <p>Product ID: ${productIdCounter}</p>`;
    if (type === 'onchain') {
        productDetails += `<p>Contract Address: ${contractAddress}</p>
                           <p>Function Call: ${functionCall}</p>
                           <p>Function Description: ${functionDescription}</p>`;
    }
    productDetails += `<button class="delete-button" onclick="deleteItem(this, 'product')">Delete</button>`;
    productItem.innerHTML = productDetails;
    productList.appendChild(productItem);

    productIdCounter++;
    closeModal('add-product-form');
    clearProductForm();
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
    var productList = document.getElementById('product-list').children;
    for (var i = 0; i < productList.length; i++) {
        var product = productList[i];
        var productName = product.querySelector('strong').innerText.toLowerCase();
        if (productName.includes(searchInput)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    }
}
