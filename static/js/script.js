var ctx1 = document.getElementById('chart_1').getContext('2d');
var ctx2 = document.getElementById('digits_bar').getContext('2d');
var ctx3 = document.getElementById('digits_radar').getContext('2d');

window.onload = ()=>{

}

var chart_1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 4,
            borderRadius: 10,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        //responsive: false,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                // Disable the on-canvas tooltip
                enabled: false
            }
        }
    }
});

var digits_bar = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        datasets: [{
            data: [1, 10, 15, 0, 0, 85, 3, 0, 0],
            backgroundColor: ['rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgba(54, 162, 235, 1)'],
            borderWidth: 2,
            borderRadius: 5,
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                // Disable the on-canvas tooltip
                enabled: false
            },
            legend: {
                display: false
            }
        },
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                grid: {
                    display: false
                }
            }
        },
    }
});


var digits_radar = new Chart(ctx3, {
    type: 'radar',
    data: {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        datasets: [{
            data: [1, 10, 15, 0, 0, 85, 3, 0, 0],
            backgroundColor: 'red',
        }]
    },
    options: {

    }
});
