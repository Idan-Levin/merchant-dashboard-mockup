// Analytics
var analyticsData = {
    totalSales: '10 ETH',
    totalTransactions: 3,
    mostPopularProduct: 'Product A'
};

function displayAnalytics() {
    var analyticsContent = document.getElementById('analytics-content');
    analyticsContent.innerHTML = `<p>Total Sales: ${analyticsData.totalSales}</p>
                                  <p>Total Transactions: ${analyticsData.totalTransactions}</p>
                                  <p>Most Popular Product: ${analyticsData.mostPopularProduct}</p>`;
}
