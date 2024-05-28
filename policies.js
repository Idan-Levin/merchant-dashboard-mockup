let policies = [];
let policyIdCounter = 1;

function addPolicy() {
    const policyType = document.getElementById('policy-type').value;
    let policyDetail = document.getElementById('policy-detail') ? document.getElementById('policy-detail').value : '';
    let selectedProducts = [];

    if (policyType === 'product') {
        selectedProducts = Array.from(document.getElementById('policy-products').selectedOptions).map(option => option.value);
    } else if (policyType === 'multiplayer') {
        policyDetail = document.getElementById('multiplayer-options').value;
    }

    const policy = {
        id: policyIdCounter,
        type: policyType,
        detail: policyDetail,
        products: selectedProducts
    };

    policies.push(policy);
    policyIdCounter++;
    renderPolicyList();
    closeModal('add-policy-form');
    clearPolicyForm();
}

function renderPolicyList() {
    const policyList = document.getElementById('policy-list');
    policyList.innerHTML = '';

    policies.forEach(policy => {
        const policyItem = document.createElement('tr');
        policyItem.innerHTML = `
            <td>${policy.id}</td>
            <td>${policy.type}</td>
            <td>${policy.detail}</td>
            <td>${policy.products.join(', ')}</td>
            <td>
                <button class="edit-button" onclick="editPolicy(${policy.id})">Edit</button>
                <button class="delete-button" onclick="deletePolicy(${policy.id})">Delete</button>
            </td>
        `;
        policyList.appendChild(policyItem);
    });
}

function editPolicy(policyId) {
    // Implement edit functionality here
}

function deletePolicy(policyId) {
    if (confirm('Are you sure you want to delete this policy?')) {
        policies = policies.filter(policy => policy.id !== policyId);
        renderPolicyList();
    }
}

function updatePolicyForm() {
    const policyType = document.getElementById('policy-type').value;
    const policyDetails = document.getElementById('policy-details');
    policyDetails.innerHTML = '';

    if (policyType === 'product') {
        const productSelect = document.createElement('select');
        productSelect.id = 'policy-products';
        productSelect.multiple = true;
        productSelect.style.height = '100px';

        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.innerHTML = product.name;
            productSelect.appendChild(option);
        });
        policyDetails.appendChild(productSelect);

        const policyDetailInput = document.createElement('input');
        policyDetailInput.type = 'text';
        policyDetailInput.id = 'policy-detail';
        policyDetailInput.placeholder = 'Policy Detail';
        policyDetails.appendChild(policyDetailInput);
    } else if (policyType === 'multiplayer') {
        const multiplayerSelect = document.createElement('select');
        multiplayerSelect.id = 'multiplayer-options';
        const options = ['Degen Club', 'Pudgy Penguin Club', 'Farcaster Cool Kids Club'];
        options.forEach(optionName => {
            const option = document.createElement('option');
            option.value = optionName;
            option.innerHTML = optionName;
            multiplayerSelect.appendChild(option);
        });
        policyDetails.appendChild(multiplayerSelect);
    } else {
        const policyDetailInput = document.createElement('input');
        policyDetailInput.type = 'text';
        policyDetailInput.id = 'policy-detail';
        policyDetailInput.placeholder = 'Policy Detail';
        policyDetails.appendChild(policyDetailInput);
    }
}

function clearPolicyForm() {
    document.getElementById('policy-type').value = 'product';
    document.getElementById('policy-details').innerHTML = '';
}

function showAddPolicyForm() {
    document.getElementById('add-policy-form').style.display = 'block';
    updatePolicyForm(); // Update the form fields when the form is shown
}

function showAddCommexForm() {
    document.getElementById('add-commex-form').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function exportPolicies() {
    const headers = ['ID', 'Type', 'Detail', 'Products'];
    const rows = policies.map(policy => [
        policy.id,
        policy.type,
        policy.detail,
        policy.products.join(', ')
    ]);

    let csvContent = "data:text/csv;charset=utf-8," 
        + headers.join(',') 
        + "\n" 
        + rows.map(row => row.join(',')).join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'policies.csv');
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
}
