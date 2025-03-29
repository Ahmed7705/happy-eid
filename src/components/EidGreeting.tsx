
import React, { useEffect, useState } from "react";

const EidGreeting = () => {
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
      className={`w-full h-full fixed inset-0 bg-gradient-to-b from-emerald-800 to-teal-900 text-white flex flex-col items-center justify-center p-4 overflow-y-auto transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-3xl mx-auto text-center py-8 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-yellow-400/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-400/20 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse delay-700"></div>
        <div className="absolute top-1/4 right-0 w-16 h-16 bg-blue-400/20 rounded-full translate-x-1/2 animate-pulse delay-500"></div>
        
        {/* Stars decoration */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-yellow-200 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center text-yellow-300">
            عيد فطر مبارك
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 leading-relaxed">
            <p className="mb-4">
              نتمنى لكم عيداً سعيداً مليئاً بالفرح والسعادة والأمان
            </p>
            <p>
              تقبل الله منا ومنكم صالح الأعمال
            </p>
            <p>
            تهنة عيدية من فريق غِراس  
                       </p>
          </div>
          
          <div className="mt-12">
            <p className="text-lg text-teal-200">
              وتذكر دائماً أن تكون حذراً وآمناً على الإنترنت... حتى في أوقات الأعياد
            </p>
            
            <button 
              onClick={() => window.location.reload()}
              className="mt-8 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors duration-300 text-lg"
            >
              إعادة التجربة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EidGreeting;
