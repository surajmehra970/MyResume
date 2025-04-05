"use client";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Application Owner",
      company: "ICICI Bank Ltd, Hyderabad",
      period: "Oct 2022 - Present",
      description: "Lead end-to-end application ownership for RBI-Led digital currency (Digital Rupee) mobile app, managing a 15-member team and overseeing the lifecycle processes.",
      responsibilities: [
        "Lead end-to-end application ownership for RBI-Led digital currency (Digital Rupee) mobile app at ICICI Bank, managing a 15-member team and overseeing the lifecycle processes from development to deployment.",
        "Oriented project planning, change management, and compliance to ensure a 98% on time completion rate for business requirements.",
        "Spearheaded the launch of custom Digital Rupee versions for global events, including G20 Summit 2023 and Global Fintech Fest 2024, ensuring seamless security and functionality.",
        "Managed vendor collaborations, purchase orders, invoices, and legal agreements, ensuring 100% on-time delivery and compliance with banking regulations.",
        "Maintained a 99% uptime for the Digital Rupee application while achieving 95% issue resolution within SLA through efficient incident and problem management.",
        "Led security and compliance oversight, ensuring adherence to RBI regulations and internal audit requirements with 100% audit success.",
        "Coordinated UAT and production transitions, ensuring smooth deployments with adherence to Change Management best practices.",
        "Worked closely with cross-functional teams to implement innovative digital banking solutions."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Work <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Timeline layout */}
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 to-blue-500 ml-4"></div>
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center -ml-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                
                {/* Content */}
                <div className="pl-16">
                  {/* Header card */}
                  <div className="bg-white rounded-lg p-8 shadow-lg mb-6">
                    <div className="flex flex-col mb-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                        <span className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-600/10 to-blue-500/10 text-blue-600 text-sm font-medium">{exp.period}</span>
                      </div>
                      <p className="text-xl text-blue-600 font-medium mt-1">{exp.company}</p>
                    </div>
                    
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                  
                  {/* Responsibilities card */}
                  <div className="bg-white rounded-lg p-8 shadow-lg">
                    <h4 className="text-xl font-bold mb-6 text-gray-800">
                      Key <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Responsibilities</span>
                    </h4>
                    <ul className="space-y-4">
                      {exp.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 mt-1 mr-3 flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-600">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 