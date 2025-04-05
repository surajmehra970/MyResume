"use client";

import Link from 'next/link';
import Scene3D from './Scene3D';

export default function Header() {
  return (
    <header className="relative pb-24 pt-10">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center mb-8">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            Suraj Mehra
          </div>
          <div className="flex space-x-6">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#achievements">Achievements</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </nav>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800">
              Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Suraj Mehra</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Application Owner | Digital Banking Expert | Product Management
            </p>
            <p className="text-gray-600 mb-8 max-w-xl">
              Lead application owner for RBI-Led digital currency (Digital Rupee) mobile app at ICICI Bank,
              managing a 15-member team and overseeing the lifecycle processes from development to deployment.
            </p>
            <div className="flex space-x-4">
              <Button href="#contact" primary>Get in Touch</Button>
              <Button href="#experience">View My Experience</Button>
            </div>
          </div>
          <div className="order-first md:order-last">
            <Scene3D />
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
      {children}
    </Link>
  );
}

function Button({ href, children, primary }: { href: string; children: React.ReactNode; primary?: boolean }) {
  return (
    <Link 
      href={href}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
        primary 
          ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-300/30' 
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
      }`}
    >
      {children}
    </Link>
  );
} 