import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options: any = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: true,
      color: "#EA8F24",
      formatter: Math.round,
      anchor: "end",
      offset: -12,
      align: "start",
      size: 14,
      labels: {
        title: {
          font: {
            weight: "bold",
            size: 10,
          },
        },
      },
    },
  },
};

interface OrderStatisticChartProps {
  labels: string[];
  data: number[];
}

const OrderStatisticChart = ({ labels, data }: OrderStatisticChartProps) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Statistics",
        data,
        backgroundColor: "#6CAFFE",
        borderWidth: 5,
        borderColor: "transparent",
      },
    ],
  };
  return (
    <div className="tw-mt-4 tw-bg-white tw-px-8 tw-py-3 tw-h-[350px]">
      <div className="tw-flex tw-items-center tw-justify-between tw-mb-3">
        <h3 className="tw-font-medium tw-text-[#262626] ">
          Biểu đồ thống kê đơn hàng ở mỗi cửa hàng
        </h3>

        <div className="tw-flex tw-items-center tw-gap-[6px] tw-text-[10px]">
          <div className="tw-w-[35px] tw-h-[12px] tw-rounded-xl tw-bg-[#6CAFFE]"></div>
          Customers
        </div>
      </div>
      <Bar options={options} plugins={[ChartDataLabels]} data={chartData} />
    </div>
  );
};

export default OrderStatisticChart;
