const RATING = document.getElementById('ratingChart');

let ratingChart = new Chart(RATING, {
  type: 'line',
  data: {
    labels: ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"],
    datasets: [
        {
            label: "2015 Ratings",
            fill: false,
            lineTension: 0.3,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [1, 42, 206, 510, 1077, 1449, 823, 524, 100, 114],
            spanGaps: false,
        },
        {
            label: "2014 Ratings",
            fill: false,
            lineTension: 0.3,
            backgroundColor: "rgba(75,92,192,0.4)",
            borderColor: "rgba(75,92,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,92,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,92,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [1, 43, 220, 557, 1097, 1385, 843, 531, 98, 87],
            spanGaps: false,
        } ,
        {
            label: "2013 Ratings",
            fill: false,
            lineTension: 0.3,
            backgroundColor: "rgba(75,192,92,0.4)",
            borderColor: "rgba(75,192,92,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,92,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,92,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [16, 96, 285, 583, 898, 1220, 871, 607, 84, 204],
            spanGaps: false,
        }
    ]
}
});
