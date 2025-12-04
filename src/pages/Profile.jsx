import React from 'react';

const Profile = () => {
    return (
        <div className="min-h-screen bg-gray-700 flex items-center justify-center">
            <div className="bg-white border p-8 rounded-lg shadow-xl w-full max-w-md">
                <div className="flex flex-col items-center space-y-4">
                  
                    <img 
                        src="/public/images/office-boy-in-photo_10993810.jpg!bw700" 
                        alt="Profile"
                        className="w-32 h-32 rounded-full border-4 border-gray-200"
                    />
                    
             
                    <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>

            
                    <p className="text-center text-gray-600 text-sm">
                        Frontend Developer | Passionate about creating beautiful and functional web experiences.
                    </p>

        
                    <div className="w-full mt-4 space-y-3">



                        <div className="flex justify-between">
                            <span className="text-gray-600">Name:</span>
                            <span className="text-gray-800">John Doe</span>
                        </div>


                        <div className="flex justify-between">
                            <span className="text-gray-600">Role:</span>
                            <span className="text-gray-800">Assistant Manager</span>
                        </div>

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
                            <span className="text-gray-800">March 2020</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
