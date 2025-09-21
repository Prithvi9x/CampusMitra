import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaBell, 
  FaComments, 
  FaUser, 
  FaQuestionCircle 
} from 'react-icons/fa';
import Icon from './Icon';

interface NavItem {
  id: string;
  label: string;
  icon: any;
  route: string;
}

const BottomNavBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: FaHome, route: '/' },
    { id: 'notifications', label: 'Alerts', icon: FaBell, route: '/notifications' },
    { id: 'chatbot', label: 'Chat', icon: FaComments, route: '/chatbot' },
    { id: 'profile', label: 'Profile', icon: FaUser, route: '/profile' },
    { id: 'help', label: 'Help', icon: FaQuestionCircle, route: '/help' }
  ];

  const isActive = (route: string) => {
    return location.pathname === route;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const active = isActive(item.route);
          
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.route)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
                active 
                  ? 'text-primary' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon icon={item.icon} className={`text-xl ${active ? 'text-primary' : 'text-gray-500'}`} />
              <span className={`text-xs font-roboto mt-1 ${
                active ? 'text-primary font-medium' : 'text-gray-500'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavBar;
