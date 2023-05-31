import React from "react";
import "./Analytics.scss";
import { Heading } from "../../../../components";
import { Topbar } from "../../../../components/common";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
} from "chart.js";
const Analytics = () => {
  const lineGraphLabels = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  ChartJS.register(
    Tooltip,
    Legend,
    ArcElement,
    Title,
    LineElement,
    Filler,
    CategoryScale,
    LinearScale,
    PointElement
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <div className="analytics">
        <div className="analytics-container">
          <Topbar />
          <div className="mt-2" />
          <Heading className="secondry">Comapny analytics view</Heading>
          <div className="analytics-container-item">
            <div className="analytics-container-item-heading">
              <p>Impressions</p>
            </div>
            <div className="analytics-container-item-graph">
              <Line
                data={{
                  labels: lineGraphLabels,
                  datasets: [
                    {
                      data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 21, 18],
                      type: "line",
                      order: 1,
                      borderColor: "#01CAFD",
                      backgroundColor: "#01CAFD",
                      pointBackgroundColor: "#2B4465",
                      tension: 0.4,
                      fill: true,
                    },
                  ],
                }}
                options={options}
              ></Line>
            </div>
          </div>
          <div className="analytics-container-item m-5">
            <div className="analytics-container-item-heading">
              <p>Clicks</p>
            </div>
            <div className="analytics-container-item-graph">
              <Line
                data={{
                  labels: lineGraphLabels,
                  datasets: [
                    {
                      data: [10, 20, 30, 52, 51, 12, 31, 29, 11, 13, 21, 18],
                      type: "line",
                      order: 1,
                      borderColor: "#01CAFD",
                      backgroundColor: "#01CAFD",
                      pointBackgroundColor: "#2B4465",
                      tension: 0.4,
                      fill: true,
                    },
                  ],
                }}
                options={options}
              ></Line>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
