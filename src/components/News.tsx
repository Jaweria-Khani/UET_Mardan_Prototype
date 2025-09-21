import React, { useEffect, useState, useRef } from 'react';
import { Calendar, Clock } from 'lucide-react';

const News: React.FC = () => {
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

  const newsItems = [
    {
      title: 'UET Mardan Hosts International Engineering Conference 2024',
      excerpt: 'The three-day conference brought together leading researchers and industry experts to discuss evolutiuon of AI.',
      date: '2025-09-13',
      category: 'Conference',
      image: '/AIConference.webp',
      featured: true
    },
    {
      title: 'Host the International Water Management Institute (IWMI) Delegation',
      excerpt: 'Collaboration for Water Research & Sustainability',
      date: '2025-09-17',
      category: 'Partnership',
      image: 'IWMI.webp'
    }, 
    {
      title: 'Orientation Day - Fall 2025 | UET Mardan',
      excerpt: 'The Directorate of Clubs and Societies proudly hosted Orientation Day to warmly welcome the Fall 2025 batch into the UET Mardan family',
      date: '2025-09-8',
      category: 'Achievement',
      image: 'OrientationDay.webp'
    },
    {
      title: 'Surveying Camp Report- 2025',
      excerpt: 'The department of civil engineering has successfully organized its second Surveying Camp for Batch-II students in Kalam, Swat.',
      date: '2025-09-06',
      category: 'Innovation',
      image: 'Survey.webp'
    }
  ];

  const announcements = [
    '12 Sep 2025, Tender Notice for Procurment of Stationary Items',
    '25 Aug 2025, Third Merit Lists for Admissions to BSc Engineering Programs intake Semester Fall 2025',
    'New scholarship program for outstanding students announced',
    '17 Aug 2025, PG ADMISSION TEST RESULT - FALL 2025'
  ];

  return (
    <section ref={sectionRef} id="news" className="section min-h-screen py-20 snap-start bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-['Merriweather'] text-4xl lg:text-5xl font-bold text-[#003366] mb-6">
            News & Announcements
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest news, achievements, and important announcements 
            from UET Mardan community.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured News */}
          <div className="lg:col-span-2">
            <div className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {newsItems.slice(0, 1).map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 mb-8">
                  <div className="relative h-64 lg:h-80 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#DAA520] text-white text-sm font-semibold rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-['Merriweather'] text-2xl font-bold mb-2">{item.title}</h3>
                      <div className="flex items-center text-sm opacity-90">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(item.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Other News */}
              <div className="space-y-6">
                {newsItems.slice(1).map((item, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${(index + 1) * 150}ms` }}
                  >
                    <div className="flex">
                      <div className="w-32 h-32 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-2 py-1 bg-[#F5F5F5] text-[#003366] text-xs font-semibold rounded">
                            {item.category}
                          </span>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-3 h-3 mr-1" />
                            {new Date(item.date).toLocaleDateString()}
                          </div>
                        </div>
                        <h4 className="font-semibold text-[#003366] mb-2 group-hover:text-[#DAA520] transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-2">{item.excerpt}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Announcements Sidebar */}
          <div className={`transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-gradient-to-br from-[#003366] to-[#004080] text-white p-6 rounded-2xl shadow-xl sticky top-8">
              <h3 className="font-['Merriweather'] text-xl font-bold mb-6">Latest Announcements</h3>
              
              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 cursor-pointer group"
                  >
                    <div className="w-2 h-2 bg-[#DAA520] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm leading-relaxed group-hover:text-[#DAA520] transition-colors duration-300">
                      {announcement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;