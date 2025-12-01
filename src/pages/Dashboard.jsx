import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
      {
        label: 'Revenue',
        data: [28, 48, 40, 19, 86, 27],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.1,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales & Revenue Overview',
      },
    },
  };


  const barChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Orders',
        data: [12, 19, 3, 5, 2, 3, 9],
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weekly Orders',
      },
    },
  };

  const doughnutData = {
    labels: ['Completed', 'Pending', 'Cancelled'],
    datasets: [
      {
        data: [70, 20, 10],
        backgroundColor: [
          'rgba(75, 192, 192, 0.8)',
          'rgba(255, 205, 86, 0.8)',
          'rgba(255, 99, 132, 0.8)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
   
      <header className="bg-white shadow">
     
          
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-6">
                    <div id="total" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-blue-500 rounded-lg p-6 text-white">
                            <h1 className="text-2xl font-bold">Pending Order</h1>
                            <p className="text-3xl font-bold mt-2">24</p>
                        </div>  
                        <div className="bg-green-500 rounded-lg p-6 text-white">
                            <h1 className="text-2xl font-bold">Delivered Order</h1>
                            <p className="text-3xl font-bold mt-2">156</p>
                        </div>  
                        <div className="bg-red-500 rounded-lg p-6 text-white">
                            <h1 className="text-2xl font-bold">Total Expense</h1>
                            <p className="text-3xl font-bold mt-2">$12,450</p>
                        </div>  
                        <div className="bg-purple-500 rounded-lg p-6 text-white">
                            <h1 className="text-2xl font-bold">Total Amount</h1>
                            <p className="text-3xl font-bold mt-2">$45,670</p>
                        </div>  
                    </div>
                </div>
            </header>
          
        </header>
  
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
     
          <div className="lg:w-2/3">
     
            <div id="dashboard-graph" className="bg-white shadow rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Sales Analytics</h2>
              <div className="h-80">
                <Line data={lineChartData} options={lineChartOptions} />
              </div>
            </div>

            <div className="bg-white shadow rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Order Statistics</h2>
              <div className="h-80">
                <Bar data={barChartData} options={barChartOptions} />
              </div>
            </div>
          </div>

  
          <div className="lg:w-1/3">
           
            <div className="bg-white shadow rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Order Status</h2>
              <div className="h-64">
                <Doughnut data={doughnutData} />
              </div>
            </div>

           
            <div id="recent-activities" className="bg-white shadow rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
           
                 <div className="space-y-4">
                                <div className="border-l-4 border-blue-500 pl-4 py-2">
                                    <p className="font-semibold">New order received</p>
                                    <p className="text-sm text-gray-500">2 hours ago</p>
                                </div>
                                <div className="border-l-4 border-green-500 pl-4 py-2">
                                    <p className="font-semibold">Order #1234 delivered</p>
                                    <p className="text-sm text-gray-500">4 hours ago</p>
                                </div>
                                <div className="border-l-4 border-yellow-500 pl-4 py-2">
                                    <p className="font-semibold">Payment received</p>
                                    <p className="text-sm text-gray-500">6 hours ago</p>
                                </div>
                                <div className="border-l-4 border-red-500 pl-4 py-2">
                                    <p className="font-semibold">New customer registered</p>
                                    <p className="text-sm text-gray-500">1 day ago</p>
                                </div>
                          
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;