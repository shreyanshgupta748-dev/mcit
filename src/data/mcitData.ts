import { CourseItem, ClientItem, GalleryPhoto } from '../types';

export const mcitCourses: CourseItem[] = [
  // MCIT Certificate Courses
  {
    id: 'cat',
    name: 'Computer Awareness Training',
    code: 'CAT',
    category: 'certificate',
    institution: 'MCIT',
    duration: '2 Months',
    eligibility: 'Reading & Writing Skills',
    modules: [
      'Computer Concepts & Introduction to IT',
      'Operating System: Windows 10/11 & File Explorer',
      'Word Processing: MS Word Basics & Document Formatting',
      'Accessories: Paint, Notepad, Wordpad, Calculator',
      'Typing Practice (English / Hindi)',
      'Internet, Email, Google Workspace & Web Browsing Essentials'
    ],
    careerProspects: 'Basic Computer Operator, Data Entry Clerk, Front Desk Assistant'
  },
  {
    id: 'cca',
    name: 'Certificate in Computer Application',
    code: 'CCA',
    category: 'certificate',
    institution: 'MCIT',
    duration: '3 Months',
    eligibility: 'High School (10th) or equivalent',
    modules: [
      'Information Technology Fundamentals',
      'MS Windows Operating Environment',
      'MS Word: Comprehensive Office Documentation',
      'MS Excel: Spreadsheets, Formulas, Functions & Charting',
      'MS PowerPoint: Professional Presentation Design',
      'Internet Protocols, Cyber Safety & Online Banking Operations'
    ],
    careerProspects: 'Office Assistant, Documentation Specialist, Junior Computer Operator'
  },
  {
    id: 'ccfa',
    name: 'Certificate in Computer Financial Accounting',
    code: 'CCFA',
    category: 'certificate',
    institution: 'MCIT',
    duration: '3 Months',
    eligibility: 'Intermediate (10+2) in Commerce or any stream',
    modules: [
      'Basic Principles of Double-Entry Bookkeeping & Accounting',
      'Computerized Accounting Systems Overview',
      'TallyPrime / Tally.ERP 9: Company Creation & Ledger Setup',
      'Voucher Entry: Sales, Purchase, Payment, Receipt, Journal',
      'Inventory Management & Stock Valuations',
      'GST (Goods & Services Tax) Configuration & E-Way Bill Basics',
      'Balance Sheet, Profit & Loss Statements & Bank Reconciliation'
    ],
    careerProspects: 'Junior Accountant, Tally Operator, Billing Executive, Store Accountant'
  },
  {
    id: 'cdtp',
    name: 'Certificate in Desktop Publishing',
    code: 'CDTP',
    category: 'certificate',
    institution: 'MCIT',
    duration: '3 Months',
    eligibility: 'High School (10th) or equivalent',
    modules: [
      'Introduction to Desktop Publishing & Typography',
      'Adobe PageMaker: Document Layout, Book & Pamphlet Design',
      'CorelDraw: Vector Graphics, Logo Design, Flex & Banner Creation',
      'Adobe Photoshop: Photo Retouching, Color Grading & Digital Graphics',
      'Printing Techniques, Offset Pre-press & Color Separations'
    ],
    careerProspects: 'Graphic Designer, DTP Operator, Printing Press Layout Artist'
  },
  {
    id: 'cwd',
    name: 'Certificate in Web Designing',
    code: 'CWD',
    category: 'certificate',
    institution: 'MCIT',
    duration: '3 Months',
    eligibility: 'High School / Intermediate',
    modules: [
      'Web Architecture & How the Internet Works',
      'HTML5: Modern Semantic Structure & Forms',
      'CSS3: Styling, Flexbox, Responsive Layouts & Animations',
      'JavaScript Fundamentals: DOM Manipulation & Event Handling',
      'Bootstrap Framework for Mobile-First Design',
      'Web Hosting, Domain Setup, FTP & Live Project Deployment'
    ],
    careerProspects: 'Junior Front-End Web Designer, UI Assistant, Freelance Website Creator'
  },
  {
    id: 'cp-prog',
    name: 'Certificate in Programming (C / C++ / Python)',
    code: 'CP',
    category: 'certificate',
    institution: 'MCIT',
    duration: '3 Months',
    eligibility: '10+2 with Mathematics / Computer or Graduation',
    modules: [
      'Logic Building, Flowcharts & Algorithm Design',
      'Programming in C: Data Types, Loops, Functions, Arrays & Pointers',
      'Object Oriented Programming in C++: Classes, Inheritance, Polymorphism',
      'Python Programming: Syntax, Data Structures, Modules & File I/O',
      'Mini Project Implementation & Debugging Techniques'
    ],
    careerProspects: 'Trainee Programmer, Coding Instructor, Technical Assistant'
  },

  // MCIT Diploma Courses
  {
    id: 'dca',
    name: 'Diploma in Computer Application',
    code: 'DCA',
    category: 'diploma',
    institution: 'MCIT',
    duration: '6 Months',
    eligibility: 'High School (10th) / Intermediate (10+2)',
    modules: [
      'Module 1: Information Technology & Operating System (Windows)',
      'Module 2: Complete MS Office Suite (Word, Excel, PowerPoint, Access)',
      'Module 3: Database Concepts with MS Access / SQL Basics',
      'Module 4: Desktop Publishing (Photoshop & CorelDraw Fundamentals)',
      'Module 5: Financial Accounting with Tally & GST',
      'Module 6: Web Surfing, Cyber Security & Practical Project Work'
    ],
    careerProspects: 'Computer Operator, Office Executive, IT Assistant, Accounts Assistant'
  },
  {
    id: 'adca',
    name: 'Advance Diploma in Computer Application',
    code: 'ADCA',
    category: 'diploma',
    institution: 'MCIT',
    duration: '12 Months',
    eligibility: 'Intermediate (10+2) in any discipline',
    modules: [
      'Semester 1: IT Fundamentals, Operating Systems & Advanced MS Office',
      'Semester 1: Financial Accounting with TallyPrime, GST & Taxation',
      'Semester 1: Desktop Publishing with CorelDraw, Photoshop & PageMaker',
      'Semester 2: Web Development with HTML5, CSS3, JavaScript & Bootstrap',
      'Semester 2: Programming Fundamentals (C Language & Object Oriented C++)',
      'Semester 2: Database Management (RDBMS, SQL & MS Access)',
      'Semester 2: Hardware Basics, LAN Networking & Capstone Project'
    ],
    careerProspects: 'Senior IT Executive, Web Designer, Software Coordinator, Lab Instructor'
  },
  {
    id: 'dit',
    name: 'Diploma in Information Technology',
    code: 'DIT',
    category: 'diploma',
    institution: 'MCIT',
    duration: '12 Months',
    eligibility: '10+2 with Science / Mathematics or DCA',
    modules: [
      'Computer Architecture & System Engineering',
      'Data Structures & Algorithm Fundamentals',
      'Advanced Database Management Systems (MySQL / Oracle Basics)',
      'Networking Protocols, TCP/IP, Router & Switch Configuration',
      'Web Technologies & Server-Side Scripting Overview',
      'IT Project Management & Live Industry Case Studies'
    ],
    careerProspects: 'IT Support Engineer, Network Technician, Systems Administrator'
  },
  {
    id: 'pgdca',
    name: 'Post Graduate Diploma in Computer Applications',
    code: 'PGDCA',
    category: 'diploma',
    institution: 'MCIT',
    duration: '12 Months (2 Semesters)',
    eligibility: 'Graduation in any stream from recognized University',
    modules: [
      'Fundamentals of Software Engineering & Architecture',
      'Advanced Database Systems & Normalization',
      'Object Oriented Programming with Java / C#',
      'Web Application Development & RESTful Architecture',
      'Operating Systems & Linux Administration',
      'Dissertation, Major Project & Viva-Voce'
    ],
    careerProspects: 'Software Engineer, Systems Analyst, IT Officer in Govt/Private Sector'
  },

  // NIELIT Govt Courses
  {
    id: 'ccc',
    name: 'Course on Computer Concepts (NIELIT)',
    code: 'CCC',
    category: 'nielit',
    institution: 'NIELIT',
    duration: '80 Hours',
    eligibility: 'No minimum qualification required (Ideal for Govt exam aspirants)',
    modules: [
      'Introduction to Computer & GUI Based Operating System',
      'Elements of Word Processing (LibreOffice Writer / MS Word)',
      'Spreadsheets (LibreOffice Calc / MS Excel)',
      'Making Small Presentations (LibreOffice Impress / MS PowerPoint)',
      'Introduction to Internet, WWW & Web Browsers',
      'Communications and Collaboration: Email, Social Media & Instant Messaging',
      'Application of Digital Financial Services (AEPS, UPI, USSD, Cards, e-Wallets)',
      'Overview of FutureSkills & Cyber Security'
    ],
    careerProspects: 'Mandatory certificate qualification for UPSSSC, VDO, Lekhpal, RO/ARO govt jobs'
  },
  {
    id: 'bcc',
    name: 'Basic Computer Course (NIELIT)',
    code: 'BCC',
    category: 'nielit',
    institution: 'NIELIT',
    duration: '36 Hours',
    eligibility: 'Anyone desiring basic computer literacy',
    modules: [
      'Knowing Computer & Operating System',
      'Working with Word Processing',
      'Working with Spreadsheets',
      'Creating Presentations',
      'Internet Access & Digital Financial Transactions'
    ],
    careerProspects: 'Basic Digital Literacy certification for banking & office work'
  },
  {
    id: 'olevel',
    name: 'O-Level Foundation Program (NIELIT)',
    code: 'O-Level',
    category: 'nielit',
    institution: 'NIELIT',
    duration: '1 Year (Equiv. to Foundation Diploma)',
    eligibility: '10+2 or ITI Certificate after class 10',
    modules: [
      'M1-R5: Information Technology Tools and Network Basics',
      'M2-R5: Web Designing & Publishing (HTML, CSS, JS, Photo Editor)',
      'M3-R5: Programming and Problem Solving through Python',
      'M4-R5: Internet of Things (IoT) and its Applications',
      'Practical Examinations & Project Submission'
    ],
    careerProspects: 'Govt Job Eligibility (Assistant Review Officer, Police Computer Operator)'
  },

  // University Degree Distance Programs
  {
    id: 'bca',
    name: 'Bachelor of Computer Applications (BCA)',
    code: 'BCA',
    category: 'degree',
    institution: 'SVSU',
    duration: '3 Years (6 Semesters)',
    eligibility: '10+2 with Mathematics / Computer or equivalent',
    modules: [
      'Discrete Mathematics & Digital Electronics',
      'Data Structures & Algorithms in C/C++',
      'Computer Networks & Distributed Systems',
      'Database Management Systems & Software Engineering',
      'Java Enterprise Edition & Web Technologies',
      'Cloud Computing, AI Fundamentals & Final Capstone Project'
    ],
    careerProspects: 'Software Developer, Application Programmer, Database Administrator'
  },
  {
    id: 'mca',
    name: 'Master of Computer Applications (MCA)',
    code: 'MCA',
    category: 'degree',
    institution: 'SVSU',
    duration: '2 Years (4 Semesters)',
    eligibility: 'BCA / B.Sc (IT/CS) or Graduation with Mathematics',
    modules: [
      'Advanced Software Engineering & Design Patterns',
      'Full-Stack Web & Mobile App Development',
      'Artificial Intelligence & Machine Learning Fundamentals',
      'Enterprise Data Mining & Information Security',
      'Cloud Architecture & Microservices',
      'Major Industry Project & Dissertation'
    ],
    careerProspects: 'Senior Software Engineer, Technical Architect, IT Consultant'
  }
];

