import React from 'react';
import { PageId, StudentModalType } from '../types';
import { ChevronRight, Phone, Mail, MapPin, Edit3, GraduationCap } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenModal: (type: StudentModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenModal
}) => {
  return (
    <footer className="bg-[#121e29] text-slate-300 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Column 1: About Us (col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-white text-sm font-bold tracking-wider uppercase border-b border-slate-700/80 pb-2">
              ABOUT US
            </h3>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-900/60 border border-sky-600/40 flex items-center justify-center text-amber-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-white font-extrabold text-base tracking-tight block">MCIT GORAKHPUR</span>
                <span className="text-slate-400 text-[10px] block leading-tight">Madhur Computers &amp; Institute of Technology</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-justify">
              Madhur Computers &amp; Institute of Technology was founded in 1996 as a non-profit institution to develop and nurture professional excellence in Information Technology and cater to the growing demand for IT professionals. Unlike mushrooming computer training shops, our thrust has always been on quality rather than quantity.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.facebook.com/mcitgkp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded bg-slate-800 hover:bg-[#1877f2] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://twitter.com/madhur_of"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded bg-slate-800 hover:bg-[#1da1f2] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a
                href="https://wa.me/919956399811"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded bg-slate-800 hover:bg-[#25D366] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          {/* Column 2: Quick links (col 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white text-sm font-bold tracking-wider uppercase border-b border-slate-700/80 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('placement')}
                  className="hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Placement
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('student')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Student Section
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Other Links (col 7-9) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white text-sm font-bold tracking-wider uppercase border-b border-slate-700/80 pb-2">
              Other Links
            </h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="http://bvyss.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Bal Vikas Yuva Samarpan Sansthan
                </a>
              </li>
              <li>
                <a
                  href="http://madhurcomputers.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Madhur Computers
                </a>
              </li>
              <li>
                <a
                  href="https://www.webopedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Webopedia: Online Tech Dictionary
                </a>
              </li>
              <li>
                <a
                  href="https://wikipedia.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Wikipedia: Online Encyclopedia
                </a>
              </li>
              {/* Working modal openers (replacing broken iframes with zero 404s) */}
              <li className="pt-2 border-t border-slate-800">
                <button
                  onClick={() => onOpenModal('enquiry')}
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5" /> Admission Enquiry
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('feedback')}
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5" /> Student Feedback
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('certificate')}
                  className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5" /> Certificate Verification
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us (col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white text-sm font-bold tracking-wider uppercase border-b border-slate-700/80 pb-2">
              CONTACT US
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">Have a query?</span>
                <button
                  onClick={() => onOpenModal('enquiry')}
                  className="px-3 py-1 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded text-[11px] flex items-center gap-1 transition-colors"
                >
                  <Edit3 className="w-3 h-3" /> Write Us
                </button>
              </div>

              <div className="flex items-start gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <a href="mailto:info@mcit.org.in" className="hover:text-amber-400 underline">
                  info@mcit.org.in
                </a>
              </div>

              <div className="flex items-start gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+915512255083" className="hover:text-amber-400 block">+91 - 551 - 2255083</a>
                  <a href="tel:+919956399811" className="hover:text-amber-400 block font-semibold text-white">+91 - 9956399811</a>
                </div>
              </div>

              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  063 A, Keshawpuram, Gorakhnath, Gorakhpur - 273015 (U.P.), India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright area */}
      <div className="bg-[#0b131b] border-t border-slate-800/80 py-4 text-center text-slate-500 text-[11px]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            Copyright &copy; 1996&ndash;2026 MCIT Gorakhpur. All rights reserved. Registered under Society Act.
          </p>
          <p>
            Designed &amp; Maintained by{' '}
            <a href="http://madhurcomputers.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
              Madhur Computers
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
