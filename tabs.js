// Tab Management
function showTab(tabName) {
<<<<<<< HEAD
    // Hide all tab contents
=======
>>>>>>> 2f0bfda34bbe94d8234722ec892ad9acdc679d3f
    const tabContents = document.getElementsByClassName("tab-content");
    Array.from(tabContents).forEach(tab => {
        tab.classList.remove('active');
    });
<<<<<<< HEAD

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
=======
    document.getElementById(tabName).classList.add('active');
>>>>>>> 2f0bfda34bbe94d8234722ec892ad9acdc679d3f
}

// Initial setup to activate the default tab
document.addEventListener('DOMContentLoaded', () => {
    showTab('products');
});
