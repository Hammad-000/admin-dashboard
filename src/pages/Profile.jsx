import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  MapPin, 
  Calendar, 
  Briefcase, 
  Phone, 
  Globe, 
  Edit, 
  Shield, 
  Award,
  BarChart,
  Users,
  FileText,
  Settings,
  LogOut,
  Camera,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    role: 'Assistant Manager',
    email: 'johndoe@example.com',
    location: 'San Francisco, CA',
    joined: 'March 2020',
    phone: '+1 (555) 123-4567',
    website: 'johndoe.dev',
    bio: 'Frontend Developer | Passionate about creating beautiful and functional web experiences.',
    department: 'Engineering',
    reportsTo: 'Sarah Johnson',
    employeeId: 'EMP-78910',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'UI/UX Design'],
  });

  const stats = [
    { label: 'Present', value: "24/30", icon: <CheckCircle className="w-5 h-5" />, color: 'text-green-500' },
    { label: 'Team Members', value: 30, icon: <Users className="w-5 h-5" />, color: 'text-blue-500' },
    { label: 'Active Tasks', value: 12, icon: <FileText className="w-5 h-5" />, color: 'text-amber-500' },
    { label: 'Performance', value: '93%', icon: <TrendingUp className="w-5 h-5" />, color: 'text-purple-500' },
  ];

  const activities = [
    { id: 1, action: 'Completed project dashboard', time: '2 hours ago', type: 'project' },
    { id: 2, action: 'Updated user settings', time: '4 hours ago', type: 'settings' },
    { id: 3, action: 'Team meeting', time: '1 day ago', type: 'meeting' },
    { id: 4, action: 'Code review completed', time: '2 days ago', type: 'review' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-600 mt-2">Manage your profile and account settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Profile Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 pt-8">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-white p-1">
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                        <User className="w-16 h-16 text-blue-600" />
                      </div>
                    </div>
                    <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                      <Camera className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  
                  <div className="text-center mt-6">
                    <h2 className="text-2xl font-bold text-white">{profile.name}</h2>
                    <div className="flex items-center justify-center mt-2">
                      <Briefcase className="w-4 h-4 text-blue-200 mr-2" />
                      <p className="text-blue-100">{profile.role}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-3 text-blue-500" />
                    <span>{profile.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 mr-3 text-green-500" />
                    <span>{profile.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3 text-red-500" />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Globe className="w-5 h-5 mr-3 text-purple-500" />
                    <span>{profile.website}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-3 text-amber-500" />
                    <span>Joined {profile.joined}</span>
                  </div>
                </div>

                {/* Bio */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <User className="w-5 h-5 mr-2 text-gray-500" />
                    About Me
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {profile.bio}
                  </p>
                </div>

                {/* Skills */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-gray-500" />
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 border-t border-gray-100">
                <button 
                  onClick={() => setIsEditing(!isEditing)}
                  className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium mb-3"
                >
                  <Edit className="w-5 h-5 mr-2" />
                  {isEditing ? 'Save Changes' : 'Edit Profile'}
                </button>
                <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-medium">
                  <LogOut className="w-5 h-5 mr-2" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Details */}
          <div className="lg:col-span-2">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
                    </div>
                    <div className={`p-3 rounded-xl ${stat.color.replace('text', 'bg')} bg-opacity-10`}>
                      <div className={stat.color}>
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Professional Details</h3>
                <Settings className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-blue-50 rounded-lg mr-4">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Department</p>
                      <p className="font-medium text-gray-900">{profile.department}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-green-50 rounded-lg mr-4">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Employee ID</p>
                      <p className="font-medium text-gray-900">{profile.employeeId}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-purple-50 rounded-lg mr-4">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Reports To</p>
                      <p className="font-medium text-gray-900">{profile.reportsTo}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-amber-50 rounded-lg mr-4">
                      <BarChart className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Performance Rating</p>
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="font-medium text-gray-900">4.8/5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Recent Activity</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View All
                </button>
              </div>
              
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                      activity.type === 'project' ? 'bg-green-50' :
                      activity.type === 'settings' ? 'bg-blue-50' :
                      activity.type === 'meeting' ? 'bg-purple-50' : 'bg-amber-50'
                    }`}>
                      {activity.type === 'project' && <CheckCircle className="w-5 h-5 text-green-600" />}
                      {activity.type === 'settings' && <Settings className="w-5 h-5 text-blue-600" />}
                      {activity.type === 'meeting' && <Users className="w-5 h-5 text-purple-600" />}
                      {activity.type === 'review' && <FileText className="w-5 h-5 text-amber-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <button className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-200 text-center group">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 transition-colors">
                  <User className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-900">Update Profile</span>
              </button>
              
              <button className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-200 text-center group">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-green-600 transition-colors">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-900">Privacy</span>
              </button>
              
              <button className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-200 text-center group">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-600 transition-colors">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-900">Team</span>
              </button>
              
              <button className="p-4 bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl hover:from-amber-100 hover:to-amber-200 transition-all duration-200 text-center group">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-600 transition-colors">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-900">Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;