// Commex.js
let commexPolicyIdCounter = 1;
let commexPolicies = [];

function loadTemplate1() {
    document.getElementById('commex-script').value = `
{
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
}

function loadTemplate2() {
    document.getElementById('commex-script').value = `
{
  "Policy": {
    "name": "Wholesale Bulk Purchase",
    "conditions": [
      {
        "type": "MinimumQuantity",
        "parameters": {
          "quantity": 100
        }
      }
    ],
    "actions": [
      {
        "type": "SetPrice",
        "parameters": {
          "amount": "10",
          "currency": "DAI"
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
          "currency": "DAI"
        }
      },
      {
        "type": "ComplianceCheck",
        "parameters": {
          "required": true
        }
      }
    ]
  }
}`;
}

function loadTemplate3() {
    document.getElementById('commex-script').value = `
{
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
}

function loadTemplate4() {
    document.getElementById('commex-script').value = `
{
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
          "amount": "75",
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
        "type": "EnforceCompliance",
        "parameters": {}
      }
    ]
  }
}`;
}

function loadTemplate5() {
    document.getElementById('commex-script').value = `
{
  "Policy": {
    "name": "Loyalty Program",
    "conditions": [
      {
        "type": "TokenOwnership",
        "parameters": {
          "token": "LOYALTY",
          "contractAddress": "0xLoyaltyContractAddress"
        }
      }
    ],
    "actions": [
      {
        "type": "SetPrice",
        "parameters": {
          "amount": "40",
          "currency": "DAI"
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
          "currency": "DAI"
        }
      },
      {
        "type": "EnforceCompliance",
        "parameters": {}
      }
    ]
  }
}`;
}

function loadTemplate6() {
    document.getElementById('commex-script').value = `
{
  "Policy": {
    "name": "Flash Sale",
    "conditions": [
      {
        "type": "DateRange",
        "parameters": {
          "start": "2024-07-01",
          "end": "2024-07-01"
        }
      }
    ],
    "actions": [
      {
        "type": "SetPrice",
        "parameters": {
          "amount": "30",
          "currency": "ETH"
        }
      },
      {
        "type": "ApplyDiscount",
        "parameters": {
          "percent": 50
        }
      },
      {
        "type": "AcceptPayment",
        "parameters": {
          "currency": "ETH"
        }
      },
      {
        "type": "EnforceCompliance",
        "parameters": {}
      }
    ]
  }
}`;
}

function createCommexPolicy() {
    const script = document.getElementById('commex-script').value;
    const policy = {
        id: commexPolicyIdCounter,
        script: script,
        name: JSON.parse(script).Policy.name
    };
    commexPolicies.push(policy);
    commexPolicyIdCounter++;
    renderCommexPolicyList();
    document.getElementById('commex-script').value = '';
}

function renderCommexPolicyList() {
    const policyList = document.getElementById('commex-policy-list').querySelector('tbody');
    policyList.innerHTML = '';
    commexPolicies.forEach(policy => {
        const policyItem = document.createElement('tr');
        policyItem.innerHTML = `
            <td>${policy.id}</td>
            <td>${policy.name}</td>
            <td><button class="view-more-button" onclick="viewMore(${policy.id})">View More</button></td>
        `;
        policyList.appendChild(policyItem);
    });
}

function viewMore(id) {
    const policy = commexPolicies.find(p => p.id === id);
    const policyDetail = document.createElement('div');
    policyDetail.className = 'policy-detail';
    policyDetail.innerHTML = `
        <textarea readonly>${policy.script}</textarea>
        <button onclick="this.parentElement.remove()">Close</button>
    `;
    document.getElementById('commex').appendChild(policyDetail);
}
