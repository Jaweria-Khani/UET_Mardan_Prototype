import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bus, MapPin, Clock, Users, Route, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TransportPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const transportServices = [
    {
      type: 'University Buses',
      description: 'Large capacity buses for major routes with comfortable seating and safety features.',
      capacity: '40-50 passengers',
      routes: 6,
      image: 'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      features: ['Air Conditioning', 'GPS Tracking', 'First Aid Kit', 'Emergency Exits', 'CCTV Cameras']
    },
    {
      type: 'University Vans',
      description: 'Smaller vans for specific routes and areas with flexible scheduling.',
      capacity: '12-15 passengers',
      routes: 8,
      image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      features: ['Comfortable Seating', 'Regular Maintenance', 'Experienced Drivers', 'Route Flexibility', 'Student Friendly']
    }
  ];

  const routes = [
    {
      name: 'Route 1: Mardan City Center',
      stops: ['University Campus', 'Mardan Medical Complex', 'City Center', 'Railway Station', 'Bus Terminal'],
      schedule: ['7:30 AM', '12:30 PM', '5:30 PM'],
      duration: '45 minutes',
      fare: 'Rs. 50',
      vehicle: 'Bus'
    },
    {
      name: 'Route 2: Takht Bhai',
      stops: ['University Campus', 'Takht Bhai Road', 'Takht Bhai City', 'Archaeological Site'],
      schedule: ['8:00 AM', '1:00 PM', '6:00 PM'],
      duration: '30 minutes',
      fare: 'Rs. 40',
      vehicle: 'Van'
    },
    {
      name: 'Route 3: Charsadda',
      stops: ['University Campus', 'Tangi', 'Charsadda City', 'Government College'],
      schedule: ['7:45 AM', '12:45 PM', '5:45 PM'],
      duration: '50 minutes',
      fare: 'Rs. 60',
      vehicle: 'Bus'
    },
    {
      name: 'Route 4: Nowshera',
      stops: ['University Campus', 'Pabbi', 'Nowshera Cantonment', 'GT Road'],
      schedule: ['8:15 AM', '1:15 PM', '6:15 PM'],
      duration: '60 minutes',
      fare: 'Rs. 70',
      vehicle: 'Bus'
    },
    {
      name: 'Route 5: Peshawar',
      stops: ['University Campus', 'Charsadda Road', 'Ring Road', 'University Town', 'Peshawar City'],
      schedule: ['7:00 AM', '2:00 PM'],
      duration: '90 minutes',
      fare: 'Rs. 100',
      vehicle: 'Bus'
    },
    {
      name: 'Route 6: Local Areas',
      stops: ['University Campus', 'Sheikh Maltoon', 'Katlang', 'Rustam'],
      schedule: ['8:30 AM', '1:30 PM', '6:30 PM'],
      duration: '40 minutes',
      fare: 'Rs. 35',
      vehicle: 'Van'
    }
  ];

  const guidelines = [
    {
      title: 'Booking & Reservations',
      rules: [
        'Students must register for transport service at the beginning of each semester',
        'Monthly passes are available at discounted rates',
        'Advance booking required for special trips and events',
        'Valid student ID card must be presented when boarding',
        'Seat reservations are on first-come, first-served basis'
      ]
    },
    {
      title: 'Safety Guidelines',
      rules: [
        'Students must wear seat belts at all times during travel',
        'No standing passengers allowed in moving vehicles',
        'Emergency contact numbers are displayed in all vehicles',
        'Report any safety concerns immediately to the driver or transport office',
        'Follow all traffic rules and regulations during travel'
      ]
    },
    {
      title: 'Conduct Rules',
      rules: [
        'Maintain discipline and respect for fellow passengers',
        'No smoking, eating, or drinking inside vehicles',
        'Keep noise levels low and avoid disturbing others',
        'Dispose of waste properly and keep vehicles clean',
        'Follow instructions from drivers and transport staff'
      ]
    },
    {
      title: 'Payment & Fees',
      rules: [
        'Transport fees must be paid at the beginning of each month',
        'Late payment charges apply after the due date',
        'Refunds available only in case of service cancellation',
        'Student discounts available with valid documentation',
        'Special rates for faculty and staff members'
      ]
    }
  ];

  const staff = [
    {
      name: 'Mr. Sohail Ahmad',
      position: 'Transport Manager',
      contact: 'transport@uetmardan.edu.pk',
      phone: '+92-937-9230295 Ext: 205'
    },
    {
      name: 'Mr. Rashid Khan',
      position: 'Route Supervisor',
      contact: 'routes@uetmardan.edu.pk',
      phone: '+92-937-9230295 Ext: 206'
    },
    {
      name: 'Ms. Nadia Bibi',
      position: 'Booking Officer',
      contact: 'booking@uetmardan.edu.pk',
      phone: '+92-937-9230295 Ext: 207'
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
              Transport Services
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              Convenient and reliable transportation services connecting the university campus 
              with major cities and towns in the region, ensuring safe and comfortable travel for students.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-3xl">
              <div className="bg-[#DAA520] text-white p-4 rounded-lg text-center">
                <Bus className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">14</div>
                <div className="text-sm">Total Routes</div>
              </div>
              <div className="bg-white/20 text-white p-4 rounded-lg text-center">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">500+</div>
                <div className="text-sm">Daily Passengers</div>
              </div>
              <div className="bg-white/20 text-white p-4 rounded-lg text-center">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">12</div>
                <div className="text-sm">Hours Service</div>
              </div>
              <div className="bg-white/20 text-white p-4 rounded-lg text-center">
                <Route className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">6</div>
                <div className="text-sm">Major Cities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Our Transport Fleet
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Modern and well-maintained vehicles equipped with safety features and comfort amenities 
              for a pleasant travel experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {transportServices.map((service, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.type}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-['Merriweather'] text-2xl font-bold">{service.type}</h3>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-[#F5F5F5] rounded-lg">
                        <Users className="w-6 h-6 text-[#DAA520] mx-auto mb-2" />
                        <div className="font-semibold text-[#003366]">{service.capacity}</div>
                        <div className="text-sm text-gray-600">Capacity</div>
                      </div>
                      <div className="text-center p-4 bg-[#F5F5F5] rounded-lg">
                        <Route className="w-6 h-6 text-[#DAA520] mx-auto mb-2" />
                        <div className="font-semibold text-[#003366]">{service.routes} Routes</div>
                        <div className="text-sm text-gray-600">Available</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-[#003366] mb-3">Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 rounded-full bg-[#DAA520] mr-3" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes & Schedules */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Routes & Schedules
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive route network covering major cities and towns with regular schedules 
              to meet student transportation needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 2) * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-[#003366] text-lg">{route.name}</h4>
                  <span className={`px-2 py-1 text-xs font-semibold rounded ${
                    route.vehicle === 'Bus' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {route.vehicle}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-semibold text-[#DAA520] mb-2">Stops:</h5>
                    <div className="space-y-1">
                      {route.stops.map((stop, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-3 h-3 text-[#DAA520] mr-2" />
                          {stop}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-semibold text-[#DAA520] mb-2">Schedule:</h5>
                      <div className="space-y-1">
                        {route.schedule.map((time, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <Clock className="w-3 h-3 text-[#DAA520] mr-2" />
                            {time}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold text-[#DAA520] mb-2">Details:</h5>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div>Duration: {route.duration}</div>
                        <div className="font-semibold text-[#003366]">Fare: {route.fare}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="mt-4 w-full py-2 bg-[#DAA520] hover:bg-[#B8860B] text-white rounded-lg font-semibold transition-colors duration-300">
                  Book Seat
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Transport Guidelines
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Important guidelines and procedures to ensure safe, efficient, and comfortable 
              transportation services for all users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guidelines.map((section, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 8) * 200}ms` }}
              >
                <h3 className="font-['Merriweather'] text-lg font-bold text-[#003366] mb-4 text-center">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700 leading-relaxed">
                      <div className="w-2 h-2 rounded-full bg-[#DAA520] mr-3 mt-2 flex-shrink-0" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-900 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Transport Office Contact
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get in touch with our transport office for bookings, inquiries, and assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {staff.map((member, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 12) * 150}ms` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#003366] to-[#DAA520] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="font-semibold text-[#003366] mb-1">{member.name}</h4>
                  <p className="text-[#DAA520] font-medium text-sm mb-4">{member.position}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center text-gray-600">
                      <Phone className="w-4 h-4 mr-2 text-[#DAA520]" />
                      {member.phone}
                    </div>
                    <div className="text-[#003366] font-medium">
                      {member.contact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#003366] to-[#004080]">
        <div className="container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 delay-1100 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-3xl font-bold text-white mb-6">
              Need Transportation Services?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Register for our transport services and enjoy convenient, safe, and affordable 
              travel to and from the university campus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-[#DAA520] hover:bg-[#B8860B] text-white rounded-lg font-semibold transition-colors duration-300">
                Register for Transport
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#003366] transition-all duration-300">
                Contact Transport Office
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TransportPage;