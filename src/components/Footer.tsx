"use client";

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/suraj-mehra-276b94189',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      )
    },
    { 
      name: 'Email', 
      url: 'mailto:surajmehra2000@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text mb-4">
              Suraj Mehra
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Application Owner for RBI-Led digital currency (Digital Rupee) mobile app at ICICI Bank.
              Managing a 15-member team and overseeing the lifecycle processes from development to deployment.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.url}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                About
              </Link>
              <Link href="#experience" className="text-gray-400 hover:text-white transition-colors duration-200">
                Experience
              </Link>
              <Link href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">
                Skills
              </Link>
              <Link href="#achievements" className="text-gray-400 hover:text-white transition-colors duration-200">
                Achievements
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>Hyderabad, India</p>
              <p>surajmehra2000@gmail.com</p>
              <p>+91-7909055170</p>
              <Link href="#contact" className="inline-block mt-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-200">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Suraj Mehra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 