let hooks = [];
let hookIdCounter = 1;

function addHook() {
    const name = document.getElementById('hook-name').value;
    const id = document.getElementById('hook-id').value;
    const contractAddress = document.getElementById('hook-contract-address').value;
    const functionCall = document.getElementById('hook-function-call').value;
    const functionDescription = document.getElementById('hook-function-description').value;

    const hook = {
        id: hookIdCounter,
        name,
        contractAddress,
        functionCall,
        functionDescription
    };

    hooks.push(hook);
    hookIdCounter++;
    renderHookList();
    closeModal('add-hook-form');
    clearHookForm();
}

function renderHookList() {
    const hookList = document.getElementById('hook-list');
    hookList.innerHTML = '';

    hooks.forEach(hook => {
        const hookItem = document.createElement('div');
        hookItem.className = 'hook-item';
        hookItem.innerHTML = `
            <p><strong>ID:</strong> ${hook.id}</p>
            <p><strong>Name:</strong> ${hook.name}</p>
            <p><strong>Contract Address:</strong> ${hook.contractAddress}</p>
            <p><strong>Function Call:</strong> ${hook.functionCall}</p>
            <p><strong>Function Description:</strong> ${hook.functionDescription}</p>
            <button class="delete-button" onclick="deleteHook(${hook.id})">Delete</button>
        `;
        hookList.appendChild(hookItem);
    });
}

function deleteHook(hookId) {
    if (confirm('Are you sure you want to delete this hook?')) {
        hooks = hooks.filter(hook => hook.id !== hookId);
        renderHookList();
    }
}

function clearHookForm() {
    document.getElementById('hook-name').value = '';
    document.getElementById('hook-id').value = '';
    document.getElementById('hook-contract-address').value = '';
    document.getElementById('hook-function-call').value = '';
    document.getElementById('hook-function-description').value = '';
}

function showAddHookForm() {
    document.getElementById('add-hook-form').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
