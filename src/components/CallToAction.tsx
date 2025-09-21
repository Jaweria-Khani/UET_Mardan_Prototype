import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Download, Send } from 'lucide-react';

const CallToAction: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="section min-h-screen py-20 snap-start relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/UET-greenry.webp')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 to-[#003366]/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="w-full max-w-4xl mx-auto text-center text-white">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl lg:text-6xl font-bold mb-6">
              Ready to Shape Your Future?
            </h2>
            
            <p className="text-xl lg:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
              Join thousands of students who have chosen UET Mardan for their academic journey. 
              Start your application today and become part of our legacy of excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="group bg-[#DAA520] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#B8860B] hover:scale-105 hover:shadow-2xl hover:shadow-[#DAA520]/50 flex items-center">
                <span className="group-hover:animate-pulse">Apply Now</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group border-2 border-[#DAA520] text-[#DAA520] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#DAA520] hover:text-white hover:scale-105 hover:shadow-2xl hover:shadow-[#DAA520]/50 flex items-center">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                <span>Download Brochure</span>
              </button>
              
              <button className="group bg-white text-[#003366] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#F5F5F5] hover:scale-105 hover:shadow-2xl flex items-center">
                <Send className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                <span>Contact Admissions</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="text-center group">
                <div className="text-4xl font-bold text-[#DAA520] mb-2 group-hover:scale-110 transition-transform duration-300">
                  98%
                </div>
                <div className="text-sm opacity-90">Graduate Employment Rate</div>
              </div>
              
              <div className="text-center group">
                <div className="text-4xl font-bold text-[#DAA520] mb-2 group-hover:scale-110 transition-transform duration-300">
                  15,000+
                </div>
                <div className="text-sm opacity-90">Alumni Network</div>
              </div>
              
              <div className="text-center group">
                <div className="text-4xl font-bold text-[#DAA520] mb-2 group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="text-sm opacity-90">Industry Partners</div>
              </div>
              
              <div className="text-center group">
                <div className="text-4xl font-bold text-[#DAA520] mb-2 group-hover:scale-110 transition-transform duration-300">
                  25+
                </div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-[#DAA520]/20 rounded-full animate-float" />
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-[#DAA520]/20 rounded-full animate-float-delayed" />
          <div className="absolute top-1/2 right-20 w-12 h-12 bg-[#DAA520]/20 rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;