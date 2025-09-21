import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, GraduationCap, Users, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AcademicPrograms: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const programs = [
    {
      category: 'Engineering Programs',
      description: 'Comprehensive engineering education with hands-on experience and industry exposure.',
      programs: [
        {
          name: 'Computer Science',
          degrees: ['BS Computer Science', 'MS Computer Science'],
          duration: '4 years (BS) / 2 years (MS)',
          seats: '60 (BS) / 20 (MS)',
          link: '/program/computer-science'
        },
        {
          name: 'Software Engineering',
          degrees: ['BSc Software Engineering', 'MSc Software Engineering', 'PhD Software Engineering'],
          duration: '4 years (BS) / 2 years (MS)',
          seats: '100 (BS) / 20 (MS)',
          link: '/program/software-engineering'
        },
        {
          name: 'Civil Engineering',
          degrees: ['BSc Civil Engineering'],
          duration: '4 years (BS) ',
          seats: '50 (BS) ',
          link: '/program/civil-engineering'
        },
        {
          name: 'Electrical Engineering',
          degrees: ['BS Electrical Engineering', 'MS Electrical Engineering'],
          duration: '4 years (BS) / 2 years (MS)',
          seats: '50 (BS) / 15 (MS)',
          link: '/program/electrical-engineering'
        },
        {
          name: 'Mechanical Engineering',
          degrees: ['BS Mechanical Engineering', 'MS Mechanical Engineering'],
          duration: '4 years (BS) / 2 years (MS)',
          seats: '40 (BS) / 12 (MS)',
          link: '/program/mechanical-engineering'
        },
        {
          name: 'Telecommunication Engineering',
          degrees: ['BS Telecommunication Engineering', 'MSc Telecommunication Engineering', 'PhD Telecommunication Engineering'],
          duration: '4 years',
          seats: '30',
          link: '/program/telecommunication'
        }
      ]
    },
    {
      category: 'Technology Programs',
      description: 'Cutting-edge technology programs focusing on emerging fields and innovation.',
      programs: [
        {
          name: 'Artificial Intelligence',
          degrees: ['BS Artificial Intelligence'],
          duration: '4 years',
          seats: '40',
          link: '/program/artificial-intelligence'
        }
      ]
    },
    {
      category: 'Non-Engineering Programs',
      description: 'Diverse academic programs in humanities and sciences supporting holistic education.',
      programs: [
        {
          name: 'English Literature',
          degrees: ['BS English Literature'],
          duration: '4 years',
          seats: '30',
          link: '/program/english-literature'
        },
        {
          name: 'Natural Sciences & Humanities',
          degrees: ['BS English (Literature & Linguistic)', 'MS Mathematics'],
          duration: 'Varies',
          seats: 'All Students',
          link: '/program/natural-sciences'
        }
      ]
    }
  ];

  const admissionProcess = [
    {
      step: 1,
      title: 'Application Submission',
      description: 'Submit online application with required documents and application fee.',
      timeline: 'March - June'
    },
    {
      step: 2,
      title: 'Entrance Test',
      description: 'Appear for university entrance test or submit standardized test scores.',
      timeline: 'July'
    },
    {
      step: 3,
      title: 'Merit List',
      description: 'Merit lists published based on academic performance and test scores.',
      timeline: 'August'
    },
    {
      step: 4,
      title: 'Admission Confirmation',
      description: 'Complete admission formalities and fee payment within deadline.',
      timeline: 'August - September'
    }
  ];

  const requirements = [
    {
      program: 'Undergraduate Programs',
      requirements: [
        'Intermediate (FSc/ICS/FA) or equivalent with minimum 60% marks',
        'Valid entrance test score (UET Entry Test or equivalent)',
        'Original academic certificates and transcripts',
        'CNIC/B-Form and passport size photographs',
        'Medical fitness certificate'
      ]
    },
    {
      program: 'Graduate Programs',
      requirements: [
        'Bachelor\'s degree in relevant field with minimum 2.5 CGPA',
        'Valid GRE/GAT General test score',
        'Two academic reference letters',
        'Statement of purpose and research proposal',
        'English proficiency test (if applicable)'
      ]
    }
  ];

  const scholarships = [
    {
      name: 'Merit Scholarships',
      description: 'Based on academic excellence and entrance test performance.',
      coverage: 'Up to 100% tuition fee',
      eligibility: 'Top 10% students in each program'
    },
    {
      name: 'Need-Based Scholarships',
      description: 'Financial assistance for deserving students from low-income families.',
      coverage: '50-75% tuition fee',
      eligibility: 'Family income below specified threshold'
    },
    {
      name: 'Sports Scholarships',
      description: 'For students with exceptional sports achievements.',
      coverage: '25-50% tuition fee',
      eligibility: 'Provincial/National level sports participation'
    },
    {
      name: 'Minority Scholarships',
      description: 'Special scholarships for students from minority communities.',
      coverage: '50% tuition fee',
      eligibility: 'Minority community certificate required'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#003366] to-[#004080] text-white text-center py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center mb-8">
          </div>
          <div className="text-center">
          <h1 className="font-['Merriweather'] text-3xl md:text-5xl font-bold mb-6">
            Academic Programs
          </h1>
          
          <p className="text-xl max-w-3xl mx-auto mb-0">
            Discover our comprehensive range of undergraduate and postgraduate programs designed 
            to prepare students for successful careers in engineering, technology, and beyond.
          </p>
        </div>
      </div>
    </header>

   {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-[#DAA520] text-white p-6 rounded-lg text-center">
              <BookOpen className="w-10 h-10 mx-auto mb-3" />
              <div className="font-bold text-2xl mb-1">9+</div>
              <div className="text-sm">Programs Offered</div>
            </div>
            <div className="bg-[#DAA520] text-white p-6 rounded-lg text-center">
              <GraduationCap className="w-10 h-10 mx-auto mb-3" />
              <div className="font-bold text-2xl mb-1">15+</div>
              <div className="text-sm">Degree Options</div>
            </div>
            <div className="bg-[#DAA520] text-white p-6 rounded-lg text-center">
              <Users className="w-10 h-10 mx-auto mb-3" />
              <div className="font-bold text-2xl mb-1">1000+</div>
              <div className="text-sm">Students Enrolled</div>
            </div>
            <div className="bg-[#DAA520] text-white p-6 rounded-lg text-center">
              <Award className="w-10 h-10 mx-auto mb-3" />
              <div className="font-bold text-2xl mb-1">HEC</div>
              <div className="text-sm">Recognized</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Programs by Category */}
        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="font-['Merriweather'] text-3xl font-bold text-[#003366] mb-8 text-center">
            Programs by Category
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12 text-center">
            Explore our diverse academic offerings across engineering, technology, and humanities disciplines.
          </p>

          <div className="space-y-12">
            {programs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <div className="text-center">
                  <h3 className="font-['Merriweather'] text-2xl font-bold text-[#003366] mb-4">
                    {category.category}
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.programs.map((program, programIndex) => (
                    <Link
                      key={programIndex}
                      to={program.link}
                      className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-[#DAA520]"
                    >
                      <h4 className="font-['Merriweather'] text-xl font-bold text-[#003366] mb-4 group-hover:text-[#DAA520] transition-colors duration-300">
                        {program.name}
                      </h4>
                      
                      <div className="space-y-3 mb-4">
                        <div>
                          <span className="text-sm font-semibold text-[#DAA520]">Degrees:</span>
                          <div className="text-sm text-gray-600 mt-2">
                            {program.degrees.map((degree, idx) => (
                              <div key={idx} className="flex items-center mb-1">
                                <div className="w-2 h-2 rounded-full bg-[#DAA520] mr-2" />
                                {degree}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-semibold text-[#003366]">Duration:</span>
                            <div className="text-gray-600">{program.duration}</div>
                          </div>
                          <div>
                            <span className="font-semibold text-[#003366]">Seats:</span>
                            <div className="text-gray-600">{program.seats}</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center text-[#DAA520] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        Learn More
                        <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Admission Process */}
        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="font-['Merriweather'] text-3xl font-bold text-[#003366] mb-8 text-center">
            Admission Process
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12 text-center">
            Follow our streamlined admission process to join UET Mardan and begin your academic journey.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionProcess.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#DAA520] to-[#B8860B] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-[#003366] mb-3">{step.title}</h4>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{step.description}</p>
                  <div className="text-xs font-semibold text-[#DAA520] bg-[#DAA520]/10 px-3 py-1 rounded-full">
                    {step.timeline}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Admission Requirements */}
        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="font-['Merriweather'] text-3xl font-bold text-[#003366] mb-8 text-center">
            Admission Requirements
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12 text-center">
            Review the specific requirements for undergraduate and graduate programs.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              >
                <h3 className="font-['Merriweather'] text-xl font-bold text-[#003366] mb-6 text-center">
                  {req.program}
                </h3>
                <ul className="space-y-3">
                  {req.requirements.map((requirement, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 leading-relaxed">
                      <div className="w-2 h-2 rounded-full bg-[#DAA520] mr-3 mt-2 flex-shrink-0" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Scholarships */}
        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="font-['Merriweather'] text-3xl font-bold text-[#003366] mb-8 text-center">
            Scholarships & Financial Aid
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12 text-center">
            Various scholarship opportunities available to support deserving and talented students.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scholarships.map((scholarship, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#003366] to-[#004080] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    <Award className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold text-[#003366] mb-3">{scholarship.name}</h4>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{scholarship.description}</p>
                  
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-semibold text-[#DAA520]">Coverage: </span>
                      <span className="text-gray-700">{scholarship.coverage}</span>
                    </div>
                    <div className="text-xs text-gray-600 bg-white p-2 rounded border">
                      {scholarship.eligibility}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-br from-[#003366] to-[#004080] text-white rounded-lg p-12 text-center">
          <h2 className="font-['Merriweather'] text-3xl font-bold mb-6">
            Ready to Start Your Academic Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join UET Mardan and become part of a community dedicated to excellence in education, 
            research, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
                to="/admissions"
                className="px-8 py-3 bg-[#DAA520] hover:bg-[#B8860B] text-white rounded-lg font-semibold transition-colors duration-300"
              >
              Apply Now
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AcademicPrograms;