import React, { useState, useEffect } from 'react';
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
  Filler,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  TrendingUp,
  TrendingDown,
  Package,
  DollarSign,
  ShoppingCart,
  Users,
  Activity,
  CheckCircle,
  Clock,
  XCircle,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
);

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('monthly');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Stats data
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,670',
      change: '+12.5%',
      trend: 'up',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      chartColor: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Total Orders',
      value: '1,245',
      change: '+8.2%',
      trend: 'up',
      icon: <ShoppingCart className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      chartColor: 'from-green-500 to-green-600',
    },
    {
      title: 'Pending Orders',
      value: '24',
      change: '-3.1%',
      trend: 'down',
      icon: <Package className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-amber-500 to-amber-600',
      chartColor: 'from-amber-500 to-amber-600',
    },
    {
      title: 'Active Customers',
      value: '892',
      change: '+5.7%',
      trend: 'up',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      chartColor: 'from-purple-500 to-purple-600',
    },
  ];

  // Line Chart Data
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [55000, 65000, 78000, 72000, 86000, 95000, 89000, 92000, 98000, 105000, 112000, 125000],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 4,
      },
      {
        label: 'Orders',
        data: [280, 340, 400, 380, 420, 450, 430, 460, 490, 520, 550, 580],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: 'rgb(16, 185, 129)',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#1f2937',
        bodyColor: '#4b5563',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        padding: 12,
        boxPadding: 4,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6b7280',
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          color: '#6b7280',
          callback: function(value) {
            return '$' + value.toLocaleString();
          },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'nearest',
    },
  };

  // Bar Chart Data
  const barChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Orders',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 0,
        borderRadius: 6,
        borderSkipped: false,
      },
      {
        label: 'Returns',
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: 'rgba(239, 68, 68, 0.8)',
        borderColor: 'rgba(239, 68, 68, 1)',
        borderWidth: 0,
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6b7280',
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          color: '#6b7280',
          stepSize: 20,
        },
      },
    },
  };

  // Doughnut Chart Data
  const doughnutData = {
    labels: ['Completed', 'Pending', 'Cancelled', 'Processing'],
    datasets: [
      {
        data: [65, 18, 2, 15],
        backgroundColor: [
          'rgba(16, 185, 129, 0.9)',
          'rgba(245, 158, 11, 0.9)',
          'rgba(239, 68, 68, 0.9)',
          'rgba(59, 130, 246, 0.9)',
        ],
        borderColor: [
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(59, 130, 246, 1)',
        ],
        borderWidth: 2,
        borderRadius: 10,
        spacing: 4,
        cutout: '75%',
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            size: 12,
          },
        },
      },
    },
    cutout: '75%',
  };

  // Recent Activities
  const recentActivities = [
    {
      id: 1,
      type: 'order',
      title: 'New order received',
      description: 'Order #ORD-7891 from John Smith',
      time: '2 hours ago',
      icon: <ShoppingCart className="w-5 h-5" />,
      color: 'text-blue-600 bg-blue-50',
    },
    {
      id: 2,
      type: 'delivery',
      title: 'Order delivered',
      description: 'Order #ORD-7890 delivered successfully',
      time: '4 hours ago',
      icon: <CheckCircle className="w-5 h-5" />,
      color: 'text-green-600 bg-green-50',
    },
    {
      id: 3,
      type: 'payment',
      title: 'Payment received',
      description: '$1,250 payment received via Stripe',
      time: '6 hours ago',
      icon: <DollarSign className="w-5 h-5" />,
      color: 'text-purple-600 bg-purple-50',
    },
    {
      id: 4,
      type: 'customer',
      title: 'New customer registered',
      description: 'Jane Doe registered as new customer',
      time: '1 day ago',
      icon: <Users className="w-5 h-5" />,
      color: 'text-amber-600 bg-amber-50',
    },
    {
      id: 5,
      type: 'return',
      title: 'Product returned',
      description: 'Order #ORD-7885 returned',
      time: '2 days ago',
      icon: <XCircle className="w-5 h-5" />,
      color: 'text-red-600 bg-red-50',
    },
  ];

  // Top Products
  const topProducts = [
    { id: 1, name: 'Pizza', sales: 245, revenue: '$12,250', growth: '+15%' },
    { id: 2, name: 'Burger', sales: 189, revenue: '$9,450', growth: '+22%' },
    { id: 3, name: 'Fries', sales: 167, revenue: '$8,350', growth: '+8%' },
    { id: 4, name: 'Pasta', sales: 134, revenue: '$6,700', growth: '+12%' },
    { id: 5, name: 'Shawarma', sales: 98, revenue: '$4,900', growth: '+5%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your store today.</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-sm">
              <Activity className="w-4 h-4 text-gray-500" />
              <select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="bg-transparent border-none focus:outline-none text-gray-700"
              >
                <option value="weekly">Last 7 days</option>
                <option value="monthly">This month</option>
                <option value="quarterly">This quarter</option>
                <option value="yearly">This year</option>
              </select>
            </div>
            <button className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="text-sm font-medium text-gray-700">Export Report</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.color} text-white`}>
                  {stat.icon}
                </div>
                <div className={`flex items-center ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.trend === 'up' ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                  <span className="text-sm font-medium">{stat.change}</span>
                </div>
              </div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-900 mb-4">{stat.value}</p>
              <div className="h-1 w-full bg-gradient-to-r from-gray-200 to-gray-200 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${stat.chartColor} w-3/4 rounded-full`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Revenue & Orders Overview</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg">
                  Revenue
                </button>
                <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
                  Orders
                </button>
              </div>
            </div>
            <div className="h-80">
              <Line data={lineChartData} options={lineChartOptions} />
            </div>
          </div>

          {/* Doughnut Chart */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Order Status</h2>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                View Details →
              </button>
            </div>
            <div className="h-64">
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">65%</p>
                <p className="text-sm text-gray-600">Completed</p>
              </div>
              <div className="text-center p-3 bg-amber-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">15%</p>
                <p className="text-sm text-gray-600">Pending</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Bar Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Weekly Performance</h2>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Orders</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Returns</span>
                </div>
              </div>
            </div>
            <div className="h-72">
              <Bar data={barChartData} options={barChartOptions} />
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recent Activities</h2>
              <button className="text-sm font-medium text-gray-500 hover:text-gray-700">
                See All
              </button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className={`p-2 rounded-lg ${activity.color}`}>
                    {activity.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{activity.title}</p>
                    <p className="text-sm text-gray-500 truncate">{activity.description}</p>
                  </div>
                  <div className="text-xs text-gray-400 whitespace-nowrap">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Top Products</h2>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
              View All Products →
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-gray-500 border-b">
                  <th className="pb-3">Product</th>
                  <th className="pb-3">Sales</th>
                  <th className="pb-3">Revenue</th>
                  <th className="pb-3">Growth</th>
                  <th className="pb-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50 last:border-0">
                    <td className="py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mr-3"></div>
                        <span className="font-medium text-gray-900">{product.name}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{ width: `${(product.sales / 300) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-900">{product.sales}</span>
                      </div>
                    </td>
                    <td className="py-4 text-gray-900 font-medium">{product.revenue}</td>
                    <td className="py-4">
                      <span className={`inline-flex items-center ${product.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {product.growth.startsWith('+') ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                        {product.growth}
                      </span>
                    </td>
                    <td className="py-4">
                      <button className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;