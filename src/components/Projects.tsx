"use client";

import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { OrbitControls } from '@react-three/drei';
import Link from 'next/link';
import * as THREE from 'three';

// 3D Achievement card component
function AchievementCard3D({ position, rotation, achievement, index }: any) {
  const mesh = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  
  // Animation with react-spring
  const { scale, positionZ } = useSpring({
    scale: active ? 1.1 : hovered ? 1.05 : 1,
    positionZ: active ? 1 : 0,
    config: { mass: 1, tension: 170, friction: 26 }
  });
  
  // Subtle floating animation
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5 + index) * 0.1;
    }
  });
  
  return (
    <animated.group 
      ref={mesh}
      position={[position[0], position[1], positionZ.to(z => z)]}
      rotation={rotation}
      scale={scale}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Card base */}
      <mesh receiveShadow castShadow>
        <boxGeometry args={[3, 2, 0.1]} />
        <meshStandardMaterial 
          color={hovered ? "#ffffff" : "#f5f5f5"} 
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>
      
      {/* Card title */}
      <mesh position={[0, -0.7, 0.051]} receiveShadow>
        <planeGeometry args={[2.8, 0.4]} />
        <meshStandardMaterial 
          color={hovered ? "#6366f1" : "#4f46e5"} 
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>
    </animated.group>
  );
}

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      title: "Successful Digital Rupee Implementation",
      description: "Successfully delivered fintech innovations at ICICI Bank, including the end-to-end implementation of the Digital Rupee application."
    },
    {
      id: 2,
      title: "100% Regulatory Compliance",
      description: "Ensured 100% compliance with RBI regulations for all Digital Rupee implementations, including special versions for global events."
    },
    {
      id: 3,
      title: "Cost Optimization",
      description: "Optimized vendor negotiations and reduced operational costs while maintaining high quality of service and deliverables."
    },
    {
      id: 4,
      title: "Process Automation",
      description: "Led automation initiatives, reducing manual workloads by 30% and improving overall operational efficiency."
    },
    {
      id: 5,
      title: "High System Reliability",
      description: "Maintained system uptime at 99% and resolved 95% of issues within SLA, ensuring superior customer experience."
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Key <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Achievements</span>
        </h2>

        <div className="h-[300px] mb-12">
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            
            {achievements.map((achievement, index) => {
              const xPos = (index - (achievements.length - 1) / 2) * 3.5;
              return (
                <AchievementCard3D 
                  key={achievement.id}
                  position={[xPos, 0, 0]} 
                  rotation={[0, 0, 0]}
                  achievement={achievement}
                  index={index}
                />
              );
            })}
            
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:translate-y-[-5px] transition-transform"
            >
              <div className="h-24 bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center p-4">
                <h3 className="text-xl font-bold text-white text-center">{achievement.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 