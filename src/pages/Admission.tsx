import React from "react";
import Layout from "../components/Layout";

const Admissions: React.FC = () => {
  return (
    <Layout 
      title="Admissions"
      description="Explore programs, requirements, and admission policies at UET Mardan"
    >
      {/* Header Section - Matching QEC design */}
      <header className="bg-gradient-to-r from-[#003366] to-[#004080] text-white text-center py-10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-['Merriweather'] text-4xl md:text-5xl font-bold mb-4">
            Admissions at UET Mardan
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore programs, requirements, and admission policies at UET Mardan
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Overview */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#003366] mb-4">
            Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            University of Engineering and Technology (UET) Mardan offers
            admissions in undergraduate and postgraduate programs across
            multiple engineering and computer science disciplines. The admission
            process follows the guidelines of the Higher Education Commission
            (HEC) and ensures merit-based selection.
          </p>
        </section>

        {/* Undergraduate Programs */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#003366] mb-4">
            Undergraduate Programs
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#DAA520] mb-3">Engineering Programs</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>B.Sc. Civil Engineering</li>
              <li>B.Sc. Electrical Engineering</li>
              <li>B.Sc. Mechanical Engineering</li>
              <li>B.Sc. Computer Systems Engineering</li>
              <li>B.Sc. Software Engineering</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#DAA520] mb-3">Non-Engineering Programs</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>BS Computer Science</li>
              <li>BS Information Technology</li>
              <li>BS Mathematics</li>
              <li>BS English</li>
              <li>BS Islamic Studies</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-[#DAA520] mb-3">Admission Process for Undergraduate Programs</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>Submit online application through UET Mardan admission portal</li>
              <li>Appear in ETEA entrance test (for engineering programs)</li>
              <li>Merit list preparation based on:
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Matriculation marks: 10%</li>
                  <li>F.Sc/HSSC marks: 40%</li>
                  <li>Entrance test score: 50%</li>
                </ul>
              </li>
              <li>Submission of required documents</li>
              <li>Fee submission and enrollment</li>
            </ol>
          </div>
        </section>

        {/* Postgraduate Programs */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#003366] mb-4">
            Postgraduate Programs
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#DAA520] mb-3">Master's Programs</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>M.Sc. Civil Engineering</li>
              <li>M.Sc. Electrical Engineering</li>
              <li>M.Sc. Mechanical Engineering</li>
              <li>M.Sc. Computer Science</li>
              <li>MS Mathematics</li>
              <li>MA English</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#DAA520] mb-3">PhD Programs</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>PhD Civil Engineering</li>
              <li>PhD Electrical Engineering</li>
              <li>PhD Mechanical Engineering</li>
              <li>PhD Computer Science</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-[#DAA520] mb-3">Admission Process for Postgraduate Programs</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>Submit application through online portal or prescribed form</li>
              <li>Appear in GAT (General) test conducted by NTS (for Master's programs)</li>
              <li>Appear in GAT (Subject) test conducted by NTS (for PhD programs)</li>
              <li>Interview with departmental committee</li>
              <li>Merit calculation based on:
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Academic record: 50%</li>
                  <li>Test score: 30%</li>
                  <li>Interview: 20%</li>
                </ul>
              </li>
              <li>Final selection and offer letter</li>
            </ol>
          </div>
        </section>

        {/* Eligibility */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#003366] mb-4">
            Eligibility Criteria
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#DAA520] mb-3">Undergraduate Programs</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>At least 60% marks in F.Sc Pre-Engineering / equivalent (for engineering programs)</li>
              <li>At least 50% marks in F.Sc/FA/ICS or equivalent (for non-engineering programs)</li>
              <li>Valid score in ETEA Engineering Test (for engineering programs)</li>
              <li>DAE holders with relevant discipline may apply for reserved seats</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-[#DAA520] mb-3">Postgraduate Programs</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>16 years of education in relevant field from HEC recognized institution</li>
              <li>Minimum CGPA of 2.5/4.0 or 60% marks in semester system</li>
              <li>Valid GAT score as per HEC requirements</li>
              <li>For PhD programs: 18 years of education with minimum CGPA of 3.0/4.0</li>
            </ul>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#003366] mb-4">
            Fee Structure
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The fee structure varies depending on the program and level of study
            (undergraduate, postgraduate, or PhD). Please refer to the official
            university website for updated details.
          </p>
          <a
            href="https://www.uetmardan.edu.pk/admissions/fee-structure.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#DAA520] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#B8860B] hover:scale-105"
          >
            View Full Fee Structure
          </a>
        </section>

        {/* Important Dates */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#003366] mb-4">
            Important Dates
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-[#DAA520] mb-3">Undergraduate Admissions</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Application Start: August 1, 2023</li>
                <li>Application Deadline: September 15, 2023</li>
                <li>ETEA Test: September 30, 2023</li>
                <li>Merit List: October 15, 2023</li>
                <li>Classes Start: November 1, 2023</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#DAA520] mb-3">Postgraduate Admissions</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Application Start: January 15, 2023</li>
                <li>Application Deadline: February 28, 2023</li>
                <li>GAT Test: March 15, 2023</li>
                <li>Interviews: April 1-10, 2023</li>
                <li>Classes Start: September 1, 2023</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Downloads */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#003366] mb-4">
            Important Downloads
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <a
                href="https://www.uetmardan.edu.pk/admissions/forms/Prospectus.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DAA520] hover:underline"
              >
                Admission Prospectus
              </a>
            </li>
            <li>
              <a
                href="https://www.uetmardan.edu.pk/admissions/forms/ApplicationForm.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DAA520] hover:underline"
              >
                Application Form
              </a>
            </li>
            <li>
              <a
                href="https://www.uetmardan.edu.pk/admissions/forms/ScholarshipForm.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DAA520] hover:underline"
              >
                Scholarship Form
              </a>
            </li>
            <li>
              <a
                href="https://www.uetmardan.edu.pk/admissions/forms/UndergraduateGuide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DAA520] hover:underline"
              >
                Undergraduate Admission Guide
              </a>
            </li>
            <li>
              <a
                href="https://www.uetmardan.edu.pk/admissions/forms/PostgraduateGuide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DAA520] hover:underline"
              >
                Postgraduate Admission Guide
              </a>
            </li>
          </ul>
        </section>

        {/* Contact Admissions */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#003366] mb-4">
            Contact Admissions Office
          </h2>
          <p className="text-gray-700 mb-4">
            For any queries, please contact the Admissions Office:
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> admissions@uetmardan.edu.pk <br />
            <strong>Phone:</strong> +92-937-9230295 <br />
            <strong>Address:</strong> Admissions Office, UET Mardan, Khyber Pakhtunkhwa, Pakistan
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Admissions;