document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed'); // Debugging line
    renderPolicies();
    document.getElementById('policy-type').addEventListener('change', updatePolicyForm);
});

let policies = [];
let nextPolicyId = 1;

function addPolicy() {
    console.log("addPolicy function called"); // Debugging line
    const policyType = document.getElementById('policy-type').value;
    let policyDetail = {};

    if (policyType === 'product') {
        policyDetail = {
            productId: getElementValue('product-id'),
            discount: getElementChecked('discount'),
            quantityDiscount: getElementChecked('quantity-discount'),
            minQuantity: getElementValue('min-quantity'),
            discountPercentage: getElementValue('discount-percentage'),
            accessControl: getElementChecked('access-control'),
            nftAddress: getElementValue('nft-address'),
            accessControlDiscountPercentage: getElementValue('access-control-discount-percentage'),
            dynamicPricing: getElementChecked('dynamic-pricing'),
            discountDays: getElementValue('discount-days'),
            dynamicDiscountPercentage: getElementValue('dynamic-discount-percentage')
        };
    } else if (policyType === 'general') {
        policyDetail = {
            compliance: getElementChecked('compliance'),
            accessControl: getElementChecked('access-control-general'),
            nftAddresses: [
                getElementValue('general-nft-address-1'),
                getElementValue('general-nft-address-2'),
                getElementValue('general-nft-address-3'),
                getElementValue('general-nft-address-4'),
                getElementValue('general-nft-address-5')
            ]
        };
    } else if (policyType === 'multiplayer') {
        policyDetail = {
            multiplayerPolicy: getElementValue('multiplayer-policy')
        };
    }

    const newPolicy = {
        id: nextPolicyId++,
        type: policyType,
        detail: policyDetail,
        products: policyType === 'product' ? getElementValue('product-id') : 'N/A'
    };

    policies.push(newPolicy);
    console.log('Policy added:', newPolicy); // Debugging line

    closeModal('add-policy-form');
    debugger;
    renderPolicies();
}

function getElementValue(id) {
    const element = document.getElementById(id);
    return element ? element.value : null;
}

function getElementChecked(id) {
    const element = document.getElementById(id);
    return element ? element.checked : false;
}

