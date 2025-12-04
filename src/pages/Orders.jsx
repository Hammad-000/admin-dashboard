import React from 'react';
import { CheckCircle, Package, Truck, ChevronRight, Calendar, DollarSign } from 'lucide-react';

const Orders = () => {
    const orders = [
        {
            id: "#001",
            date: "2023-11-30",
            status: "Delivered",
            amount: "$89.99",
            items: 3,
            tracking: "TRK123456789",
            itemsList: ["Wireless Headphones", "Phone Case", "USB Cable"]
        },
        {
            id: "#002",
            date: "2023-11-29",
            status: "Shipped",
            amount: "$124.50",
            items: 2,
            tracking: "TRK987654321",
            itemsList: ["Smart Watch", "Screen Protector"]
        },
        {
            id: "#003",
            date: "2023-11-28",
            status: "Processing",
            amount: "$45.75",
            items: 1,
            tracking: "Pending",
            itemsList: ["Wireless Earbuds"]
        },
        {
            id: "#004",
            date: "2023-11-25",
            status: "Delivered",
            amount: "$210.00",
            items: 4,
            tracking: "TRK456123789",
            itemsList: ["Laptop Stand", "Keyboard", "Mouse", "Webcam"]
        }
    ];

    const getStatusColor = (status) => {
        switch(status) {
            case 'Delivered': return 'bg-green-100 text-green-800';
            case 'Shipped': return 'bg-blue-100 text-blue-800';
            case 'Processing': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusIcon = (status) => {
        switch(status) {
            case 'Delivered': return <CheckCircle className="w-5 h-5" />;
            case 'Shipped': return <Truck className="w-5 h-5" />;
            default: return <Package className="w-5 h-5" />;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">Order History</h1>
                    <p className="text-gray-600">Track and manage all your orders in one place</p>
                </div>

                {/* Stats Card */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center">
                            <div className="bg-blue-50 p-3 rounded-lg mr-4">
                                <Package className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Total Orders</p>
                                <p className="text-2xl font-bold text-gray-900">4</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center">
                            <div className="bg-green-50 p-3 rounded-lg mr-4">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Delivered</p>
                                <p className="text-2xl font-bold text-gray-900">2</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center">
                            <div className="bg-purple-50 p-3 rounded-lg mr-4">
                                <DollarSign className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Total Spent</p>
                                <p className="text-2xl font-bold text-gray-900">$470.24</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Orders List */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                    <div className="px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-800">
                        <h2 className="text-xl font-semibold text-white">Recent Orders</h2>
                    </div>
                    
                    <div className="divide-y divide-gray-100">
                        {orders.map((order) => (
                            <div key={order.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center">
                                                <h3 className="text-lg font-semibold text-gray-900 mr-3">
                                                    Order {order.id}
                                                </h3>
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(order.status)}`}>
                                                    {getStatusIcon(order.status)}
                                                    {order.status}
                                                </span>
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-gray-400 lg:hidden" />
                                        </div>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                            <div className="flex items-center text-gray-600">
                                                <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                                                <span className="text-sm">Placed on {order.date}</span>
                                            </div>
                                            <div className="flex items-center text-gray-600">
                                                <DollarSign className="w-4 h-4 mr-2 text-gray-400" />
                                                <span className="text-sm font-medium">Total: {order.amount}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="mb-4">
                                            <p className="text-sm text-gray-500 mb-2">Items:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {order.itemsList.map((item, index) => (
                                                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm text-gray-500">
                                                {order.items} item{order.items > 1 ? 's' : ''} • Tracking: {order.tracking}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="lg:pl-6 lg:border-l lg:border-gray-200">
                                        <button className="w-full lg:w-auto bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center lg:justify-start gap-2">
                                            View Details
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                        <button className="w-full lg:w-auto mt-3 lg:mt-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                                            Track Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Footer */}
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600">
                                Showing {orders.length} of 4 orders
                            </p>
                            <button className="text-gray-900 hover:text-gray-700 font-medium">
                                View All Orders →
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Help Section */}
                <div className="mt-8 text-center">
                    <p className="text-gray-600 text-sm">
                        Need help? <a href="#" className="text-gray-900 font-medium hover:underline">Contact Support</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Orders;