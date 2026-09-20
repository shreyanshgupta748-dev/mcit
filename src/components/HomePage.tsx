import React from 'react';
import { PageId, StudentModalType } from '../types';
import { 
  Building2, 
  Clock, 
  Award, 
  ThumbsUp, 
  CheckCircle, 
  ArrowRight, 
  GraduationCap, 
  Cpu, 
  Globe, 
  Briefcase, 
  UserCheck, 
  Search, 
  FileText, 
  Download, 
  MessageSquareQuote,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, filter?: string) => void;
  onOpenModal: (type: StudentModalType) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenModal
}) => {
  return (
    <div className="space-y-16">
      {/* 1. Hero Banner Area */}
      <section className="relative bg-gradient-to-r from-[#102238] via-[#1a365d] to-[#0c1a2e] text-white py-16 sm:py-24 overflow-hidden border-b-4 border-amber-500 shadow-lg">
        {/* Subtle decorative grid */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:32px_32px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Pioneer in Quality Computer Education in Gorakhpur Since 1996</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Madhur Computers &amp; <br className="hidden sm:block" />
                <span className="text-amber-400">Institute of Technology</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-light">
                Empowering students and professionals with industry-standard IT courses, government-recognized diploma programs, computerized accounting with TallyPrime, and full university distance degrees.
              </p>

              {/* Action buttons (Curing 404s) */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('courses')}
                  className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm rounded-lg shadow-lg hover:shadow-amber-500/20 transition-all flex items-center gap-2"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenModal('registration')}
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-lg border border-white/20 backdrop-blur transition-all flex items-center gap-2"
                >
                  <span>Online Admission</span>
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-3.5 text-amber-300 hover:text-white text-sm font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>Visit Campus</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Stat Card / Live Feature Badge */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 shadow-2xl text-slate-100 space-y-4">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">Highlights At A Glance</span>
                <h3 className="text-xl font-bold text-white mt-1">Why Students Trust MCIT</h3>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded bg-amber-500/20 text-amber-400 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm">28+ Years of Academic Excellence</strong>
                    <span className="text-slate-300">Continuous training delivery since 1996 in Eastern U.P.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded bg-sky-500/20 text-sky-400 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm">Govt. Registered Society</strong>
                    <span className="text-slate-300">Registered under Society Act with authorized certification.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded bg-emerald-500/20 text-emerald-400 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm">Air-Conditioned LAN Lab</strong>
                    <span className="text-slate-300">High-speed broadband, LCD smart screens &amp; 100% power backup.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenModal('enquiry')}
                  className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs rounded-lg shadow transition-all"
                >
                  Request Call Back from Counselor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Professional Builder 4 Columns */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 rounded-lg bg-sky-50 text-[#1a365d] group-hover:bg-[#1a365d] group-hover:text-amber-400 transition-colors flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Professional Excellence</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              MCIT is an institution to develop and nurture professional excellence in Information Technology and computer applications.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">We Deliver Quality</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Unlike mushrooming computer training shops, our thrust has strictly been on quality rather than quantity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Always with Time</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              MCIT reviews course curriculum regularly to match the changing requirements of IT industries and government exams.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 rounded-lg bg-rose-50 text-rose-700 group-hover:bg-rose-700 group-hover:text-white transition-colors flex items-center justify-center mb-4">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">We Are Passionate</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Since its inception, MCIT has gained a trusted reputation for itself for vocational guidance and personalized attention.
            </p>
          </div>
        </div>
      </section>

      {/* 3. About Us & Who We Are Area */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a365d] tracking-tight">
              ABOUT US
            </h2>
            <p className="text-xs uppercase font-bold text-amber-600 mt-1 tracking-wider">
              A Tradition of Quality Education
            </p>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="border-l-4 border-[#1a365d] pl-4">
                <h3 className="text-xl font-bold text-slate-900">WHO WE ARE</h3>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed text-justify">
                Madhur Computers &amp; Institute of Technology was founded in 1996 as a non-profit institution to develop and nurture the professional excellence in Information Technology and to cater the growing demand for IT professionals. Unlike the mushrooming computer training shops, our thrust has always been on quality rather than quantity.
              </p>
              <p className="text-slate-700 text-sm leading-relaxed text-justify">
                Our campus features well-equipped computer laboratories, LCD-assisted interactive classrooms, experienced mentors, and comprehensive career counseling. We were the very first institute connected to the Internet for Internet education in Gorakhpur district.
              </p>

              {/* Working CTA: cures 404 contact.php */}
              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-2.5 bg-[#1a365d] hover:bg-[#152a48] text-white font-bold text-sm rounded-md shadow transition-colors flex items-center gap-2"
                >
                  <span>Contact Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="px-5 py-2.5 border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold text-sm rounded-md transition-colors"
                >
                  Read Full History
                </button>
              </div>
            </div>

            {/* Campus Front Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-200 aspect-[4/3]">
                <img
                  src="https://www.mcit.org.in/images/mcitfront.jpg"
                  alt="Madhur Computers & Institute of Technology Front Building"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to high-res educational campus image if network restricts hotlink
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-4 text-white">
                  <span className="font-bold text-sm block">Gorakhpur Main Campus</span>
                  <span className="text-xs text-slate-200">063-A, Keshawpuram, Gorakhnath</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Offer Area (Courses) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a365d] tracking-tight">
            WHAT WE OFFER
          </h2>
          <p className="text-xs uppercase font-bold text-amber-600 mt-1 tracking-wider">
            Courses and Trainings as per Current IT Trends
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Certificate Courses (Cures 404 courses.php) */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col">
            <div className="h-44 overflow-hidden relative bg-slate-100">
              <img
                src="https://www.mcit.org.in/images/certificate.jpg"
                alt="Certificate Courses in Computer Applications"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80";
                }}
              />
              <span className="absolute top-3 right-3 px-2.5 py-1 bg-amber-500 text-slate-950 text-[10px] font-extrabold rounded shadow">
                Up to 6 Months
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sky-700">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Short-Term Programs</span>
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-[#1a365d] transition-colors">
                  CERTIFICATE COURSES
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  MCIT provides focused certificate programs tailored to industry demand: CAT, CCA, CCFA (TallyPrime with GST), Web Designing, and Python Programming.
                </p>
              </div>
              <button
                onClick={() => onNavigate('courses', 'certificate')}
                className="w-full py-2.5 bg-slate-100 hover:bg-[#1a365d] text-slate-800 hover:text-white font-bold text-xs rounded-md transition-colors flex items-center justify-center gap-1.5"
              >
                <span>View Certificate Syllabi</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Diploma Courses (Cures 404 courses.php) */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col">
            <div className="h-44 overflow-hidden relative bg-slate-100">
              <img
                src="https://www.mcit.org.in/images/diploma.jpg"
                alt="Diploma Courses in Information Technology"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80";
                }}
              />
              <span className="absolute top-3 right-3 px-2.5 py-1 bg-sky-600 text-white text-[10px] font-extrabold rounded shadow">
                6 to 18 Months
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sky-700">
                  <GraduationCap className="w-5 h-5 text-sky-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Comprehensive Diplomas</span>
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-[#1a365d] transition-colors">
                  DIPLOMA COURSES
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deep vocational qualifications including DCA (6 Months), ADCA (12 Months Advance Diploma), DIT, and PGDCA covering programming, RDBMS, and web technology.
                </p>
              </div>
              <button
                onClick={() => onNavigate('courses', 'diploma')}
                className="w-full py-2.5 bg-slate-100 hover:bg-[#1a365d] text-slate-800 hover:text-white font-bold text-xs rounded-md transition-colors flex items-center justify-center gap-1.5"
              >
                <span>View Diploma Syllabi</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: Degree Courses (Cures 404 courses.php) */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col">
            <div className="h-44 overflow-hidden relative bg-slate-100">
              <img
                src="https://www.mcit.org.in/images/degree.jpg"
                alt="University Degree Programs"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80";
                }}
              />
              <span className="absolute top-3 right-3 px-2.5 py-1 bg-emerald-600 text-white text-[10px] font-extrabold rounded shadow">
                University Recognised
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Building2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Degree &amp; NIELIT</span>
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-[#1a365d] transition-colors">
                  DEGREE &amp; NIELIT
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  UG and PG distance degree education (BCA, MCA, B.Sc-IT) alongside official NIELIT government certifications (CCC, BCC, O-Level).
                </p>
              </div>
              <button
                onClick={() => onNavigate('courses', 'nielit')}
                className="w-full py-2.5 bg-slate-100 hover:bg-[#1a365d] text-slate-800 hover:text-white font-bold text-xs rounded-md transition-colors flex items-center justify-center gap-1.5"
              >
                <span>View Degree &amp; NIELIT</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Features Area: Why Choose Us */}
      <section className="bg-slate-900 text-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              OUR FEATURES
            </h2>
            <p className="text-xs uppercase font-bold text-amber-400 mt-1 tracking-wider">
              Trusted Institute with Modern Amenities
            </p>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Card: 20+ Years & Qualified Experts */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">
                    28+
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base">YEARS OF EXPERIENCE</h3>
                    <span className="text-xs text-slate-400">Serving Eastern Uttar Pradesh Since 1996</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Madhur Computers &amp; Institute of Technology has gained a reputation for professional training, live projects, and dedicated placement support.
                </p>
              </div>

              <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base">QUALIFIED EXPERTS</h3>
                    <span className="text-xs text-slate-400">Dedicated Faculty &amp; Industry Practitioners</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our faculty members possess deep technical backgrounds and maintain active software and networking projects.
                </p>
              </div>
            </div>

            {/* Right Card: 10 Salient Features from authentic MCIT brochure */}
            <div className="lg:col-span-7 bg-slate-800/60 p-6 sm:p-8 rounded-xl border border-slate-700 space-y-4">
              <h3 className="text-lg font-bold text-white border-b border-slate-700 pb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" /> Salient Institutional Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Full Power Backup (Generator &amp; Inverter)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Bilingual Education (Hindi / English &amp; Local)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Well-Equipped Computer Lab with Local LAN</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Job Placement &amp; Career Guidance Cell</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Scholarships for Meritorious &amp; Poor Students</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Monthly Tests, Live Projects &amp; Tech Seminars</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>CBT (Computer Based Tutorial) &amp; Soft Skills</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Advance Library with IT Books &amp; E-Book Archive</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>High-Speed Wi-Fi Campus Connectivity</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>LCD Smart Screens for Visual Teaching</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Students Section with 6 Interactive Modal Triggers (#student) */}
      <section id="student" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a365d] tracking-tight">
            STUDENTS SECTION
          </h2>
          <p className="text-xs uppercase font-bold text-amber-600 mt-1 tracking-wider">
            Simplifies Student&rsquo;s Academic &amp; Administrative Requirements
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Button 1: Registration */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#1a365d] hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Student Registration</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Submit your provisional application online for diploma or certificate courses.
              </p>
            </div>
            <button
              onClick={() => onOpenModal('registration')}
              className="w-full py-2.5 bg-[#1a365d] hover:bg-[#152a48] text-white font-bold text-xs rounded-md shadow transition-colors"
            >
              Open Registration Form
            </button>
          </div>

          {/* Button 2: Enquiry */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-amber-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Admission Enquiry</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Have questions regarding fees, course duration, or upcoming batches?
              </p>
            </div>
            <button
              onClick={() => onOpenModal('enquiry')}
              className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-md shadow transition-colors"
            >
              Submit Course Enquiry
            </button>
          </div>

          {/* Button 3: Verify Certificate */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-emerald-600 hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Verify Certificate</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Instant digital validation for student marksheets, roll numbers, and grades.
              </p>
            </div>
            <button
              onClick={() => onOpenModal('certificate')}
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-md shadow transition-colors"
            >
              Verify Certificate Now
            </button>
          </div>

          {/* Button 4: Current Openings */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-sky-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Current Openings</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Career opportunities for computer faculty, lab instructors, and network support.
              </p>
            </div>
            <button
              onClick={() => onOpenModal('openings')}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-md shadow transition-colors"
            >
              View Available Jobs
            </button>
          </div>

          {/* Button 5: Feedback */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-rose-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center">
                <MessageSquareQuote className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Student Feedback</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Help us improve by rating course content, faculty clarity, and computer labs.
              </p>
            </div>
            <button
              onClick={() => onOpenModal('feedback')}
              className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-md shadow transition-colors"
            >
              Give Student Review
            </button>
          </div>

          {/* Button 6: Downloads */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-slate-800 hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center">
                <Download className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Course Downloads</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Download brochures, prospectus PDFs, sample tests, and admission forms.
              </p>
            </div>
            <button
              onClick={() => onOpenModal('downloads')}
              className="w-full py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-md shadow transition-colors"
            >
              Access Study Downloads
            </button>
          </div>
        </div>
      </section>

      {/* 7. Our Services Section Preview */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a365d] tracking-tight">
              OUR SERVICES
            </h2>
            <p className="text-xs uppercase font-bold text-amber-600 mt-1 tracking-wider">
              Comprehensive Technology Support by Madhur Computers
            </p>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Web &amp; Software Solutions</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Custom website development, domain registrations, institutional portals, and tailored business software.
              </p>
              <button
                onClick={() => onNavigate('services')}
                className="text-xs font-bold text-[#1a365d] hover:text-amber-600 flex items-center gap-1 pt-1"
              >
                Learn More <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Hardware &amp; Networking</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                PC &amp; laptop sales, component repairs, campus Wi-Fi deployment, LAN setup, data recovery, and corporate AMC.
              </p>
              <button
                onClick={() => onNavigate('services')}
                className="text-xs font-bold text-[#1a365d] hover:text-amber-600 flex items-center gap-1 pt-1"
              >
                Learn More <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Placement Services</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connecting trained IT graduates directly with regional corporations, schools, and business enterprises.
              </p>
              <button
                onClick={() => onNavigate('placement')}
                className="text-xs font-bold text-[#1a365d] hover:text-amber-600 flex items-center gap-1 pt-1"
              >
                Learn More <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
