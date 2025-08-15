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
    <div className="h-screen bg-gray-100 flex overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        
        <main className="flex-1 p-6 overflow-hidden bg-gray-100">
          <div className="flex flex-col gap-2 h-full">
            {/* Top Section */}
            <div className="flex gap-2">
              {/* Profile Card */}
                <ProfileCard />

              <div className="flex flex-col space-y-3 ml-2">
                  <StatsCard title="Total Active Students" value={30} />
                  <StatsCard title="Tutor CSAT Score" value={80} suffix="%" />
                  <StatsCard title="Assignment Completion Rate" value={15} suffix="%" />
              </div>

              <div className="flex flex-col space-y-3 ml-2">
                  <StatsCard title="Total Active Students" value={30} />
                  <StatsCard title="Tutor CSAT Score" value={80} suffix="%" />
                  <StatsCard title="Assignment Completion Rate" value={15} suffix="%" />
              </div>
              
              {/* Refer and Earn - Moved up */}
              <div className="w-[25%]">
                <ReferCard />
              </div>
            </div>
            
            {/* Bottom Section - Main Content */}
            <div className="flex ">
              {/* Upcoming Lessons */}
                <UpcomingLessons />
              
              {/* Performance Charts Column */}
              <div className="flex flex-col">
                  <PerformanceChart />
                  <OverallStudentPerformance />
              </div>
              
              {/* Feedback Column */}
              <div className="">
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