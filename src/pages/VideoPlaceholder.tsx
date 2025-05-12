
import { useState } from "react";

const VideoPlaceholder = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">My Elevator Pitch</h1>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Video Placeholder */}
          <div 
            className="relative bg-gray-200 w-full aspect-video flex items-center justify-center transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              transform: isHovered ? 'scale(1.01)' : 'scale(1)',
            }}
          >
            {/* Play button overlay */}
            <div className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300 ${isHovered ? 'opacity-70' : 'opacity-50'}`}>
              <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="text-gray-500 font-medium">
              Video Coming Soon
            </div>
          </div>
          
          {/* Video details */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About My Elevator Pitch</h2>
            <p className="text-gray-600 mb-4">
              This is where my elevator pitch video will be hosted. In this video, I will introduce myself
              as an accountable, organized, and efficient professional with over 5 years of experience in the media,
              retail, and insurance sectors.
            </p>
            <p className="text-gray-600 mb-4">
              I'll highlight my skills in data analysis, Python programming, MySQL, Power BI, JavaScript,
              and HTML/CSS, as well as my educational background from Walter Sisulu University.
            </p>
            <div className="mt-6 bg-blue-50 rounded-md p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Coming soon!</h3>
              <p className="text-blue-700">
                My elevator pitch video is currently being produced and will be uploaded soon. 
                Please check back later to view it.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md 
                     font-medium transition-colors shadow-md"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoPlaceholder;
