import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  Users, Award, BookOpen, GraduationCap, Mail, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FacultyPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const facultyStats = [
    {
      category: 'Total Faculty',
      count: '50+',
      description: 'Experienced faculty members',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      category: 'PhD Holders',
      count: '25+',
      description: 'Faculty with doctoral degrees',
      icon: GraduationCap,
      color: 'from-green-500 to-green-600'
    },
    {
      category: 'Research Papers',
      count: '200+',
      description: 'Published research papers',
      icon: BookOpen,
      color: 'from-purple-500 to-purple-600'
    },
    {
      category: 'Industry Experience',
      count: '15+',
      description: 'Average years of experience',
      icon: Award,
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const departments = [
    {
      name: 'Computer Science',
      head: 'Dr. Muhammad Usman',
      faculty: [
        {
          name: 'Dr. Muhammad Usman',
          position: 'Professor & Head of Department',
          qualification: 'PhD Computer Science, University of Manchester, UK',
          specialization: 'Artificial Intelligence, Machine Learning',
          experience: '15 years',
          email: 'ali.khan@uetmardan.edu.pk',
          phone: '+92-937-9230295 Ext: 301',
          publications: '45 research papers',
          courses: ['Artificial Intelligence', 'Machine Learning', 'Data Structures']
        },
        {
          name: 'Dr. Sarah Ahmed',
          position: 'Associate Professor',
          qualification: 'PhD Software Engineering, NUST, Pakistan',
          specialization: 'Software Architecture, Requirements Engineering',
          experience: '12 years',
          email: 'sarah.ahmed@uetmardan.edu.pk',
          phone: '+92-937-9230295 Ext: 302',
          publications: '32 research papers',
          courses: ['Software Engineering', 'Software Architecture', 'Project Management']
        },
        {
          name: 'Mr. Ahmed Hassan',
          position: 'Assistant Professor',
          qualification: 'MS Computer Science, COMSATS, Pakistan',
          specialization: 'Database Systems, Web Development',
          experience: '8 years',
          email: 'ahmed.hassan@uetmardan.edu.pk',
          phone: '+92-937-9230295 Ext: 303',
          publications: '18 research papers',
          courses: ['Database Systems', 'Web Engineering', 'Programming Fundamentals']
        }
      ]
    },
    {
      name: 'Civil Engineering',
      head: 'Dr. Abdul Rahman Shah',
      faculty: [
        {
          name: 'Dr. Abdul Rahman Shah',
          position: 'Professor & Head of Department',
          qualification: 'PhD Civil Engineering, University of Leeds, UK',
          specialization: 'Structural Engineering, Earthquake Engineering',
          experience: '18 years',
          email: 'rahman.shah@uetmardan.edu.pk',
          phone: '+92-937-9230295 Ext: 401',
          publications: '52 research papers',
          courses: ['Structural Analysis', 'Earthquake Engineering', 'Advanced Concrete Design']
        },
        {
          name: 'Eng. Zainab Ali',
          position: 'Assistant Professor',
          qualification: 'MS Civil Engineering, UET Lahore, Pakistan',
          specialization: 'Construction Management, Project Planning',
          experience: '10 years',
          email: 'zainab.ali@uetmardan.edu.pk',
          phone: '+92-937-9230295 Ext: 402',
          publications: '25 research papers',
          courses: ['Construction Management', 'Project Planning', 'Building Materials']
        },
        {
          name: 'Dr. Tariq Mahmood',
          position: 'Associate Professor',
          qualification: 'PhD Environmental Engineering, TU Delft, Netherlands',
          specialization: 'Water Resources, Environmental Impact Assessment',
          experience: '14 years',
          email: 'tariq.mahmood@uetmardan.edu.pk',
          phone: '+92-937-9230295 Ext: 403',
          publications: '38 research papers',
          courses: ['Water Resources Engineering', 'Environmental Engineering', 'Hydrology']
        }
      ]
    },
    {
      name: 'Electrical Engineering',
      head: 'Dr. Hassan Mahmood',
      faculty: [
        {
          name: 'Dr. Hassan Mahmood',
          position: 'Professor & Head of Department',
          qualification: 'PhD Electrical Engineering, University of Toronto, Canada',
          specialization: 'Power Systems, Renewable Energy',
          experience: '16 years',
          email: 'hassan.mahmood@uetmardan.edu.pk',
          phone: '+92-937-9230295 Ext: 501',
          publications: '48 research papers',
          courses: ['Power Systems', 'Renewable Energy Systems', 'Electrical Machines']
        },
        {
          name: 'Dr. Ayesha Tariq',
          position: 'Associate Professor',
          qualification: 'PhD Electronics Engineering, KAIST, South Korea',
          specialization: 'Signal Processing, Communication Systems',
          experience: '11 years',
          email: 'ayesha.tariq@uetmardan.edu.pk',
          phone: '+92-937-9230295 Ext: 502',
          publications: '29 research papers',
          courses: ['Signal Processing', 'Communication Systems', 'Digital Electronics']
        },
        {
          name: 'Mr. Bilal Ahmad',
          position: 'Assistant Professor',
          qualification: 'MS Electrical Engineering, GIKI, Pakistan',
          specialization: 'Control Systems, Automation',
          experience: '7 years',
          email: 'bilal.ahmad@uetmardan.edu.pk',
          phone: '+92-937-9230295 Ext: 503',
          publications: '15 research papers',
          courses: ['Control Systems', 'Industrial Automation', 'Circuit Analysis']
        }
      ]
    },
    {
      name: 'Mechanical Engineering',
      head: 'Dr. Tariq Mehmood',
      faculty: [
        {
          name: 'Dr. Tariq Mehmood',
          position: 'Professor & Head of Department',
          qualification: 'PhD Mechanical Engineering, University of Sheffield, UK',
          specialization: 'Thermodynamics, Heat Transfer',
          experience: '17 years',
          email: 'tariq.mehmood@uetmardan.edu.pk',
          phone: '+92-937-9230295 Ext: 601',
          publications: '41 research papers',
          courses: ['Thermodynamics', 'Heat Transfer', 'Energy Systems']
        },
        {
          name: 'Eng. Bilal Ahmad',
          position: 'Assistant Professor',
          qualification: 'MS Mechanical Engineering, UET Taxila, Pakistan',
          specialization: 'Manufacturing Processes, CAD/CAM',
          experience: '9 years',
          email: 'bilal.mech@uetmardan.edu.pk',
          phone: '+92-937-9230295 Ext: 602',
          publications: '22 research papers',
          courses: ['Manufacturing Processes', 'CAD/CAM', 'Machine Design']
        }
      ]
    },
    {
      name: 'English Literature',
      head: 'Dr. Farah Naz',
      faculty: [
        {
          name: 'Dr. Farah Naz',
          position: 'Associate Professor & Head of Department',
          qualification: 'PhD English Literature, University of Edinburgh, UK',
          specialization: 'Victorian Literature, Postcolonial Studies',
          experience: '13 years',
          email: 'farah.naz@uetmardan.edu.pk',
          phone: '+92-937-9230295 Ext: 701',
          publications: '35 research papers',
          courses: ['Victorian Literature', 'Postcolonial Literature', 'Literary Criticism']
        },
        {
          name: 'Ms. Saba Khan',
          position: 'Assistant Professor',
          qualification: 'MA English Literature, University of Punjab, Pakistan',
          specialization: 'Modern Poetry, Creative Writing',
          experience: '6 years',
          email: 'saba.khan@uetmardan.edu.pk',
          phone: '+92-937-9230295 Ext: 702',
          publications: '12 research papers',
          courses: ['Modern Poetry', 'Creative Writing', 'English Composition']
        }
      ]
    },
    {
      name: 'Basic Sciences',
      head: 'Dr. Nasir Shah',
      faculty: [
        {
          name: 'Dr. Nasir Shah',
          position: 'Professor & Head of Department',
          qualification: 'PhD Mathematics, University of Cambridge, UK',
          specialization: 'Applied Mathematics, Numerical Analysis',
          experience: '19 years',
          email: 'nasir.shah@uetmardan.edu.pk',
          phone: '+92-937-9230295 Ext: 801',
          publications: '56 research papers',
          courses: ['Calculus', 'Differential Equations', 'Numerical Methods']
        },
        {
          name: 'Dr. Rubina Bibi',
          position: 'Associate Professor',
          qualification: 'PhD Physics, Quaid-i-Azam University, Pakistan',
          specialization: 'Solid State Physics, Materials Science',
          experience: '12 years',
          email: 'rubina.bibi@uetmardan.edu.pk',
          phone: '+92-937-9230295 Ext: 802',
          publications: '31 research papers',
          courses: ['Physics', 'Materials Science', 'Quantum Mechanics']
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-[#003366] to-[#004080] text-white text-center py-16">
        <div className="container mx-auto max-w-6xl">
         <div className="flex items-center mb-8">
          </div>
          <div className="text-center">
          <h1 className="font-['Merriweather'] text-3xl md:text-5xl font-bold mb-6">
            Faculty Members
          </h1>
            
            <p className="text-xl max-w-3xl mx-auto mb-0">
              Meet our distinguished faculty members who bring extensive academic and industry experience 
              to provide world-class education and mentorship to our students.
            </p>
            </div>
      </div>
    </header>
    

      {/* Faculty Statistics */}
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {facultyStats.map((stat, index) => (
                <div key={index} 
                className="bg-[#DAA520] text-white p-6 rounded-lg text-center">
                  <stat.icon className="w-10 h-10 mx-auto mb-3" />
                  <div className="font-bold text-2xl mb-1">{stat.count}</div>
                  <div className="text-sm">{stat.category}</div>
                </div>
              ))}
            </div>
            
          <div className="container mx-auto px-4 py-12 space-y-16"></div>  
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Faculty Excellence
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our faculty members are highly qualified professionals with extensive academic and research experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyStats.map((stat, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${stat.color}`} />
                
                <div className="p-8 text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${stat.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  
                  <div className="font-bold text-3xl text-[#003366] mb-2">{stat.count}</div>
                  <h3 className="font-semibold text-lg text-[#003366] mb-3">{stat.category}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     <div className="container mx-auto px-4 py-12 space-y-16">
      {/* Faculty by Department */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Faculty by Department
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our faculty members organized by their respective departments and specializations.
            </p>
          </div>

          <div className="space-y-16">
            {departments.map((department, deptIndex) => (
              <div
                key={deptIndex}
                className={`transition-all duration-1000 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${(deptIndex + 4) * 300}ms` }}
              >
                <div className="text-center mb-12">
                  <h3 className="font-['Merriweather'] text-3xl font-bold text-[#003366] mb-4">
                    {department.name}
                  </h3>
                  <p className="text-lg text-[#DAA520] font-semibold">
                    Head of Department: {department.head}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {department.faculty.map((faculty, facultyIndex) => (
                    <div
                      key={facultyIndex}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
                    >
                      <div className="p-8">
                        <div className="text-center mb-6">
                          <div className="w-20 h-20 bg-gradient-to-br from-[#003366] to-[#DAA520] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                            {faculty.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <h4 className="font-['Merriweather'] text-xl font-bold text-[#003366] mb-2">
                            {faculty.name}
                          </h4>
                          <p className="text-[#DAA520] font-semibold mb-2">{faculty.position}</p>
                        </div>

                        <div className="space-y-4 text-sm">
                          <div>
                            <span className="font-semibold text-[#003366]">Qualification:</span>
                            <p className="text-gray-600 mt-1">{faculty.qualification}</p>
                          </div>
                          
                          <div>
                            <span className="font-semibold text-[#003366]">Specialization:</span>
                            <p className="text-gray-600 mt-1">{faculty.specialization}</p>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <span className="font-semibold text-[#003366]">Experience:</span>
                              <p className="text-gray-600">{faculty.experience}</p>
                            </div>
                            <div>
                              <span className="font-semibold text-[#003366]">Publications:</span>
                              <p className="text-gray-600">{faculty.publications}</p>
                            </div>
                          </div>

                          <div>
                            <span className="font-semibold text-[#003366]">Courses:</span>
                            <div className="mt-2 space-y-1">
                              {faculty.courses.map((course, idx) => (
                                <div key={idx} className="flex items-center text-gray-600">
                                  <div className="w-2 h-2 rounded-full bg-[#DAA520] mr-2" />
                                  {course}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4 border-t border-gray-200">
                            <div className="space-y-2">
                              <div className="flex items-center text-gray-600">
                                <Mail className="w-4 h-4 mr-2 text-[#DAA520]" />
                                <span className="text-xs">{faculty.email}</span>
                              </div>
                              <div className="flex items-center text-gray-600">
                                <Phone className="w-4 h-4 mr-2 text-[#DAA520]" />
                                <span className="text-xs">{faculty.phone}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Research & Publications
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our faculty members are actively engaged in cutting-edge research and have published 
              extensively in international journals and conferences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`bg-gradient-to-br from-[#003366] to-[#004080] text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '1200ms' }}>
              <div className="text-center">
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-[#DAA520]" />
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-lg mb-4">Research Papers</div>
                <p className="text-white/90 text-sm">Published in international journals and conferences</p>
              </div>
            </div>

            <div className={`bg-gradient-to-br from-[#DAA520] to-[#B8860B] text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '1350ms' }}>
              <div className="text-center">
                <Award className="w-16 h-16 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-lg mb-4">Research Projects</div>
                <p className="text-white/90 text-sm">Ongoing funded research projects</p>
              </div>
            </div>

            <div className={`bg-gradient-to-br from-[#2E7D32] to-[#388E3C] text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '1500ms' }}>
              <div className="text-center">
                <Users className="w-16 h-16 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="text-lg mb-4">Collaborations</div>
                <p className="text-white/90 text-sm">International research collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#003366] to-[#004080]">
        <div className="container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 delay-1200 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-3xl font-bold text-white mb-6">
              Join Our Academic Community
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Interested in joining our faculty or collaborating on research projects? 
              We welcome qualified professionals to be part of our academic excellence.
            </p>
            <Link
                to="/admissions"
                className="px-8 py-3 bg-[#DAA520] hover:bg-[#B8860B] text-white rounded-lg font-semibold transition-colors duration-300"
              >
              Apply Now
          </Link>
        </div>
        </div>
      </section>
    </div>
  <Footer />
</div>
  );
};

export default FacultyPage;