export const clientList: ClientItem[] = [
  { name: 'Gallantt Group of Companies', type: 'Web & Enterprise Solutions', url: 'http://www.gallantt.com/' },
  { name: 'Kendriya Vidyalaya Deoria', type: 'Educational Portal & Hardware AMC', url: 'http://www.kvdeoria.org/' },
  { name: 'Kendriya Vidyalaya Chero Salempur', type: 'School Management & Networking', url: 'http://www.kvcherosalempur.org/' },
  { name: 'Arogya Mandir (Nature Cure)', type: 'Healthcare Web Portal & AMC', url: 'http://www.arogyamandir.org/' },
  { name: 'Saraswati Shishu Mandir Sr. Sec. Boys Suryakund', type: 'School IT Lab Setup & Support', url: 'http://www.ssmsurajkund.org/' },
  { name: 'Interior Point Gorakhpur', type: 'Business Showcase & Web Solutions', url: 'http://www.interiorpointgkp.com/' },
  { name: 'Bal Vikas Yuva Samarpan Sansthan (BVYSS)', type: 'NGO Management System', url: 'http://www.bvyss.org/' },
  { name: 'Diabetes Self Care Club', type: 'Medical Awareness Portal', url: 'http://www.diabetesandyou.org/' },
  { name: 'JPS Design Studio', type: 'Architectural Portfolio Website', url: 'http://www.jpsstudio.com/' },
  { name: 'Anandlok Hospital', type: 'Hospital LAN & Hardware AMC' },
  { name: 'Agrawal Properties', type: 'Real Estate Catalog Portal' },
  { name: 'Shanu Investment', type: 'Financial Advisory Web Solutions' },
  { name: 'Experiotech Pvt. Ltd.', type: 'Software Development Collaboration' },
  { name: 'Madhur Computers & Institute of Technology', type: 'Vocational Training & IT Infrastructure', url: 'http://www.mcit.org.in/' }
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 1,
    title: 'Modern Computer Lab',
    category: 'Infrastructure',
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    caption: 'Air-conditioned high-speed computer lab with LAN networking and 100% power backup.'
  },
  {
    id: 2,
    title: 'Classroom Lecture & Smart Screen',
    category: 'Academics',
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    caption: 'Interactive smart class learning with LCD screens for modern visual concept delivery.'
  },
  {
    id: 3,
    title: 'Software Development & Coding Workshop',
    category: 'Practical',
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    caption: 'Hands-on programming sessions in Python, C, C++, and Web Development.'
  },
  {
    id: 4,
    title: 'Annual Certificate Distribution Ceremony',
    category: 'Events',
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    caption: 'Celebrating our graduate batches receiving certified diplomas and honors.'
  },
  {
    id: 5,
    title: 'Hardware & Networking Workshop',
    category: 'Practical',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    caption: 'Live motherboard troubleshooting, SMPS assembly, and LAN cable crimping training.'
  },
  {
    id: 6,
    title: 'Campus Placement Drive & Interviews',
    category: 'Placement',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    caption: 'Visiting HR teams and recruitment officials conducting campus selection rounds.'
  }
];

