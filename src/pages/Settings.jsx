import React from 'react';

const Setting = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            {/* Wrapper for the form */}
            <div className="bg-green-500 p-8 rounded-lg shadow-xl w-full max-w-lg sm:max-w-3xl md:max-w-4xl lg:max-w-5xl">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
                    Settings
                </h2>
         
                <div className="space-y-6">
                    {/* Account Settings */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium text-gray-800 mb-4">Account Settings</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Username</label>
                                <input
                                    type="text"
                                    placeholder="Enter your username"
                                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Notification Settings */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium text-gray-800 mb-4">Notification Settings</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700">Email Notifications</span>
                                <input type="checkbox" className="h-5 w-5 text-blue-500" />
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700">SMS Notifications</span>
                                <input type="checkbox" className="h-5 w-5 text-blue-500" />
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700">Push Notifications</span>
                                <input type="checkbox" className="h-5 w-5 text-blue-500" />
                            </div>
                        </div>
                    </div>

                    {/* Privacy Settings */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-medium text-gray-800 mb-4">Privacy Settings</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700">Profile Visibility</span>
                                <select
                                    className="w-48 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option>Public</option>
                                    <option>Friends Only</option>
                                    <option>Private</option>
                                </select>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700">Search Engine Visibility</span>
                                <input type="checkbox" className="h-5 w-5 text-blue-500" />
                            </div>
                        </div>
                    </div>

                    {/* Save Changes Button */}
                    <div className="flex justify-center mt-6">
                        <button className="bg-gray-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 focus:outline-none">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setting;
