import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Award, Clock, MapPin, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProgramPage: React.FC = () => {
  const { programId } = useParams<{ programId: string }>();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const programs: Record<string, any> = {
    'computer-science': {
      title: 'Computer Science',
      degree: 'BS Computer Science (Specialization in Data Science & AI) / MS Computer Science',
      description: 'Our Computer Science program provides comprehensive education in software development, algorithms, data structures, artificial intelligence, and cybersecurity.',
      image: 'ComputerLab.webp',
      duration: '4 years (BS) / 2 years (MS)',
      credits: '136 Credit Hours (BS) / 30 Credit Hours (MS)',
      skills: [
        'Programming Languages (C++, Java, Python)',
        'Software Engineering Principles',
        'Database Management Systems',
        'Web Development Technologies',
        'Mobile Application Development',
        'Artificial Intelligence Concepts',
        'Machine Learning Algorithms',
        'Cybersecurity Fundamentals'
      ],
      faculty: [
        { name: 'Dr. Muhammad Usman', qualification: 'PhD Computer Science', Designation: 'Professor / Chairman',  email: 'usman@uetmardan.edu.pk' },
        { name: 'Dr. Najeeb Ullah', qualification: 'PhD (Computer and Information Engineering)',  Designation: 'Assistant Professor', email: 'najeeb@uetmardan.edu.pk'},
        { name: 'Dr. Shams ur Rahman', qualification: 'Ph.D (Information and Communication)',  Designation: 'Assistant Professor', email: 'shams@uetmardan.edu.pk' },
        { name: 'Dr. Razaullah Khan', qualification: 'Ph.D',  Designation: 'Assistant Professor', email: 'razaullah@uetmardan.edu.pk'}
      ],
      labs: [
       'Advanced Programming Laboratory',
        'Software Engineering Lab',
        'Database Systems Lab',
        'Networking and Security Lab',
        'AI & Machine Learning Research Lab'
      ],
      careers: [
        'Games Developer',
        'System Analyst',
        'Database Administrator',
        'Web Developer',
        'Multimedia Programmers',
        'Information Systems Managers',
        'Cybersecurity Consultants'
      ]
    },
    'software-engineering': {
      title: 'Software Engineering',
      degree: 'BSc Software Engineering/ MSc /PhD ',
      description: 'Software Engineering program focuses on systematic approach to software development, project management, and quality assurance.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
      duration:' 4 years (BS) / 2 years (MS)',
      credits: '136 Credit Hours (BS) / 30 Credit Hours (MS)',
      skills: [
        'Software Development Life Cycle',
        'Project Management',
        'Quality Assurance',
        'Software Testing',
        'Agile Methodologies',
        'Version Control Systems',
        'Software Architecture',
        'Requirements Engineering'
      ],
      faculty: [
        { name: 'Prof. Dr. Ibrar Ali Shah', qualification: 'PhD in Networks', Designation: 'Professor / Chairman',  email: 'ibrar@uetmardan.edu.pk' },
        { name: 'Prof. Dr. Sadaqat Jan', qualification: 'PhD ',  Designation: 'Professor / Dean', email: 'sadaqat@uetmardan.edu.pk'},
        { name: 'Dr. Mohammad Sohail Khan', qualification: 'PhD. (Computer Engineering)',  Designation: 'Assistant Professor', email: 'sohail.khan@uetmardan.edu.pk' },
        { name: 'Engr. Imran Maqsood', qualification: 'MSc (Computer System Engineering)',  Designation: 'Assistant Professor', email: 'Imranmaqsood@uetmardan.edu.pk'}
      ],
      labs: [
        'Software Development Lab',
        'Data Science Lab',
        'Project Management Lab'
      ],
      careers: [
        'Software Engineer',
        'Project Manager',
        'Quality Assurance Engineer',
        'Software Architect',
        'Business Analyst'
      ]
    },
    'civil-engineering': {
      title: 'Civil Engineering',
      degree: 'BS Civil Engineering',
      description: 'Civil Engineering program covers structural design, construction management, environmental engineering, and infrastructure development.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
      duration: '4 years (BS) ',
      credits: '136 Credit Hours (BS) ',
      skills: [
        'Structural Analysis',
        'Construction Management',
        'Environmental Engineering',
        'Transportation Engineering',
        'Geotechnical Engineering',
        'Water Resources Engineering',
        'Building Design',
        'Project Planning'
      ],
      faculty: [
        { name: 'Dr. Muhammad Alam', qualification: 'PhD in Transports   ', Designation: 'Assistant Professor / Chairman',  email: 'muhammad.alam@uetmardan.edu.pk' },
        { name: 'Dr. Khalid Mahmood', qualification: 'No Info Available',  Designation: 'Assistant Professor', email: 'dr.khalid.mahmood@uetmardan.edu.pk'},
        { name: 'Engr. Hazrat Bilal', qualification: 'No Info Available',  Designation: 'Lecturer / Semester Coordinator', email: 'hazrat.bilal@uetmardan.edu.pk' },
        { name: 'Usama Ali', qualification: 'Master of Science in Civil Engineering',  Designation: 'Lecturer (Study Leave)', email: 'usama@uetmardan.edu.pk'}
      ],
      labs: [
        'Structural Engineering Lab',
        'Materials Testing Lab',
        'Surveying Lab',
        'Environmental Engineering Lab'
      ],
      careers: [
        'Structural Engineer',
        'Construction Manager',
        'Project Engineer',
        'Environmental Engineer',
        'Transportation Engineer'
      ]
    },
    'electrical-engineering': {
      title: 'Electrical Engineering',
      degree: 'BS Electrical Engineering / MS Electrical Engineering/ PhD',
      description: 'Electrical Engineering program encompasses power systems, electronics, control systems, and renewable energy technologies.',
      image: 'https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
      duration: '4 years (BS) / 2 years (MS)',
      credits: '136 Credit Hours (BS) / 30 Credit Hours (MS)',
      skills: [
        'Power Systems',
        'Electronics Design',
        'Control Systems',
        'Signal Processing',
        'Renewable Energy',
        'Microprocessors',
        'Communication Systems',
        'Power Electronics'
      ],
      faculty: [
       { name: 'Prof. Dr. Imran Khan', qualification: 'Ph.D (Telecommunication Engineering)', Designation: 'Professor / Chairman',  email: 'imran@uetmardan.edu.pk' },
        { name: 'Engr. Dr. Fazal Muhammad', qualification:'Doctor of Philosophy in Electronic Engineering',  Designation: 'Associate Professor / Semester Coordinator', email: 'fazal.muhammad@uetmardan.edu.pk'},
        { name: 'Engr. Dr. Gul Rukh', qualification: 'Ph.D (In-Progress)',  Designation: 'Assistant Professor', email: 'gr@uetmardan.edu.pk' },
        { name: 'Engr. Dr. Haseeb Ahmad Khan', qualification: 'PhD, Electrical Engineering',  Designation: 'Assistant Professor', email: 'haseebkhan@uetmardan.edu.pk'}
      ],
      labs: [
        'Power Systems Lab',
        'Electronics Lab',
        'Control Systems Lab',
        'Microprocessor Lab'
      ],
      careers: [
        'Power Engineer',
        'Electronics Engineer',
        'Control Systems Engineer',
        'Renewable Energy Engineer',
        'Telecommunications Engineer'
      ]
    },
    'mechanical-engineering': {
      title: 'Mechanical Engineering',
      degree: 'BSc Mechanical Engineering',
      description: 'Mechanical Engineering program covers thermodynamics, fluid mechanics, manufacturing processes, and mechanical design.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
      duration: '4 years (BS)',
      credits: '136 Credit Hours (BS)',
      skills: [
        'Thermodynamics',
        'Fluid Mechanics',
        'Manufacturing Processes',
        'Mechanical Design',
        'Heat Transfer',
        'Machine Design',
        'CAD/CAM',
        'Materials Science'
      ],
      faculty: [
       { name: 'Dr. Asad Ullah', qualification: 'Post-Doc.  Mechanical Engineering', Designation: 'Chairman',  email: 'asad@uetmardan.edu.pk' },
        { name: 'Dr. Taufeeq Ur Rehman', qualification: 'Ph.D. in Mechanical Engineering',  Designation: 'Associate Professor ', email: 'taufeeq.abbasi@uetmardan.edu.pk'},
        { name: 'Engr. Abdul Samad Saleem', qualification: 'MS in Thermo-Fluids',  Designation: 'Lecturer / FYP Coordinator', email: 'abdulsamadsaleem@uetmardan.edu.pk' },
        { name: 'Engr. Afnan Haider Khan', qualification: 'Master of Science (Specialized in Materials Engineering) ',  Designation: 'Lecturer / Semester Coordinator', email: 'afnan@uetmardan.edu.pk'}
      ],
      labs: [
        'Thermodynamics Lab',
        'Fluid Mechanics Lab',
        'Manufacturing Lab',
        'CAD Lab'
      ],
      careers: [
        'Mechanical Engineer',
        'Manufacturing Engineer',
        'Design Engineer',
        'HVAC Engineer',
        'Automotive Engineer'
      ]
    },
    'artificial-intelligence': {
      title: 'Artificial Intelligence',
      degree: 'BS Artificial Intelligence',
      description: 'AI program focuses on machine learning, deep learning, neural networks, and intelligent systems development.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
      duration: '4 years',
      credits: '136 Credit Hours',
      skills: [
        'Machine Learning',
        'Deep Learning',
        'Neural Networks',
        'Natural Language Processing',
        'Computer Vision',
        'Robotics',
        'Data Mining',
        'Expert Systems'
      ],
      faculty: [
        { name: 'Prof. Dr. Imran Khan', qualification: 'Ph.D (Telecommunication Engineering)', Designation: 'Professor / Chairman',  email: 'imran@uetmardan.edu.pk' },
        { name: 'Prof. Dr. Gul Muhammad Khan', qualification:'No Information Available',  Designation: 'Professor', email: 'vc@uetmardan.edu.pk'},
        { name: 'Engr. Dr. Sajjad Ali', qualification: 'MSc in Computer Systems Engineering',  Designation: 'Associate Professor', email: 'engrsajjad@uetmardan.edu.pk' },
        { name: 'Dr Tariq Sadad', qualification: 'No Information Available',  Designation: 'Assistant Professor', email: 'tariq@uetmardan.edu.pk'}
      ],
      labs: [
        'AI Research Lab',
        'Machine Learning Lab',
        'Computer Vision Lab',
        'Robotics Lab'
      ],
      careers: [
        'AI Engineer',
        'Machine Learning Engineer',
        'Data Scientist',
        'Research Scientist',
        'AI Consultant'
      ]
    },
    'english-literature': {
      title: 'English Literature',
      degree: 'BS English Literature',
      description: 'English Literature program develops critical thinking, communication skills, and deep understanding of literary works.',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
      duration: '4 years',
      credits: '124 Credit Hours',
      skills: [
        'Literary Analysis',
        'Creative Writing',
        'Critical Thinking',
        'Research Methods',
        'Communication Skills',
        'Linguistics',
        'Comparative Literature',
        'Academic Writing'
      ],
      faculty: [
        { name: ' Dr. Saba', qualification: 'No info available', Designation: 'No info available',  email: 'No info available' }
       ],
        labs: [
        'Language Lab',
        'Writing Center',
        'Digital Humanities Lab'
      ],
      careers: [
        'Teacher/Professor',
        'Content Writer',
        'Editor',
        'Journalist',
        'Translator',
        'Literary Critic'
      ]
    },
    'natural-sciences': {
      title: 'Natural Sciences & Humanities',
      degree: 'BS English (Literature & Linguistic)/ MS Mathematics',
      description: 'Comprehensive foundation courses in mathematics, physics, chemistry, and humanities supporting all engineering programs.',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
      duration: 'Varies by Program',
      credits: 'Support Courses',
      skills: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'Technical Writing',
        'Research Methodology',
        'Statistics',
        'Scientific Computing',
        'Laboratory Techniques'
      ],
      faculty: [
        { name: 'Dr. M. Abbas Mahmood', qualification: 'PhD in Nanotechnology', Designation: 'Associate Professor / Chairman',  email: 'abbas@uetmardan.edu.pk' },
        { name: 'Dr. Murtaza Ali', qualification:'PhD (Mathematics)',  Designation: 'Associate Professor', email: 'murtaza.ali@uetmardan.edu.pk'},
        { name: 'Dr. Mushtaq Ahmad', qualification: 'M.Sc.',  Designation: 'Lecturer', email: 'mushtaq@uetmardan.edu.pk' },
        { name: 'Ms. Shazia Habib', qualification: 'M-Phil (mathematics)',  Designation: 'Lecturer', email: 'shaziahabib@uetmardan.edu.pk'}
      ],
      labs: [
        'Physics Lab',
        'Chemistry Lab',
        'Mathematics Lab'
      ],
      careers: [
        'Research Assistant',
        'Laboratory Technician',
        'Academic Support',
        'Scientific Writer'
      ]
    },
    'telecommunication': {
      title: 'Telecommunication Engineering',
      degree: 'BS Telecommunication Engineering/ MSc / PhD',
      description: 'Telecommunication program covers communication systems, signal processing, and network technologies.',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
      duration: '4 years(BSc)/ 2 years (MSc & PhD)',
      credits: '136 Credit Hours (BSc)/ 30 Credit Hours (MSc & PhD) ',
      skills: [
        'Communication Systems',
        'Signal Processing',
        'Network Design',
        'Wireless Technologies',
        'Fiber Optics',
        'Satellite Communication',
        'Digital Communications',
        'Network Security'
      ],
      faculty: [
        { name: 'Prof. Dr. Sadiq Ullah', qualification: 'Doctor of Philosophy in Electrical Engineering', Designation: 'Chairman / Pro-Vice Chancellor',  email: 'sadiqullah@uetmardan.edu.pk' },
        { name: 'Engr. Jalal Khan', qualification:'PhD in Design and Analysis of 5th generation mobile phone antennas ',  Designation: 'Assistant Professor', email: 'jalal.khan@uetmardan.edu.pk'},
        { name: 'Engr. Dr. Sahib Khan', qualification: 'PhD in Electrical, Electronics and Communication Engineering',  Designation: 'Assistant Professor / Director Postgraduate Studies', email: 'sahib@uetmardan.edu.pk' },
        { name: 'Engr. Mareena Karim', qualification: 'M.Sc. (Telecommunication Engineering in progress)',  Designation: 'Lecturer', email: 'No Information Available'}
      ],
      labs: [
        'Communication Lab',
        'Signal Processing Lab',
        'Network Lab',
        'Microwave Lab'
      ],
      careers: [
        'Telecommunication Engineer',
        'Network Engineer',
        'RF Engineer',
        'Systems Engineer',
        'Network Administrator'
      ]
    }
  };

  const program = programs[programId || ''];

  if (!program) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-[#003366] mb-8">Program Not Found</h1>
            <Link to="/academic-programs" className="bg-[#DAA520] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B8860B] transition-colors">
              View All Programs
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
            {/* Header Section */}
<section className="pt-20 pb-12 bg-gradient-to-br from-[#003366] to-[#004080] text-white text-center py-16">
  <div className="container mx-auto max-w-6xl">
    <div className="text-left mb-8">
      <Link to="/academic-programs" className="inline-flex items-center text-[#DAA520] hover:text-white transition-colors duration-300">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Programs
      </Link>
    </div>
    
    <div className={`text-center transition-all duration-1000 transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>  
          <h1 className="font-['Merriweather'] text-4xl md:text-5xl font-bold mb-6">
            {program.title}
          </h1>
          
          <p className="text-xl max-w-3xl mx-auto mb-0">
            {program.description}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-[#DAA520] text-white px-6 py-3 rounded-lg flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              {program.duration}
            </div>
            <div className="bg-white/20 text-white px-6 py-3 rounded-lg flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              {program.credits}
            </div>
            <div className="bg-white/20 text-white px-6 py-3 rounded-lg flex items-center">
              <Users className="w-5 h-5 mr-2" />
              {program.degree}
            </div>
          </div>
        </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-16">
        
        {/* Program Overview */}
<div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
  <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
    <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600" />
    <div className="p-6 text-center">
      <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
        <Clock className="w-6 h-6" />
      </div>
      <div className="font-bold text-2xl text-[#003366] mb-1">Years</div>
      <div className="text-sm text-[#003366]">{program.duration}</div>
    </div>
  </div>
  
  <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
    <div className="h-2 bg-gradient-to-r from-green-500 to-green-600" />
    <div className="p-6 text-center">
      <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
        <BookOpen className="w-6 h-6" />
      </div>
      <div className="font-bold text-2xl text-[#003366] mb-1">Credit Hours</div>
      <div className="text-sm text-[#003366]">{program.credits}</div>
    </div>
  </div>
  
  <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
    <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600" />
    <div className="p-6 text-center">
      <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
        <Award className="w-6 h-6" />
      </div>
      <div className="font-bold text-2xl text-[#003366] mb-1">Programs</div>
      <div className="text-sm text-[#003366]">{program.degree}</div>
    </div>
  </div>
</div>


     {/* Laboratory Facilities */}
<section className="bg-white shadow-md rounded-lg p-6">
  <h2 className="font-['Merriweather'] text-2xl font-bold text-[#003366] mb-6">
    Laboratory Facilities
  </h2>
  <div className="grid md:grid-cols-2 gap-4">
    {program.labs.map((lab: string, index: number) => (
      <div key={index} className="bg-gradient-to-r from-[#003366] to-[#004080] text-white p-4 rounded-lg">
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          <h3 className="font-semibold">{lab}</h3>
        </div>
      </div>
    ))}
  </div>
</section>

        {/* Career Opportunities */}
        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="font-['Merriweather'] text-3xl font-bold text-[#003366] mb-8">
            Career Opportunities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {program.careers.map((career: string, index: number) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                <Award className="w-5 h-5 text-[#DAA520] mr-3 flex-shrink-0" />
                <span className="text-gray-700">{career}</span>
              </div>
            ))}
          </div>
        </section>

  {/* Admission Information */}
<section className="bg-gradient-to-br from-[#003366] to-[#004080] text-white rounded-lg p-6">
  <h2 className="font-['Merriweather'] text-2xl font-bold mb-4">
    Admission Process
  </h2>
  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <h3 className="text-lg font-semibold mb-3">Application Steps</h3>
      <div className="space-y-2">
        <div className="flex items-center text-sm">
          <div className="w-6 h-6 bg-[#DAA520] rounded-full flex items-center justify-center text-xs font-bold mr-3">1</div>
          <span>Online Application</span>
        </div>
        <div className="flex items-center text-sm">
          <div className="w-6 h-6 bg-[#DAA520] rounded-full flex items-center justify-center text-xs font-bold mr-3">2</div>
          <span>Entrance Test/Interview</span>
        </div>
        <div className="flex items-center text-sm">
          <div className="w-6 h-6 bg-[#DAA520] rounded-full flex items-center justify-center text-xs font-bold mr-3">3</div>
          <span>Document Verification</span>
        </div>
        <div className="flex items-center text-sm">
          <div className="w-6 h-6 bg-[#DAA520] rounded-full flex items-center justify-center text-xs font-bold mr-3">4</div>
          <span>Registration</span>
        </div>
      </div>
    </div>
    
    <div>
      <h3 className="text-lg font-semibold mb-3">Ready to Apply?</h3>
      <p className="text-sm mb-4">
        Start your application process today and join UET Mardan.
      </p>
      <Link 
        to="/admission"
        className="block w-full bg-[#DAA520] hover:bg-[#B8860B] text-white py-2 rounded-lg font-semibold transition-colors duration-300 text-sm text-center"
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

export default ProgramPage;