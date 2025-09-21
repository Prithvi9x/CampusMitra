import React, { useState } from 'react';
import { FaEdit, FaBell, FaLanguage, FaBookmark, FaUser } from 'react-icons/fa';
import Card from '../components/Card';
import Button from '../components/Button';
import Icon from '../components/Icon';
import BottomNavBar from '../components/BottomNavBar';
import { mockUserProfile, mockSavedQueries, mockReminders } from '../data/mockData';

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(mockUserProfile);
  const [savedQueries] = useState(mockSavedQueries);
  const [reminders, setReminders] = useState(mockReminders);

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    // In a real app, this would save to backend
  };

  const handleCancelEdit = () => {
    setProfile(mockUserProfile);
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleReminder = (id: string) => {
    setReminders(prev => 
      prev.map(reminder => 
        reminder.id === id 
          ? { ...reminder, isCompleted: !reminder.isCompleted }
          : reminder
      )
    );
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
      <div className="bg-primary text-white px-6 py-8 rounded-b-3xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-montserrat font-bold mb-2">Profile</h1>
            <p className="text-blue-100 font-roboto">Manage your account settings</p>
          </div>
          <button
            onClick={handleEditProfile}
            className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
          >
            <Icon icon={FaEdit} className="text-white" />
          </button>
        </div>
      </div>

      {/* Profile Information */}
      <div className="px-6 py-6">
        <Card className="p-6">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
              <Icon icon={FaUser} className="text-white text-2xl" />
            </div>
            <div>
              <h2 className="text-xl font-montserrat font-bold text-gray-800">Personal Information</h2>
              <p className="text-sm text-gray-600 font-roboto">Update your details</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-roboto font-medium text-gray-700 mb-2">Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-roboto"
                />
              ) : (
                <p className="text-gray-800 font-roboto">{profile.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-roboto font-medium text-gray-700 mb-2">Enrollment Number</label>
              <p className="text-gray-800 font-roboto">{profile.enrollmentNo}</p>
            </div>

            <div>
              <label className="block text-sm font-roboto font-medium text-gray-700 mb-2">Course</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.course}
                  onChange={(e) => handleInputChange('course', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-roboto"
                />
              ) : (
                <p className="text-gray-800 font-roboto">{profile.course}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-roboto font-medium text-gray-700 mb-2">Year</label>
              {isEditing ? (
                <select
                  value={profile.year}
                  onChange={(e) => handleInputChange('year', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-roboto"
                >
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </select>
              ) : (
                <p className="text-gray-800 font-roboto">{profile.year}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-roboto font-medium text-gray-700 mb-2">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-roboto"
                />
              ) : (
                <p className="text-gray-800 font-roboto">{profile.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-roboto font-medium text-gray-700 mb-2">Phone</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-roboto"
                />
              ) : (
                <p className="text-gray-800 font-roboto">{profile.phone}</p>
              )}
            </div>

            {isEditing && (
              <div className="flex space-x-3 pt-4">
                <Button onClick={handleSaveProfile} className="flex-1">
                  Save Changes
                </Button>
                <Button variant="secondary" onClick={handleCancelEdit} className="flex-1">
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Preferences */}
      <div className="px-6 py-4">
        <h2 className="text-lg font-montserrat font-semibold text-gray-800 mb-4">Preferences</h2>
        <Card className="p-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Icon icon={FaLanguage} className="text-primary mr-3" />
                <span className="font-roboto text-gray-700">Language</span>
              </div>
              <select className="px-3 py-1 border border-gray-200 rounded-lg text-sm font-roboto">
                <option>English</option>
                <option>Hindi</option>
                <option>Marathi</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Icon icon={FaBell} className="text-primary mr-3" />
                <span className="font-roboto text-gray-700">Notifications</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary peer-focus:ring-opacity-20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </Card>
      </div>

      {/* Saved Queries */}
      <div className="px-6 py-4">
        <h2 className="text-lg font-montserrat font-semibold text-gray-800 mb-4">Saved Queries</h2>
        <div className="space-y-3">
          {savedQueries.map((query) => (
            <Card key={query.id} className="p-4">
              <div className="flex items-start">
                <Icon icon={FaBookmark} className="text-primary mr-3 mt-1" />
                <div className="flex-1">
                  <h3 className="font-montserrat font-semibold text-gray-800 mb-1">
                    {query.question}
                  </h3>
                  <p className="text-sm text-gray-600 font-roboto mb-2">
                    {query.answer}
                  </p>
                  <span className="text-xs text-gray-500 font-roboto">
                    {formatDate(query.date)}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Personal Reminders */}
      <div className="px-6 py-4">
        <h2 className="text-lg font-montserrat font-semibold text-gray-800 mb-4">Personal Reminders</h2>
        <div className="space-y-3">
          {reminders.map((reminder) => (
            <Card key={reminder.id} className="p-4">
              <div className="flex items-start">
                <button
                  onClick={() => toggleReminder(reminder.id)}
                  className={`w-5 h-5 rounded border-2 mr-3 mt-1 flex items-center justify-center ${
                    reminder.isCompleted
                      ? 'bg-alertGreen border-alertGreen text-white'
                      : 'border-gray-300'
                  }`}
                >
                  {reminder.isCompleted && <span className="text-xs">✓</span>}
                </button>
                <div className="flex-1">
                  <h3 className={`font-montserrat font-semibold mb-1 ${
                    reminder.isCompleted ? 'text-gray-500 line-through' : 'text-gray-800'
                  }`}>
                    {reminder.title}
                  </h3>
                  <p className={`text-sm font-roboto mb-2 ${
                    reminder.isCompleted ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {reminder.description}
                  </p>
                  <span className="text-xs text-gray-500 font-roboto">
                    {formatDate(reminder.date)}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
};

export default Profile;
