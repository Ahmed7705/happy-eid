
import React, { useEffect, useState } from "react";
import { AlertTriangle, Check } from "lucide-react";

const EducationalMessage = () => {
  const [fadeIn, setFadeIn] = useState(false);
  
  useEffect(() => {
    // Trigger fade-in effect
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const scamSigns = [
    "رسائل تعدك بجوائز أو هدايا مجانية",
    "روابط غريبة أو مشبوهة",
    "طلب معلوماتك الشخصية أو البنكية",
    "رسائل بها أخطاء إملائية كثيرة",
    "عروض تبدو جيدة بشكل غير واقعي"
  ];
  
  const safetyTips = [
    "لا تنقر على روابط من مصادر غير موثوقة",
    "لا تشارك معلوماتك الشخصية أو البنكية",
    "تحقق دائماً من مصدر الرسالة",
    "استخدم برامج مكافحة الفيروسات",
    "أبلغ عن محاولات الاحتيال"
  ];
  
  return (
    <div 
      className={`w-full h-full fixed inset-0 bg-gradient-to-b from-blue-900 to-purple-900 text-white flex flex-col items-center justify-center p-4 overflow-y-auto transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-3xl mx-auto text-center py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-yellow-300">
          كن حذراً من عمليات الاحتيال في فترة الأعياد
        </h1>
        
        <p className="text-xl mb-6">
          في فترة العيد، تزداد محاولات الاحتيال الإلكتروني. كن يقظاً ولا تقع ضحية لهذه المحاولات.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 my-8">
          <div className="bg-red-900/50 p-6 rounded-lg text-right">
            <div className="flex items-center justify-end mb-4">
              <h2 className="text-xl font-bold ml-2">علامات الاحتيال</h2>
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
            <ul className="space-y-3">
              {scamSigns.map((sign, index) => (
                <li key={index} className="flex items-center justify-end">
                  <span>{sign}</span>
                  <AlertTriangle className="w-4 h-4 text-red-400 ml-2 flex-shrink-0" />
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-green-900/50 p-6 rounded-lg text-right">
            <div className="flex items-center justify-end mb-4">
              <h2 className="text-xl font-bold ml-2">نصائح للحماية</h2>
              <Check className="w-6 h-6 text-green-400" />
            </div>
            <ul className="space-y-3">
              {safetyTips.map((tip, index) => (
                <li key={index} className="flex items-center justify-end">
                  <span>{tip}</span>
                  <Check className="w-4 h-4 text-green-400 ml-2 flex-shrink-0" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <p className="text-xl mt-6 text-yellow-300">
          لا تدع محتالين يفسدون فرحة العيد عليك. كن ذكياً وآمناً على الإنترنت.
        </p>
      </div>
    </div>
  );
};

export default EducationalMessage;
