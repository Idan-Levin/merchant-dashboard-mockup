document.addEventListener('DOMContentLoaded', () => {
    // Initialize the product list and policy list
    renderProductList();
    renderPolicyList();
    renderCommexPolicyList();

    // Set default active tab
    showTab('products');
});
