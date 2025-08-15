import  Sidebar  from "@/components/Sidebar";
import  Header  from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import StatsCard from "@/components/StatsCard";
import ReferCard from "@/components/ReferCard";
import UpcomingLessons  from "@/components/UpcomingLessons";
import PerformanceChart  from "@/components/PerformanceChart";
import FeedbackCard  from "@/components/FeedbackCard";
import OverallStudentPerformance  from "@/components/OverallStudentPerformance";

const Index = () => {
  return (
    <div className="h-screen bg-background flex overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        
        <main className="flex-1 p-6 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
            {/* Top Section */}
            <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 flex-shrink-0">
              {/* Profile Card */}
              <div className="lg:col-span-3">
                <ProfileCard />
              </div>
              
              {/* Stats Cards - Two rows of 3 */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 col-span-3 gap-4">
                  <StatsCard title="Total Active Students" value={30} />
                  <StatsCard title="Tutor CSAT Score" value={80} suffix="%" />
                  <StatsCard title="Total Active Students" value={30} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 col-span-3 gap-4">
                  <StatsCard title="Tutor CSAT Score" value={80} suffix="%" />
                  <StatsCard title="Assignment Completion Rate" value={15} suffix="%" />
                  <StatsCard title="Assignment Completion Rate" value={15} suffix="%" />
                </div>
              </div>
              
              {/* Refer and Earn - Moved up */}
              <div className="lg:col-span-3">
                <ReferCard />
              </div>
            </div>
            
            {/* Bottom Section - Main Content */}
            <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-0">
              {/* Upcoming Lessons */}
              <div className="lg:col-span-6 flex flex-col min-h-0">
                <UpcomingLessons />
              </div>
              
              {/* Performance Charts Column */}
              <div className="lg:col-span-3 flex flex-col space-y-6 overflow-y-auto max-h-full">
                <div className="flex-shrink-0">
                  <PerformanceChart />
                </div>
                <div className="flex-shrink-0">
                  <OverallStudentPerformance />
                </div>
              </div>
              
              {/* Feedback Column */}
              <div className="lg:col-span-3 flex flex-col">
                <FeedbackCard />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;