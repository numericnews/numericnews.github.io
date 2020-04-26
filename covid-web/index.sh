#!/bin/bash

cat > index.html <<EOF
<html>
<head>
    <link rel="stylesheet" href="./dist/dygraph.css">
<style>
#plotDiv {
  width: 80%;
  height: 90%;
  display: inline-block;
  vertical-align: top;
}
#legendDiv {
  display: inline-block;
  vertical-align: top;
}
#growthRatePlotDiv {
  width: 80%;
  height: 90%;
  display: inline-block;
  vertical-align: top;
}
#growthRateLegendDiv {
  display: inline-block;
  vertical-align: top;
}

</style>

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript" src="./dist/dygraph.js"></script>
    <script>

  // Darken a color
      function darkenColor(colorStr) {
        // Defined in dygraph-utils.js
        var color = Dygraph.toRGB_(colorStr);
        color.r = Math.floor((255 + color.r) / 2);
        color.g = Math.floor((255 + color.g) / 2);
        color.b = Math.floor((255 + color.b) / 2);
        return 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
      }

        // This function draws bars for a single series. See
    // multiColumnBarPlotter below for a plotter which can draw multi-series
    // bar charts.
    function barChartPlotter(e) {
        var ctx = e.drawingContext;
        var points = e.points;
        var y_bottom = e.dygraph.toDomYCoord(0);

        ctx.fillStyle = darkenColor(e.color);

        // Find the minimum separation between x-values.
        // This determines the bar width.
        var min_sep = Infinity;
        for (var i = 1; i < points.length; i++) {
            var sep = points[i].canvasx - points[i - 1].canvasx;
            if (sep < min_sep) min_sep = sep;
        }
        var bar_width = Math.floor(2.0 / 3 * min_sep);

        // Do the actual plotting.
        for (var i = 0; i < points.length; i++) {
            var p = points[i];
            var center_x = p.canvasx;

            ctx.fillRect(center_x - bar_width / 2, p.canvasy,
                bar_width, y_bottom - p.canvasy);

            ctx.strokeRect(center_x - bar_width / 2, p.canvasy,
                bar_width, y_bottom - p.canvasy);
        }
    }
        function legendFormatter(data) {
          if (data.x == null) {
            // This happens when there's no selection and {legend: 'always'} is set.
            return '<br>' + data.series.map(function(series) { return series.dashHTML + ' ' + series.labelHTML }).join('<br>');
          }

          var html = this.getLabels()[0] + ': ' + data.xHTML;
          data.series.forEach(function(series) {
            if (!series.isVisible) return;
            var labeledData = series.labelHTML + ': ' + series.yHTML;
            if (series.isHighlighted) {
              labeledData = '<b>' + labeledData + '</b>';
            }
            html += '<br>' + series.dashHTML + ' ' + labeledData;
          });
          return html;
        }

      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
EOF

node ./index.js "$@" >> index.html

cat >> index.html <<EOF
          for (let i = 1; i<plot.length; i++) {
            plot[i][0] = new Date(plot[i][0])
          }
          if ('numero provincie' in options && options['numero provincie'].plotter == "barChartPlotter") { // tbr: to be removed
            options['numero provincie'].plotter = barChartPlotter         // tbr:
          }                                                               // tbr:
          var data = new google.visualization.arrayToDataTable(plot);
          var g = new Dygraph.GVizChart(document.getElementById("plotDiv"));
          g.draw(data, { 
            legendFormatter: legendFormatter,
            // labelsSeparateLines: true,
            strokeWidth: 3,
            legend: 'always',
            labelsDiv: 'legendDiv',
            colorValue: 1,
            series: options,
            maxNumberWidth: 20
        });

/*
          for (let i = 1; i<growthRatePlot.length; i++) {
            growthRatePlot[i][0] = new Date(growthRatePlot[i][0])
          }
          var growthRateData = new google.visualization.arrayToDataTable(growthRatePlot);
          var g2 = new Dygraph.GVizChart(document.getElementById("growthRatePlotDiv"));
          g2.draw(growthRateData, { 
            legendFormatter: legendFormatter,
            // labelsSeparateLines: true,
            strokeWidth: 3,
            legend: 'always',
            labelsDiv: 'growthRateLegendDiv',
            colorValue: 1,
            digitsAfterDecimal: 4,
            series: growthRateOptions
        });
*/
       }
    </script>
EOF
cat >> index.html <<EOF

</head>

<body>
<div>
	<div id='plotDiv'><!-- Plotly chart will be drawn inside this DIV --></div>
	<div id='legendDiv'></div>
</div>
<div>
	<div id='growthRatePlotDiv'><!-- Plotly chart will be drawn inside this DIV --></div>
	<div id='growthRateLegendDiv'></div>
</div>
</body>

</html>

EOF
echo index.html ready

