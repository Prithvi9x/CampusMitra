export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'exam' | 'fees' | 'scholarship' | 'event';
  priority: 'high' | 'medium' | 'low';
  date: string;
  isPinned: boolean;
  color: 'red' | 'yellow' | 'green';
}

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

export interface UserProfile {
  name: string;
  enrollmentNo: string;
  course: string;
  year: string;
  email: string;
  phone: string;
}

export interface SavedQuery {
  id: string;
  question: string;
  answer: string;
  date: string;
}

export interface Reminder {
  id: string;
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
}

export interface QuickAction {
  id: string;
  title: string;
  icon: string;
  route: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
}
