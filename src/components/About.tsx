"use client";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          About <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            {/* Professional Profile Card */}
            <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Professional <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Profile</span>
              </h3>
              <p className="text-gray-600 mb-5">
                Dedicated Application Owner with expertise in digital banking technology and payment systems. 
                Specialized in managing the Digital Rupee mobile app - India's central bank digital currency (CBDC) project.
              </p>
              <p className="text-gray-600">
                Proven track record in leading cross-functional teams, ensuring regulatory compliance, and 
                maintaining high-performance banking applications with 99% uptime. Passionate about financial
                technology innovation and digital transformation in the banking sector.
              </p>
            </div>
            
            {/* Experience Highlights */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Professional <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Highlights</span>
              </h3>
              <ul className="space-y-4">
                {[
                  "Application Owner for RBI's Digital Rupee mobile app",
                  "2+ years of digital banking & fintech experience",
                  "Led 15-member development team for critical banking application",
                  "Ensured 100% compliance with RBI regulations",
                  "Maintained 99% system uptime with 95% issue resolution within SLA"
                ].map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 mt-1 mr-3 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            {/* Personal Information Card */}
            <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Personal <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Information</span>
              </h3>
              <div className="grid grid-cols-1 gap-6">
                <InfoRow label="Name" value="Suraj Mehra" />
                <InfoRow label="Email" value="surajmehra2000@gmail.com" />
                <InfoRow label="Location" value="Hyderabad, India" />
                <InfoRow label="Phone" value="+91-7909055170" />
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Education</span>
              </h3>
              <div className="space-y-6">
                <EducationItem 
                  degree="B.Tech. (Computer Science & Engineering)"
                  institution="National Institute of Technology, Patna"
                  year="2018-2022"
                  grade="6.62 CGPA"
                />
                <EducationItem 
                  degree="Senior Secondary (Class 12)"
                  institution="Abhinav Vidya Mandir, Maharashtra"
                  year="2015-2017"
                  grade="66%"
                />
                <EducationItem 
                  degree="Secondary (Class 10)"
                  institution="Relevant Public High School, Maharashtra"
                  year="2015"
                  grade="79%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-gray-100 pb-3">
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="text-gray-800 font-medium">{value}</p>
    </div>
  );
}

function EducationItem({ degree, institution, year, grade }: { degree: string; institution: string; year: string; grade: string }) {
  return (
    <div className="border-l-4 border-blue-500 pl-4">
      <p className="text-lg font-medium text-gray-800">{degree}</p>
      <p className="text-blue-600">{institution}</p>
      <div className="flex justify-between text-sm text-gray-600 mt-1">
        <span>{year}</span>
        <span>{grade}</span>
      </div>
    </div>
  );
} 