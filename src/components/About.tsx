import React, { useEffect, useState, useRef } from 'react';
import { BookOpen, Users, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
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

const stats = [
  { 
    icon: BookOpen, 
    value: '9+', 
    label: 'Academic Programs', 
    link: '/academic-programs', 
    description: 'Explore our comprehensive academic programs' 
  },
  { 
    icon: Users, 
    value: '1,000+', 
    label: 'Students', 
    link: '/students', 
    description: 'Meet our diverse student community' 
  },
  { 
    icon: Award, 
    value: '50+', 
    label: 'Faculty Members', 
    link: '/faculty', 
    description: 'Learn about our experienced faculty' 
  },
  { 
    icon: Globe, 
    value: '7+', 
    label: 'Years of Excellence', 
    link: '/timeline', 
    description: 'Discover our history and achievements' 
  }
];

  return (
    <section ref={sectionRef} id="about" className="section min-h-screen py-20 snap-start bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative">
              <img
                src="/Academic-block.webp"
                alt="UET Mardan New Academic Block"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#DAA520] to-[#B8860B] rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <div className="font-bold text-2xl">7+</div>
                  <div className="text-sm">Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={`transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl lg:text-5xl font-bold text-[#003366] mb-6">
              About UET Mardan
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              UET Mardan is an emerging public sector university recognized by the Higher Education Commission (HEC) 
              and Pakistan Engineering Council, dedicated to providing quality engineering education and research opportunities.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our mission is to foster innovation, research, and technological advancement while preparing 
              students to become leaders in engineering, technology, and applied sciences. We are committed 
              to excellence in education and contributing to the socio-economic development of the region.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Link
                  to={stat.link}
                  key={index}
                  className={`block text-center p-4 rounded-lg bg-[#F5F5F5] hover:bg-[#DAA520]/10 transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                    isVisible ? 'animate-fade-in-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 100 + 600}ms` }}
                >
                  <stat.icon className="w-8 h-8 text-[#DAA520] mx-auto mb-2" />
                  <div className="font-bold text-2xl text-[#003366] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;