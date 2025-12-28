import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/outline';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Error = () => {
  const [progress, setProgress] = useState(0);

  // Animated chart data
  const chartData = {
    labels: ['Found', 'Not Found'],
    datasets: [
      {
        data: [progress, 100 - progress],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderColor: [
          'rgb(34, 197, 94)',
          'rgb(239, 68, 68)',
        ],
        borderWidth: 2,
        circumference: 270,
        rotation: 225,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      }
    },
    cutout: '75%',
  };

  // Animate progress
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 75) {
        setProgress(progress + 1);
      }
    }, 20);

    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-md w-full text-center">
        {/* Animated Chart */}
        <div className="relative w-64 h-64 mx-auto mb-8">
          <Doughnut data={chartData} options={chartOptions} />
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <div className="text-4xl font-bold text-gray-800">{progress}%</div>
            <div className="text-gray-600 text-sm">Pages Found</div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-6xl font-black text-gray-800 mb-4">
          404
        </h1>
        
        <h2 className="text-2xl font-bold text-gray-700 mb-3">
          Page Not in the Data
        </h2>
        
        <p className="text-gray-600 mb-10">
          This page isn't in our dataset. Most pages are found ({progress}%), 
          but this one seems to be in the missing {100 - progress}%.
        </p>

        {/* Back Button */}
        <Link
          to="/"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <HomeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span>Go to Dashboard</span>
        </Link>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border">
            <div className="text-lg font-bold text-red-600">{100 - progress}%</div>
            <div className="text-gray-600 text-sm">Not Found</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border">
            <div className="text-lg font-bold text-green-600">{progress}%</div>
            <div className="text-gray-600 text-sm">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;