import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Clock, Users, Utensils, Shield, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HostelPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const hostels = [
    {
      name: 'Boys Hostel Block A',
      type: 'Boys',
      capacity: '200 Students',
      rooms: '100 Rooms',
      image: '/Academic block side view.jpeg',
      facilities: ['Wi-Fi Internet', 'Common Room', 'Study Hall', 'Laundry Service', 'Security 24/7', 'Mess Facility'],
      timings: '9:00 AM - 11:00 PM',
      description: 'Modern accommodation facility with all essential amenities for comfortable student living.'
    },
    {
      name: 'Boys Hostel Block B',
      type: 'Boys',
      capacity: '150 Students',
      rooms: '75 Rooms',
      image: '/UET at noon.jpeg',
      facilities: ['Wi-Fi Internet', 'Recreation Room', 'Prayer Area', 'Parking Space', 'Security 24/7', 'Mess Facility'],
      timings: '9:00 AM - 11:00 PM',
      description: 'Well-maintained hostel block providing a safe and conducive environment for studies.'
    },
    {
      name: 'Girls Hostel',
      type: 'Girls',
      capacity: '100 Students',
      rooms: '50 Rooms',
      image: '/Library Entrance.jpeg',
      facilities: ['Wi-Fi Internet', 'Common Kitchen', 'Study Room', 'Medical Room', 'Security 24/7', 'Mess Facility'],
      timings: '8:00 AM - 4:00 PM',
      description: 'Secure and comfortable accommodation designed specifically for female students.'
    }
  ];

  const staff = [
    {
      name: 'Dr. Muhammad Tariq',
      position: 'Dean of Student Affairs',
      qualification: 'PhD Education Management',
      contact: 'dean.affairs@uetmardan.edu.pk',
      office: 'Administration Block',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
    },
    {
      name: 'Mr. Khalid Rahman',
      position: 'Boys Hostel Warden',
      qualification: 'MS Management',
      contact: 'warden.boys@uetmardan.edu.pk',
      office: 'Boys Hostel Block A',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
    },
    {
      name: 'Ms. Fatima Ali',
      position: 'Girls Hostel Warden',
      qualification: 'MA Psychology',
      contact: 'warden.girls@uetmardan.edu.pk',
      office: 'Girls Hostel',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
    },
    {
      name: 'Mr. Ahmad Shah',
      position: 'Hostel Caretaker',
      qualification: 'Diploma in Administration',
      contact: 'caretaker@uetmardan.edu.pk',
      office: 'Hostel Administration',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
    }
  ];

  const rules = [
    {
      category: 'General Rules',
      items: [
        'All students must register at the reception upon arrival',
        'Visitors must be registered and accompanied by residents',
        'Smoking and alcohol consumption are strictly prohibited',
        'Loud music and noise are not allowed after 10:00 PM',
        'Students must maintain cleanliness in their rooms and common areas'
      ]
    },
    {
      category: 'Timing Rules',
      items: [
        'Boys Hostel: Entry allowed from 9:00 AM to 11:00 PM',
        'Girls Hostel: Entry allowed from 8:00 AM to 4:00 PM',
        'Late entry requires special permission from the warden',
        'Mess timings: Breakfast 7-9 AM, Lunch 12-2 PM, Dinner 7-9 PM',
        'Study hours: 8:00 PM to 11:00 PM (quiet hours)'
      ]
    },
    {
      category: 'Safety & Security',
      items: [
        '24/7 security guards at all hostel entrances',
        'CCTV surveillance in common areas',
        'Emergency contact numbers displayed in all blocks',
        'Fire safety equipment available on each floor',
        'Medical first aid available at reception'
      ]
    }
  ];

  const messMenu = [
    {
      day: 'Monday',
      breakfast: 'Paratha, Omelette, Tea',
      lunch: 'Rice, Dal, Chicken Curry, Salad',
      dinner: 'Roti, Vegetable, Yogurt'
    },
    {
      day: 'Tuesday',
      breakfast: 'Bread, Jam, Tea/Coffee',
      lunch: 'Biryani, Raita, Pickle',
      dinner: 'Rice, Fish Curry, Dal'
    },
    {
      day: 'Wednesday',
      breakfast: 'Halwa Puri, Chanay, Tea',
      lunch: 'Roti, Beef Curry, Rice, Salad',
      dinner: 'Pasta, Chicken, Bread'
    },
    {
      day: 'Thursday',
      breakfast: 'Paratha, Aloo Bhujia, Tea',
      lunch: 'Rice, Dal, Mutton, Vegetables',
      dinner: 'Roti, Palak, Yogurt'
    },
    {
      day: 'Friday',
      breakfast: 'Naan, Channay, Tea',
      lunch: 'Pulao, Chicken Karahi, Salad',
      dinner: 'Rice, Dal, Vegetables'
    },
    {
      day: 'Saturday',
      breakfast: 'Paratha, Omelette, Tea',
      lunch: 'Rice, Beef Curry, Dal, Salad',
      dinner: 'Roti, Mixed Vegetables, Yogurt'
    },
    {
      day: 'Sunday',
      breakfast: 'Special Breakfast (Varies)',
      lunch: 'Special Lunch (Varies)',
      dinner: 'Special Dinner (Varies)'
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
              Hostel Facilities
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              Comfortable and secure accommodation facilities designed to provide students with 
              a home away from home, fostering academic excellence and personal growth.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-3xl">
              <div className="bg-[#DAA520] text-white p-4 rounded-lg text-center">
                <Home className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">3</div>
                <div className="text-sm">Hostel Blocks</div>
              </div>
              <div className="bg-white/20 text-white p-4 rounded-lg text-center">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">450+</div>
                <div className="text-sm">Total Capacity</div>
              </div>
              <div className="bg-white/20 text-white p-4 rounded-lg text-center">
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">24/7</div>
                <div className="text-sm">Security</div>
              </div>
              <div className="bg-white/20 text-white p-4 rounded-lg text-center">
                <Utensils className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-2xl">3</div>
                <div className="text-sm">Mess Facilities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hostel Blocks */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Hostel Blocks
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our hostel facilities include 2 boys' hostels and 1 girls' hostel, each equipped 
              with modern amenities and proper security arrangements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {hostels.map((hostel, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={hostel.image}
                    alt={hostel.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 ${hostel.type === 'Boys' ? 'bg-blue-500' : 'bg-pink-500'} text-white text-sm font-semibold rounded-full`}>
                      {hostel.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {hostel.timings}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-['Merriweather'] text-xl font-bold text-[#003366] mb-3 group-hover:text-[#DAA520] transition-colors duration-300">
                    {hostel.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {hostel.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-[#F5F5F5] rounded-lg">
                      <Users className="w-6 h-6 text-[#DAA520] mx-auto mb-1" />
                      <div className="text-sm font-semibold text-[#003366]">{hostel.capacity}</div>
                    </div>
                    <div className="text-center p-3 bg-[#F5F5F5] rounded-lg">
                      <Home className="w-6 h-6 text-[#DAA520] mx-auto mb-1" />
                      <div className="text-sm font-semibold text-[#003366]">{hostel.rooms}</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-[#003366] mb-2">Facilities:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {hostel.facilities.map((facility, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 rounded-full bg-[#DAA520] mr-2" />
                          {facility}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-[#003366] to-[#004080] text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group-hover:shadow-xl">
                    Apply for Admission
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Profiles */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Hostel Staff
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Meet our dedicated hostel staff who ensure a safe, comfortable, and supportive 
              living environment for all students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staff.map((member, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#003366] to-[#DAA520] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="font-semibold text-[#003366] mb-1">{member.name}</h4>
                  <p className="text-[#DAA520] font-medium text-sm mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.qualification}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center">
                      <MapPin className="w-4 h-4 mr-2 text-[#DAA520]" />
                      {member.office}
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

      {/* Rules & Regulations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Rules & Regulations
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Important guidelines to ensure a harmonious and secure living environment for all residents.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {rules.map((section, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 7) * 200}ms` }}
              >
                <h3 className="font-['Merriweather'] text-xl font-bold text-[#003366] mb-6 text-center">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((rule, idx) => (
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

      {/* Mess Menu */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-900 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Weekly Mess Menu
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Nutritious and delicious meals prepared with care to keep our students healthy and energized.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-4">
              {messMenu.map((day, index) => (
                <div
                  key={index}
                  className={`bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index + 10) * 100}ms` }}
                >
                  <h4 className="font-semibold text-[#003366] text-center mb-4 pb-2 border-b border-[#DAA520]">
                    {day.day}
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="text-sm font-semibold text-[#DAA520] mb-1">Breakfast</h5>
                      <p className="text-xs text-gray-600">{day.breakfast}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-[#DAA520] mb-1">Lunch</h5>
                      <p className="text-xs text-gray-600">{day.lunch}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-[#DAA520] mb-1">Dinner</h5>
                      <p className="text-xs text-gray-600">{day.dinner}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
              Ready to Apply for Hostel Accommodation?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Secure your place in our comfortable and well-managed hostel facilities. 
              Applications are processed on a first-come, first-served basis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-[#DAA520] hover:bg-[#B8860B] text-white rounded-lg font-semibold transition-colors duration-300">
                Apply for Hostel
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#003366] transition-all duration-300">
                Contact Hostel Office
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HostelPage;