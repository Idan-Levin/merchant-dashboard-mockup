document.addEventListener('DOMContentLoaded', () => {
    const analyticsContent = document.getElementById('analytics-content');

    // Example chart using Chart.js
    const canvas1 = document.createElement('canvas');
    analyticsContent.appendChild(canvas1);

    const ctx1 = canvas1.getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Monthly Sales (ETH)',
                data: [12, 19, 3, 5, 2],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Additional example chart
    const canvas2 = document.createElement('canvas');
    analyticsContent.appendChild(canvas2);

    const ctx2 = canvas2.getContext('2d');
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'User Registrations',
                data: [50, 60, 55, 70, 80],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Add more charts as needed
});
