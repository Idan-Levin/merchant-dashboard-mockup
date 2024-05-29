let products = [];
let productIdCounter = 1;

function showAddProductForm() {
    document.getElementById('add-product-form').style.display = 'block';
}

function addProduct() {
    const name = document.getElementById("product-name").value;
    const description = document.getElementById("product-description").value;
    const type = document.getElementById("product-type").value;
    const price = document.getElementById("product-price").value;
    const currency = document.getElementById("product-currency").value;

    let contractAddress = "N/A";
    let functionCall = "N/A";
    let functionDescription = "N/A";
    let chain = "N/A";
    let eoaAddress = "N/A";

    if (type === "onchain") {
        contractAddress = document.getElementById("contract-address").value;
        functionCall = document.getElementById("function-call").value;
        functionDescription = document.getElementById("function-description").value;
        chain = document.getElementById("product-chain-onchain").value;
    } else if (type === "offchain") {
        eoaAddress = document.getElementById("eoa-address").value;
        chain = document.getElementById("product-chain-offchain").value;
    }

    const product = {
        id: productIdCounter++,
        name: name,
        description: description,
        type: type,
        price: `${price} ${currency}`,
        chain: chain,
        contractAddress: contractAddress,
        functionCall: functionCall,
        functionDescription: functionDescription,
        eoaAddress: eoaAddress
    };

    products.push(product);
    closeModal("add-product-form");
    displayProducts();
}

function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        const row = document.createElement("tr");

        Object.keys(product).forEach(key => {
            const cell = document.createElement("td");
            cell.textContent = product[key];
            row.appendChild(cell);
        });

        const actionsCell = document.createElement("td");

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => editProduct(product.id);
        actionsCell.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.onclick = () => confirmDeleteProduct(product.id);
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);
        productList.appendChild(row);
    });
}

function editProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById("product-name").value = product.name;
    document.getElementById("product-description").value = product.description;
    document.getElementById("product-type").value = product.type;
    document.getElementById("product-price").value = parseFloat(product.price);
    document.getElementById("product-currency").value = product.price.split(" ")[1];

    if (product.type === "onchain") {
        document.getElementById("contract-address").value = product.contractAddress;
        document.getElementById("function-call").value = product.functionCall;
        document.getElementById("function-description").value = product.functionDescription;
        document.getElementById("product-chain-onchain").value = product.chain;
        toggleOnChainFields();
    } else if (product.type === "offchain") {
        document.getElementById("eoa-address").value = product.eoaAddress;
        document.getElementById("product-chain-offchain").value = product.chain;
        toggleOnChainFields();
    }

    showAddProductForm();
    products = products.filter(p => p.id !== productId);
}

function confirmDeleteProduct(productId) {
    if (confirm("Are you sure you want to delete this product?")) {
        deleteProduct(productId);
    }
}

function deleteProduct(productId) {
    products = products.filter(p => p.id !== productId);
    displayProducts();
}

function toggleOnChainFields() {
    const type = document.getElementById("product-type").value;
    document.getElementById("onchain-fields").style.display = type === "onchain" ? "block" : "none";
    document.getElementById("offchain-fields").style.display = type === "offchain" ? "block" : "none";
}

function filterProducts() {
    const searchValue = document.getElementById("product-search").value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue)
    );
    displayFilteredProducts(filteredProducts);
}

function displayFilteredProducts(filteredProducts) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    filteredProducts.forEach(product => {
        const row = document.createElement("tr");

        Object.keys(product).forEach(key => {
            const cell = document.createElement("td");
            cell.textContent = product[key];
            row.appendChild(cell);
        });

        const actionsCell = document.createElement("td");

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => editProduct(product.id);
        actionsCell.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.onclick = () => confirmDeleteProduct(product.id);
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);
        productList.appendChild(row);
    });
}
