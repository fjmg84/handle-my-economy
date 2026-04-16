import { ChartDataProps } from "@/types/chart";
import { Chart, ChartType, registerables } from "chart.js";

Chart.register(...registerables);



function createChart({
  chartRef,
  type = "line",
  options,
  data = { datasets: [] },
}: ChartDataProps) {
  const ctx = chartRef.current;
  if (ctx) {
    const existing = Chart.getChart(ctx);
    if (existing) existing.destroy();
    new Chart(ctx, {
      type,
      data,
      options: {
        ...options,
        responsive: true,
        plugins: {
          legend: {
            labels: {
              font: {
                size: 12,
                weight: 900,
                
              },
             borderRadius: 5,
             boxWidth: 10,
             boxHeight: 10,
            },
            position: "bottom",
          },
        },
      },
    });
  }
}

export default createChart;
