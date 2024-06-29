// Tab Management
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName("tab-content");
    Array.from(tabContents).forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabName).classList.add('active');

    // Remove the active class from all tab buttons
    const tabButtons = document.getElementsByClassName("tab-button");
    Array.from(tabButtons).forEach(button => {
        button.classList.remove('active');
    });

    // Add the active class to the clicked tab button
    const selectedTabButton = document.querySelector(`.tab-button[onclick="showTab('${tabName}')"]`);
    if (selectedTabButton) {
        selectedTabButton.classList.add('active');
    }
}

// Initial setup to activate the default tab
document.addEventListener('DOMContentLoaded', () => {
    showTab('products');
});
