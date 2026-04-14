import { Chart, ChartConfiguration, ChartType, registerables } from "chart.js";
import { RefObject } from "react";

Chart.register(...registerables);

interface ChartDataProps {
    chartRef: RefObject<HTMLCanvasElement | null>;
    data?: ChartConfiguration<ChartType>["data"];
    options?: ChartConfiguration<ChartType>["options"];
    type?: ChartType;
}

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
            position: "top",
          },
          title: {
            display: true,
            text: "Progreso Financiero Mensual",
          },
        },
      },
    });
  }
}

export default createChart;
