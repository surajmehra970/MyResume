"use client";

import { useState } from 'react';
import Image from 'next/image';

interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  imageUrl?: string;
  certificateUrl?: string;
}

// Simple animation component that doesn't require framer-motion
const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setVisible] = useState(false);
  
  return (
    <div 
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      ref={(el) => {
        if (!el) return;
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setVisible(true);
              observer.disconnect();
            }
          });
        });
        observer.observe(el);
        return () => observer.disconnect();
      }}
    >
      {children}
    </div>
  );
};

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Regulatory Compliance Excellence",
      organization: "ICICI Bank",
      date: "2023",
      description: "Ensured 100% compliance with RBI regulations for Digital Rupee mobile application, successfully passing all audit requirements and security assessments.",
      imageUrl: "/images/cbdc-project.svg"
    },
    {
      id: 2,
      title: "Vendor Management Optimization",
      organization: "ICICI Bank",
      date: "2022-2023",
      description: "Optimized vendor onboarding process and reduced onboarding time, streamlining collaboration with technology partners and ensuring on-time delivery.",
      imageUrl: "/images/api-banking.svg"
    },
    {
      id: 3,
      title: "Automation Leadership",
      organization: "ICICI Bank",
      date: "2022-2023",
      description: "Led automation initiatives, reducing manual workloads by 30% and improving operational efficiency across digital banking applications.",
      imageUrl: "/images/api-banking.svg"
    },
    {
      id: 4,
      title: "System Reliability Champion",
      organization: "ICICI Bank",
      date: "2022-Present",
      description: "Maintained system uptime at 99% and resolved 95% of issues within SLA through effective incident management and proactive monitoring.",
      imageUrl: "/images/api-banking.svg"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key accomplishments and professional milestones that showcase my expertise
              and contributions in digital banking and technology.
            </p>
          </div>
        </FadeInSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <FadeInSection key={achievement.id}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 relative bg-blue-50">
                  {achievement.imageUrl ? (
                    <Image
                      src={achievement.imageUrl}
                      alt={achievement.title}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="p-4"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-500">{achievement.organization} | {achievement.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600 mb-4">{achievement.description}</p>
                  
                  {achievement.certificateUrl && (
                    <a 
                      href={achievement.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center"
                    >
                      <span>View Certificate</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
} 