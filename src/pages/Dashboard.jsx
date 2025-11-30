import React from 'react';

const Dashboard = () => {
    return (
        <header  className="bg-gray-200 shadow">
         <div id="total" className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">Pending Order</h1>
            </div>  
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">Delivered Order</h1>
            </div>  
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">Total Expense </h1>
            </div>  
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900">Total Amount</h1>
            </div>  





         </div>

        </header>
    );
};

export default Dashboard;