import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Order from './pages/Orders';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import './App.css';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { MdOutlineDashboard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6"; 
import { AiOutlineUserAdd } from "react-icons/ai";
import Data from './pages/Data';



function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <nav className="w-1/5 h-full bg-gray-800 text-white">
          <ul className="flex flex-col p-5 gap-3">
            <li className='text-center'>
              <Link to="/dashboard" className="p-3 flex justify-center items-center rounded-lg hover:bg-yellow-600 border transition duration-300">
                Dashboard
                <MdOutlineDashboard className="ml-2 space-x-1" />
              </Link>
            </li>
            <li>
              <Link to="/orders" className="flex p-3 rounded-lg justify-center items-center hover:bg-yellow-600 border transition duration-300">
                Orders
                <FaCartShopping className="ml-2 space-x-1" />
                </Link>
            </li>
            <li>
              <Link to="/profile" className="flex p-3 rounded-lg justify-center items-center hover:bg-yellow-600 border transition duration-300">
                Profile 
                <FaUserTie className="ml-2 space-x-1" />
                </Link>
            </li>
            <li>
              <Link to="/data" className="flex p-3 rounded-lg justify-center items-center hover:bg-yellow-600 border transition duration-300">
                Data 
                <FaUserTie className="ml-2 space-x-1" />
                </Link>
            </li>
            <li>
              <Link to="/settings" className="flex p-3 rounded-lg justify-center items-center hover:bg-yellow-600 border transition duration-300">
                Settings
                 <IoSettingsOutline className="ml-2 space-x-1" />
                 </Link>
            </li>
            <li>
              <Link to="/login" className=" flex p-3 rounded-lg justify-center items-center hover:bg-yellow-600 border transition duration-300">
                Login 
                <RiLoginCircleFill className="ml-2 space-x-1" />
                </Link>
            </li>
            <li>
              <Link to="/signup" className="flex p-3 rounded-lg justify-center items-center hover:bg-yellow-600  border transition duration-300">
                Signup 
               <AiOutlineUserAdd className="ml-2 space-x-1" />
                </Link>
            </li>

          </ul>


        </nav>

        <div className="flex-1 p-5 bg-gray-100">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={< Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/data" element={<Data />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;