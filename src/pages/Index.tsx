
import React, { useState, useEffect } from "react";
import HackedScreen from "@/components/HackedScreen";
import PrankReveal from "@/components/PrankReveal";
import EducationalMessage from "@/components/EducationalMessage";
import EidGreeting from "@/components/EidGreeting";

const Index = () => {
  const [currentStage, setCurrentStage] = useState<'hacked' | 'reveal' | 'education' | 'greeting'>('hacked');

  useEffect(() => {
    // After 5 seconds, show the prank reveal
    const revealTimer = setTimeout(() => {
      setCurrentStage('reveal');
    }, 5000);
    
    // After 8 seconds, show the educational message
    const educationTimer = setTimeout(() => {
      setCurrentStage('education');
    }, 8000);
    
    // After 15 seconds, show the Eid greeting
    const greetingTimer = setTimeout(() => {
      setCurrentStage('greeting');
    }, 15000);
    
    return () => {
      clearTimeout(revealTimer);
      clearTimeout(educationTimer);
      clearTimeout(greetingTimer);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {currentStage === 'hacked' && <HackedScreen />}
      {currentStage === 'reveal' && <PrankReveal />}
      {currentStage === 'education' && <EducationalMessage />}
      {currentStage === 'greeting' && <EidGreeting />}
    </div>
  );
};

export default Index;
