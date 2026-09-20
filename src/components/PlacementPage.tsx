import React from 'react';
import { PageId } from '../types';
import { 
  Briefcase, 
  CheckCircle, 
  GraduationCap, 
  Building2, 
  Users, 
  TrendingUp, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface PlacementPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
}

export const PlacementPage: React.FC<PlacementPageProps> = ({
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
              <h1 className="text-3xl sm:text-4xl font-black text-white">Training &amp; Placement Cell</h1>
              <p className="text-sm text-slate-300 mt-1">
                Connecting Talented Students with Leading Employers Across India
              </p>
            </div>
            <nav className="text-xs text-slate-400 flex items-center gap-2">
              <button onClick={() => onNavigate('home')} className="hover:text-amber-400">Home</button>
              <span>/</span>
              <span className="text-amber-400 font-semibold">Placement</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Cell Overview */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <div className="p-2 bg-amber-100 text-amber-800 rounded-lg">
              <Briefcase className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a365d]">
              The Training &amp; Placement Cell
            </h2>
          </div>

          <p className="text-slate-700 text-sm leading-relaxed text-justify">
            The purpose of the Training and Placement Cell is to ensure that our students are well-equipped to excel in life and are able to match up to all the challenges that a real-life working environment offers.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed text-justify">
            Madhur Computers &amp; Institute of Technology has an independent Training &amp; Placement Cell devoted to catering to the needs of organizations in conducting campus interviews for placements. It is headed by a designated Placement Officer and assisted by Student Placement Coordinators who lead a team of placement representatives from various courses of study.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed text-justify">
            The Training &amp; Placement Cell provides all audio-visual facilities for PowerPoint presentations, written tests, group discussions, and personal interviews. It plays a key role in counseling and guiding students for their successful career placement, which is a crucial interface between the stages of completion of the academic program and entry into suitable employment.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-lg shrink-0">
              70%+
            </div>
            <div>
              <h3 className="font-extrabold text-emerald-950 text-sm">Consistent Placement Record</h3>
              <p className="text-xs text-emerald-800 mt-0.5">
                Over 70% of students secure job offers or self-employment opportunities before they complete their diploma programs and leave their Alma Mater.
              </p>
            </div>
          </div>
        </section>

        {/* Activities and Soft Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-[#1a365d] text-base border-b border-slate-100 pb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-amber-500" /> T&amp;P Skill Programs
            </h3>
            <p className="text-xs text-slate-600">
              In addition to campus placements, the T&amp;P section regularly organizes:
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Personality Development &amp; Grooming</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Interpersonal &amp; Professional Communication Skills</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Career Planning and Competency Mapping</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Program on Technology Management</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Program on &ldquo;Personal Effectiveness for Girl Students&rdquo;</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-[#1a365d] text-base border-b border-slate-100 pb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-500" /> Development of Soft Skills
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed text-justify">
              In order to achieve the Mission of MCIT, it is imperative that our students get an opportunity to develop their overall personality. For this, we consistently organize Personality Development Programmes in association with professional corporate counselors.
            </p>
            <p className="text-xs text-slate-700 leading-relaxed text-justify">
              We lay huge emphasis on enhancing the communication skills of all our students, ensuring they perform exceptionally well during HR interviews and group discussions.
            </p>
          </div>
        </div>

        {/* Placement Procedure: 6 Steps */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xl font-bold text-[#1a365d]">
              PLACEMENT PROCEDURE
            </h3>
            <p className="text-xs text-slate-500 mt-1">Standard 6-step recruitment lifecycle for visiting hiring partners</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <span className="w-6 h-6 rounded-full bg-[#1a365d] text-white text-xs font-bold flex items-center justify-center">1</span>
              <h4 className="font-bold text-xs text-slate-900">Company Invitation</h4>
              <p className="text-[11px] text-slate-600">Companies are formally invited to the campus by the Placement Cell with job profiles.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <span className="w-6 h-6 rounded-full bg-[#1a365d] text-white text-xs font-bold flex items-center justify-center">2</span>
              <h4 className="font-bold text-xs text-slate-900">Resume Shortlisting</h4>
              <p className="text-[11px] text-slate-600">Details and verified marksheets of eligible final-year students are shared with HR.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <span className="w-6 h-6 rounded-full bg-[#1a365d] text-white text-xs font-bold flex items-center justify-center">3</span>
              <h4 className="font-bold text-xs text-slate-900">Pre-Placement Talk</h4>
              <p className="text-[11px] text-slate-600">Visiting corporate delegates deliver presentations on company culture and salary packages.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <span className="w-6 h-6 rounded-full bg-[#1a365d] text-white text-xs font-bold flex items-center justify-center">4</span>
              <h4 className="font-bold text-xs text-slate-900">Written / Lab Test</h4>
              <p className="text-[11px] text-slate-600">Written aptitude, programming coding tasks, and group discussions are conducted in MCIT labs.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <span className="w-6 h-6 rounded-full bg-[#1a365d] text-white text-xs font-bold flex items-center justify-center">5</span>
              <h4 className="font-bold text-xs text-slate-900">Personal Interviews</h4>
              <p className="text-[11px] text-slate-600">Shortlisted candidates appear before the technical and HR panel for final rounds.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <span className="w-6 h-6 rounded-full bg-[#1a365d] text-white text-xs font-bold flex items-center justify-center">6</span>
              <h4 className="font-bold text-xs text-slate-900">Same-Day Results</h4>
              <p className="text-[11px] text-slate-600">Offer letters are announced on the same day with immediate joining schedules.</p>
            </div>
          </div>
        </section>

        {/* CTA Bar */}
        <div className="bg-[#1a365d] rounded-xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-lg font-bold text-white">Are you an Employer or HR Manager?</h3>
            <p className="text-xs text-slate-300 mt-1">Hire trained computer operators, accountants, and junior programmers from MCIT.</p>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-lg shadow transition-colors shrink-0"
          >
            Invite MCIT for Campus Hiring
          </button>
        </div>
      </div>
    </div>
  );
};
