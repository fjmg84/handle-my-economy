import { ChartConfiguration, ChartType, registerables } from "chart.js";
import { RefObject } from "react";

export interface ChartDataProps {
    chartRef: RefObject<HTMLCanvasElement | null>;
    data?: ChartConfiguration<ChartType>["data"];
    options?: ChartConfiguration<ChartType>["options"];
    type?: ChartType;
}