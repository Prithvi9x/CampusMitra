import { Notification, ChatMessage, UserProfile, SavedQuery, Reminder, QuickAction, FAQ } from '../types';

export const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Mid-term Exam Schedule',
    message: 'Mid-term examinations will be conducted from March 15-25, 2025. Check your timetable for specific dates.',
    type: 'exam',
    priority: 'high',
    date: '2025-03-01',
    isPinned: true,
    color: 'red'
  },
  {
    id: '2',
    title: 'Fee Payment Deadline',
    message: 'Last date for fee payment is March 10, 2025. Late fees will be applicable after the deadline.',
    type: 'fees',
    priority: 'high',
    date: '2025-03-01',
    isPinned: true,
    color: 'red'
  },
  {
    id: '3',
    title: 'Scholarship Application Open',
    message: 'Merit-based scholarship applications are now open. Apply before March 20, 2025.',
    type: 'scholarship',
    priority: 'medium',
    date: '2025-02-28',
    isPinned: false,
    color: 'yellow'
  },
  {
    id: '4',
    title: 'Cultural Fest Registration',
    message: 'Annual cultural fest registration is open. Register your events by March 5, 2025.',
    type: 'event',
    priority: 'low',
    date: '2025-02-25',
    isPinned: false,
    color: 'green'
  }
];

export const mockChatMessages: ChatMessage[] = [
  {
    id: '1',
    text: 'Hello! I\'m CampusMitra, your virtual assistant. How can I help you today?',
    isUser: false,
    timestamp: '2025-09-19T10:00:00Z'
  },
  {
    id: '2',
    text: 'What are the exam dates for this semester?',
    isUser: true,
    timestamp: '2025-09-19T10:01:00Z'
  },
  {
    id: '3',
    text: 'The mid-term examinations are scheduled from March 15-25, 2025. You can check your specific timetable in the notifications section.',
    isUser: false,
    timestamp: '2025-09-19T10:01:30Z'
  }
];

export const mockUserProfile: UserProfile = {
  name: 'Prithvi Patil',
  enrollmentNo: '22311368',
  course: 'Computer Science Engineering',
  year: '3rd Year',
  email: 'prithvi.22311368@viit.ac.in',
  phone: '+91 1234567890'
};

export const mockSavedQueries: SavedQuery[] = [
  {
    id: '1',
    question: 'What are the library timings?',
    answer: 'Library is open from 8:00 AM to 10:00 PM on weekdays and 9:00 AM to 6:00 PM on weekends.',
    date: '2025-02-28'
  },
  {
    id: '2',
    question: 'How to apply for hostel accommodation?',
    answer: 'Hostel applications are available online through the student portal. The deadline is usually in May.',
    date: '2025-02-25'
  }
];

export const mockReminders: Reminder[] = [
  {
    id: '1',
    title: 'Submit Assignment',
    description: 'Data Structures Assignment due tomorrow',
    date: '2025-09-20',
    isCompleted: false
  },
  {
    id: '2',
    title: 'Library Book Return',
    description: 'Return borrowed books before fine',
    date: '2025-09-21',
    isCompleted: false
  }
];

export const quickActions: QuickAction[] = [
  {
    id: '1',
    title: 'Chatbot',
    icon: 'chat',
    route: '/chatbot'
  },
  {
    id: '2',
    title: 'Notifications',
    icon: 'notifications',
    route: '/notifications'
  },
  {
    id: '3',
    title: 'Profile',
    icon: 'person',
    route: '/profile'
  }
];

export const mockFAQs: FAQ[] = [
  {
    id: '1',
    question: 'How do I reset my password?',
    answer: 'You can reset your password by clicking on "Forgot Password" on the login page and following the instructions sent to your registered email.',
    isOpen: false
  },
  {
    id: '2',
    question: 'Where can I find my exam results?',
    answer: 'Exam results are available in the student portal under the "Results" section. You can also check the notifications for result announcements.',
    isOpen: false
  },
  {
    id: '3',
    question: 'How to contact the administration?',
    answer: 'You can contact the administration through the help desk, email, or by visiting the administrative office during working hours.',
    isOpen: false
  }
];
