// Policies
let policyIdCounter = 1;
let policies = [];

function showAddPolicyForm() {
    document.getElementById('add-policy-form').style.display = 'block';
}

function updatePolicyForm() {
    var policyType = document.getElementById('policy-type').value;
    var policyDetails = document.getElementById('policy-details');
    policyDetails.innerHTML = '';

    if (policyType === 'product') {
        var productSelect = document.createElement('select');
        productSelect.id = 'policy-products';
        productSelect.multiple = true; // Allow multiple selection
        productSelect.style.height = '100px'; // To show multiple options
        // Dynamically populate with existing products
        products.forEach(product => {
            var option = document.createElement('option');
            option.value = product.id;
            option.innerHTML = product.name;
            productSelect.appendChild(option);
        });
        policyDetails.appendChild(productSelect);

        var policyDetailInput = document.createElement('input');
        policyDetailInput.type = 'text';
        policyDetailInput.id = 'policy-detail';
        policyDetailInput.placeholder = 'Policy Detail';
        policyDetails.appendChild(policyDetailInput);
    } else {
        var policyDetailInput = document.createElement('input');
        policyDetailInput.type = 'text';
        policyDetailInput.id = 'policy-detail';
        policyDetailInput.placeholder = 'Policy Detail';
        policyDetails.appendChild(policyDetailInput);
    }
}

function addPolicy() {
    var policyType = document.getElementById('policy-type').value;
    var policyDetail = document.getElementById('policy-detail').value;

    var policy = {
        id: policyIdCounter,
        type: policyType,
        detail: policyDetail,
        products: []
    };

    if (policyType === 'product') {
        var selectedProducts = Array.from(document.getElementById('policy-products').selectedOptions);
        policy.products = selectedProducts.map(option => option.value);
    }

    policies.push(policy);
    policyIdCounter++;
    renderPolicyList();
    closeModal('add-policy-form');
    clearPolicyForm();
}

function editPolicy(id) {
    var policy = policies.find(p => p.id === id);
    document.getElementById('policy-type').value = policy.type;
    updatePolicyForm();
    document.getElementById('policy-detail').value = policy.detail;

    if (policy.type === 'product') {
        var productSelect = document.getElementById('policy-products');
        policy.products.forEach(productId => {
            var option = productSelect.querySelector(`option[value="${productId}"]`);
            if (option) {
                option.selected = true;
            }
        });
    }

    document.getElementById('add-policy-form').style.display = 'block';

    policies = policies.filter(p => p.id !== id);
}

function deletePolicy(id) {
    policies = policies.filter(p => p.id !== id);
    renderPolicyList();
}

function renderPolicyList() {
    var policyList = document.getElementById('policy-list');
    policyList.innerHTML = '';

    policies.forEach(policy => {
        var policyItem = document.createElement('tr');
        var policyDetails = `
            <td>${policy.id}</td>
            <td>${policy.type}</td>
            <td>${policy.detail}</td>
            <td>${policy.type === 'product' ? policy.products.map(id => products.find(p => p.id === id).name).join(', ') : 'N/A'}</td>
            <td>
                <button class="edit-button" onclick="editPolicy(${policy.id})">Edit</button>
                <button class="delete-button" onclick="deletePolicy(${policy.id})">Delete</button>
            </td>`;
        policyItem.innerHTML = policyDetails;
        policyList.appendChild(policyItem);
    });
}

function clearPolicyForm() {
    document.getElementById('policy-type').value = 'product';
    updatePolicyForm();
}
