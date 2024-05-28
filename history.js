document.addEventListener('DOMContentLoaded', () => {
    const transactionList = document.getElementById('transaction-list');

    const transactions = [
        { date: '2024-05-01', id: 'TX1001', payer: '0x123...abc', amount: '1.0 ETH', policies: 'Discount Policy' },
        { date: '2024-05-02', id: 'TX1002', payer: '0x124...bcd', amount: '2.0 ETH', policies: 'VIP Policy' },
        { date: '2024-05-03', id: 'TX1003', payer: '0x125...cde', amount: '0.5 ETH', policies: 'General Policy' },
        { date: '2024-05-04', id: 'TX1004', payer: '0x126...def', amount: '1.5 ETH', policies: 'Multiplayer Policy' },
        { date: '2024-05-05', id: 'TX1005', payer: '0x127...efg', amount: '3.0 ETH', policies: 'Discount Policy' },
        { date: '2024-05-06', id: 'TX1006', payer: '0x128...fgh', amount: '2.5 ETH', policies: 'VIP Policy' },
        { date: '2024-05-07', id: 'TX1007', payer: '0x129...ghi', amount: '1.0 ETH', policies: 'General Policy' },
        { date: '2024-05-08', id: 'TX1008', payer: '0x130...hij', amount: '0.8 ETH', policies: 'Multiplayer Policy' },
        { date: '2024-05-09', id: 'TX1009', payer: '0x131...ijk', amount: '1.2 ETH', policies: 'Discount Policy' },
        { date: '2024-05-10', id: 'TX1010', payer: '0x132...jkl', amount: '2.3 ETH', policies: 'VIP Policy' },
        { date: '2024-05-11', id: 'TX1011', payer: '0x133...klm', amount: '0.7 ETH', policies: 'General Policy' },
        { date: '2024-05-12', id: 'TX1012', payer: '0x134...lmn', amount: '1.9 ETH', policies: 'Multiplayer Policy' },
        { date: '2024-05-13', id: 'TX1013', payer: '0x135...mno', amount: '1.1 ETH', policies: 'Discount Policy' },
        { date: '2024-05-14', id: 'TX1014', payer: '0x136...nop', amount: '2.4 ETH', policies: 'VIP Policy' },
        { date: '2024-05-15', id: 'TX1015', payer: '0x137...opq', amount: '1.3 ETH', policies: 'General Policy' },
        { date: '2024-05-16', id: 'TX1016', payer: '0x138...pqr', amount: '0.9 ETH', policies: 'Multiplayer Policy' },
        { date: '2024-05-17', id: 'TX1017', payer: '0x139...qrs', amount: '1.5 ETH', policies: 'Discount Policy' },
        { date: '2024-05-18', id: 'TX1018', payer: '0x140...rst', amount: '2.7 ETH', policies: 'VIP Policy' },
        { date: '2024-05-19', id: 'TX1019', payer: '0x141...stu', amount: '0.6 ETH', policies: 'General Policy' },
        { date: '2024-05-20', id: 'TX1020', payer: '0x142...tuv', amount: '1.8 ETH', policies: 'Multiplayer Policy' },
    ];

    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Date</th>
                <th>ID</th>
                <th>Payer</th>
                <th>Amount</th>
                <th>Policies Applied</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;
    const tbody = table.querySelector('tbody');

    transactions.forEach(tx => {
        const txItem = document.createElement('tr');
        txItem.innerHTML = `
            <td>${tx.date}</td>
            <td>${tx.id}</td>
            <td>${tx.payer}</td>
            <td>${tx.amount}</td>
            <td>${tx.policies}</td>
        `;
        tbody.appendChild(txItem);
    });

    transactionList.appendChild(table);
});
