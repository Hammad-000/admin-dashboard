import React from 'react';

const Signup = () => {
    return (
        <div className='  justify-center flex p-10 '   >
            <div className=' flex text-center  flex-col gap-4 w-3/6  ' >

            <h2 className=' text-white p-3 rounded-lg bg-gray-800'>Enter Details to Signup</h2>
            
            <input className=' p-3  border-2 rounded-lg  ' placeholder='Name !'  type="text" />
            <input className=' p-3  border-2 rounded-lg  ' placeholder='Enter email !'  type="email" />
            <input className=' p-3  border-2 rounded-lg  ' placeholder='Age  !'  type="number" />
            <input className=' p-3  border-2 rounded-lg  ' placeholder='Enter Password !'  type="password" />
            <button className=' p-3 bg-gray-800 rounded-lg text-white font-semibold hover:bg-gray-900'>Sign Up</button>

            </div>
        </div>
    );
};

export default Signup;  