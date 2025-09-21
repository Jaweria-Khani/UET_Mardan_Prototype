import React, { useEffect, useState, useRef } from 'react';
import { Cpu, Cog, Calculator, Building, Lightbulb, Zap, BookOpen, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';

const Departments: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const departments = [
    {
      icon: Cpu,
      title: 'Computer Science',
      id: 'computer-science',
      description: 'Cutting-edge programs in software development, AI, cybersecurity, and data science.',
      programs: ['BS Computer Science', 'MS Computer Science'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Cog,
      title: 'Software Engineering',
      id: 'software-engineering',
      description: 'Advanced software development methodologies, project management, and system design.',
      programs: ['BSc Software Engineering', 'MSc Software Engineering', 'PhD Software Engineering'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Building,
      title: 'Civil Engineering',
      id: 'civil-engineering',
      description: 'Infrastructure development, structural design, and environmental engineering.',
      programs: ['BSc Civil Engineering'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Zap,
      title: 'Electrical Engineering',
      id: 'electrical-engineering',
      description: 'Power systems, electronics, telecommunications, and renewable energy.',
      programs: ['BSc Electrical Engineering', 'MSc Electrical Engineering, PhD in Electrical Engineering'],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Cog,
      title: 'Mechanical Engineering',
      id: 'mechanical-engineering',
      description: 'Advanced mechanical systems, robotics, and industrial automation.',
      programs: ['BSc Mechanical Engineering', 'MS Mechanical Engineering'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Lightbulb,
      title: 'Artificial Intelligence',
      id: 'artificial-intelligence',
      description: 'Machine learning, deep learning, neural networks, and intelligent systems.',
      programs: ['BS Artificial Intelligence'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: BookOpen,
      title: 'English ',
      id: 'english-literature',
      description: 'Literary analysis, creative writing, linguistics, and communication skills.',
      programs: ['BS English '],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Calculator,
      title: 'Natural Sciences & Humanities',
      id: 'natural-sciences',
      description: 'Pure and applied mathematics, physics, chemistry, and research methodologies.',
      programs: ['BS English (Literature & Linguistic)', ' MS Mathematics'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Radio,
      title: 'Telecommunication',
      id: 'telecommunication',
      description: 'Communication systems, signal processing, and network technologies.',
      programs: ['BS Telecommunication Engineering', ' MSc Telecommunication Engineering', 'PhD Telecommunication Engineering'],
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section ref={sectionRef} id="departments" className="section min-h-screen py-20 snap-start bg-gradient-to-br from-[#F5F5F5] to-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-['Merriweather'] text-4xl lg:text-5xl font-bold text-[#003366] mb-6">
            Departments & Programs
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of undergraduate and postgraduate programs in engineering 
            and non-engineering disciplines, each committed to excellence in education, research, and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <Link
              to={`/program/${dept.id}`}
              key={index}
              className={`group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden cursor-pointer ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${dept.color}`} />
              
              <div className="p-8">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${dept.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <dept.icon className="w-8 h-8" />
                </div>
                
                <h3 className="font-['Merriweather'] text-xl font-bold text-[#003366] mb-4 group-hover:text-[#DAA520] transition-colors duration-300">
                  {dept.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {dept.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-[#003366] mb-3">Programs:</h4>
                  {dept.programs.map((program, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${dept.color} mr-3`} />
                      {program}
                    </div>
                  ))}
                </div>
                
                <button className={`mt-6 w-full py-3 bg-gradient-to-r ${dept.color} text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group-hover:shadow-xl`}>
                  Learn More
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;