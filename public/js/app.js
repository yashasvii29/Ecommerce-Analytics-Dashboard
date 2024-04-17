
        // Sample data
        let ctx = document.getElementById('myChart').getContext('2d');
        let myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July','Aug','Sep','Oct','Nov','Dec'],
                datasets: [{
                    label: 'Sales',
                    data: [100, 200, 300, 400, 500, 600, 700,800,900,1000,2000,3000],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor:['violet','violet','violet'],
                    borderWidth: 2
                },
            {
                    label: 'Order',
                    data: [100, 200, 300, 400, 500, 600, 700,800,900,1000,2000,3000],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor:['black','black','black'],
                    borderWidth: 2
            }]
            },
            options: {
                responsive:true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }

        });
 
        


// Get the canvas element
let ctxx = document.getElementById('revenueChart').getContext('2d');

// Create the chart
let revenueChart = new Chart(ctxx, {
    type: 'line', // Choose the type of chart (line, bar, etc.)
    data:{
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July','Aug','Sep','Oct','Nov','Dec'],
    datasets: [{
        label: 'Revenue',
        fill: false,
        data: [1000, 1200,2000,2600,3000,3600,4000,5000,5500,7000,9000],// Revenue data for each month
        backgroundColor:['red','red','red'],// Background color of the bars
        borderColor: ['red','red','red'], // Border color of the bars
        borderWidth: 1, // Border width of the bars
       
    },
    {
        label: 'Net Profit',
        fill: false,
        borderDash: [5, 5],
        data: [300, 100, 500, 280, 550, 200, 700,1500,90,1000,2000,3000],// Revenue data for each month
        backgroundColor:['green','green','green'],// Background color of the bars
        borderColor:['green','green','green'], // Border color of the bars
        borderWidth: 2, // Border width of the bars
    }



    ]
    }  ,
    options: {
        responsive:true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true // Start the y-axis at zero
                }
            }]
        }
    }
});




let pie = document.getElementById('analyticsChart').getContext('2d');

// Create the chart
let analyticsChart = new Chart(pie, {
    type: 'doughnut', // Choose the type of chart (line, bar, etc.)
    data:{
        labels: ['Online Orders', 'Offline Orders'],
        datasets: [{
            label: 'Order Analytics',
            data: [50, 30], // Example data for online and offline orders
            backgroundColor: [
                'rgba(106, 90, 205, 0.6)', // Background color for online orders
                'rgba(50,179, 113, 0.6)', // Background color for offline orders
            ],
            borderWidth: 1, // Border width of the segments
        }]
    },
    options: {
        
        responsive:true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true // Start the y-axis at zero
                }
            }]
        }
    }
});




