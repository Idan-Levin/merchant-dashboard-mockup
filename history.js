// Transaction History
var transactions = [
    { id: 1, product: 'Product A', date: '2024-05-01', amount: '2 ETH' },
    { id: 2, product: 'Product B', date: '2024-05-02', amount: '1.5 ETH' },
    { id: 3, product: 'Product C', date: '2024-05-03', amount: '3 ETH' }
];

function displayTransactionHistory() {
    var transactionList = document.getElementById('transaction-list');
    transactions.forEach(function(transaction) {
        var transactionItem = document.createElement('div');
        transactionItem.className = 'transaction-item';
        transactionItem.innerHTML = `<p><strong>${transaction.product}</strong> - ${transaction.date} - ${transaction.amount}</p>`;
        transactionList.appendChild(transactionItem);
    });
}
