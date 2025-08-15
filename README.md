Live Preview Link : https://assignment-upkraft.vercel.app

# UpKraft - Tutor Dashboard

A modern, responsive tutor dashboard application built with React and Vite. This dashboard provides tutors with comprehensive tools to manage their students, track performance, view upcoming lessons, and monitor their teaching effectiveness.

![UpKraft Dashboard](https://img.shields.io/badge/React-v19.1.1-blue)
![Vite](https://img.shields.io/badge/Vite-v7.1.2-yellow)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.1.12-teal)

## 🎯 Features

### 📊 **Dashboard Overview**
- Real-time statistics display (Active Students, CSAT Score, Assignment Completion Rate)
- Animated counters for engaging data presentation
- Performance metrics with circular progress indicators

### 👨‍🏫 **Tutor Profile Management**
- Personal profile card with avatar and progress ring
- Quick stats overview (Students, Courses, Rewards)
- Professional tutor information display

### 📅 **Lesson Management**
- Upcoming lessons overview with scrollable table
- Detailed lesson information (Date, Time, Course, Student)
- Piano course curriculum tracking (Introduction to Piano, Finger Warmups, Simple Chords, etc.)

### 📈 **Performance Analytics**
- Overall Course Performance tracking with circular charts
- Student Performance monitoring
- Visual feedback representation
- Semi-circular progress indicators with custom animations

### 🎁 **Referral System**
- "Refer and Earn" card with attractive design
- Referral program promotion
- Reward tracking system

### 💬 **Feedback Management**
- Feedback pending notifications
- Interactive feedback submission
- Performance-based feedback tracking

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: TailwindCSS 4.1.12
- **Routing**: React Router DOM 7.8.0
- **Icons**: Lucide React 0.539.0
- **Language**: JavaScript (ES6+)

## 📁 Project Structure

```
up-Kraft/
├── public/
│   ├── avatar.jpg          # Profile and user avatars
│   └── logo.webp          # UpKraft brand logo
├── src/
│   ├── components/
│   │   ├── AnimatedCounter.jsx    # Smooth number animations
│   │   ├── FeedbackCard.jsx       # Feedback management widget
│   │   ├── Header.jsx             # Top navigation and search
│   │   ├── PerformanceChart.jsx   # Performance visualization
│   │   ├── ProfileCard.jsx        # Tutor profile display
│   │   ├── ReferCard.jsx          # Referral program card
│   │   ├── Sidebar.jsx            # Main navigation sidebar
│   │   ├── StatsCard.jsx          # Statistics display cards
│   │   └── UpcomingLessons.jsx    # Lesson schedule management
│   ├── pages/
│   │   ├── Index.jsx              # Main dashboard page
│   │   └── NotFound.jsx           # 404 error page
│   ├── App.jsx                    # Main application component
│   ├── App.css                    # Global styles
│   ├── index.css                  # TailwindCSS imports
│   └── main.jsx                   # Application entry point
├── index.html                     # HTML template
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Vite configuration
└── README.md                      # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Uttampratapsingh/assignment-upkraft
   cd up-Kraft
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the dashboard

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 UI Components

### **Sidebar Navigation**
- Home (Active dashboard view)
- My Students
- My Courses  
- Calendar
- Assignment
- Music Library
- Practice Studio
- Payment Summary
- Refer & Earn
- Settings
- Logout

### **Dashboard Widgets**
- **Profile Card**: Displays tutor information with progress ring
- **Stats Cards**: Show key metrics with animated counters
- **Performance Charts**: Circular progress indicators for course and student performance
- **Upcoming Lessons**: Scrollable table with lesson details
- **Refer Card**: Promotional card for referral program
- **Feedback Card**: Feedback management with pending count

## 🎹 Domain Context

This dashboard is specifically designed for **piano tutors** and includes:
- Piano-specific course names (Introduction to Piano, Finger Warmups, Simple Chords, etc.)
- Music education terminology
- Student-teacher relationship management
- Lesson scheduling for music education
- Performance tracking for musical progress

## 🔧 Configuration

### **Vite Configuration** (`vite.config.js`)
- React plugin for JSX support
- TailwindCSS plugin for styling
- Path aliases (`@` points to `src/`)

### **TailwindCSS Setup**
- Configured with Vite plugin
- Custom gradient colors for brand theming
- Responsive design utilities

## 🌟 Key Features Implementation

### **Animated Counters**
Smooth counting animations using `requestAnimationFrame` with easing functions for professional data presentation.

### **Circular Progress Charts**
Custom SVG-based progress indicators with:
- Semi-circular design for performance metrics
- Smooth animations and transitions
- Customizable colors and stroke widths

### **Responsive Design**
- Mobile-first approach with TailwindCSS
- Flexible grid layouts
- Sidebar navigation optimized for different screen sizes

### **Performance Optimization**
- Vite for fast development and building
- Component-based architecture for reusability
- Efficient state management

## 🎯 Future Enhancements

- [ ] Add real-time data integration
- [ ] Implement student detailed view
- [ ] Add calendar functionality
- [ ] Include notification system
- [ ] Integrate payment processing
- [ ] Add dark mode support
- [ ] Implement data export features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Uttam Pratap Singh**
- GitHub: [@Uttampratapsingh](https://github.com/Uttampratapsingh)

## 🙏 Acknowledgments

- React community for excellent documentation
- TailwindCSS for the utility-first CSS framework
- Lucide React for beautiful icons
- Vite for the lightning-fast build tool

---

*Built with ❤️ for music educators*
