import React from 'react';
import { PageId } from '../types';
import { Award, CheckCircle, ShieldCheck, HeartHandshake, BookOpen, Users, Compass } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenEnquiry
}) => {
  return (
    <div className="space-y-12 pb-16">
      {/* Banner / Breadcrumb Area */}
      <section className="bg-gradient-to-r from-[#102238] to-[#1a365d] text-white py-12 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white">About Us</h1>
              <p className="text-sm text-slate-300 mt-1">Our History, Philosophy, and 28+ Year Heritage</p>
            </div>
            <nav className="text-xs text-slate-400 flex items-center gap-2">
              <button onClick={() => onNavigate('home')} className="hover:text-amber-400">Home</button>
              <span>/</span>
              <span className="text-amber-400 font-semibold">About Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section 1: Where did motivations come from? */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <div className="p-2 bg-amber-100 text-amber-800 rounded-lg">
              <Compass className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a365d]">
              Where did motivations come from?
            </h2>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed text-justify">
            During the middle of the nineties, almost the entire computer education in Gorakhpur was monopolized by a few large corporate institutes. The course curriculum designed by them was essentially to produce data entry operators, and the course fee was exorbitantly high. In fact, a student had to spend a whole fortune to get a computer certificate which had little academic or practical value in the open job market.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed text-justify">
            A real and desperate need was felt to impart comprehensive and career-oriented computer education to the students belonging to low and middle-income families at affordable fees. Thus, the idea of an institution committed to genuine educational quality took root.
          </p>
        </section>

        {/* Section 2: Initial Problems */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <div className="p-2 bg-sky-100 text-sky-800 rounded-lg">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a365d]">
              Initial Problems &amp; Overcoming Challenges
            </h2>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed text-justify">
            The road was not easy. The common man was fed up with false promises, tall claims, and hyper-commercialization. In the prevailing atmosphere of total chaos, distrust, and exploitation, it was really a challenging task to earn the confidence and faith of the students and parents.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed text-justify">
            However, slowly and steadily, the sincere and dedicated efforts bore fruit. We stuck relentlessly to our promise of quality instruction, transparent fee structures, and personalized attention. Today, after more than two decades, Madhur Computers &amp; Institute of Technology stands tall as the symbol of trust and technical competence in Gorakhpur.
          </p>
        </section>

        {/* Section 3: About The Institute (Authentic MCIT text) */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <div className="p-2 bg-emerald-100 text-emerald-800 rounded-lg">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a365d]">
              About The Institute
            </h2>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed text-justify">
            Madhur Computers &amp; Institute of Technology was founded in 1996 as a non-profit institution to develop and nurture professional excellence in Information Technology and cater to the growing demand for IT professionals. Unlike the mushrooming computer training shops, our thrust has always been on quality rather than quantity.
          </p>
          <div className="bg-sky-50 border-l-4 border-sky-600 p-4 rounded-r-lg text-xs sm:text-sm text-sky-950 font-medium space-y-2">
            <p>
              ✔ <strong>Government Registered:</strong> MCIT is a society registered under the Society Registration Act with the Government of Uttar Pradesh.
            </p>
            <p>
              ✔ <strong>Pioneer in Internet Education:</strong> It was the <em>very first institute</em> connected to the Internet for Internet education in Gorakhpur district.
            </p>
            <p>
              ✔ <strong>Placement Commitment:</strong> The institute guarantees comprehensive placement assistance to all its meritorious students who complete their advanced diploma programs successfully.
            </p>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed text-justify">
            The institute regularly reviews and updates its course curriculum in consultation with software houses and IT professionals to match the changing trends of the dynamic IT industry. We operate modern computer labs with local area networks (LAN), continuous power backup with generator and UPS, dedicated broadband internet, and multimedia audio-visual projection facilities.
          </p>
        </section>

        {/* Section 4: Mission & Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
            <HeartHandshake className="w-6 h-6 text-amber-600" />
            <h3 className="font-bold text-slate-900 text-sm">Affordable Quality</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Providing premium technological training at fee structures reachable by every hardworking youth in our community.
            </p>
          </div>
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
            <Users className="w-6 h-6 text-sky-600" />
            <h3 className="font-bold text-slate-900 text-sm">Individual Guidance</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Maintaining optimal faculty-to-student ratios with 1:1 computer practice during daily practical sessions.
            </p>
          </div>
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
            <Award className="w-6 h-6 text-emerald-600" />
            <h3 className="font-bold text-slate-900 text-sm">Recognized Credentials</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Issuing certificates and diplomas backed by government registration and verifiable through our digital verification portal.
            </p>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-gradient-to-r from-[#1a365d] to-[#12243d] rounded-xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-lg font-bold text-white">Ready to begin your IT career?</h3>
            <p className="text-xs text-slate-300 mt-1">Speak with our academic director or visit our campus for counseling.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-lg shadow transition-colors"
            >
              Enquire Online
            </button>
            <button
              onClick={() => onNavigate('courses')}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-lg border border-white/20 transition-colors"
            >
              Browse Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
