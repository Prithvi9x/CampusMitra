import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaQuestionCircle } from 'react-icons/fa';
import Card from '../components/Card';
import Button from '../components/Button';
import Icon from '../components/Icon';
import BottomNavBar from '../components/BottomNavBar';
import { mockFAQs } from '../data/mockData';
import { FAQ } from '../types';

const Help: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>(mockFAQs);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const toggleFAQ = (id: string) => {
    setFaqs(prev => 
      prev.map(faq => 
        faq.id === id 
          ? { ...faq, isOpen: !faq.isOpen }
          : faq
      )
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setContactForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to backend
    alert('Thank you for your message! We will get back to you soon.');
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-white px-6 py-8 rounded-b-3xl">
        <h1 className="text-2xl font-montserrat font-bold mb-2">Help & Support</h1>
        <p className="text-blue-100 font-roboto">Get assistance and find answers</p>
      </div>

      {/* Project Description */}
      <div className="px-6 py-6">
        <Card className="p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon icon={FaQuestionCircle} className="text-white text-2xl" />
            </div>
            <h2 className="text-xl font-montserrat font-bold text-gray-800 mb-2">About CampusMitra</h2>
            <p className="text-gray-600 font-roboto">
              CampusMitra is your intelligent campus companion designed to streamline student life. 
              Our AI-powered platform provides instant assistance, personalized notifications, 
              and seamless access to all campus services.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-primary bg-opacity-10 rounded-lg">
              <h3 className="font-montserrat font-semibold text-primary mb-1">Smart AI</h3>
              <p className="text-sm text-gray-600 font-roboto">24/7 Virtual Assistant</p>
            </div>
            <div className="p-4 bg-accent bg-opacity-10 rounded-lg">
              <h3 className="font-montserrat font-semibold text-accent mb-1">Real-time</h3>
              <p className="text-sm text-gray-600 font-roboto">Instant Notifications</p>
            </div>
            <div className="p-4 bg-alertGreen bg-opacity-10 rounded-lg">
              <h3 className="font-montserrat font-semibold text-alertGreen mb-1">Personalized</h3>
              <p className="text-sm text-gray-600 font-roboto">Custom Experience</p>
            </div>
            <div className="p-4 bg-alertRed bg-opacity-10 rounded-lg">
              <h3 className="font-montserrat font-semibold text-alertRed mb-1">Secure</h3>
              <p className="text-sm text-gray-600 font-roboto">Privacy Protected</p>
            </div>
          </div>
        </Card>
      </div>

      {/* FAQ Section */}
      <div className="px-6 py-4">
        <h2 className="text-lg font-montserrat font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <Card key={faq.id} className="p-4">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full text-left"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-montserrat font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  {faq.isOpen ? (
                    <Icon icon={FaChevronUp} className="text-primary flex-shrink-0" />
                  ) : (
                    <Icon icon={FaChevronDown} className="text-gray-400 flex-shrink-0" />
                  )}
                </div>
                {faq.isOpen && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-600 font-roboto">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </button>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="px-6 py-4">
        <h2 className="text-lg font-montserrat font-semibold text-gray-800 mb-4">Contact Us</h2>
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-roboto font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={contactForm.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-roboto"
              />
            </div>
            
            <div>
              <label className="block text-sm font-roboto font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={contactForm.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-roboto"
              />
            </div>
            
            <div>
              <label className="block text-sm font-roboto font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                value={contactForm.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-roboto"
              />
            </div>
            
            <div>
              <label className="block text-sm font-roboto font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                value={contactForm.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-roboto resize-none"
              />
            </div>
            
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
      </div>

      {/* Contact Information */}
      <div className="px-6 py-4">
        <h2 className="text-lg font-montserrat font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <div className="space-y-3">
          <Card className="p-4">
            <div className="flex items-center">
              <Icon icon={FaEnvelope} className="text-primary mr-3" />
              <div>
                <h3 className="font-montserrat font-semibold text-gray-800">Email</h3>
                <p className="text-sm text-gray-600 font-roboto">support@campusmitra.edu</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4">
            <div className="flex items-center">
              <Icon icon={FaPhone} className="text-primary mr-3" />
              <div>
                <h3 className="font-montserrat font-semibold text-gray-800">Phone</h3>
                <p className="text-sm text-gray-600 font-roboto">+91 9876543210</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4">
            <div className="flex items-center">
              <Icon icon={FaMapMarkerAlt} className="text-primary mr-3" />
              <div>
                <h3 className="font-montserrat font-semibold text-gray-800">Address</h3>
                <p className="text-sm text-gray-600 font-roboto">
                  Student Services Building<br />
                  Campus Road, College Area<br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
};

export default Help;
