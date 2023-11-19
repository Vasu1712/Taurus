import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export const options = {
  responsive: true,
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const DashboardGraph1 = () => {
  return (
    <div className="border rounded-lg p-4 shadow-md w-4/5 h-1/3">
      <Line options={options} data={data} className="w-full"/>
      {/* <h1 className="text-left mt-6 p-2 text-2xl font-semibold">Product Distribution</h1>
             <span className="text-left mt-6 p-2 text-sm font-light italic text-gray-400">Last Campaign Performance</span> */}
    </div>
  );
};

export default DashboardGraph1;
