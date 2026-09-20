import React from 'react';
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';

interface TopHeaderProps {
  onOpenEnquiry: () => void;
  currentMode: 'mcit' | 'madhur';
  onSwitchMode: (mode: 'mcit' | 'madhur') => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  currentMode,
  onSwitchMode
}) => {
  return (
    <header className="bg-[#1b2b3a] text-slate-200 text-xs border-b border-slate-700/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-y-2">
        {/* Contact info with working tel & mailto links */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <div className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
            <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>
              <a href="tel:+915512255083" className="hover:underline">+91 - 551 - 2255083</a>
              <span className="text-slate-500 mx-1.5">|</span>
              <a href="tel:+919956399811" className="hover:underline font-medium text-white">+91 - 9956399811</a>
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 hover:text-amber-400 transition-colors">
            <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <a href="mailto:info@mcit.org.in" className="hover:underline">info@mcit.org.in</a>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>Mon - Sat 08:00 AM - 06:00 PM</span>
          </div>
        </div>

        {/* Social Icons & Site Switcher */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Social links */}
          <div className="flex items-center gap-2 pr-2 border-r border-slate-700">
            <a
              href="https://www.facebook.com/mcitgkp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Page"
              className="w-6 h-6 rounded-full bg-slate-800 hover:bg-[#1877f2] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <span className="font-bold text-[11px]">f</span>
            </a>
            <a
              href="https://twitter.com/madhur_of"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              className="w-6 h-6 rounded-full bg-slate-800 hover:bg-[#1da1f2] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <span className="font-bold text-[10px]">𝕏</span>
            </a>
            {/* WhatsApp direct link replaces dead 2019 Google+ link */}
            <a
              href="https://wa.me/919956399811?text=Hello%20MCIT,%20I%20would%20like%20to%20inquire%20about%20computer%20courses."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Support"
              className="w-6 h-6 rounded-full bg-slate-800 hover:bg-[#25D366] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              title="Chat with MCIT Counselor on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mode Switcher pill */}
          <div className="flex items-center bg-slate-900/80 rounded-full p-0.5 border border-slate-700/80">
            <button
              onClick={() => onSwitchMode('mcit')}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-all ${
                currentMode === 'mcit'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              MCIT Institute
            </button>
            <button
              onClick={() => onSwitchMode('madhur')}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-all ${
                currentMode === 'madhur'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Madhur Computers
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
