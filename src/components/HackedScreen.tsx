
import React, { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";

const HackedScreen = () => {
  const [glitchEffect, setGlitchEffect] = useState(false);
  
  useEffect(() => {
    // Create glitch effect with interval
    const glitchInterval = setInterval(() => {
      setGlitchEffect(prev => !prev);
    }, 200);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  return (
    <div className="w-full h-full fixed inset-0 bg-black text-red-500 flex flex-col items-center justify-center overflow-hidden z-50">
      <div className={`transform ${glitchEffect ? 'translate-x-1' : '-translate-x-1'} transition-transform duration-100`}>
        <AlertTriangle className="w-24 h-24 mb-6 text-red-500 animate-pulse" />
        
        <h1 className={`text-5xl font-bold mb-8 text-center ${glitchEffect ? 'text-red-500' : 'text-yellow-400'}`}>
          تحذير: تم اختراق جهازك!
        </h1>
        
        <div className="space-y-4 text-xl max-w-2xl mx-auto text-center">
          <p className={`${glitchEffect ? 'opacity-100' : 'opacity-90'} text-2xl`}>
            تم الوصول إلى بياناتك الشخصية والتقاط صور الكاميرا
          </p>
          <p className={`text-yellow-400 ${glitchEffect ? 'blur-sm' : ''}`}>
            جميع حساباتك البنكية ووسائل التواصل الاجتماعي معرضة للخطر
          </p>
          <p className="text-white animate-pulse text-xl mt-6">
            جاري نسخ البيانات... 
            <span className="inline-block">
              {[1, 2, 3].map((i) => (
                <span 
                  key={i} 
                  className="inline-block animate-bounce mx-1"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  .
                </span>
              ))}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HackedScreen;
