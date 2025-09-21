import React, { useEffect, useState, useRef } from 'react';
import { BookOpen, Monitor, FlaskConical, Wifi, Car, Coffee } from 'lucide-react';

const Facilities: React.FC = () => {
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

  const facilities = [
    {
      icon: BookOpen,
      title: 'Digital Library',
      description: 'State-of-the-art library with vast digital resources, research databases, and 24/7 free internet access.',
      image: '/Library-Books.webp',
      features: ['Digital Archives', 'Research Databases', '24/7 Free Internet', 'Computer Access']
    },
    {
      icon: Monitor,
      title: 'Computer Labs',
      description: 'Modern computing facilities with latest software and high-speed internet.',
      image: 'ComputerLab.webp',
      features: ['Modern Workstations', 'Latest Software', 'High-Speed Internet', 'Specialized Labs']
    },
    {
      icon: FlaskConical,
      title: 'Research Labs',
      description: 'Advanced research facilities for engineering and scientific investigations.',
      image: 'lab.webp',
      features: ['Advanced Equipment', 'Research Support', 'Innovation Hub', 'Industry Partnerships']
    },
    {
      icon: Coffee,
      title: 'Campus Amenities',
      description: 'Comprehensive facilities including café, stationery shop, and banking services.',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      features: ['Campus Café', 'Stationery Shop', 'Fibre Bank Branch', 'Student Services']
    },
    {
      icon: Car,
      title: 'Transportation',
      description: 'Convenient transportation services for students and faculty.',
      image: 'Transport.webp',
      features: ['Bus Service', 'Parking Facilities', 'Route Coverage', 'Student Discounts']
    },
    {
      icon: Wifi,
      title: 'Mosque & Prayer Facilities',
      description: 'On-campus mosque providing prayer facilities for students, faculty, and staff.',
      image: '/Mosque-Inner.webp',
      features: ['Prayer Hall', 'Ablution Area', 'Separate Sections', 'Daily Prayers']
    }
  ];

  return (
    <section ref={sectionRef} id="facilities" className="section min-h-screen py-20 snap-start bg-gradient-to-br from-[#F5F5F5] to-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-['Merriweather'] text-4xl lg:text-5xl font-bold text-[#003366] mb-6">
            Facilities & Research
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            World-class facilities and resources designed to support academic excellence, 
            research innovation, and student success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="inline-flex p-3 rounded-full bg-[#DAA520] text-white group-hover:scale-110 transition-transform duration-300">
                    <facility.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-['Merriweather'] text-xl font-bold text-[#003366] mb-3 group-hover:text-[#DAA520] transition-colors duration-300">
                  {facility.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {facility.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {facility.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-[#DAA520] mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sports & Recreation Section */}
        <div className={`mt-16 transition-all duration-1000 delay-500 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="font-['Merriweather'] text-3xl font-bold text-[#003366] mb-8 text-center">
            Sports & Recreation Facilities
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <img src="/Lawn.webp" alt="Cricket Ground" className="w-full h-32 object-cover rounded-lg mb-4" />
              <h4 className="font-semibold text-[#003366] mb-2">Cricket Pitch</h4>
              <p className="text-sm text-gray-600">Professional cricket ground for matches and practice sessions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <img src="/Basketball-Ground.webp" alt="Basketball Court" className="w-full h-32 object-cover rounded-lg mb-4" />
              <h4 className="font-semibold text-[#003366] mb-2">Basketball Court</h4>
              <p className="text-sm text-gray-600">Modern basketball court for competitive games and training.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <img src="/CampusLawn.webp" alt="Campus Lawns" className="w-full h-32 object-cover rounded-lg mb-4" />
              <h4 className="font-semibold text-[#003366] mb-2">Campus Lawns</h4>
              <p className="text-sm text-gray-600">Beautiful green spaces for relaxation and outdoor activities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
               <img src="/MultiSports.webp" alt="Basketball Ground" className="w-full h-32 object-cover rounded-lg mb-4" />
              <h4 className="font-semibold text-[#003366] mb-2">Multi-Sports</h4>
              <p className="text-sm text-gray-600">Football, badminton, and other sports facilities available.</p>
            </div>
          </div>
        </div>
        {/* Research Highlights */}
        <div className={`mt-16 grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-500 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-br from-[#003366] to-[#004080] text-white p-8 rounded-2xl shadow-xl">
            <h3 className="font-['Merriweather'] text-2xl font-bold mb-6">Research Excellence</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#DAA520] mb-2">50+</div>
                <div className="text-sm">Research Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#DAA520] mb-2">25+</div>
                <div className="text-sm">Publications</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#DAA520] to-[#B8860B] text-white p-8 rounded-2xl shadow-xl">
            <h3 className="font-['Merriweather'] text-2xl font-bold mb-6">Innovation Hub</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-sm">Patents Filed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm">Industry Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;