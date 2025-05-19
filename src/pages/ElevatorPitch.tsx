
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ElevatorPitch = () => {
  // Convert Google Drive link to embedding format
  const originalLink = "https://drive.google.com/file/d/1OV-wantxsniX3zc9cmK7Y3fMwq3dk11g/view?usp=sharing";
  const fileId = originalLink.split('/d/')[1].split('/view')[0];
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Elevator Pitch Video</h1>
        
        <div className="w-full max-w-3xl mx-auto bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <div className="relative aspect-video bg-blue-800/10">
            <iframe 
              src={embedUrl}
              className="absolute inset-0 w-full h-full"
              title="Elevator Pitch Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">My Professional Journey</h2>
            <p className="text-gray-700 mb-4">
              This is where I share my elevator pitch video, highlighting my skills, 
              experience, and what makes me the perfect candidate for data analysis 
              and software engineering roles.
            </p>
            <p className="text-gray-600 italic mb-6">
              The video showcases my background in finance, data analysis, and my 
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
