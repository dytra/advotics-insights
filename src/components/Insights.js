import React, { useEffect } from "react";
import { Chart } from "chart.js";
import { dataset2chart } from "../utils";
import Card from "./Card.js";
import ListProducts from "./ListProducts.js";
const Insights = ({ purchasingDataset, purchasingFields, bestSellingDataset, topCompetitorDataset }) => {

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
    const purchasingDataChart = dataset2chart(purchasingDataset, purchasingFields);
    console.log('purchasing datachart');
    console.log(purchasingDataChart);
    const ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, {
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
        datasets: purchasingDataChart
      },
      options: {
        title: {
          display: true,
          text: "Average Purchase Value"
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
  }, [purchasingDataset, purchasingFields]);
  return (
    <div id="insights">
      <Card id="chart" title="AVERAGE PUCRCHASE VALUE">
        <canvas id="myChart" />
      </Card>

      <Card id="best-sales" className="list-product-card" title="BEST SALES SKU">
        <ListProducts dataset={bestSellingDataset} />
      </Card>
      <Card id="top-competitor" className="list-product-card" title="TOP COMPETITOR SKU">
        <ListProducts dataset={topCompetitorDataset} />
      </Card>
    </div>
  );
};

export default Insights;
