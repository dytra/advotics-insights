import React, { useEffect } from "react";
import { Chart } from "chart.js";
const Insights = ({ purchasingDataset }) => {
  const randomScalingFactor = function() {
    return Math.floor(Math.random(-100, 100) * 100);
  };

  window.chartColors = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(255, 205, 86)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)",
    purple: "rgb(153, 102, 255)",
    grey: "rgb(201, 203, 207)"
  };
  useEffect(() => {
    console.log("purchasing datasets is");
    console.log(purchasingDataset);
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Nett",
            backgroundColor: window.chartColors.red,
            data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor()
            ]
          },
          {
            label: "Apv",
            backgroundColor: window.chartColors.blue,
            data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor()
            ]
          },
          {
            label: "Lpt",
            backgroundColor: window.chartColors.green,
            data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor()
            ]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Chart.js Bar Chart - Stacked"
        },
        tooltips: {
          mode: "index",
          intersect: false
        },
        responsive: true,
        scales: {
          xAxes: [
            {
              stacked: true
            }
          ],
          yAxes: [
            {
              stacked: true
            }
          ]
        }
      }
    });
  }, []);
  return (
    <div id="insights">
      <div id="chart">
        <canvas id="myChart" />
      </div>

      <div id="best-sales">best sales</div>
    </div>
  );
};

export default Insights;
