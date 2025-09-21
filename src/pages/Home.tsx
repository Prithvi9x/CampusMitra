import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaComments, 
  FaBell, 
  FaUser, 
  FaCalendarAlt,
  FaBookOpen,
  FaAward
} from 'react-icons/fa';
import Card from '../components/Card';
import Icon from '../components/Icon';
import BottomNavBar from '../components/BottomNavBar';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      id: 'chatbot',
      title: 'Chatbot',
      description: 'Get instant help',
      icon: FaComments,
      color: 'bg-primary',
      route: '/chatbot'
    },
    {
      id: 'notifications',
      title: 'Notifications',
      description: 'View alerts',
      icon: FaBell,
      color: 'bg-accent',
      route: '/notifications'
    },
    {
      id: 'profile',
      title: 'Profile',
      description: 'Manage account',
      icon: FaUser,
      color: 'bg-alertGreen',
      route: '/profile'
    }
  ];

  const features = [
    {
      id: '1',
      title: 'Smart Notifications',
      description: 'Get personalized alerts for exams, fees, and events',
      icon: FaBell
    },
    {
      id: '2',
      title: 'AI Chatbot',
      description: '24/7 assistance for all your queries',
      icon: FaComments
    },
    {
      id: '3',
      title: 'Academic Calendar',
      description: 'Never miss important dates and deadlines',
      icon: FaCalendarAlt
    },
    {
      id: '4',
      title: 'Study Resources',
      description: 'Access to notes, assignments, and materials',
      icon: FaBookOpen
    }
  ];

  const latestAlerts = [
    {
      id: '1',
      title: 'Mid-term Exam Schedule Released',
      time: '2 hours ago',
      priority: 'high'
    },
    {
      id: '2',
      title: 'Fee Payment Deadline Approaching',
      time: '1 day ago',
      priority: 'high'
    },
    {
      id: '3',
      title: 'Scholarship Applications Open',
      time: '2 days ago',
      priority: 'medium'
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-white px-6 py-8 rounded-b-3xl">
        <h1 className="text-2xl font-montserrat font-bold mb-2">Campus Mitra</h1>
        <p className="text-blue-100 font-roboto">Prithvi Patil - 3rd Year CSE</p>
      </div>

      {/* Quick Actions */}
      <div className="px-6 py-6">
        <h2 className="text-lg font-montserrat font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-4">
          {quickActions.map((action) => {
            return (
              <Card
                key={action.id}
                className="p-4 text-center"
                onClick={() => navigate(action.route)}
              >
                <div className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <Icon icon={action.icon} className="text-white text-xl" />
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-800 mb-1">
                  {action.title}
                </h3>
                <p className="text-xs text-gray-600 font-roboto">
                  {action.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Features */}
      <div className="px-6 py-4">
        <h2 className="text-lg font-montserrat font-semibold text-gray-800 mb-4">Features</h2>
        <div className="space-y-3">
          {features.map((feature) => {
            return (
              <Card key={feature.id} className="p-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                    <Icon icon={feature.icon} className="text-primary text-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-montserrat font-semibold text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-roboto">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Latest Alerts */}
      <div className="px-6 py-4">
        <h2 className="text-lg font-montserrat font-semibold text-gray-800 mb-4">Latest Alerts</h2>
        <div className="space-y-3">
          {latestAlerts.map((alert) => (
            <Card key={alert.id} className="p-4" variant="alert">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-montserrat font-semibold text-gray-800 mb-1">
                    {alert.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-roboto">
                    {alert.time}
                  </p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  alert.priority === 'high' ? 'bg-alertRed' : 
                  alert.priority === 'medium' ? 'bg-alertYellow' : 'bg-alertGreen'
                }`} />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-6 text-center">
        <div className="flex items-center justify-center mb-2">
          <Icon icon={FaAward} className="text-primary text-xl mr-2" />
          <span className="font-montserrat font-semibold text-gray-800">CampusMitra</span>
        </div>
        <p className="text-sm text-gray-600 font-roboto">
          Your smart campus companion
        </p>
      </div>

      <BottomNavBar />
    </div>
  );
};

export default Home;
