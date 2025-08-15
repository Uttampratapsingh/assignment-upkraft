import { Bell, MessageSquare,Search,Send } from "lucide-react";

const Header = () => {
  return (
   <header className="flex justify-between items-center py-2 px-4 bg-gray-100">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black" />
        <input
          type="text"
          placeholder="Search here"
          className="w-full md:w-[500px] py-2 pl-10 pr-4 
                    bg-white/20 backdrop-blur-ld 
                    border border-white/30 
                    rounded-lg text-sm text-black/40 
                    placeholder:text-black/70
                    shadow-xl shadow-purple-500/10
                    focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent
                    transition-all duration-300"
        />
      </div>

      {/* Right side icons and profile */}
      <div className="flex items-center space-x-4">

       <div className="rounded-full bg-gradient-to-t from-violet-800 to-blue-700 p-2 flex items-center justify-center">
          <Send className="h-4 w-4 text-white cursor-pointer" />
        </div>

        <div className="relative">
          <Bell className="h-6 w-6 text-gray-500 hover:text-gray-800 cursor-pointer transition-colors" />
          {/* Notification Dot */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-t from-violet-800 to-blue-700 rounded-full border-2 border-white"></div>
        </div>
        
        <div className="w-[30px] border border-black/20 rotate-90 -mx-4"></div>
        
        <div className="flex items-center space-x-3 ml-3">
          <img 
            src="/avatar.jpg"
            alt="Sherry Wolf" 
            className="h-8 w-8 rounded-full object-cover"
          />
          <div className="text-left">
            <div className="text-sm font-medium text-gray-900">Sherry Wolf</div>
            <div className="text-xs text-gray-500">Tutor</div>
          </div>
          {/* Standard img tag styled to look like an avatar */}
        </div>
      </div>
    </header>
  )
}

export default Header