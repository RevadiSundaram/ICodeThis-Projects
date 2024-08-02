var data = [
    {
        x: ['Current', 'All', 'Average'],
        y: [12.2, 34.8, 28.7],
        type: 'bar',
        marker: {
            color: '#3a86ff',
            line: {
                width: 1
            }
        }
    }
];

Plotly.newPlot('chart', data);
