"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Scene3D() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      src: "/images/banking-tech.svg",
      alt: "Digital Banking Technology",
      caption: "Leading Digital Banking Innovation"
    },
    {
      src: "/images/app-management.svg",
      alt: "Application Management",
      caption: "Application Ownership Excellence"
    },
    {
      src: "/images/financial-tech.svg",
      alt: "Financial Technology",
      caption: "Fintech Solutions Expert"
    }
  ];
  
  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  // Handle manual navigation
  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
      {/* Main image display */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900">
        <div className="relative h-full w-full transition-all duration-700 ease-in-out">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out
                ${index === currentImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <div className="relative h-full w-full">
                <Image 
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  className="opacity-70"
                  priority={index === 0}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">{image.caption}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation controls - arrows */}
      <button 
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
        aria-label="Next image"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors
              ${index === currentImageIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Professional overlay elements */}
      <div className="absolute left-0 right-0 top-0 p-6">
        <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm rounded-full px-4 py-1.5">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse mr-2"></div>
          <span className="text-white text-sm font-medium">Digital Banking Expert</span>
        </div>
      </div>
      
      <div className="absolute bottom-20 right-8">
        <div className="grid grid-cols-2 gap-2">
          {['JIRA', 'RBI', 'Fintech', 'Payments'].map((tag) => (
            <div 
              key={tag}
              className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-white font-medium"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 