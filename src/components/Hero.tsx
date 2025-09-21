import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="section h-screen relative overflow-hidden snap-start">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="w-full h-full bg-cover bg-center animate-ken-burns"
          style={{
            backgroundImage: `url('/UET-academic-block.webp')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/80 to-[#003366]/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className={`font-['Merriweather'] text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            University of Engineering and Technology Mardan
          </h1>
          
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-12 leading-relaxed transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Excellence in Engineering, Technology & Innovation at UET Mardan
          </p>

          <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Admissions Button */}
            <Link
              to="/admissions"
              className="group bg-[#DAA520] border-2 border-[#DAA520] text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#B8860B] hover:border-[#B8860B] hover:scale-105 hover:shadow-2xl hover:shadow-[#DAA520]/50 flex items-center justify-center min-w-[180px]"
            >
              <span className="group-hover:animate-pulse">Admissions</span>
            </Link>

            {/* QEC Button with adjusted text and size */}
            <Link
              to="/qec"
              className="group bg-[#DAA520] border-2 border-[#DAA520] text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#B8860B] hover:border-[#B8860B] hover:scale-105 hover:shadow-2xl hover:shadow-[#DAA520]/50 flex items-center justify-center min-w-[280px] text-center"
            >
              <span className="group-hover:animate-pulse">Quality Enhancement Cell</span>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('#about')}
              className="text-[#DAA520] hover:text-white transition-colors duration-300"
              aria-label="Scroll to next section"
            >
              <ChevronDown size={32} className="mx-auto animate-pulse" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;