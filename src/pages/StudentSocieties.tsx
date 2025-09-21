import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Calendar, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const StudentSocietiesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const societies = [
    {
      name: 'Computer Science Society',
      description: 'Promoting programming skills, organizing coding competitions, and tech workshops.',
      members: '150+',
      activities: ['Coding Competitions', 'Tech Talks', 'Hackathons', 'Workshop Series'],
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      name: 'Engineering Society',
      description: 'Bridging the gap between theoretical knowledge and practical applications.',
      members: '200+',
      activities: ['Industrial Visits', 'Technical Seminars', 'Project Exhibitions', 'Career Guidance'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      name: 'Literary Society',
      description: 'Fostering creativity through writing, poetry, and literary discussions.',
      members: '80+',
      activities: ['Poetry Sessions', 'Creative Writing', 'Book Clubs', 'Literary Competitions'],
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      name: 'Debate Society',
      description: 'Developing public speaking and critical thinking skills through debates.',
      members: '60+',
      activities: ['Inter-University Debates', 'Public Speaking', 'Model UN', 'Parliamentary Debates'],
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      name: 'Cultural Society',
      description: 'Celebrating diversity and organizing cultural events and festivals.',
      members: '120+',
      activities: ['Cultural Festivals', 'Traditional Events', 'Music Competitions', 'Dance Performances'],
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      name: 'Sports Society',
      description: 'Promoting physical fitness and organizing sports competitions.',
      members: '180+',
      activities: ['Inter-Department Tournaments', 'Fitness Programs', 'Sports Events', 'Athletic Training'],
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      name: 'Photography Society',
      description: 'Capturing moments and developing photography skills among students.',
      members: '70+',
      activities: ['Photo Walks', 'Photography Workshops', 'Exhibitions', 'Photo Competitions'],
      image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      name: 'Environmental Society',
      description: 'Promoting environmental awareness and sustainability initiatives.',
      members: '90+',
      activities: ['Tree Plantation', 'Clean Campus Drives', 'Awareness Campaigns', 'Recycling Programs'],
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      name: 'Entrepreneurship Society',
      description: 'Fostering entrepreneurial spirit and business development skills.',
      members: '50+',
      activities: ['Business Plan Competitions', 'Startup Workshops', 'Investor Meetups', 'Mentorship Programs'],
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      name: 'Robotics Society',
      description: 'Exploring robotics and automation through hands-on projects.',
      members: '40+',
      activities: ['Robot Building', 'Competitions', 'Technical Workshops', 'Innovation Projects'],
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      name: 'Community Service Society',
      description: 'Engaging in social welfare and community development activities.',
      members: '100+',
      activities: ['Volunteer Work', 'Charity Drives', 'Community Outreach', 'Social Awareness'],
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      name: 'Islamic Society',
      description: 'Promoting Islamic values and organizing religious activities.',
      members: '200+',
      activities: ['Religious Lectures', 'Quran Recitation', 'Islamic Events', 'Spiritual Guidance'],
      image: '/Mosque Inner.jpeg'
    },
    {
      name: 'Drama Society',
      description: 'Developing theatrical skills and organizing dramatic performances.',
      members: '45+',
      activities: ['Stage Plays', 'Acting Workshops', 'Script Writing', 'Theater Competitions'],
      image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      name: 'Music Society',
      description: 'Promoting musical talents and organizing musical events.',
      members: '35+',
      activities: ['Music Concerts', 'Instrument Training', 'Singing Competitions', 'Music Festivals'],
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      name: 'Research Society',
      description: 'Encouraging research activities and academic excellence.',
      members: '60+',
      activities: ['Research Projects', 'Academic Conferences', 'Publication Support', 'Research Methodology'],
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
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
              Student Societies
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              Join our vibrant community of 15+ student societies and discover opportunities for 
              personal growth, leadership development, and lifelong friendships.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl">
              <div className="bg-[#DAA520] text-white p-4 rounded-lg text-center">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">15+</div>
                <div className="text-sm">Active Societies</div>
              </div>
              <div className="bg-white/20 text-white p-4 rounded-lg text-center">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">1000+</div>
                <div className="text-sm">Active Members</div>
              </div>
              <div className="bg-white/20 text-white p-4 rounded-lg text-center">
                <Calendar className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">50+</div>
                <div className="text-sm">Annual Events</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Societies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {societies.map((society, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={society.image}
                    alt={society.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      {society.members} Members
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-['Merriweather'] text-xl font-bold text-[#003366] mb-3 group-hover:text-[#DAA520] transition-colors duration-300">
                    {society.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {society.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#003366] mb-3">Key Activities:</h4>
                    {society.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-[#DAA520] mr-3" />
                        {activity}
                      </div>
                    ))}
                  </div>

                  <button className="mt-6 w-full py-3 bg-gradient-to-r from-[#003366] to-[#004080] text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group-hover:shadow-xl">
                    Join Society
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-3xl font-bold text-[#003366] mb-6">
              Ready to Join a Society?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Become part of our vibrant student community and develop skills that will last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Register Interest
              </button>
              <button className="btn-secondary">
                Contact Student Affairs
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentSocietiesPage;