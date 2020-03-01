import React, { useEffect, useState } from "react";
import { Chart } from "chart.js";
import { dataset2chart, filterDataset, getDatasetLabels } from "../utils";
import Card from "./Card.js";
import ListProducts from "./ListProducts";
import FilterPeriod from "./FilterPeriod";
import salesTurnover from "../assets/sales-turnover.svg";
const Insights = ({ purchasingDataset, purchasingFields, bestSellingDataset, topCompetitorDataset, expanded, setExpanded, toggleExpand }) => {
  const [purchasingDataChart, setPurchasingDataChart] = useState(dataset2chart(purchasingDataset, purchasingFields));
  const [datasetLabels, setDatasetLabels] = useState([
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ]);
  const [myChart, setMyChart] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  window.chartColors = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(255, 205, 86)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)",
    purple: "rgb(153, 102, 255)",
    grey: "rgb(201, 203, 207)"
  };

  const filterPurchaseData = (filterMode) => {
    if (filterMode === 'TODAY' || filterMode === 'YESTERDAY' || filterMode === 'LAST_7_DAYS') {
      setAlertMessage('');
      const filteredDataSet = filterDataset({ dataset: purchasingDataset, filterMode, option: null });
      const datasetLabels = getDatasetLabels(filterMode);
      console.log('labels are');
      console.log(datasetLabels);
      const filteredDataChart = dataset2chart(filteredDataSet, purchasingFields);
      setPurchasingDataChart(filteredDataChart);
      setDatasetLabels(datasetLabels);
    } else {
      setAlertMessage('Sorry,   dataset visualization filtering currently available for today , yesterday, and last 7 days 😔');
    }
  }
  // var myChart;
  useEffect(() => {
    filterPurchaseData("LAST_7_DAYS");
  }, []);
  useEffect(() => {

    if (myChart) {
      myChart.destroy();
    }
    const canvas = document.getElementById("myChart");
    const ctx = canvas.getContext("2d");
    setMyChart(new Chart(ctx, {
      type: "bar",
      data: {
        labels: datasetLabels,
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
    }));
  }, [purchasingDataset, purchasingFields, purchasingDataChart]);
  return (
    <div className="page">
      <div className="page-header">
        <h1>Dashboard</h1>
        <div className="filterperiod-container">
          <FilterPeriod expanded={expanded} setExpanded={setExpanded} toggleExpand={toggleExpand} filterPurchaseData={filterPurchaseData} />
        </div>
      </div>

        <div className="greenbar">
          <h3>MARKET INSIGHTS</h3>
        </div>
      
        <div className="card sales-turnover">
          <div className="card-header">
            <p>Sales Turnover</p>

          </div>
          <div className="more-info">
            <div>
              <p class="sold-value">Rp 3,600,000</p>
              <p class="mini-info"><span class="text-red"><i class="fas fa-arrow-down"></i> 12.8%</span> last period in products sold</p>
            </div>
            <div><img src={salesTurnover} alt="sales turnover icon" /></div>
          </div>
        </div>

      <div id="insights">
        <div className="page-header">
        </div>
        <Card id="chart" title="AVERAGE PUCRCHASE VALUE">
          <canvas id="myChart" />
          {alertMessage && <p>{alertMessage}</p>}
        </Card>

        <Card id="best-sales" className="list-product-card" title="BEST SALES SKU">
          <ListProducts dataset={bestSellingDataset} />
        </Card>
        <Card id="top-competitor" className="list-product-card" title="TOP COMPETITOR SKU">
          <ListProducts dataset={topCompetitorDataset} />
        </Card>
      </div>

    </div>
  );
};

export default Insights;
