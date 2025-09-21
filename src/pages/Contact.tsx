import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import Layout from '../components/Layout';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout seoProps={{
      title: "Contact Us",
      description: "Get in touch with University of Engineering and Technology Mardan"
    }}>
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#003366] to-[#004080] text-white text-center py-10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-['Merriweather'] text-4xl md:text-5xl font-bold mb-4">
            Contact UET Mardan
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us for inquiries, admissions, and more information
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-[#003366] mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#003366] p-3 rounded-full text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#003366]">Address</h3>
                  <p className="text-gray-700">
                    University of Engineering and Technology Mardan<br />
                    Khyber Pakhtunkhwa, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#003366] p-3 rounded-full text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#003366]">Phone</h3>
                  <p className="text-gray-700">+92-937-9230295</p>
                  <p className="text-gray-700">+92-937-9230296</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#003366] p-3 rounded-full text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#003366]">Email</h3>
                  <p className="text-gray-700">info@uetmardan.edu.pk</p>
                  <p className="text-gray-700">admissions@uetmardan.edu.pk</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#003366] p-3 rounded-full text-white">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#003366]">Office Hours</h3>
                  <p className="text-gray-700">
                    Monday - Thursday: 8:30 AM - 4:30 PM<br />
                    Friday: 8:30 AM - 12:30 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-8">
              <h3 className="font-semibold text-[#003366] mb-4">Location</h3>
              <div className="bg-gray-200 rounded-lg p-4 h-64 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p>Interactive map would be embedded here</p>
                  <p className="text-sm">University of Engineering and Technology Mardan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-[#003366] mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                  placeholder="Type your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#DAA520] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#B8860B] transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;