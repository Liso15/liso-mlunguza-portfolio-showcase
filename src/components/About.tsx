
import { Code, Database, BarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    { name: 'Python', category: 'Programming' },
    { name: 'MySQL', category: 'Database' },
    { name: 'Power BI', category: 'Data Visualization' },
    { name: 'JavaScript', category: 'Programming' },
    { name: 'HTML/CSS', category: 'Web Development' },
    { name: 'Data Analysis', category: 'Analytics' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Who I Am</h3>
            <p className="text-gray-700 mb-6">
              I am a results-oriented professional with over 5 years of experience in the media, retail, and insurance sectors. 
              My strengths lie in my ability to work both independently and collaboratively, combined with my skills in data analysis
              to drive impactful solutions.
            </p>
            <p className="text-gray-700 mb-6">
              I'm seeking a challenging role where I can apply my skills to contribute to organizational success, 
              particularly in data science and software engineering fields.
            </p>
            <p className="text-gray-700">
              My aspiration is to found a tech startup that leverages data science and AI to solve real-world problems.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">My Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <Card className="border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <Code className="h-8 w-8 text-blue-600 mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Programming</h4>
                  <p className="text-gray-600">Python, JavaScript, HTML/CSS</p>
                </CardContent>
              </Card>
              
              <Card className="border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <Database className="h-8 w-8 text-blue-600 mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Database</h4>
                  <p className="text-gray-600">MySQL, Data Management</p>
                </CardContent>
              </Card>
              
              <Card className="border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <BarChart className="h-8 w-8 text-blue-600 mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Analytics</h4>
                  <p className="text-gray-600">Power BI, Data Analysis</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-blue-800 mb-6 text-center">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <div 
                key={skill.name}
                className="px-4 py-2 bg-blue-50 rounded-full text-blue-800 border border-blue-100"
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
