
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Siyakholwa Foundation - Mthatha Pharmaceutical Distributors (MPD)",
      position: "General worker",
      period: "October 2024 - Current",
      description: [
        "Tablets sorting, organization, voucher picking and collection",
        "Facilitating special orders via hospitals, clinics and health centers via individual pick-ups"
      ]
    },
    {
      company: "Blacknest (PTY) ltd",
      position: "Analyst",
      period: "February 2022 - March 2023",
      description: [
        "Data collection and cleaning - big query, excel and Python",
        "Data analysis - statistics, visual methods",
        "Reports generalization - write reports",
        "Risk Modelling - future business and loss of claims",
        "Market Research - Economic and international trends",
        "Identify future business opportunity using machine learning"
      ],
      reason: "Contract ended"
    },
    {
      company: "Bhekiswa Trading Enterprise",
      position: "General Worker",
      period: "May 2020 - April 2021",
      description: [
        "Cashier duties",
        "Animal medicine management and procurement",
        "Price confluence per stock available",
        "Truck offloading and vehicle loading",
        "Answering phone calls and managing customer enquiries",
        "Additional sales through till encounter and telephone"
      ],
      reason: "Other reason"
    },
    {
      company: "City Media church and MMAD productions",
      position: "Volunteer",
      period: "January 2019 - November 2019",
      description: [
        "City Media - Sound system management, mic sorting and placement",
        "Mixing monitors and events",
        "Part-time Front of house mixing",
        "Photography and videography of Sunday services",
        "MMAD production - Book keeping, financial projections",
        "Equipment management"
      ],
      reason: "Other reason"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Professional Experience</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-blue-200 transform md:-translate-x-1/2"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 mt-1.5"></div>
                
                {/* Content */}
                <div className="md:w-1/2 pl-6 md:pl-0 md:pr-12 md:text-right mb-8 md:mb-0">
                  <div className={index % 2 === 0 ? 'md:pl-12 md:pr-0 md:text-left' : ''}>
                    <h3 className="text-xl font-bold text-blue-800">{exp.position}</h3>
                    <h4 className="text-lg font-medium text-gray-700 mb-2">{exp.company}</h4>
                    <div className="flex items-center mb-4 md:justify-end">
                      <Calendar className="h-4 w-4 text-blue-500 mr-2" />
                      <span className="text-sm text-gray-500">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-left">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    {exp.reason && (
                      <p className="mt-3 text-sm text-gray-500">
                        <strong>Reason for leaving:</strong> {exp.reason}
                      </p>
                    )}
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
