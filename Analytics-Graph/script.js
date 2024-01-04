
var chrt = document.getElementById("chartId").getContext("2d");
var chartId = new Chart(chrt, {
    type: 'doughnut',
    data: {
        labels: ["41% HTML", "29% CSS", "23% JavaScript", "4% React", "3% Angular"],
        datasets: [{
            label: "online tutorial subjects",
            data: [41, 29, 23, 4, 3],
            backgroundColor: ['#5a189a', '#d81159', '#e76f51', '#f9dc5c', '#386641'],
            hoverOffset: 2,
            borderWidth: 1,
            borderColor: [
                '#000000',
                '#000000',
                '#000000',
                '#000000',
                '#000000',
            ],
        }],
    },
    options: {
        cutout: '80%',
        responsive: true,
        // tooltips: {
        //     mode: 'index',
        //     intersect: false
        // },
        // hover: {
        //     mode: 'index',
        //     intersect: false
        // },
            plugins: {
            legend: {
                    position: 'top',
                    display: false
                
            },
            title: {
                display: false,
                text: 'Chart.js Doughnut Chart'
            }
        }
    },
});