function renderPolicies() {
    console.log('renderPolicies function called'); // Debugging line
    const policyList = document.getElementById('policy-list');
    
    if (!policyList) {
        console.error('Policy list element not found');
        return;
    }
    
    console.log('Rendering policies:', policies); // Debugging line
    policyList.innerHTML = '';

    policies.forEach(policy => {
        console.log('Rendering policy:', policy); // Debugging line
        const row = document.createElement('tr');
        const detailString = JSON.stringify(policy.detail, null, 2).replace(/[\{\}"]/g, '').replace(/,/g, ', '); // Format detail object

        row.innerHTML = `
            <td>${policy.id}</td>
            <td>${policy.type}</td>
            <td>${detailString}</td>
            <td>${policy.products}</td>
            <td>
                <button class="edit-button" onclick="editPolicy(${policy.id})">Edit</button>
                <button class="delete-button" onclick="deletePolicy(${policy.id})">Delete</button>
            </td>
        `;
        policyList.appendChild(row);
    });

    console.log('Policies rendered:', policies); // Debugging line
}

function showAddPolicyForm() {
    console.log("showAddPolicyForm function called"); // Debugging line
    document.getElementById('policy-details').innerHTML = '';
    document.getElementById('add-policy-form').style.display = 'block';
}

function closeModal(modalId) {
    console.log(`closeModal function called for ${modalId}`); // Debugging line
    document.getElementById(modalId).style.display = 'none';
}

function updatePolicyForm() {
    console.log("updatePolicyForm function called"); // Debugging line
    const policyType = document.getElementById('policy-type').value;
    const policyDetails = document.getElementById('policy-details');
    policyDetails.innerHTML = '';

    if (policyType === 'product') {
        let productOptions = products.map(product => `<option value="${product.id}">${product.name}</option>`).join('');
        policyDetails.innerHTML = `
            <div class="policy-field">
                <label for="product-id">Product Name:</label>
                <select id="product-id">${productOptions}</select>
            </div>
            <div class="policy-field">
                <label for="discount">Discount:</label>
                <input type="checkbox" id="discount" onchange="toggleDiscountFields()">
            </div>
            <div id="discount-fields" style="display: none;">
                <div class="sub-field">
                    <input type="checkbox" id="quantity-discount" onchange="toggleQuantityDiscountFields()">
                    <label for="quantity-discount">Quantity Discount</label>
                    <div id="quantity-discount-fields" style="display: none;">
                        <div class="sub-field">
                            <label for="min-quantity">Minimum Quantity:</label>
                            <input type="number" id="min-quantity">
                        </div>
                        <div class="sub-field">
                            <label for="discount-percentage">Discount Percentage:</label>
                            <input type="number" id="discount-percentage">
                        </div>
                    </div>
                </div>
                <div class="sub-field">
                    <input type="checkbox" id="access-control" onchange="toggleAccessControlFields()">
                    <label for="access-control">Access Control</label>
                    <div id="access-control-fields" style="display: none;">
                        <label for="nft-address">NFT Address:</label>
                        <input type="text" id="nft-address">
                        <label for="access-control-discount-percentage">Discount Percentage:</label>
                        <input type="number" id="access-control-discount-percentage">
                    </div>
                </div>
            </div>
            <div class="policy-field">
                <label for="dynamic-pricing">Dynamic Pricing:</label>
                <input type="checkbox" id="dynamic-pricing" onchange="toggleDynamicPricingFields()">
            </div>
            <div id="dynamic-pricing-fields" style="display: none;">
                <div class="sub-field">
                    <label for="discount-days">Discount for the first X days:</label>
                    <input type="number" id="discount-days">
                    <label for="dynamic-discount-percentage">Discount Percentage:</label>
                    <input type="number" id="dynamic-discount-percentage">
                </div>
            </div>
        `;
    } else if (policyType === 'general') {
        policyDetails.innerHTML = `
            <div class="policy-field">
                <label for="compliance">Compliance:</label>
                <input type="checkbox" id="compliance">
            </div>
            <div class="policy-field">
                <label for="access-control-general">Access Control:</label>
                <input type="checkbox" id="access-control-general" onchange="toggleGeneralAccessControlFields()">
            </div>
            <div id="general-access-control-fields" style="display: none;">
                <div class="sub-field">
                    <label for="general-nft-address-1">NFT Address 1:</label>
                    <input type="text" id="general-nft-address-1">
                </div>
                <div class="sub-field">
                    <label for="general-nft-address-2">NFT Address 2:</label>
                    <input type="text" id="general-nft-address-2">
                </div>
                <div class="sub-field">
                    <label for="general-nft-address-3">NFT Address 3:</label>
                    <input type="text" id="general-nft-address-3">
                </div>
                <div class="sub-field">
                    <label for="general-nft-address-4">NFT Address 4:</label>
                    <input type="text" id="general-nft-address-4">
                </div>
                <div class="sub-field">
                    <label for="general-nft-address-5">NFT Address 5:</label>
                    <input type="text" id="general-nft-address-5">
                </div>
            </div>
        `;
    } else if (policyType === 'multiplayer') {
        policyDetails.innerHTML = `
            <div class="policy-field">
                <label for="multiplayer-policy">Multiplayer Policy:</label>
                <select id="multiplayer-policy">
                    <option value="degen">Degen Club</option>
                    <option value="pudgy">Pudgy Penguin Club</option>
                    <option value="farcaster">Farcaster Cool Kids Club</option>
                </select>
            </div>
        `;
    }

    if (!document.querySelector('#policy-details + button')) {
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save Policy';
        saveButton.onclick = addPolicy;
        policyDetails.parentNode.appendChild(saveButton);
    }
}

function toggleDiscountFields() {
    const discountChecked = document.getElementById('discount').checked;
    document.getElementById('discount-fields').style.display = discountChecked ? 'block' : 'none';
}

function toggleQuantityDiscountFields() {
    const quantityDiscountChecked = document.getElementById('quantity-discount').checked;
    document.getElementById('quantity-discount-fields').style.display = quantityDiscountChecked ? 'block' : 'none';
}

function toggleAccessControlFields() {
    const accessControlChecked = document.getElementById('access-control').checked;
    document.getElementById('access-control-fields').style.display = accessControlChecked ? 'block' : 'none';
}

function toggleDynamicPricingFields() {
    const dynamicPricingChecked = document.getElementById('dynamic-pricing').checked;
    document.getElementById('dynamic-pricing-fields').style.display = dynamicPricingChecked ? 'block' : 'none';
}

function toggleGeneralAccessControlFields() {
    const accessControlChecked = document.getElementById('access-control-general').checked;
    document.getElementById('general-access-control-fields').style.display = accessControlChecked ? 'block' : 'none';
}

function editPolicy(policyId) {
    console.log("editPolicy function called for policyId:", policyId); // Debugging line
    const policy = policies.find(p => p.id === policyId);
    if (!policy) return;

    // Load policy details into the form (implementation depends on your form structure)
    // Example:
    document.getElementById('policy-type').value = policy.type;
    // ... load other fields ...

    showAddPolicyForm();
    policies = policies.filter(p => p.id !== policyId);
}

function deletePolicy(policyId) {
    console.log("deletePolicy function called for policyId:", policyId); // Debugging line
    policies = policies.filter(p => p.id !== policyId);
    renderPolicies();
}
