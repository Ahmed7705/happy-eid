
import React, { useEffect, useState } from "react";
import { Info } from "lucide-react";

const PrankReveal = () => {
  const [fadeIn, setFadeIn] = useState(false);
  
  useEffect(() => {
    // Trigger fade-in effect
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div 
      className={`w-full h-full fixed inset-0 bg-purple-900 text-white flex flex-col items-center justify-center p-4 transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
    >
      <Info className="w-20 h-20 mb-6 text-yellow-300" />
      
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-yellow-300">
        لا تقلق... كانت مجرد مزحة!
      </h1>
      
      <div className="space-y-6 text-xl max-w-2xl mx-auto text-center">
        <p className="text-2xl">
          جهازك آمن ولم يتم اختراقه. 
        </p>
        <p className="text-xl">
          هذه مجرد تجربة لتوعيتك بمخاطر الاحتيال الإلكتروني.
        </p>
      </div>
    </div>
  );
};

export default PrankReveal;
