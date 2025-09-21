import React, { useEffect, useState, useRef } from 'react';
import { Users, Calendar, Trophy, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentLife: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const campusImages = [
    '/societies.webp',
    '/Boys-Hostel1.webp',
    '/Sports.webp',
    '/GrandWelcome.webp'
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % campusImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [campusImages.length]);

  const activities = [
    {
      icon: Users,
      title: 'Student Societies',
      description: 'Join various academic and cultural societies to enhance your university experience.',
      link: '/student-societies'
    },
    {
      icon: Calendar,
      title: 'Campus Events',
      description: 'Regular seminars, workshops, cultural festivals, and academic competitions.',
      link: '/campus-events'
    },
    {
      icon: Trophy,
      title: 'Sports & Recreation',
      description: 'Modern sports facilities and competitive teams in various disciplines.',
      link: '/sports'
    },
    {
      icon: Heart,
      title: 'Community Service',
      description: 'Engage in social service projects and community development initiatives.',
      link: '/community-service'
    }
  ];

  return (
    <section ref={sectionRef} id="student-life" className="section min-h-screen py-20 snap-start bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-['Merriweather'] text-4xl lg:text-5xl font-bold text-[#003366] mb-6">
            Student Life & Campus Events
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Experience a vibrant campus life with diverse opportunities for personal growth, 
            leadership development, and lifelong friendships.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image Carousel */}
          <div className={`relative transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              {campusImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Campus Life ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Carousel Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {campusImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-[#DAA520] scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Activities Grid */}
          <div className={`transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="grid grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <Link
                  to={activity.link}
                  key={index}
                  className={`group block text-center p-6 rounded-xl bg-[#F5F5F5] hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                    isVisible ? 'animate-fade-in-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 100 + 600}ms` }}
                >
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-[#DAA520] to-[#B8860B] text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    <activity.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-[#003366] mb-3 group-hover:text-[#DAA520] transition-colors duration-300">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {activity.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Campus Highlights */}
        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center p-8 bg-gradient-to-br from-[#003366] to-[#004080] text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-lg">Student Organizations</div>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-[#DAA520] to-[#B8860B] text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl font-bold mb-2">20+</div>
            <div className="text-lg">Annual Events</div>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-[#2E7D32] to-[#388E3C] text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-lg">Campus Facilities</div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className={`mt-16 grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Link to="/hostel" className="group bg-gradient-to-br from-[#003366] to-[#004080] text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <h3 className="font-['Merriweather'] text-2xl font-bold mb-4">Hostel Facilities</h3>
            <p className="mb-4">Comfortable accommodation with 2 boys' hostels and 1 girls' hostel, complete with mess facilities and proper timings.</p>
            <div className="text-[#DAA520] font-semibold group-hover:translate-x-2 transition-transform duration-300">Learn More →</div>
          </Link>

          <Link to="/transport" className="group bg-gradient-to-br from-[#DAA520] to-[#B8860B] text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <h3 className="font-['Merriweather'] text-2xl font-bold mb-4">Transport Services</h3>
            <p className="mb-4">Convenient transportation with university buses and vans covering multiple routes for easy campus access.</p>
            <div className="text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">Learn More →</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StudentLife;