# CampusMitra - Smart Campus Companion

A mobile-first React application designed to streamline student life with AI-powered assistance, real-time notifications, and seamless campus services access.

## 🚀 Features

### Core Functionality
- **AI Chatbot**: 24/7 virtual assistant for instant help
- **Smart Notifications**: Personalized alerts for exams, fees, scholarships, and events
- **Profile Management**: Comprehensive student profile with preferences
- **Help & Support**: FAQ section and contact form

### Mobile-First Design
- Optimized for Android devices (360x800px frames)
- Responsive design with Tailwind CSS
- Touch-friendly interface with bottom navigation
- Clean, modern card-based layout

### UI Components
- **BottomNavBar**: Fixed navigation with active state highlighting
- **Cards**: Reusable components for notifications, alerts, and content
- **ChatBubble**: User and bot message components
- **Buttons**: Primary, secondary, and icon button variants
- **Chips**: Filter tags for notifications

## 🎨 Design System

### Color Palette
- **Primary Blue**: #1E88E5
- **Accent Amber**: #FFB300
- **Alert Red**: #E53935
- **Alert Yellow**: #FDD835
- **Alert Green**: #43A047
- **Background**: #F5F5F5

### Typography
- **Headers**: Montserrat Bold
- **Body Text**: Roboto Regular

## 📱 Pages

### 1. Home
- Hero banner with welcome message
- Quick access buttons (Chatbot, Notifications, Profile)
- Feature highlights
- Latest alerts carousel
- Footer with branding

### 2. Notifications
- News feed of alerts and announcements
- Pinned deadlines (color-coded by priority)
- Filter chips (Exams, Fees, Scholarships, Events)
- Search functionality
- Priority indicators

### 3. Chatbot
- Bubble-style conversation interface
- Text and voice input options
- Read-aloud toggle
- Anonymous mode
- Quick shortcut buttons
- Real-time message history

### 4. Profile
- Personal information management
- Academic details (Name, Enrollment, Course, Year)
- Preferences (Language, Notifications)
- Saved queries history
- Personal reminders with completion tracking
- Edit profile functionality

### 5. Help & About
- Project description and features
- FAQ accordion with expandable answers
- Contact form with validation
- Contact information (Email, Phone, Address)
- Feature highlights grid

## 🛠️ Technology Stack

- **React 18** with TypeScript
- **React Router** for navigation
- **Tailwind CSS** for styling
- **React Icons** for iconography
- **Mobile-first responsive design**

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd campus-mitra
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── BottomNavBar.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── ChatBubble.tsx
│   └── Chip.tsx
├── pages/              # Main application pages
│   ├── Home.tsx
│   ├── Notifications.tsx
│   ├── Chatbot.tsx
│   ├── Profile.tsx
│   └── Help.tsx
├── data/               # Mock data and constants
│   └── mockData.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main application component
├── App.css             # Global styles
└── index.tsx           # Application entry point
```

## 🎯 Key Features Implementation

### Navigation
- Bottom navigation bar with 5 main sections
- Active state highlighting
- Smooth transitions between pages

### Responsive Design
- Mobile-first approach
- Optimized for 360x800px viewport
- Touch-friendly interface elements
- Proper viewport meta tags

### Accessibility
- High contrast color scheme
- Readable font sizes
- Keyboard navigation support
- Screen reader friendly

### State Management
- Local state for UI interactions
- Mock data for demonstration
- Form validation and handling
- Real-time updates simulation

## 🔮 Future Enhancements

- Backend integration for real data
- Push notifications
- Offline support with service workers
- Advanced AI chatbot integration
- User authentication and authorization
- Real-time chat functionality
- File upload capabilities
- Calendar integration
- Study group features

## 📄 License

This project is created for educational purposes as part of the Smart India Hackathon 2025.

## 👥 Team

Developed by team InnoVerse for SIH 2025.

---

**CampusMitra** - Your smart campus companion for a seamless student experience! 🎓
