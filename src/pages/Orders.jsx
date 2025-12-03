import React from 'react';

const Order = () => {
    return (
        <div className="bg-gray-500 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Orders
                </h2>
                <div className="space-y-4">
                
                    <div className="flex justify-between items-center bg-gray-200 p-4 rounded-lg shadow-sm">
                        <span className="text-lg font-medium text-gray-700">Order #001</span>
                        <span className="text-sm text-gray-500">Placed on: 2023-11-30</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-200 p-4 rounded-lg shadow-sm">
                        <span className="text-lg font-medium text-gray-700">Order #002</span>
                        <span className="text-sm text-gray-500">Placed on: 2023-11-29</span>
                    </div>
               
                </div>
            </div>
        </div>
    );
};

export default Order;
