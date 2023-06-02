import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["More than 7 days", "Less than a week"],
  datasets: [
    {
      label: "% of open roles",
      data: [15, 85],
      backgroundColor: ["rgba(153, 102, 255, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(153, 102, 255, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

export function Chart() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "50%" }}>
        <Pie data={data} />
      </div>
    </div>
  );
}
