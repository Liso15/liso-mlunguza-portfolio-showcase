
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Liso Mlunguza</h3>
            <p className="text-blue-200 mt-2">Data Analyst & Aspiring Software Engineer</p>
          </div>
          
          <div className="text-center md:text-right">
            <div className="text-sm text-blue-200">
              <p>© {currentYear} Liso Mlunguza. All rights reserved.</p>
              <p className="mt-2 flex items-center justify-center md:justify-end">
                Made with <Heart className="h-4 w-4 text-red-400 mx-1" fill="currentColor" /> using React & Tailwind
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
