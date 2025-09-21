import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Users, Calendar, Award, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CommunityServicePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const serviceProjects = [
    {
      title: 'Flood Relief Operations',
      description: 'Emergency response and rehabilitation efforts for flood-affected communities in KPK region.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      impact: '500+ Families Helped',
      duration: 'Ongoing',
      volunteers: '200+',
      activities: ['Emergency Relief', 'Food Distribution', 'Medical Aid', 'Rehabilitation Support']
    },
    {
      title: 'Education Support Program',
      description: 'Providing educational support and resources to underprivileged children in rural areas.',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      impact: '300+ Children Educated',
      duration: '2 Years',
      volunteers: '150+',
      activities: ['Teaching Support', 'Book Distribution', 'Scholarship Programs', 'School Infrastructure']
    },
    {
      title: 'Healthcare Awareness Campaigns',
      description: 'Organizing health camps and awareness programs in remote villages and communities.',
      image: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      impact: '1000+ People Reached',
      duration: '6 Months',
      volunteers: '100+',
      activities: ['Health Camps', 'Vaccination Drives', 'Health Education', 'Medical Checkups']
    },
    {
      title: 'Environmental Conservation',
      description: 'Tree plantation drives and environmental awareness programs for sustainable development.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      impact: '5000+ Trees Planted',
      duration: '1 Year',
      volunteers: '250+',
      activities: ['Tree Plantation', 'Clean-up Drives', 'Awareness Campaigns', 'Recycling Programs']
    },
    {
      title: 'Digital Literacy Program',
      description: 'Teaching basic computer skills and digital literacy to elderly and underprivileged communities.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      impact: '200+ People Trained',
      duration: '8 Months',
      volunteers: '80+',
      activities: ['Computer Training', 'Internet Basics', 'Digital Services', 'Online Safety']
    },
    {
      title: 'Blood Donation Drives',
      description: 'Regular blood donation campaigns to support local hospitals and emergency medical needs.',
      image: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      impact: '1500+ Units Collected',
      duration: 'Quarterly',
      volunteers: '300+',
      activities: ['Blood Collection', 'Donor Registration', 'Health Screening', 'Awareness Programs']
    }
  ];

  const upcomingInitiatives = [
    {
      title: 'Winter Relief Drive',
      date: '2024-12-01',
      location: 'Northern Areas',
      description: 'Distributing warm clothes and blankets to families in cold regions.',
      volunteersNeeded: 50
    },
    {
      title: 'Clean Water Project',
      date: '2024-04-15',
      location: 'Rural Villages',
      description: 'Installing water filtration systems in remote villages.',
      volunteersNeeded: 30
    },
    {
      title: 'Literacy Campaign',
      date: '2024-05-01',
      location: 'Local Communities',
      description: 'Adult literacy program for women in surrounding areas.',
      volunteersNeeded: 40
    },
    {
      title: 'Food Distribution',
      date: '2024-04-20',
      location: 'Urban Slums',
      description: 'Monthly food package distribution to needy families.',
      volunteersNeeded: 60
    }
  ];

  const testimonials = [
    {
      name: 'Ayesha Khan',
      program: 'Computer Science',
      quote: 'Participating in flood relief operations taught me the true meaning of service. It was life-changing.',
      project: 'Flood Relief Operations'
    },
    {
      name: 'Muhammad Ali',
      program: 'Civil Engineering',
      quote: 'Teaching children in rural areas made me realize how education can transform communities.',
      project: 'Education Support Program'
    },
    {
      name: 'Fatima Sheikh',
      program: 'Electrical Engineering',
      quote: 'The environmental conservation project helped me understand our responsibility towards nature.',
      project: 'Environmental Conservation'
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
              Community Service
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              Making a positive impact in our community through volunteer initiatives, social welfare projects, 
              and sustainable development programs that benefit society.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-3xl">
              <div className="bg-[#DAA520] text-white p-4 rounded-lg text-center">
                <Heart className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">15+</div>
                <div className="text-sm">Active Projects</div>
              </div>
              <div className="bg-white/20 text-white p-4 rounded-lg text-center">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">1000+</div>
                <div className="text-sm">Volunteers</div>
              </div>
              <div className="bg-white/20 text-white p-4 rounded-lg text-center">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">5000+</div>
                <div className="text-sm">Lives Impacted</div>
              </div>
              <div className="bg-white/20 text-white p-4 rounded-lg text-center">
                <Calendar className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">7+</div>
                <div className="text-sm">Years Active</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Our Service Projects
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover the various community service initiatives where our students make a meaningful 
              difference in the lives of others.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceProjects.map((project, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      {project.volunteers} Volunteers
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#DAA520] text-white text-sm font-semibold rounded-full">
                      {project.duration}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-['Merriweather'] text-xl font-bold text-[#003366] mb-3 group-hover:text-[#DAA520] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span className="font-semibold">Impact:</span>
                      <span className="text-[#DAA520] font-bold">{project.impact}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-[#003366] mb-2">Activities:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 rounded-full bg-[#DAA520] mr-2" />
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-[#003366] to-[#004080] text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group-hover:shadow-xl">
                    Join Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Initiatives */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Upcoming Initiatives
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Join us in these upcoming community service initiatives and make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingInitiatives.map((initiative, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 6) * 100}ms` }}
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#DAA520] to-[#B8860B] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold text-[#003366] mb-2">{initiative.title}</h4>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-[#DAA520]" />
                    {new Date(initiative.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-[#DAA520]" />
                    {initiative.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-[#DAA520]" />
                    {initiative.volunteersNeeded} Volunteers Needed
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {initiative.description}
                </p>

                <button className="w-full py-2 bg-[#DAA520] hover:bg-[#B8860B] text-white rounded-lg font-semibold transition-colors duration-300">
                  Volunteer Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Student Experiences
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Hear from our students about their transformative experiences in community service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-[#003366] to-[#004080] text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 10) * 150}ms` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{testimonial.name}</h4>
                  <p className="text-[#DAA520] text-sm mb-4">{testimonial.program}</p>
                  <blockquote className="text-white/90 italic mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-sm opacity-75">
                    Project: {testimonial.project}
                  </div>
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
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our community service initiatives and be part of positive change in society. 
              Every contribution matters, no matter how small.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-[#003366] rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Become a Volunteer
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#003366] transition-all duration-300">
                Contact Service Office
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunityServicePage;