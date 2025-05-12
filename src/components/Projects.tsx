
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Data Science Models",
      description: "A collection of data science models including predictive analytics, classification algorithms, and data visualization techniques.",
      tags: ["Python", "Machine Learning", "Data Analysis"],
      link: "https://github.com/Liso15/Projects/tree/main",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard built with Power BI for business intelligence and data visualization.",
      tags: ["Power BI", "Data Visualization", "Business Intelligence"],
      link: "https://github.com/Liso15/Projects/tree/main",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Financial Analysis Tools",
      description: "Collection of financial analysis tools using Python and statistical methods.",
      tags: ["Python", "Finance", "Statistics"],
      link: "https://github.com/Liso15/Projects/tree/main",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="bg-blue-700 hover:bg-blue-800" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" asChild className="px-8">
            <a href="https://github.com/Liso15" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              See More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