// Sample authentic verification database for the Student Certificate Verification modal
export const verifiedCertificates: Record<string, {
  studentName: string;
  fatherName: string;
  course: string;
  rollNo: string;
  certNo: string;
  issueDate: string;
  grade: string;
  percentage: string;
  status: 'Verified & Authentic' | 'Pending Verification';
}> = {
  'MCIT/2023/1042': {
    studentName: 'Amit Kumar Verma',
    fatherName: 'Rajendra Prasad Verma',
    course: 'Advance Diploma in Computer Application (ADCA)',
    rollNo: 'ADCA-2023-042',
    certNo: 'MCIT/2023/1042',
    issueDate: '15-Dec-2023',
    grade: 'A (Distinction)',
    percentage: '84.5%',
    status: 'Verified & Authentic'
  },
  'MCIT/2024/0891': {
    studentName: 'Priya Srivastava',
    fatherName: 'Manoj Srivastava',
    course: 'Certificate in Computer Financial Accounting (CCFA)',
    rollNo: 'CCFA-2024-118',
    certNo: 'MCIT/2024/0891',
    issueDate: '28-Jun-2024',
    grade: 'A+',
    percentage: '89.2%',
    status: 'Verified & Authentic'
  },
  'MCIT/2024/0512': {
    studentName: 'Rahul Sharma',
    fatherName: 'Dinesh Sharma',
    course: 'Diploma in Computer Application (DCA)',
    rollNo: 'DCA-2024-055',
    certNo: 'MCIT/2024/0512',
    issueDate: '10-Apr-2024',
    grade: 'A',
    percentage: '78.0%',
    status: 'Verified & Authentic'
  },
  'CCC-UP-98421': {
    studentName: 'Sanjay Mishra',
    fatherName: 'B. P. Mishra',
    course: 'Course on Computer Concepts (CCC - NIELIT)',
    rollNo: 'CCC-2024-7712',
    certNo: 'CCC-UP-98421',
    issueDate: '05-Feb-2024',
    grade: 'A',
    percentage: '81.0%',
    status: 'Verified & Authentic'
  }
};
