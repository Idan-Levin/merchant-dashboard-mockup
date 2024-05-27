// Utility Functions
function showNotification(message) {
    var notification = document.getElementById('notification');
    notification.innerText = message;
    notification.classList.add('show');
    setTimeout(function() {
        notification.classList.remove('show');
    }, 3000);
}

function showLoading() {
    var loadingIndicator = document.getElementById('loading-indicator');
    loadingIndicator.style.display = 'block';
}

function hideLoading() {
    var loadingIndicator = document.getElementById('loading-indicator');
    loadingIndicator.style.display = 'none';
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
