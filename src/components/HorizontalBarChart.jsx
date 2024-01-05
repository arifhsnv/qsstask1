import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
function HorizontalBarChart({ countryData }) {
  const data = {
    labels: countryData.map((country) => country.country),
    datasets: [
      {
        label: "Country Rank",
        data: countryData.map((country) => country.rank),
        backgroundColor: "#61DBFB",
        color: "red",
      },
    ],
  };
  const options = {
    indexAxis: "y",
    layout: {
      padding: {
        left: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks: {
          align: "start",
          color: "rgba(255, 255, 255, 0)",
          font: {
            size: 12,
            weight: "bold",
            family: "'Arial', sans-serif",
          },
        },
      },
      x: {
        beginAtZero: true,
        ticks: {
          color: "rgba(255, 255, 255, 0)",
          font: {
            size: 12,
            weight: "bold",
            family: "'Arial', sans-serif",
          },
        },
      },
    },
  };

  return (
    <div >
      <Bar data={data} options={options}></Bar>
    </div>
  );
}

export default HorizontalBarChart;
