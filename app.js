// bar chart setup
var ctx = document.getElementById("lineChart").getContext("2d");
var lineChartOptions = { pointDot: false, datasetStroke: true, datasetFill: false, scaleShowGridLines : false }
var lineChart = new Chart(ctx).Line(vicPopGrowth, lineChartOptions);

document.getElementById("lineChart").onclick = function(event) {
    var activePoints = lineChart.getPointsAtEvent(event);
    console.log(activePoints)
};

// bar chart setup
var ctx = document.getElementById("barChart").getContext("2d");
var myBarChart = new Chart(ctx).Bar(chartData, {});

