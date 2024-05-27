// Policies
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
        var productList = document.getElementById('product-list').children;
        for (var i = 0; i < productList.length; i++) {
            var option = document.createElement('option');
            option.value = productList[i].querySelector('strong').innerText;
            option.innerHTML = productList[i].querySelector('strong').innerText;
            productSelect.appendChild(option);
        }
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

    var policyList = document.getElementById('policy-list');
    var policyItem = document.createElement('div');
    policyItem.className = 'policy-item';
    if (policyType === 'product') {
        var products = document.getElementById('policy-products').selectedOptions;
        var productNames = Array.from(products).map(option => option.value);
        policyItem.innerHTML = `<p><strong>Product-Specific Policy</strong> - ${policyDetail} (Products: ${productNames.join(', ')})</p>
                                <button class="delete-button" onclick="deleteItem(this, 'policy')">Delete</button>`;
    } else {
        policyItem.innerHTML = `<p><strong>General Policy</strong> - ${policyDetail}</p>
                                <button class="delete-button" onclick="deleteItem(this, 'policy')">Delete</button>`;
    }
    policyList.appendChild(policyItem);

    closeModal('add-policy-form');
    clearPolicyForm();
}

function clearPolicyForm() {
    document.getElementById('policy-type').value = 'product';
    updatePolicyForm();
}
