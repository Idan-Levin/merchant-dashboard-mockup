// Tab Management
function showTab(tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    Array.from(tabContents).forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
}
