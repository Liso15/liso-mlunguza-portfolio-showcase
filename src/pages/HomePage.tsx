
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Welcome to Liso Mlunguza's Portfolio</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Data Scientist & Aspiring Software Engineer with over 5 years of experience in the media, 
          retail, and insurance sectors.
        </p>
        <div className="mt-8">
          <Link 
            to="/elevator-pitch"
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md 
                     font-medium transition-colors shadow-lg"
          >
            View My Elevator Pitch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
