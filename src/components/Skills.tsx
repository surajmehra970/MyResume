"use client";

export default function Skills() {
  // Industry knowledge categories with skills
  const industrySkills = [
    {
      category: "Banking & Finance",
      skills: [
        { id: 1, name: "Digital Banking", level: 95 },
        { id: 2, name: "Payment Systems", level: 95 },
        { id: 3, name: "Regulatory Compliance", level: 90 },
        { id: 4, name: "Banking Security", level: 85 },
      ]
    },
    {
      category: "Project Management",
      skills: [
        { id: 5, name: "Product Management", level: 90 },
        { id: 6, name: "Agile Methodology", level: 85 },
        { id: 7, name: "Software Development Lifecycle", level: 90 },
        { id: 8, name: "Vendor Management", level: 90 },
      ]
    },
    {
      category: "Operations",
      skills: [
        { id: 9, name: "Change Management", level: 85 },
        { id: 10, name: "Incident Management", level: 85 },
        { id: 11, name: "Stakeholder Management", level: 90 },
        { id: 12, name: "Application Ownership", level: 95 },
      ]
    }
  ];

  // Technical skills by category
  const techSkills = [
    {
      category: "Project Tools",
      skills: [
        { name: "JIRA", level: 95 },
        { name: "Confluence", level: 90 },
        { name: "ServiceNow", level: 90 },
        { name: "MS Project", level: 85 },
      ]
    },
    {
      category: "Development & DevOps",
      skills: [
        { name: "RedHat OpenShift", level: 85 },
        { name: "Podman", level: 80 },
        { name: "Git", level: 80 },
        { name: "Linux", level: 75 },
      ]
    },
    {
      category: "Programming & Data",
      skills: [
        { name: "SQL", level: 85 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "Core Java", level: 70 },
      ]
    },
    {
      category: "API & Integration",
      skills: [
        { name: "Postman", level: 90 },
        { name: "API Management", level: 90 },
        { name: "RESTful Services", level: 85 },
        { name: "Integration Patterns", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          My <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Skills</span>
        </h2>

        <div className="max-w-5xl mx-auto">
          {/* Industry Skills Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">
              Industry <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Knowledge</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industrySkills.map((category, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-lg">
                  <h4 className="font-bold text-lg mb-4 text-gray-800">{category.category}</h4>
                  <div className="space-y-4">
                    {category.skills.map(skill => (
                      <div key={skill.id}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700">{skill.name}</span>
                          <span className="text-gray-600 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-600 to-blue-500 h-2 rounded-full" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools & Tech Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">
              Tools & <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Technologies</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {techSkills.map((category, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-lg">
                  <h4 className="font-bold text-lg mb-4 text-gray-800">{category.category}</h4>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, index) => (
                      <div 
                        key={index}
                        className="relative flex items-center px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600/10 to-blue-500/10 border border-blue-100"
                      >
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <div className="ml-2 w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500">
                          <span className="text-xs font-bold text-white">{skill.level}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 