import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Users, Calendar, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SportsPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const sportsCategories = [
    {
      name: 'Cricket',
      description: 'Professional cricket ground with proper pitch and facilities for matches and practice.',
      image: '/Cricket pitch.jpeg',
      facilities: ['Professional Pitch', 'Practice Nets', 'Pavilion', 'Floodlights'],
      teams: ['Men\'s Team', 'Women\'s Team'],
      achievements: ['Inter-University Championship 2023', 'Regional Tournament Winners']
    },
    {
      name: 'Basketball',
      description: 'Modern basketball court with international standards for competitive games.',
      image: '/Basketball Ground.jpeg',
      facilities: ['Standard Court', 'Proper Hoops', 'Seating Area', 'Lighting'],
      teams: ['Men\'s Team', 'Women\'s Team'],
      achievements: ['District Championship 2023', 'University League Winners']
    },
    {
      name: 'Football',
      description: 'Full-size football ground for matches, training, and recreational activities.',
      image: '/Lawn.jpeg',
      facilities: ['Full-size Ground', 'Goal Posts', 'Changing Rooms', 'Spectator Area'],
      teams: ['Men\'s Team', 'Women\'s Team'],
      achievements: ['Regional Cup Runners-up', 'Inter-Department Champions']
    },
    {
      name: 'Badminton',
      description: 'Indoor badminton courts available for both boys and girls with proper equipment.',
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      facilities: ['Indoor Courts', 'Professional Nets', 'Equipment Available', 'Separate Timings'],
      teams: ['Men\'s Team', 'Women\'s Team', 'Mixed Doubles'],
      achievements: ['University Tournament Winners', 'Individual Championships']
    },
    {
      name: 'Table Tennis',
      description: 'Indoor table tennis facility with multiple tables for recreational and competitive play.',
      image: 'https://images.pexels.com/photos/976873/pexels-photo-976873.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      facilities: ['Multiple Tables', 'Indoor Facility', 'Equipment Provided', 'Tournament Setup'],
      teams: ['Men\'s Team', 'Women\'s Team'],
      achievements: ['Inter-University Participation', 'Local Tournament Winners']
    },
    {
      name: 'Volleyball',
      description: 'Outdoor volleyball court for recreational and competitive volleyball matches.',
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      facilities: ['Outdoor Court', 'Professional Net', 'Sand Court', 'Boundary Marking'],
      teams: ['Men\'s Team', 'Women\'s Team'],
      achievements: ['Regional Participation', 'Inter-Department Champions']
    }
  ];

  const upcomingEvents = [
    {
      event: 'Inter-University Cricket Championship',
      date: '2024-04-15',
      venue: 'UET Cricket Ground',
      participants: '8 Universities'
    },
    {
      event: 'Annual Sports Gala',
      date: '2024-05-01',
      venue: 'Campus Sports Complex',
      participants: 'All Departments'
    },
    {
      event: 'Basketball Tournament',
      date: '2024-04-20',
      venue: 'Basketball Court',
      participants: '12 Teams'
    },
    {
      event: 'Badminton Championship',
      date: '2024-04-25',
      venue: 'Indoor Sports Hall',
      participants: '50+ Players'
    }
  ];

  const achievements = [
    {
      year: '2023',
      achievement: 'Inter-University Cricket Championship Winners',
      sport: 'Cricket'
    },
    {
      year: '2023',
      achievement: 'Regional Basketball Tournament Runners-up',
      sport: 'Basketball'
    },
    {
      year: '2022',
      achievement: 'Best Sports Facility Award',
      sport: 'Overall'
    },
    {
      year: '2022',
      achievement: 'Football League Champions',
      sport: 'Football'
    }
  ];

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
              Sports & Recreation
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              Experience world-class sports facilities and competitive opportunities that promote 
              physical fitness, teamwork, and healthy competition among students.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-3xl">
              <div className="bg-[#DAA520] text-white p-4 rounded-lg text-center">
                <Trophy className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">6+</div>
                <div className="text-sm">Sports Categories</div>
              </div>
              <div className="bg-white/20 text-white p-4 rounded-lg text-center">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">500+</div>
                <div className="text-sm">Active Athletes</div>
              </div>
              <div className="bg-white/20 text-white p-4 rounded-lg text-center">
                <Calendar className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">20+</div>
                <div className="text-sm">Annual Events</div>
              </div>
              <div className="bg-white/20 text-white p-4 rounded-lg text-center">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">15+</div>
                <div className="text-sm">Championships</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Facilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Sports Facilities
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              State-of-the-art sports facilities designed to support both recreational activities 
              and competitive sports for all students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sportsCategories.map((sport, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-['Merriweather'] text-xl font-bold">{sport.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {sport.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#003366] mb-2">Facilities:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {sport.facilities.map((facility, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 rounded-full bg-[#DAA520] mr-2" />
                            {facility}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#003366] mb-2">Teams:</h4>
                      <div className="flex flex-wrap gap-2">
                        {sport.teams.map((team, idx) => (
                          <span key={idx} className="px-2 py-1 bg-[#F5F5F5] text-[#003366] text-sm rounded">
                            {team}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#003366] mb-2">Recent Achievements:</h4>
                      <div className="space-y-1">
                        {sport.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <Trophy className="w-3 h-3 text-[#DAA520] mr-2" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="mt-6 w-full py-3 bg-gradient-to-r from-[#003366] to-[#004080] text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group-hover:shadow-xl">
                    Join Team
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Upcoming Sports Events
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Don't miss these exciting sports events and competitions coming up this semester.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 6) * 100}ms` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#DAA520] to-[#B8860B] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold text-[#003366] mb-2">{event.event}</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center">
                      <Calendar className="w-4 h-4 mr-2 text-[#DAA520]" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center justify-center">
                      <Trophy className="w-4 h-4 mr-2 text-[#DAA520]" />
                      {event.venue}
                    </div>
                    <div className="flex items-center justify-center">
                      <Users className="w-4 h-4 mr-2 text-[#DAA520]" />
                      {event.participants}
                    </div>
                  </div>
                  <button className="mt-4 w-full py-2 bg-[#DAA520] hover:bg-[#B8860B] text-white rounded-lg font-semibold transition-colors duration-300">
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Celebrating our students' outstanding performance in various sports competitions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-[#003366] to-[#004080] text-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 10) * 100}ms` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    <Award className="w-8 h-8" />
                  </div>
                  <div className="text-[#DAA520] font-bold text-lg mb-2">{achievement.year}</div>
                  <h4 className="font-semibold mb-2">{achievement.achievement}</h4>
                  <div className="text-sm opacity-90">{achievement.sport}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#DAA520] to-[#B8860B]">
        <div className="container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 delay-900 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-3xl font-bold text-white mb-6">
              Ready to Join Our Sports Community?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're a beginner or an experienced athlete, there's a place for you in our sports programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-[#003366] rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Join a Team
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#003366] transition-all duration-300">
                Contact Sports Office
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SportsPage;