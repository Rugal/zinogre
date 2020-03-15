import Chart from "chart.js";
import React, { RefObject, useEffect } from "react";

const Diagram: React.FC = () => {
  const ref: RefObject<any> = React.createRef();
  useEffect(() => {
    const ctx = ref.current.getContext("2d");
    const c = new Chart(ctx, {
      data: {
        // Bring in data
        datasets: [
          {
            data: [86, 67, 91],
            label: "Sales",
          },
        ],
        labels: ["Jan", "Feb", "March"],
      },
      options: {
        // Customize chart options
      },
      type: "line",
    });
  });

  return (
    <canvas ref={ref} />
  );
};

export default Diagram;
