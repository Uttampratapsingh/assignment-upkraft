import React from 'react';

const lessons = [
  { date: "21 July", time: "2:00 - 3:00 PM", course: "Introduction to Piano", student: "Eunice Robel & Arnold Hayes" },
  { date: "22 July", time: "4:00 - 5:00 PM", course: "Finger Warmups", student: "Eunice Robel & Arnold Hayes" },
  { date: "23 July", time: "3:00 - 4:00 PM", course: "Simple Chords", student: "Eunice Robel & Arnold Hayes" },
  { date: "24 July", time: "5:00 - 6:00 PM", course: "Rhythm Basics", student: "Eunice Robel & Arnold Hayes" },
  { date: "25 July", time: "2:00 - 3:00 PM", course: "Simple Melodies", student: "Eunice Robel & Arnold Hayes" },
  { date: "26 July", time: "7:00 - 8:00 PM", course: "Treble & Bass Clef", student: "Eunice Robel & Arnold Hayes" },
  { date: "24 July", time: "5:00 - 6:00 PM", course: "Rhythm Basics", student: "Eunice Robel & Arnold Hayes" },
  { date: "22 July", time: "4:00 - 5:00 PM", course: "Finger Warmups", student: "Eunice Robel & Arnold Hayes" },
  { date: "21 July", time: "2:00 - 3:00 PM", course: "Introduction to Piano", student: "Eunice Robel & Arnold Hayes" },
  { date: "22 July", time: "4:00 - 5:00 PM", course: "Finger Warmups", student: "Eunice Robel & Arnold Hayes" },
  { date: "23 July", time: "3:00 - 4:00 PM", course: "Simple Chords", student: "Eunice Robel & Arnold Hayes" },
  { date: "24 July", time: "5:00 - 6:00 PM", course: "Rhythm Basics", student: "Eunice Robel & Arnold Hayes" },
  { date: "25 July", time: "2:00 - 3:00 PM", course: "Simple Melodies", student: "Eunice Robel & Arnold Hayes" },
  { date: "26 July", time: "7:00 - 8:00 PM", course: "Treble & Bass Clef", student: "Eunice Robel & Arnold Hayes" },
  { date: "24 July", time: "5:00 - 6:00 PM", course: "Rhythm Basics", student: "Eunice Robel & Arnold Hayes" },
  { date: "22 July", time: "4:00 - 5:00 PM", course: "Finger Warmups", student: "Eunice Robel & Arnold Hayes" },
];

const UpcomingLessons = () => {
  return (
    <div className="p-5 flex flex-col bg-white rounded-lg shadow-md backdrop-blur-lg w-[52%] h-[500px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 flex-shrink-0">
        <h3 className="text-lg font-semibold text-gray-900">Upcoming Lessons</h3>
        <a href="#" className="text-[#6a44c8] text-sm hover:underline">View All</a>
      </div>

      {/* Table header */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="grid grid-cols-4 gap-2 text-sm font-medium text-gray-900 border-b border-gray-300 pb-2 flex-shrink-0">
          <div>Date</div>
          <div>Time</div>
          <div>Course</div>
          <div>Student Name</div>
        </div>

        {/* Scrollable rows */}
        <div className="mt-3 flex-1 overflow-y-auto max-h-[400px] pr-2">
          <div className="space-y-2">
            {lessons.map((lesson, index) => (
              <div 
                key={index} 
                className="grid grid-cols-4 gap-2 text-sm py-1 border-b border-gray-200 last:border-b-0"
              >
                <div className="text-gray-900 font-medium">{lesson.date}</div>
                <div className="text-gray-500">{lesson.time}</div>
                <div className="text-gray-900 font-medium">{lesson.course}</div>
                <div className="text-gray-500">{lesson.student}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingLessons;
