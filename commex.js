// Commex
let commexPolicyCounter = 1;

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
