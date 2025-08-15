import React from 'react';
import { 
  Home, 
  Users, 
  BookOpen, 
  Calendar, 
  FileText, 
  Music, 
  Monitor, 
  CreditCard, 
  Gift, 
  Settings, 
  LogOut,
  Search
} from "lucide-react";


const sidebarItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Users, label: "My Students" },
  { icon: BookOpen, label: "My Courses" },
  { icon: Calendar, label: "Calendar" },
  { icon: FileText, label: "Assignment" },
  { icon: Music, label: "Music Library" },
  { icon: Monitor, label: "Practice Studio" },
  { icon: CreditCard, label: "Payment Summary" },
  { icon: Gift, label: "Refer & Earn" },
  { icon: Settings, label: "Settings" },
];

const Sidebar = () => {
  return (
    <div className="w-48 h-screen bg-gradient-to-t from-violet-800 to-blue-700 text-white flex flex-col font-sans">
      
      {/* Logo */}
      <div className="mb-6 flex justify-center">
        <img
          src="/logo.webp" // put your logo file in `public/logo.png`
          alt="UPKRAFT Logo"
          className="w-auto object-contain"
        />
      </div>

      {/* Search */}
      {/* <div className="px-6 pb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
          <input
            type="text"
            placeholder="Search here"
            className="w-full py-3 pl-10 pr-4 bg-white/10 border-none rounded-lg text-sm text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20 transition-colors"
          />
        </div>
      </div> */}

      {/* Navigation */}
      <nav className="flex-1 px-2">
        <ul className="space-y-1">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center py-4 px-2 rounded-xl transition-colors ${
                  item.active
                    ? "bg-white text-[#6a44c8]" // Active state style
                    : "text-white/80 hover:bg-white/10" // Default and hover states
                }`}
              >
                <item.icon className="mr-4 h-4 w-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="px-3">
        <a
          href="/"
          className="flex items-center py-3 px-2 rounded-xl text-white/80 hover:bg-white/10 transition-colors"
        >
          <LogOut className="mr-4 h-4 w-4" />
          <span className="text-sm font-medium">Logout</span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;