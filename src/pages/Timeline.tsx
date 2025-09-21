import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  Award, Users, Building, BookOpen, Trophy } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TimelinePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const timelineEvents = [
    {
      year: '2018',
      title: 'University Establishment',
      description: 'UET Mardan was officially established as a public sector university, recognized by the Higher Education Commission (HEC) of Pakistan.',
      category: 'Foundation',
      icon: Building,
      achievements: [
        'Official charter granted by Government of KPK',
        'HEC recognition obtained',
        'Initial infrastructure development began',
        'First academic planning committee formed'
      ],
      image: '/IWMI.webp'
    },
    {
      year: '2019',
      title: 'First Academic Session',
      description: 'Launched the first academic session with initial programs in Computer Science and Civil Engineering.',
      category: 'Academic',
      icon: BookOpen,
      achievements: [
        'First batch of 100 students enrolled',
        'Computer Science and Civil Engineering programs launched',
        'Faculty recruitment drive completed',
        'Basic laboratory facilities established'
      ],
      image: '/Academic-block.webp'
    },
    {
      year: '2020',
      title: 'Program Expansion',
      description: 'Expanded academic offerings with new programs in Electrical and Mechanical Engineering.',
      category: 'Growth',
      icon: Users,
      achievements: [
        'Electrical Engineering program introduced',
        'Mechanical Engineering program launched',
        'Student enrollment reached 300+',
        'Library and computer labs upgraded'
      ],
      image: '/Library-view.webp'
    },
    {
      year: '2021',
      title: 'Infrastructure Development',
      description: 'Major infrastructure development including new academic blocks, hostels, and sports facilities.',
      category: 'Infrastructure',
      icon: Building,
      achievements: [
        'New academic block constructed',
        'Boys and girls hostels established',
        'Sports complex developed',
        'Campus mosque constructed'
      ],
      image: '/Boys-Hostel2.webp'
    },
    {
      year: '2022',
      title: 'Research Initiatives',
      description: 'Established research centers and launched graduate programs to promote research culture.',
      category: 'Research',
      icon: Award,
      achievements: [
        'First MS programs launched',
        'Research centers established',
        'Industry partnerships formed',
        'First research publications'
      ],
      image: '/Survey.webp'
    },
    {
      year: '2023',
      title: 'Technology Programs',
      description: 'Introduced cutting-edge programs in Artificial Intelligence and Software Engineering.',
      category: 'Innovation',
      icon: BookOpen,
      achievements: [
        'AI program launched',
        'Software Engineering program introduced',
        'Advanced labs established',
        'Industry collaboration increased'
      ],
      image: 'ComputerLab.webp'
    },
    {
      year: '2024',
      title: 'Excellence Recognition',
      description: 'Achieved significant milestones in student achievements, faculty research, and community impact.',
      category: 'Achievement',
      icon: Trophy,
      achievements: [
        'Students won national competitions',
        'Faculty research publications increased',
        'Community service programs expanded',
        '1000+ students enrolled'
      ],
      image: '/Sports.webp'
    }
  ];


  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Foundation': 'from-blue-500 to-blue-600',
      'Academic': 'from-green-500 to-green-600',
      'Growth': 'from-purple-500 to-purple-600',
      'Infrastructure': 'from-yellow-500 to-yellow-600',
      'Research': 'from-red-500 to-red-600',
      'Innovation': 'from-indigo-500 to-indigo-600',
      'Achievement': 'from-pink-500 to-pink-600'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };


 return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#003366] to-[#004080] text-white text-center py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center mb-8">
          </div>
          <div className="text-center">
          <h1 className="font-['Merriweather'] text-3xl md:text-5xl font-bold mb-6">
            Our Journey
          </h1>
          
          <p className="text-xl max-w-3xl mx-auto mb-0">
            Discover the remarkable journey of UET Mardan from its establishment in 2018 
              to becoming a leading institution in engineering education and research.
          </p>
        </div>
      </div>
    </header>

       <div className="container mx-auto px-4 py-12 space-y-16">
      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Timeline of Excellence
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Follow our journey through the years as we've grown from a vision to a thriving 
              center of academic excellence and innovation.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#DAA520] to-[#B8860B] hidden lg:block" />

            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#DAA520] to-[#B8860B] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 hidden lg:flex">
                    <event.icon className="w-8 h-8" />
                  </div>

                  <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                  }`}>
                    {/* Content */}
                    <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:pl-16'}`}>
                      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8">
                        <div className="flex items-center mb-4 lg:hidden">
                          <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(event.category)} rounded-full flex items-center justify-center text-white mr-4`}>
                            <event.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(event.category)} text-white text-sm font-semibold rounded-full`}>
                              {event.category}
                            </span>
                          </div>
                        </div>

                        <div className="hidden lg:block mb-4">
                          <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(event.category)} text-white text-sm font-semibold rounded-full`}>
                            {event.category}
                          </span>
                        </div>

                        <div className="text-4xl font-bold text-[#DAA520] mb-2">{event.year}</div>
                        <h3 className="font-['Merriweather'] text-2xl font-bold text-[#003366] mb-4">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {event.description}
                        </p>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-[#003366] mb-3">Key Achievements:</h4>
                          {event.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 rounded-full bg-[#DAA520] mr-3" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className={`${index % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16'}`}>
                      <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-xl group">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-2xl font-bold">{event.year}</div>
                          <div className="text-sm opacity-90">{event.category}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Vision for the Future
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              As we look ahead, UET Mardan is committed to continued growth, innovation, 
              and excellence in education and research.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`bg-gradient-to-br from-[#003366] to-[#004080] text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '1200ms' }}>
              <div className="text-center">
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-[#DAA520]" />
                <h3 className="font-['Merriweather'] text-xl font-bold mb-4">Academic Excellence</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Expanding our academic programs and enhancing the quality of education 
                  to meet global standards and industry demands.
                </p>
              </div>
            </div>

            <div className={`bg-gradient-to-br from-[#DAA520] to-[#B8860B] text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '1350ms' }}>
              <div className="text-center">
                <Award className="w-16 h-16 mx-auto mb-4" />
                <h3 className="font-['Merriweather'] text-xl font-bold mb-4">Research Innovation</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Strengthening our research capabilities and fostering innovation 
                  to contribute to technological advancement and societal development.
                </p>
              </div>
            </div>

            <div className={`bg-gradient-to-br from-[#2E7D32] to-[#388E3C] text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '1500ms' }}>
              <div className="text-center">
                <Users className="w-16 h-16 mx-auto mb-4" />
                <h3 className="font-['Merriweather'] text-xl font-bold mb-4">Community Impact</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Expanding our community outreach programs and social initiatives 
                  to create positive impact in the region and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-[#003366] to-[#004080] text-white rounded-lg p-12 text-center">
            <h2 className="font-['Merriweather'] text-3xl font-bold mb-6">
              Be Part of Our Continuing Journey
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join UET Mardan as we continue to write new chapters in our story of 
              academic excellence, innovation, and community impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/admissions"
                className="px-8 py-3 bg-[#DAA520] hover:bg-[#B8860B] text-white rounded-lg font-semibold transition-colors duration-300"
              >
              Apply for Admission
            </Link>
            </div>
      </section>
    </div>
      <Footer />
    </div>
  );
};

export default TimelinePage;