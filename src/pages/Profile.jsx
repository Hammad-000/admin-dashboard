import React from 'react';

const Profile = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <div className="flex flex-col items-center space-y-4">
                    {/* Profile Picture */}
                    <img 
                        src="https://via.placeholder.com/150" 
                        alt="Profile"
                        className="w-32 h-32 rounded-full border-4 border-gray-200"
                    />
                    
                    {/* Name */}
                    <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>

                    {/* Bio */}
                    <p className="text-center text-gray-600 text-sm">
                        Frontend Developer | Passionate about creating beautiful and functional web experiences.
                    </p>

                    {/* Details */}
                    <div className="w-full mt-4 space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Email:</span>
                            <span className="text-gray-800">johndoe@example.com</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Location:</span>
                            <span className="text-gray-800">San Francisco, CA</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Joined:</span>
                            <span className="text-gray-800">March 2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
