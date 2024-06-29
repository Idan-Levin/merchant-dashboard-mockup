// init.js
document.addEventListener('DOMContentLoaded', () => {
    renderPolicies();
    renderCommexPolicyList();
    displayProducts();  // Changed from renderProductList to displayProducts
    document.getElementById('policy-type').addEventListener('change', updatePolicyForm);
});
