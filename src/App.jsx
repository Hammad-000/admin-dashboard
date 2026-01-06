import { BrowserRouter, Route, Routes, Link, useLocation, Navigate } from 'react-router-dom';
import Order from './pages/Orders';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddData from './pages/AddData';
import Data from './pages/Data';
import Error from './pages/Error';
import './App.css';
import { 
  MdOutlineDashboard,
  MdOutlineShoppingCart,
  MdOutlinePerson,
  MdOutlineSettings,
  MdOutlineLogout,
  MdOutlineInventory,
  MdOutlineAddBox,
  MdOutlineAnalytics
} from "react-icons/md";
import { 
  RiLoginCircleFill,
  RiUserAddLine,
  RiArrowLeftRightLine 
} from "react-icons/ri";
import { 
  FaChartLine,
  FaDatabase,
  FaBell
} from "react-icons/fa";
import { useState, useEffect } from 'react';

// NavItem Component for better organization
const NavItem = ({ to, icon: Icon, label, isActive, isCollapsed }) => {
  return (
    <Link 
      to={to} 
      className={`
        flex items-center p-3 rounded-xl transition-all duration-200
        ${isActive 
          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' 
          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
        }
        ${isCollapsed ? 'justify-center' : ''}
      `}
    >
      <Icon className={`${isCollapsed ? 'text-2xl' : 'text-xl'} ${isActive ? 'text-white' : ''}`} />
      {!isCollapsed && <span className="ml-3 font-medium">{label}</span>}
    </Link>
  );
};

// Sidebar Component
const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();
  
  const mainNavItems = [
    { to: "/dashboard", icon: MdOutlineDashboard, label: "Dashboard" },
    { to: "/orders", icon: MdOutlineShoppingCart, label: "Orders" },
    { to: "/data", icon: FaDatabase, label: "Data" },
    { to: "/adddata", icon: MdOutlineAddBox, label: "Add Data" },
    { to: "/profile", icon: MdOutlinePerson, label: "Profile" },
    { to: "/settings", icon: MdOutlineSettings, label: "Settings" },
  ];

  const secondaryNavItems = [
    { to: "/login", icon: RiLoginCircleFill, label: "Login" },
    { to: "/signup", icon: RiUserAddLine, label: "Sign Up" },
  ];

  return (
    <div className={`bg-gray-900 text-white flex flex-col transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      {/* Logo/Brand */}
      <div className="p-6 border-b border-gray-800">
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          {!isCollapsed ? (
            <>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <FaChartLine className="text-white text-lg" />
                </div>
                <h1 className="ml-3 text-xl font-bold">Dashboard<span className="text-blue-400">Pro</span></h1>
              </div>
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <RiArrowLeftRightLine className="text-gray-400" />
              </button>
            </>
          ) : (
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto">
              <FaChartLine className="text-white text-lg" />
            </div>
          )}
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 p-4 space-y-2">
        <div className={`px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider ${isCollapsed ? 'hidden' : ''}`}>
          Main Menu
        </div>
        
        {mainNavItems.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            icon={item.icon}
            label={item.label}
            isActive={location.pathname === item.to}
            isCollapsed={isCollapsed}
          />
        ))}
      </div>

      {/* Secondary Navigation */}
      <div className="p-4 border-t border-gray-800 space-y-2">
        <div className={`px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider ${isCollapsed ? 'hidden' : ''}`}>
          Account
        </div>
        
        {secondaryNavItems.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            icon={item.icon}
            label={item.label}
            isActive={location.pathname === item.to}
            isCollapsed={isCollapsed}
          />
        ))}
        
        {/* Logout Button */}
        <button className={`
          flex items-center w-full p-3 rounded-xl text-gray-300 
          hover:bg-gray-800 hover:text-white transition-all duration-200
          ${isCollapsed ? 'justify-center' : ''}
        `}>
          <MdOutlineLogout className={isCollapsed ? 'text-2xl' : 'text-xl'} />
          {!isCollapsed && <span className="ml-3 font-medium">Logout</span>}
        </button>
      </div>

      {/* User Profile */}
      <div className={`p-4 border-t border-gray-800 ${isCollapsed ? 'hidden' : ''}`}>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <span className="text-white font-semibold">JD</span>
          </div>
          <div className="ml-3">
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-gray-400">Administrator</p>
          </div>
          <button className="ml-auto p-2 rounded-lg hover:bg-gray-800">
            <FaBell className="text-gray-400" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Content Component
const MainContent = ({ children, isCollapsed }) => {
  const location = useLocation();
  
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/dashboard') return 'Dashboard';
    if (path === '/orders') return 'Orders';
    if (path === '/data') return 'Data';
    if (path === '/adddata') return 'Add Data';
    if (path === '/profile') return 'Profile';
    if (path === '/settings') return 'Settings';
    if (path === '/login') return 'Login';
    if (path === '/signup') return 'Sign Up';
    return 'Page';
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{getPageTitle()}</h1>
              <p className="text-gray-600 text-sm mt-1">
                Welcome back! Here's what's happening today.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <MdOutlineSettings className="text-gray-600 text-xl" />
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200">
                New Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 px-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-sm">
            © 2024 DashboardPro. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 text-sm hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="text-gray-600 text-sm hover:text-blue-600">Terms of Service</a>
            <a href="#" className="text-gray-600 text-sm hover:text-blue-600">Help Center</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Change based on auth state

  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <MainContent isCollapsed={isCollapsed}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/data" element={<Data />} />
            <Route path="/adddata" element={<AddData />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </MainContent>
      </div>
    </BrowserRouter>
  );
}

export default App;