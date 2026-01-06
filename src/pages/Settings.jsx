import React, { useState } from 'react';
import { 
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Database,
  Eye,
  Mail,
  Lock,
  Smartphone,
  Download,
  Moon,
  Sun,
  EyeOff,
  Key,
  Cloud,
  AlertCircle,
  CheckCircle,
  Users,
  CreditCard,
  Zap,
  Globe2,
  Save,
  X
} from 'lucide-react';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('account');
  const [theme, setTheme] = useState('light');
  const [settings, setSettings] = useState({
    account: {
      username: 'john_doe',
      email: 'johndoe@example.com',
      name: 'John Doe',
      language: 'en',
      timezone: 'America/Los_Angeles',
    },
    notifications: {
      email: true,
      push: true,
      sms: false,
      marketing: false,
      security: true,
    },
    privacy: {
      profileVisibility: 'public',
      searchEngine: true,
      dataSharing: false,
      twoFactor: false,
      activityStatus: true,
    },
    appearance: {
      theme: 'light',
      fontSize: 'medium',
      density: 'comfortable',
      sidebar: 'expanded',
    },
    security: {
      sessionTimeout: 30,
      passwordAge: 90,
      loginAlerts: true,
      suspiciousActivity: true,
    }
  });

  const sections = [
    { id: 'account', label: 'Account', icon: User, description: 'Manage your account details' },
    { id: 'notifications', label: 'Notifications', icon: Bell, description: 'Configure notification preferences' },
    { id: 'privacy', label: 'Privacy', icon: Shield, description: 'Control your privacy settings' },
    { id: 'appearance', label: 'Appearance', icon: Palette, description: 'Customize look and feel' },
    { id: 'security', label: 'Security', icon: Lock, description: 'Security and login settings' },
    { id: 'billing', label: 'Billing', icon: CreditCard, description: 'Subscription and payments' },
    { id: 'integrations', label: 'Integrations', icon: Zap, description: 'Third-party connections' },
  ];

  const renderAccountSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={settings.account.username}
              onChange={(e) => setSettings({
                ...settings,
                account: { ...settings.account, username: e.target.value }
              })}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              value={settings.account.email}
              onChange={(e) => setSettings({
                ...settings,
                account: { ...settings.account, email: e.target.value }
              })}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            value={settings.account.name}
            onChange={(e) => setSettings({
              ...settings,
              account: { ...settings.account, name: e.target.value }
            })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={settings.account.language}
              onChange={(e) => setSettings({
                ...settings,
                account: { ...settings.account, language: e.target.value }
              })}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 appearance-none"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="jp">Japanese</option>
            </select>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Account Actions</h4>
        <div className="space-y-3">
          <button className="w-full text-left px-4 py-3 bg-red-50 text-red-700 rounded-xl hover:bg-red-100 transition-colors">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 mr-3" />
              <div>
                <p className="font-medium">Deactivate Account</p>
                <p className="text-sm">Temporarily disable your account</p>
              </div>
            </div>
          </button>
          <button className="w-full text-left px-4 py-3 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors">
            <div className="flex items-center">
              <Download className="w-5 h-5 mr-3" />
              <div>
                <p className="font-medium">Export Data</p>
                <p className="text-sm">Download all your data</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <h4 className="text-lg font-semibold text-gray-900">Notification Preferences</h4>
      <div className="space-y-4">
        {Object.entries(settings.notifications).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <div className="flex items-center">
              <Bell className="w-5 h-5 text-gray-500 mr-3" />
              <div>
                <p className="font-medium text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                <p className="text-sm text-gray-500">Receive {key} notifications</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={value}
                onChange={(e) => setSettings({
                  ...settings,
                  notifications: { ...settings.notifications, [key]: e.target.checked }
                })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Notification Frequency</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="px-4 py-3 bg-blue-50 text-blue-700 border border-blue-200 rounded-xl font-medium">
            Instant
          </button>
          <button className="px-4 py-3 bg-gray-50 text-gray-700 border border-gray-200 rounded-xl font-medium hover:bg-gray-100">
            Daily Digest
          </button>
          <button className="px-4 py-3 bg-gray-50 text-gray-700 border border-gray-200 rounded-xl font-medium hover:bg-gray-100">
            Weekly Summary
          </button>
        </div>
      </div>
    </div>
  );

  const renderPrivacySettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-xl">
          <label className="block text-sm font-medium text-gray-700 mb-2">Profile Visibility</label>
          <div className="relative">
            <Eye className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={settings.privacy.profileVisibility}
              onChange={(e) => setSettings({
                ...settings,
                privacy: { ...settings.privacy, profileVisibility: e.target.value }
              })}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 appearance-none"
            >
              <option value="public">Public (Everyone can see)</option>
              <option value="friends">Friends Only</option>
              <option value="private">Private (Only me)</option>
            </select>
          </div>
        </div>

        <div className="space-y-3">
          {Object.entries(settings.privacy).slice(1).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center">
                {key === 'searchEngine' ? <Globe2 className="w-5 h-5 text-gray-500 mr-3" /> :
                 key === 'dataSharing' ? <Database className="w-5 h-5 text-gray-500 mr-3" /> :
                 key === 'twoFactor' ? <Key className="w-5 h-5 text-gray-500 mr-3" /> :
                 <Users className="w-5 h-5 text-gray-500 mr-3" />}
                <div>
                  <p className="font-medium text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                  <p className="text-sm text-gray-500">
                    {key === 'searchEngine' ? 'Allow search engines to index your profile' :
                     key === 'dataSharing' ? 'Share data with trusted third parties' :
                     key === 'twoFactor' ? 'Enable two-factor authentication' :
                     'Show when you are active'}
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) => setSettings({
                    ...settings,
                    privacy: { ...settings.privacy, [key]: e.target.checked }
                  })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Data & Privacy</h4>
        <div className="space-y-3">
          <button className="w-full text-left px-4 py-3 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors">
            <div className="flex items-center">
              <EyeOff className="w-5 h-5 mr-3" />
              <div>
                <p className="font-medium">View Privacy Policy</p>
                <p className="text-sm">Read our complete privacy policy</p>
              </div>
            </div>
          </button>
          <button className="w-full text-left px-4 py-3 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors">
            <div className="flex items-center">
              <Database className="w-5 h-5 mr-3" />
              <div>
                <p className="font-medium">Clear Browsing Data</p>
                <p className="text-sm">Remove cookies and cache</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Theme</h4>
          <div className="grid grid-cols-3 gap-4">
            <button 
              onClick={() => setTheme('light')}
              className={`p-4 rounded-xl border-2 ${theme === 'light' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}
            >
              <div className="flex flex-col items-center">
                <Sun className={`w-6 h-6 ${theme === 'light' ? 'text-blue-600' : 'text-gray-400'}`} />
                <span className="mt-2 text-sm font-medium">Light</span>
              </div>
            </button>
            <button 
              onClick={() => setTheme('dark')}
              className={`p-4 rounded-xl border-2 ${theme === 'dark' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}
            >
              <div className="flex flex-col items-center">
                <Moon className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-600' : 'text-gray-400'}`} />
                <span className="mt-2 text-sm font-medium">Dark</span>
              </div>
            </button>
            <button 
              onClick={() => setTheme('auto')}
              className={`p-4 rounded-xl border-2 ${theme === 'auto' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}
            >
              <div className="flex flex-col items-center">
                <SettingsIcon className={`w-6 h-6 ${theme === 'auto' ? 'text-blue-600' : 'text-gray-400'}`} />
                <span className="mt-2 text-sm font-medium">Auto</span>
              </div>
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Font Size</h4>
          <div className="space-y-3">
            {['Small', 'Medium', 'Large'].map((size) => (
              <button
                key={size}
                className={`w-full px-4 py-3 rounded-xl text-left ${settings.appearance.fontSize === size.toLowerCase() ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setSettings({
                  ...settings,
                  appearance: { ...settings.appearance, fontSize: size.toLowerCase() }
                })}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Density</h4>
        <div className="grid grid-cols-3 gap-4">
          {['Compact', 'Comfortable', 'Relaxed'].map((density) => (
            <button
              key={density}
              className={`p-4 rounded-xl border-2 ${settings.appearance.density === density.toLowerCase() ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}
              onClick={() => setSettings({
                ...settings,
                appearance: { ...settings.appearance, density: density.toLowerCase() }
              })}
            >
              <div className="text-center">
                <span className="text-sm font-medium">{density}</span>
                <p className="text-xs text-gray-500 mt-1">More spacing</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-xl">
          <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
          <input
            type="range"
            min="5"
            max="120"
            value={settings.security.sessionTimeout}
            onChange={(e) => setSettings({
              ...settings,
              security: { ...settings.security, sessionTimeout: parseInt(e.target.value) }
            })}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>5 min</span>
            <span className="font-medium">{settings.security.sessionTimeout} min</span>
            <span>120 min</span>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-xl">
          <label className="block text-sm font-medium text-gray-700 mb-2">Password Age (days)</label>
          <input
            type="range"
            min="30"
            max="365"
            value={settings.security.passwordAge}
            onChange={(e) => setSettings({
              ...settings,
              security: { ...settings.security, passwordAge: parseInt(e.target.value) }
            })}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>30 days</span>
            <span className="font-medium">{settings.security.passwordAge} days</span>
            <span>365 days</span>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Security Features</h4>
        <div className="space-y-3">
          {Object.entries(settings.security).slice(2).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-gray-500 mr-3" />
                <div>
                  <p className="font-medium text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                  <p className="text-sm text-gray-500">
                    {key === 'loginAlerts' ? 'Get alerts for new logins' : 'Monitor suspicious activity'}
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) => setSettings({
                    ...settings,
                    security: { ...settings.security, [key]: e.target.checked }
                  })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Active Sessions</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
            <div className="flex items-center">
              <Smartphone className="w-5 h-5 text-green-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Chrome on MacOS</p>
                <p className="text-sm text-gray-500">San Francisco, CA • Current session</p>
              </div>
            </div>
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <button className="w-full text-left px-4 py-3 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors">
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-3" />
              <div>
                <p className="font-medium">View All Sessions</p>
                <p className="text-sm">Manage all active devices</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'account': return renderAccountSettings();
      case 'notifications': return renderNotificationSettings();
      case 'privacy': return renderPrivacySettings();
      case 'appearance': return renderAppearanceSettings();
      case 'security': return renderSecuritySettings();
      default: return renderAccountSettings();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account settings and preferences</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    <SettingsIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">Settings</h2>
                    <p className="text-sm text-gray-500">Configuration Center</p>
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center p-3 rounded-xl transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      <div className="text-left">
                        <p className="font-medium">{section.label}</p>
                        <p className="text-xs text-gray-500 truncate">{section.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="p-4 border-t border-gray-100">
                <div className="flex space-x-2">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium flex items-center justify-center">
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              {/* Section Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 capitalize">
                    {activeSection} Settings
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {sections.find(s => s.id === activeSection)?.description}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-colors font-medium">
                    Reset
                  </button>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium">
                    Save Changes
                  </button>
                </div>
              </div>

              {/* Settings Content */}
              {renderContent()}
            </div>

            {/* Footer Note */}
            <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Important Note</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Some settings may require you to refresh the page or log out and log back in to take effect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;