import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Users, Award, TrendingUp, Star, BookOpen, Trophy } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const StudentsPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const handleApplyAdmission = () => {
    navigate('/admission');
  };


  const studentStats = [
    {
      category: 'Total Enrollment',
      count: '1,000+',
      description: 'Active students across all programs',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      category: 'Graduates',
      count: '2,500+',
      description: 'Alumni working in leading organizations',
      icon: Award,
      color: 'from-green-500 to-green-600'
    },
    {
      category: 'Employment Rate',
      count: '95%',
      description: 'Graduates employed within 6 months',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600'
    },
    {
      category: 'Academic Excellence',
      count: '3.2',
      description: 'Average CGPA of graduating class',
      icon: Star,
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const achievements = [
    {
      title: 'Best Final Year Project Award',
      description: 'Civil Engineering project on sustainable construction materials won national recognition.',
      category: 'Research',
      year: '2023',
      students: ['Zainab Ali (CE-19)', 'Hassan Mahmood (CE-19)', 'Bilal Ahmad (CE-19)'],
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    
    {
      title: 'Innovation Challenge Winners',
      description: 'AI students developed award-winning solution for smart agriculture monitoring system.',
      category: 'Innovation',
      year: '2023',
      students: ['Ayesha Tariq (AI-20)', 'Kashif Ali (AI-20)', 'Maria Qasim (AI-21)'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      title: 'Community Service Excellence Award',
      description: 'Student volunteers recognized for outstanding flood relief efforts in KPK region.',
      category: 'Community Service',
      year: '2023',
      students: ['200+ student volunteers from all departments'],
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      title: 'Research Publication Achievement',
      description: 'Graduate students published research papers in international journals.',
      category: 'Research',
      year: '2023',
      students: ['Dr. Amna Riaz (Supervisor)', '5 MS students from various programs'],
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    }
  ];

  const testimonials = [
    {
      name: 'Ahmad Hassan',
      program: 'BS Computer Science (2023)',
      position: 'Software Engineer at TechCorp',
      quote: 'UET Mardan provided me with excellent technical foundation and practical skills that helped me excel in my career.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
    },
    {
      name: 'Fatima Sheikh',
      program: 'BS Civil Engineering (2022)',
      position: 'Project Engineer at Construction Ltd.',
      quote: 'The hands-on experience and industry exposure at UET Mardan prepared me well for real-world engineering challenges.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
    },
    {
      name: 'Usman Khan',
      program: 'BS Electrical Engineering (2023)',
      position: 'Power Systems Engineer',
      quote: 'The faculty support and research opportunities at UET Mardan helped me develop both technical and leadership skills.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
    },
    {
      name: 'Ayesha Ali',
      program: 'BS Software Engineering (2023)',
      position: 'Full Stack Developer',
      quote: 'The comprehensive curriculum and practical projects at UET Mardan gave me confidence to pursue my dream career.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300'
    }
  ];

  const studentServices = [
    {
      service: 'Academic Counseling',
      description: 'Personalized guidance for course selection and academic planning.',
      icon: BookOpen
    },
    {
      service: 'Career Services',
      description: 'Job placement assistance, resume building, and interview preparation.',
      icon: TrendingUp
    },
    {
      service: 'Student Support',
      description: 'Mental health support, financial aid, and personal counseling.',
      icon: Users
    },
    {
      service: 'Leadership Development',
      description: 'Opportunities to develop leadership skills through various programs.',
      icon: Star
    },
    {
      service: 'Research Opportunities',
      description: 'Undergraduate research programs and thesis supervision.',
      icon: Award
    },
    {
      service: 'Extracurricular Activities',
      description: 'Sports, societies, and cultural activities for holistic development.',
      icon: Trophy
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Academic': 'from-blue-500 to-blue-600',
      'Research': 'from-green-500 to-green-600',
      'Sports': 'from-red-500 to-red-600',
      'Innovation': 'from-purple-500 to-purple-600',
      'Community Service': 'from-pink-500 to-pink-600'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
    {/* Hero Section */}
      <section className="pt-20 pb-10 bg-gradient-to-br from-[#003366] to-[#004080] text-white text-center py-16">
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="font-['Merriweather'] text-3xl md:text-5xl font-bold mb-6">
              Our Students
            </h1>
            <p className="text-xl text-white/90 mb-0 max-w-3xl mx-auto">
              Meet our talented and diverse student community that represents the future of engineering, 
              technology, and innovation. Discover their achievements, experiences, and success stories.
            </p>
          </div>
        </div>
      </section>

      {/* Student Statistics */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {studentStats.map((stat, index) => (
              <div
                key={index}
                className={`group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${stat.color}`} />
                
                <div className="p-6 text-center">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  
                  <div className="font-bold text-2xl text-[#003366] mb-1">{stat.count}</div>
                  <h3 className="font-semibold text-lg text-[#003366] mb-2">{stat.category}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>  

      <div className="container mx-auto px-4 py-12 space-y-16">
      {/* Student Achievements */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Student Achievements
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Celebrating the outstanding accomplishments of our students in academics, research, sports, and community service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 4) * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(achievement.category)} text-white text-sm font-semibold rounded-full`}>
                      {achievement.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#DAA520] text-white text-sm font-semibold rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-['Merriweather'] text-xl font-bold text-[#003366] mb-3 group-hover:text-[#DAA520] transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {achievement.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#003366] text-sm">Students:</h4>
                    {achievement.students.map((student, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-[#DAA520] mr-3" />
                        {student}
                      </div>
                    ))}
                  </div>
                </div>
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
              Alumni Success Stories
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Hear from our graduates who are making their mark in various industries and organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-[#003366] to-[#004080] text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 10) * 150}ms` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="font-semibold text-lg mb-1">{testimonial.name}</h4>
                  <p className="text-[#DAA520] text-sm mb-2">{testimonial.program}</p>
                  <p className="text-white/80 text-sm mb-4">{testimonial.position}</p>
                  <blockquote className="text-white/90 italic text-sm leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Services */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-900 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-['Merriweather'] text-4xl font-bold text-[#003366] mb-6">
              Student Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive support services designed to help students succeed academically and personally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 14) * 150}ms` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#DAA520] to-[#B8860B] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold text-[#003366] mb-3">{service.service}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Call to Action */}
<section className="bg-gradient-to-br from-[#003366] to-[#004080] text-white rounded-lg p-12 text-center">
  <h2 className="font-['Merriweather'] text-3xl font-bold mb-6">
    Ready to Start Your Academic Journey?
  </h2>
  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
    Join UET Mardan and become part of a community dedicated to excellence 
    in education, research, and innovation.
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

export default StudentsPage;