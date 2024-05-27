let productIdCounter = 1;
let commexPolicyCounter = 1;

function showTab(tabName) {
    var i;
    var tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

function showAddProductForm() {
    document.getElementById('add-product-form').style.display = 'block';
}

function showAddPolicyForm() {
    document.getElementById('add-policy-form').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
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

function deleteItem(button, type) {
    var item = button.parentNode;
    item.parentNode.removeChild(item);
}

function createCommexPolicy() {
    var commexScript = document.getElementById('commex-script').value;
    var policyList = document.getElementById('commex-policy-list').querySelector('tbody');
    var policyItem = document.createElement('tr');
    policyItem.innerHTML = `<td>${commexPolicyCounter}</td><td>${commexScript}</td>`;
    policyList.appendChild(policyItem);
    commexPolicyCounter++;
}

function loadTemplate1() {
    var template1 = `{
  "Policy": {
    "name": "VIP NFT Sale",
    "conditions": [
      {
        "type": "TokenOwnership",
        "parameters": {
          "token": "VIP",
          "contractAddress": "0xNFTContractAddress"
        }
      },
      {
        "type": "SaleWindow",
        "parameters": {
          "start": "2024-06-01",
          "end": "2024-06-05"
        }
      }
    ],
    "actions": [
      {
        "type": "SetPrice",
        "parameters": {
          "amount": "1.5",
          "currency": "ETH"
        }
      },
      {
        "type": "ApplyDiscount",
        "parameters": {
          "percent": 15
        }
      },
      {
        "type": "AcceptPayment",
        "parameters": {
          "currency": "ETH"
        }
      },
      {
        "type": "SetDeadline",
        "parameters": {
          "deadline": "2024-06-06"
        }
      }
    ]
  }
}`;
    document.getElementById('commex-script').value = template1;
}

function loadTemplate2() {
    var template2 = `{
  "Policy": {
    "name": "Seasonal Discount",
    "conditions": [
      {
        "type": "DateRange",
        "parameters": {
          "start": "2024-12-01",
          "end": "2024-12-25"
        }
      }
    ],
    "actions": [
      {
        "type": "SetPrice",
        "parameters": {
          "amount": "50",
          "currency": "USDC"
        }
      },
      {
        "type": "ApplyDiscount",
        "parameters": {
          "percent": 25
        }
      },
      {
        "type": "AcceptPayment",
        "parameters": {
          "currency": "USDC"
        }
      },
      {
        "type": "EnforceCompliance",
        "parameters": {}
      }
    ]
  }
}`;
    document.getElementById('commex-script').value = template2;
}
