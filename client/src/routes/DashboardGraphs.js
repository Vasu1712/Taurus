import React from 'react';
import { Line } from 'react-chartjs-2';

const DashboardGraphs = () => {
  // Sample data for the charts
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales Chart 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
      // Add more datasets for additional charts
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex flex-row space-x-4 p-4">
      <div className="w-1/3">
        <Line data={data} options={options} />
      </div>
      <div className="w-1/3">
        {/* Add another chart component if needed */}
      </div>
      <div className="w-1/3">
        {/* Add another chart component if needed */}
      </div>
    </div>
  );
};

export default DashboardGraphs;
