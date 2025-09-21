import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Admissions', href: '/admission' }, 
    { name: 'Academic Programs', href: '/academicPrograms' }, 
    { name: 'Students', href: '/students' },
    { name: 'Faculty', href: '/faculty' },
    { name: 'Timeline', href: '/timeline' },
    { name: 'Contact', href: '/contact' }
  ];

  const departments = [
    { name: 'Computer Science', href: '/program/computer-science' },
    { name: 'Electrical Engineering', href: '/program/electrical-engineering' },
    { name: 'Mechanical Engineering', href: '/program/mechanical-engineering' },
    { name: 'Civil Engineering', href: '/program/civil-engineering' },
    { name: 'Software Engineering', href: '/program/software-engineering' },
    { name: 'Artificial Intelligence', href: '/program/artificial-intelligence' },
    { name: 'English Literature', href: '/program/english-literature' },
    { name: 'Natural Sciences & Humanities', href: '/program/natural-sciences' },
    { name: 'Telecommunication', href: '/program/telecommunication' }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#003366] to-[#001122] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* University Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#DAA520] to-[#B8860B] rounded-full flex items-center justify-center">
                <img 
                  src="/UET-logo.webp" 
                  alt="UET Mardan" 
                  className="h-8 w-auto"
                  loading="eager"
                />
              </div>
              <div>
                <h3 className="font-['Merriweather'] text-lg font-bold leading-tight">
                  UET Mardan<br />
                </h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading institution in engineering education, research, and innovation, 
              committed to shaping the future of technology and society.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">Charsadda Road, Mardan, Khyber Pakhtunkhwa, Pakistan</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">+92-937-9230295</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">info@uetmardan.edu.pk</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Merriweather'] text-lg font-bold text-[#DAA520] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-[#DAA520] transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-['Merriweather'] text-lg font-bold text-[#DAA520] mb-6">Departments</h4>
            <ul className="space-y-3">
              {departments.map((dept, index) => (
                <li key={index}>
                  <Link
                    to={dept.href}
                    className="text-gray-300 hover:text-[#DAA520] transition-colors duration-300 text-sm leading-relaxed flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">{dept.name}</span>
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-['Merriweather'] text-lg font-bold text-[#DAA520] mb-6">Stay Connected</h4>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.facebook.com/uetmardan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#DAA520] rounded-full flex items-center justify-center hover:bg-[#B8860B] transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/uetmardan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#DAA520] rounded-full flex items-center justify-center hover:bg-[#B8860B] transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <p className="text-gray-300 text-sm mb-3">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#DAA520] transition-colors duration-300 text-sm"
                />
                <button className="px-3 py-2 bg-[#DAA520] hover:bg-[#B8860B] rounded-r-lg transition-colors duration-300 text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 University of Engineering & Technology Mardan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;