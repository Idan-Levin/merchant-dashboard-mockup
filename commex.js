let commexPolicies = [];
let commexPolicyIdCounter = 1;

function createCommexPolicy() {
    const name = document.getElementById('commex-policy-name').value || `Commex Policy ${commexPolicyIdCounter}`;
    const script = document.getElementById('commex-script').value;
    const policy = {
        id: commexPolicyIdCounter,
        type: 'commex',
        detail: script,
        name
    };
    commexPolicies.push(policy);
    policies.push(policy); // Add the policy to the general policies list
    commexPolicyIdCounter++;
    renderCommexPolicyList();
    renderPolicyList(); // Re-render the policies list to include the new commex policy
    document.getElementById('commex-policy-name').value = '';
    document.getElementById('commex-script').value = '';
    closeModal('add-commex-form');
}

function renderCommexPolicyList() {
    const policyList = document.querySelector('#commex-policy-list tbody');
    policyList.innerHTML = '';

    commexPolicies.forEach(policy => {
        const policyItem = document.createElement('tr');
        policyItem.innerHTML = `
            <td>${policy.id}</td>
            <td>${policy.name}</td>
            <td>
                <button class="view-button" onclick="viewCommexPolicy(${policy.id})">View More</button>
                <button class="delete-button" onclick="deleteCommexPolicy(${policy.id})">Delete</button>
            </td>
        `;
        policyList.appendChild(policyItem);
    });
}

function viewCommexPolicy(policyId) {
    const policy = commexPolicies.find(p => p.id === policyId);
    if (policy) {
        const detailSection = document.createElement('div');
        detailSection.className = 'policy-detail';
        detailSection.innerHTML = `
            <textarea readonly>${policy.detail}</textarea>
            <button class="close-button" onclick="this.parentElement.remove()">Close</button>
        `;
        document.getElementById('commex').appendChild(detailSection);
    }
}

function deleteCommexPolicy(policyId) {
    if (confirm('Are you sure you want to delete this policy?')) {
        commexPolicies = commexPolicies.filter(policy => policy.id !== policyId);
        policies = policies.filter(policy => policy.id !== policyId); // Also remove from the general policies list
        renderCommexPolicyList();
        renderPolicyList(); // Re-render the policies list to reflect the deletion
    }
}

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
        }
    `;
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
        }
    `;
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
        }
    `;
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
                            "start": "2024-05-01",
                            "end": "2024-05-10"
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
                            "percent": 10
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
        }
    `;
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
                            "contractAddress": "0xLoyaltyTokenContract"
                        }
                    }
                ],
                "actions": [
                    {
                        "type": "SetPrice",
                        "parameters": {
                            "amount": "20",
                            "currency": "USDC"
                        }
                    },
                    {
                        "type": "ApplyDiscount",
                        "parameters": {
                            "percent": 5
                        }
                    },
                    {
                        "type": "AcceptPayment",
                        "parameters": {
                            "currency": "USDC"
                        }
                    }
                ]
            }
        }
    `;
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
                            "amount": "15",
                            "currency": "DAI"
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
                            "currency": "DAI"
                        }
                    }
                ]
            }
        }
    `;
}
