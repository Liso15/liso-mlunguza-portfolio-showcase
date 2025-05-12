
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const ElevatorPitch = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Elevator Pitch Video</h1>
        
        <div className="w-full max-w-3xl mx-auto bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <div className="relative aspect-video bg-blue-800/10 flex items-center justify-center group">
            {/* Placeholder video thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20"></div>
            
            {/* Play button overlay */}
            <div className="rounded-full bg-blue-800 p-4 text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110">
              <Play size={36} />
            </div>
            
            {/* Coming soon text */}
            <div className="absolute bottom-4 w-full text-center">
              <p className="text-lg md:text-xl font-semibold text-blue-800 bg-white/80 mx-auto py-2 px-4 rounded-full inline-block">
                Coming Soon
              </p>
            </div>
          </div>
          
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">My Professional Journey</h2>
            <p className="text-gray-700 mb-4">
              This is where I'll share my elevator pitch video, highlighting my skills, 
              experience, and what makes me the perfect candidate for data analysis 
              and software engineering roles.
            </p>
            <p className="text-gray-600 italic mb-6">
              The video will showcase my background in finance, data analysis, and my 
              passion for technology and innovation.
            </p>
            
            <Link 
              to="/" 
              className="inline-block bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-6 rounded-md transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevatorPitch;
