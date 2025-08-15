import { Users, BookOpen, Gift } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="p-6 w-[360px] bg-white rounded-lg shadow-md border-3 border-blue-500">
      <h4 className="text-sm font-semibold text-gray-800 mb-4">Profile</h4>

      <div className="flex items-center gap-1">
        {/* Avatar */}
        <div className="relative w-[40%]">
          {/* Circular progress ring */}
          <svg className="absolute inset-0 w-24 h-24" viewBox="0 0 36 36">
            <path
              className="text-gray-200"
              strokeWidth="3"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-yellow-400"
              strokeWidth="3"
              strokeDasharray="80, 100"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>

          {/* Avatar Image */}
          <div className="w-20 h-20 rounded-full overflow-hidden bg-white p-[3px] relative z-10 mb-6">
            <img
              src="/avatar.jpg"
              alt="Sherry Wolf"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* Badge */}
          <div className="absolute bottom-[50px] right-[50px] w-5 h-5 bg-black rounded-full flex items-center justify-center border-2 border-white z-20">
            <span className="text-white text-xs">★</span>
          </div>
          <h3 className="text-sm font-semibold text-gray-900 ml-1">Sherry Wolf</h3>
          <p className="text-gray-500 text-[12px] mb-3 ml-2">Piano Tutor</p>
        </div>



        {/* Info & Stats */}
        <div className="flex-1">

          <div className="flex flex-col gap-5">
            {/* Students */}
            <div className="flex items-center justify-around bg-purple-50 rounded-lg px-1 py-1">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-purple-500" />
                <span className="text-sm text-purple-600">Students</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">30</span>
            </div>

            {/* Course */}
            <div className="flex items-center justify-around bg-purple-50 rounded-lg px-1 py-1">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-purple-500" />
                <span className="text-sm text-purple-600">Course</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">6</span>
            </div>

            {/* Reward */}
            <div className="flex items-center justify-around bg-purple-50 rounded-lg px-1 py-1">
              <div className="flex items-center gap-2">
                <Gift className="h-4 w-4 text-purple-500" />
                <span className="text-sm text-purple-600">Reward</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
