
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-900">
            Hi, I'm <span className="text-blue-600">Liso Mlunguza</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Data Analyst & Aspiring Software Engineer
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
            Accountable, Organized, and Efficient Professional with over 5 years of experience in data analysis and business intelligence.
          </p>
          <div className="space-x-4">
            <Button asChild className="bg-blue-700 hover:bg-blue-800">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur-md"></div>
            <div className="relative">
              <img 
                src="/lovable-uploads/6f2d3264-6d7d-4c44-9d9e-98e19eefb3e4.png" 
                alt="Liso Mlunguza" 
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 text-blue-700" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
