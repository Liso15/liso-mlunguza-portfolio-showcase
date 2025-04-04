
import { FileDown, GraduationCap, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Education = () => {
  const education = [
    {
      institution: "Walter Sisulu University",
      degree: "Bachelor's degree, advanced diplomas, post graduate certificate and B-tech",
      field: "Finance, Economic & Accounting Management",
      period: "February 2015 - May 2019",
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />
    },
    {
      institution: "Umtata International School",
      degree: "Grade 12 (National Senior Certificate)",
      field: "National (vocations) Certificate level 4",
      period: "- 2014",
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />
    }
  ];

  const shortCourses = [
    {
      institution: "Power learn project",
      course: "Software Development",
      period: "March 2025 - Current"
    },
    {
      institution: "ALX Africa",
      course: "Data Science",
      period: "September 2024 - Current"
    },
    {
      institution: "Pragmatic works",
      course: "Beginning Dax function workshop Power BI",
      period: "June 2024 - June 2024"
    }
  ];

  return (
    <section id="education" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Education & Training</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">Academic Background</h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-3 pb-2">
                    {item.icon}
                    <div>
                      <CardTitle className="text-xl text-blue-900">{item.institution}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-gray-900">{item.degree}</p>
                    <p className="text-gray-700">{item.field}</p>
                    <p className="text-sm text-gray-500 mt-2">{item.period}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">Professional Development</h3>
            <div className="space-y-4">
              {shortCourses.map((item, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-blue-600" />
                      <CardTitle className="text-lg text-blue-900">{item.course}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-gray-700">{item.institution}</p>
                    <p className="text-sm text-gray-500 mt-1">{item.period}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button className="bg-blue-700 hover:bg-blue-800">
                <FileDown className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Interests</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            <div className="px-6 py-3 bg-white rounded-full text-blue-800 shadow-sm">
              Data Science
            </div>
            <div className="px-6 py-3 bg-white rounded-full text-blue-800 shadow-sm">
              AI/Machine Learning
            </div>
            <div className="px-6 py-3 bg-white rounded-full text-blue-800 shadow-sm">
              Software Engineering
            </div>
            <div className="px-6 py-3 bg-white rounded-full text-blue-800 shadow-sm">
              Tech Entrepreneurship
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
