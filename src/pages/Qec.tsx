import React, { useEffect, useState } from "react";
import { FileText, Users, Target, BarChart3, Award, BookOpen, Mail } from "lucide-react";
import Layout from "../components/Layout";

const Qec: React.FC = () => {
  useEffect(() => {
    document.title = "Quality Enhancement Cell (QEC) — UET Mardan";
  }, []);

  const [activeTab, setActiveTab] = useState("introduction");

  return (
    <Layout seoProps={{
      title: "Quality Enhancement Cell",
      description: "QEC at UET Mardan promotes quality in teaching, learning, research, and administrative processes"
    }}>
      {/* Header Section */}
        <header className="bg-gradient-to-r from-[#003366] to-[#004080] text-white text-center py-10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-['Merriweather'] text-4xl md:text-5xl font-bold mb-4">
            Quality Enhancement Cell (QEC)
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Promoting a culture of quality in teaching, learning, research, and administrative processes
          </p>
        </div>
      </header>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          {[
            { id: "introduction", label: "Introduction", icon: <BookOpen size={18} /> },
            { id: "objectives", label: "Objectives", icon: <Target size={18} /> },
            { id: "values", label: "Core Values", icon: <Award size={18} /> },
            { id: "strategy", label: "Strategy", icon: <BarChart3 size={18} /> },
            { id: "structure", label: "Organization", icon: <Users size={18} /> },
            { id: "surveys", label: "Surveys", icon: <BarChart3 size={18} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-t-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-white text-[#003366] border-t-2 border-l-2 border-r-2 border-[#003366]"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {/* Introduction Section */}
          {activeTab === "introduction" && (
            <div>
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">Introduction to QEC</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  The Quality Enhancement Cell (QEC) at the University of Engineering and Technology 
                  Mardan is dedicated to fostering a culture of quality in all academic and administrative 
                  processes. Established in accordance with the guidelines of the Higher Education 
                  Commission (HEC) of Pakistan, QEC serves as a driving force for continuous improvement 
                  and excellence.
                </p>
                <p className="mb-4">
                  Our mission is to ensure that the university's programs meet national and international 
                  quality standards, preparing graduates to excel in their professional careers and 
                  contribute meaningfully to society.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-[#003366]">
                  <h3 className="font-semibold text-[#003366] mb-2">Vision Statement</h3>
                  <p>
                    To be a center of excellence for quality assurance and enhancement, recognized for 
                    its contribution to academic excellence and innovation in engineering and technology 
                    education.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Objectives Section */}
          {activeTab === "objectives" && (
            <div>
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">Objectives of QEC</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-[#003366] mb-3 flex items-center gap-2">
                    <Target className="text-[#DAA520]" /> Primary Objectives
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Develop and implement quality assurance processes and procedures</li>
                    <li>Prepare programs for accreditation according to HEC and PEC standards</li>
                    <li>Promote a culture of quality among faculty, staff, and students</li>
                    <li>Enhance teaching and learning methodologies across all departments</li>
                    <li>Facilitate capacity building of faculty through training programs</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-[#003366] mb-3 flex items-center gap-2">
                    <BarChart3 className="text-[#DAA520]" /> Operational Goals
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Conduct regular program reviews and self-assessment exercises</li>
                    <li>Collect and analyze stakeholder feedback for continuous improvement</li>
                    <li>Develop and maintain program specifications and learning outcomes</li>
                    <li>Coordinate with external accreditation bodies and quality assurance agencies</li>
                    <li>Publish quality assurance manuals and guidelines for departments</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Core Values Section */}
          {activeTab === "values" && (
            <div>
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">Core Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Excellence",
                    description: "We strive for the highest standards in all academic and administrative endeavors.",
                    icon: <Award className="text-[#DAA520]" />
                  },
                  {
                    title: "Integrity",
                    description: "We maintain honesty, transparency, and ethical practices in all our activities.",
                    icon: <FileText className="text-[#DAA520]" />
                  },
                  {
                    title: "Innovation",
                    description: "We encourage creative approaches to teaching, learning, and quality enhancement.",
                    icon: <Target className="text-[#DAA520]" />
                  },
                  {
                    title: "Collaboration",
                    description: "We work closely with all stakeholders to achieve shared quality goals.",
                    icon: <Users className="text-[#DAA520]" />
                  },
                ].map((value, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg flex items-start gap-4">
                    <div className="bg-[#003366] p-3 rounded-full text-white">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#003366] mb-2">{value.title}</h3>
                      <p className="text-gray-700">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Strategy Section */}
          {activeTab === "strategy" && (
            <div>
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">Quality Enhancement Strategy</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-[#003366] mb-3">Our Approach</h3>
                <p className="text-gray-700 mb-4">
                  QEC employs a multi-faceted strategy to ensure continuous quality improvement across all university functions:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Implementation of a systematic quality assurance cycle (Plan-Do-Check-Act)</li>
                  <li>Regular monitoring and evaluation of academic programs</li>
                  <li>Comprehensive stakeholder engagement through surveys and feedback mechanisms</li>
                  <li>Faculty development programs to enhance teaching methodologies</li>
                  <li>Benchmarking against national and international standards</li>
                </ul>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-[#003366] mb-3">Short-term Initiatives</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Development of program learning outcomes for all degrees</li>
                    <li>Implementation of course evaluation system</li>
                    <li>Training workshops on outcome-based education</li>
                    <li>Preparation of self-assessment reports for all departments</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-[#003366] mb-3">Long-term Goals</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>International accreditation of engineering programs</li>
                    <li>Development of a comprehensive quality management system</li>
                    <li>Establishment of a culture of continuous improvement</li>
                    <li>Recognition as a center of excellence in quality assurance</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Organizational Structure Section */}
          {activeTab === "structure" && (
            <div>
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">Organizational Structure</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-[#003366] mb-4">QEC Team</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      name: "Prof. Dr. Fazal Muhammad",
                      position: "Director QEC",
                      email: "director.qec@uetmardan.edu.pk"
                    },
                    {
                      name: "Dr. Sahib Khan",
                      position: "Program Team Member",
                      qualification: "Lecturer in Telecommunication Department"
                    },
                    {
                      name: "Engr. Salman Saleem",
                      position: "Program Team Member",
                      qualification: "Lab Engineer at Electrical Engineering Department"
                    },
                    {
                      name: "Engr. Salman Saleem",
                      position: "Program Team Member",
                      qualification: "Lab Engineer at Electrical Engineering Department"
                    },
                    {
                      name: "Engr. Lubna",
                      position: "Program Team Member",
                      qualification: "Lecturer at Computer Software Engineering Department"
                    },
                    {
                      name: "Ms. Faiza Tilla",
                      position: "Program Team Member",
                      qualification: "Lecturer at Computer Science Department"
                    },
                    {
                      name: "Engr. Samad Saleem",
                      position: "Program Team Member",
                      qualification: "Lecturer at Electrical Engineering Department",
                    },
                    {
                      name: "Engr. Shiraz",
                      position: "Program Team Member",
                      qualification: "Lab Engineer at Civil Engineering Department",
                    }
                  ].map((member, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-[#003366]">{member.name}</h4>
                      <p className="text-[#DAA520] font-medium">{member.position}</p>
                      <p className="text-gray-600 text-sm mt-2">{member.qualification}</p>
                      <p className="text-gray-600 text-sm mt-1 flex items-center gap-1">
                        <Mail size={14} /> {member.email}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-[#003366] mb-4">Quality Assurance Committee</h3>
                <p className="text-gray-700 mb-4">
                  The QEC works closely with the Quality Assurance Committee, which includes representatives from all academic departments and key administrative units.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Heads of all academic departments</li>
                  <li>Student representatives from each faculty</li>
                  <li>Industry representatives</li>
                  <li>Alumni representatives</li>
                </ul>
              </div>
            </div>
          )}

          {/* Surveys Section */}
          {activeTab === "surveys" && (
            <div>
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">Surveys and Feedback</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-[#003366] mb-4">Ongoing Surveys</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Student Satisfaction Survey - Spring 2023",
                      deadline: "June 30, 2023",
                      participants: "All enrolled students",
                      status: "Active"
                    },
                    {
                      title: "Alumni Employment Survey",
                      deadline: "July 15, 2023",
                      participants: "Graduates of 2018-2022",
                      status: "Active"
                    },
                    {
                      title: "Employer Feedback Survey",
                      deadline: "May 30, 2023",
                      participants: "Industry partners",
                      status: "Completed"
                    }
                  ].map((survey, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-[#003366]">{survey.title}</h4>
                        <p className="text-gray-600 text-sm">Deadline: {survey.deadline} • Participants: {survey.participants}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        survey.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }`}>
                        {survey.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-[#003366] mb-3">Survey Calendar</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Course Evaluation Surveys - End of each semester</li>
                    <li>Student Satisfaction Survey - Annually in Spring</li>
                    <li>Alumni Survey - Biannually</li>
                    <li>Employer Satisfaction Survey - Annually</li>
                    <li>Faculty Self-Assessment - Beginning of each academic year</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-[#003366] mb-3">Survey Results</h3>
                  <p className="text-gray-700 mb-3">
                    Summary reports of previous surveys are available for review:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Student Satisfaction Survey 2022</li>
                    <li>Alumni Tracking Report 2021-2022</li>
                    <li>Employer Feedback Analysis 2022</li>
                    <li>Program Review Reports</li>
                  </ul>
                </div>
              </div>
            </div>
          )} 
        </div>
      </div>
    </Layout>
  );
};

export default Qec;