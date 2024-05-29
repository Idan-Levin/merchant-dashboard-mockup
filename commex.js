let commexPolicies = [];
let commexPolicyIdCounter = 1;

function showAddCommexForm() {
    document.getElementById('add-commex-form').style.display = 'block';
}

function createCommexPolicy() {
    const name = document.getElementById('commex-policy-name').value;
    const script = document.getElementById('commex-script').value;

    if (!name || !script) {
        alert("Please fill out all fields.");
        return;
    }

    const commexPolicy = {
        id: commexPolicyIdCounter++,
        type: 'commex',
        detail: { name, script },
        products: 'N/A'
    };

    commexPolicies.push(commexPolicy);
    closeModal('add-commex-form');
    renderCommexPolicyList();
}

function renderCommexPolicyList() {
  console.log('here')
    const policyList = document.getElementById('policy-list');
    policyList.innerHTML = '';

    const allPolicies = [...commexPolicies]; // Combine with other policies if any

    allPolicies.forEach(policy => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${policy.id}</td>
            <td>${policy.type}</td>
            <td>${JSON.stringify(policy.detail)}</td>
            <td>${policy.products}</td>
            <td>
                <button class="edit-button" onclick="editPolicy(${policy.id})">Edit</button>
                <button class="delete-button" onclick="deletePolicy(${policy.id})">Delete</button>
            </td>
        `;
        policyList.appendChild(row);
    });
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function confirmDeleteCommexPolicy(policyId) {
    if (confirm('Are you sure you want to delete this Commex policy?')) {
        deleteCommexPolicy(policyId);
    }
}

function deleteCommexPolicy(policyId) {
    commexPolicies = commexPolicies.filter(p => p.id !== policyId);
    renderCommexPolicyList();
}

// Template functions
function loadTemplate1() {
    const template1 = `{
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
    const template2 = `{
  "Policy": {
    "name": "Wholesale Bulk Purchase",
    "conditions": [
      {
        "type": "PurchaseQuantity",
        "parameters": {
          "min": 10
        }
      }
    ],
    "actions": [
      {
        "type": "SetPrice",
        "parameters": {
          "amount": "10",
          "currency": "USDC"
        }
      },
      {
        "type": "ApplyDiscount",
        "parameters": {
          "percent": 20
        }
      },
      {
        "type": "AcceptPayment",
        "parameters": {
          "currency": "USDC"
        }
      },
      {
        "type": "SetDeadline",
        "parameters": {
          "deadline": "2024-12-31"
        }
      }
    ]
  }
}`;
    document.getElementById('commex-script').value = template2;
}

function loadTemplate3() {
    const template3 = `{
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
    document.getElementById('commex-script').value = template3;
}

function loadTemplate4() {
    const template4 = `{
  "Policy": {
    "name": "Early Bird Discount",
    "conditions": [
      {
        "type": "DateRange",
        "parameters": {
          "start": "2024-01-01",
          "end": "2024-01-10"
        }
      }
    ],
    "actions": [
      {
        "type": "SetPrice",
        "parameters": {
          "amount": "1.0",
          "currency": "ETH"
        }
      },
      {
        "type": "ApplyDiscount",
        "parameters": {
          "percent": 10
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
          "deadline": "2024-01-11"
        }
      }
    ]
  }
}`;
    document.getElementById('commex-script').value = template4;
}

function loadTemplate5() {
    const template5 = `{
  "Policy": {
    "name": "Loyalty Program",
    "conditions": [
      {
        "type": "TokenOwnership",
        "parameters": {
          "token": "LOYALTY",
          "contractAddress": "0xLoyaltyTokenAddress"
        }
      }
    ],
    "actions": [
      {
        "type": "ApplyDiscount",
        "parameters": {
          "percent": 5
        }
      },
      {
        "type": "AcceptPayment",
        "parameters": {
          "currency": "ETH"
        }
      }
    ]
  }
}`;
    document.getElementById('commex-script').value = template5;
}

function loadTemplate6() {
    const template6 = `{
  "Policy": {
    "name": "Flash Sale",
    "conditions": [
      {
        "type": "DateRange",
        "parameters": {
          "start": "2024-11-01",
          "end": "2024-11-02"
        }
      }
    ],
    "actions": [
      {
        "type": "SetPrice",
        "parameters": {
          "amount": "0.5",
          "currency": "ETH"
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
          "deadline": "2024-11-03"
        }e
      }
    ]
  }
}`;
    document.getElementById('commex-script').value = template6;
}

// Call renderCommexPolicyList on DOMContentLoaded to display any pre-existing policies
document.addEventListener('DOMContentLoaded', () => {
    renderCommexPolicyList();
});
