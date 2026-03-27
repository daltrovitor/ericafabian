"use client"

import { HeroSection, SummarySection, AboutSection, SkillsSection, ProjectSection, FooterSection } from "./components/PortfolioSections";
import { useState, useEffect } from "react";

import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";

import { Suspense } from "react";


export default function Home() {

const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const totalPages = isMobile ? 9.4 : 6.6;

  return (
    <>
   

      <div id="canvas-container" className="fixed inset-0 z-0 bg-portfolio">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <Suspense fallback={null}>
            <ScrollControls pages={totalPages} damping={0.25} style={{ width: "100%", height: "100%" }}>
              <ambientLight intensity={1.5} />
              <directionalLight position={[5, 5, 5]} intensity={1.2} />
              


              <Scroll html style={{ width: "100%" }}>
                <div className="w-full relative">
                  <HeroSection />
                  <SummarySection />
                  <AboutSection />
                  <SkillsSection />
                  <ProjectSection title="PROJETO 01" subtitle="ATELIÊ DO ARTISTA" index={1} />
                  <FooterSection />
                </div>
              </Scroll>
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}