import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CampusEventsPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const upcomingEvents = [
    {
      title: 'Annual Tech Symposium 2024',
      date: '2024-03-15',
      time: '9:00 AM - 5:00 PM',
      location: 'Main Auditorium',
      description: 'A comprehensive technology conference featuring industry experts, research presentations, and networking opportunities.',
      category: 'Academic',
      attendees: '500+',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      title: 'Engineering Project Exhibition',
      date: '2024-03-20',
      time: '10:00 AM - 4:00 PM',
      location: 'Engineering Block',
      description: 'Final year students showcase their innovative engineering projects and research work.',
      category: 'Academic',
      attendees: '300+',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      title: 'Cultural Festival - Jashn-e-UET',
      date: '2024-04-05',
      time: '6:00 PM - 11:00 PM',
      location: 'Campus Grounds',
      description: 'Annual cultural celebration featuring music, dance, drama, and traditional performances.',
      category: 'Cultural',
      attendees: '800+',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      title: 'Career Fair 2024',
      date: '2024-04-12',
      time: '9:00 AM - 6:00 PM',
      location: 'Sports Complex',
      description: 'Meet with 50+ companies for internships, jobs, and career guidance opportunities.',
      category: 'Career',
      attendees: '1000+',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      title: 'Inter-University Sports Championship',
      date: '2024-04-18',
      time: '8:00 AM - 6:00 PM',
      location: 'Sports Grounds',
      description: 'Annual sports competition featuring cricket, football, basketball, and other sports.',
      category: 'Sports',
      attendees: '600+',
      image: '/Cricket pitch.jpeg'
    },
    {
      title: 'Research Conference on AI & ML',
      date: '2024-05-02',
      time: '9:00 AM - 5:00 PM',
      location: 'Conference Hall',
      description: 'International conference on Artificial Intelligence and Machine Learning research.',
      category: 'Research',
      attendees: '200+',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    }
  ];

  const pastEvents = [
    {
      title: 'Orientation Week 2024',
      date: '2024-01-15',
      description: 'Welcome ceremony for new students with campus tours and introductory sessions.',
      category: 'Academic',
      image: '/Academic block side view.jpeg'
    },
    {
      title: 'Industrial Visit - Software Houses',
      date: '2024-02-10',
      description: 'Computer Science students visited leading software companies in Islamabad.',
      category: 'Industrial',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      title: 'Construction Site Visit',
      date: '2024-02-20',
      description: 'Civil Engineering students explored major construction projects in the region.',
      category: 'Industrial',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      title: 'Blood Donation Drive',
      date: '2024-02-25',
      description: 'Community service initiative collecting blood donations for local hospitals.',
      category: 'Community Service',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Academic': 'from-blue-500 to-blue-600',
      'Cultural': 'from-purple-500 to-purple-600',
      'Career': 'from-green-500 to-green-600',
      'Sports': 'from-red-500 to-red-600',
      'Research': 'from-indigo-500 to-indigo-600',
      'Industrial': 'from-yellow-500 to-yellow-600',
      'Community Service': 'from-pink-500 to-pink-600'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentSection={0} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#003366] to-[#004080]">
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Link to="/" className="inline-flex items-center text-[#DAA520] hover:text-white mb-8 transition-colors duration-300">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="font-['Merriweather'] text-5xl lg:text-6xl font-bold text-white mb-6">
              Campus Events
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              Stay updated with our vibrant campus life through academic conferences, cultural festivals, 
              sports competitions, and community service initiatives.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-3xl">
              <div className="bg-[#DAA520] text-white p-4 rounded-lg text-center">
                <Calendar className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">20+</div>
                <div className="text-sm">Annual Events</div>
              </div>
              <div className="bg-white/20 text-white p-4 rounded-lg text-center">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">5000+</div>
                <div className="text-sm">Participants</div>
              </div>
              <div className="bg-white/20 text-white p-4 rounded-lg text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">10+</div>
                <div className="text-sm">Venues</div>
              </div>
              <div className="bg-white/20 text-white p-4 rounded-lg text-center">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">12</div>
                <div className="text-sm">Months Active</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Don't miss out on these exciting upcoming events and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(event.category)} text-white text-sm font-semibold rounded-full`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center text-sm mb-1">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees} Expected
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-['Merriweather'] text-xl font-bold text-[#003366] mb-3 group-hover:text-[#DAA520] transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-[#DAA520]" />
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-[#DAA520]" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-[#DAA520]" />
                      {event.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <button className="w-full py-3 bg-gradient-to-r from-[#003366] to-[#004080] text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group-hover:shadow-xl">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Recent Events
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Take a look at some of our recent successful events and activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 6) * 100}ms` }}
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-1 bg-gradient-to-r ${getCategoryColor(event.category)} text-white text-xs font-semibold rounded`}>
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="font-semibold text-[#003366] mb-2 group-hover:text-[#DAA520] transition-colors duration-300">
                    {event.title}
                  </h4>
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#003366] to-[#004080]">
        <div className="container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 delay-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-3xl font-bold text-white mb-6">
              Stay Updated with Campus Events
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss an important campus event or announcement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
              />
              <button className="px-6 py-3 bg-[#DAA520] hover:bg-[#B8860B] text-white rounded-lg font-semibold transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CampusEventsPage;