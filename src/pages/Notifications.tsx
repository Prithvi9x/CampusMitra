import React, { useState } from 'react';
import { FaSearch, FaThumbtack, FaExclamationTriangle } from 'react-icons/fa';
import Card from '../components/Card';
import Chip from '../components/Chip';
import Icon from '../components/Icon';
import BottomNavBar from '../components/BottomNavBar';
import { mockNotifications } from '../data/mockData';
import { Notification } from '../types';

const Notifications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [notifications] = useState<Notification[]>(mockNotifications);

  const filterTypes = [
    { id: 'all', label: 'All' },
    { id: 'exam', label: 'Exams' },
    { id: 'fees', label: 'Fees' },
    { id: 'scholarship', label: 'Scholarships' },
    { id: 'event', label: 'Events' }
  ];

  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || notification.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-alertRed';
      case 'medium': return 'text-alertYellow';
      case 'low': return 'text-alertGreen';
      default: return 'text-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'exam': return '📚';
      case 'fees': return '💰';
      case 'scholarship': return '🎓';
      case 'event': return '🎉';
      default: return '📢';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-white px-6 py-6 rounded-b-3xl">
        <h1 className="text-2xl font-montserrat font-bold mb-2">Notifications</h1>
        <p className="text-blue-100 font-roboto">Stay updated with campus alerts</p>
      </div>

      {/* Search Bar */}
      <div className="px-6 py-4">
        <div className="relative">
          <Icon icon={FaSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search notifications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-roboto"
          />
        </div>
      </div>

      {/* Filter Chips */}
      <div className="px-6 py-2">
        <div className="flex flex-wrap gap-2">
          {filterTypes.map((filter) => (
            <Chip
              key={filter.id}
              variant={activeFilter === filter.id ? 'active' : 'default'}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </Chip>
          ))}
        </div>
      </div>

      {/* Pinned Notifications */}
      {notifications.filter(n => n.isPinned).length > 0 && (
        <div className="px-6 py-4">
          <div className="flex items-center mb-3">
            <Icon icon={FaThumbtack} className="text-alertRed mr-2" />
            <h2 className="text-lg font-montserrat font-semibold text-gray-800">Pinned</h2>
          </div>
          <div className="space-y-3">
            {notifications
              .filter(n => n.isPinned)
              .map((notification) => (
                <Card
                  key={notification.id}
                  className="p-4 border-l-4 border-l-alertRed"
                  variant="alert"
                >
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">
                      {getTypeIcon(notification.type)}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-montserrat font-semibold text-gray-800">
                          {notification.title}
                        </h3>
                        <span className={`text-xs font-roboto font-medium ${getPriorityColor(notification.priority)}`}>
                          {notification.priority.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 font-roboto mb-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 font-roboto">
                          {formatDate(notification.date)}
                        </span>
                        <Icon icon={FaExclamationTriangle} className="text-alertRed text-sm" />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      )}

      {/* All Notifications */}
      <div className="px-6 py-4">
        <h2 className="text-lg font-montserrat font-semibold text-gray-800 mb-4">All Notifications</h2>
        <div className="space-y-3">
          {filteredNotifications.length === 0 ? (
            <Card className="p-8 text-center">
              <div className="text-gray-400 text-4xl mb-4">📭</div>
              <h3 className="font-montserrat font-semibold text-gray-600 mb-2">No notifications found</h3>
              <p className="text-sm text-gray-500 font-roboto">
                Try adjusting your search or filter criteria
              </p>
            </Card>
          ) : (
            filteredNotifications.map((notification) => (
              <Card
                key={notification.id}
                className="p-4"
                variant="notification"
              >
                <div className="flex items-start">
                  <span className="text-2xl mr-3">
                    {getTypeIcon(notification.type)}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-montserrat font-semibold text-gray-800">
                        {notification.title}
                      </h3>
                      <span className={`text-xs font-roboto font-medium ${getPriorityColor(notification.priority)}`}>
                        {notification.priority.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 font-roboto mb-2">
                      {notification.message}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-roboto">
                        {formatDate(notification.date)}
                      </span>
                      {notification.isPinned && (
                        <Icon icon={FaThumbtack} className="text-alertRed text-sm" />
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
};

export default Notifications;
