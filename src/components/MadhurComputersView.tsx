import React, { useState } from 'react';
import { 
  Globe, 
  Code, 
  Cpu, 
  Search, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Send, 
  ArrowRight,
  ExternalLink,
  Laptop
} from 'lucide-react';
import { clientList } from '../data/mcitData';

export const MadhurComputersView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'portfolio' | 'about' | 'contact'>('home');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Fixes the checkform(this) error from original PHP code
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      alert('Please fill out all required fields.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      {/* Hero Agency Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <span>Established 1996 • Gorakhpur, Uttar Pradesh</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            MADHUR <span className="text-amber-400">COMPUTERS</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Enterprise Website Designing, Custom Software Development, Hardware Repair Services, LAN / WAN Networking &amp; IT Consultancy.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={() => setActiveTab('services')}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-lg shadow-lg transition-all"
            >
              Our Solutions
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-lg border border-slate-700 transition-all"
            >
              Client Projects
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-lg transition-all"
            >
              Contact Agency
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Bar for Madhur Computers */}
      <nav className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur border-b border-slate-800 text-xs">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
          <span className="font-extrabold tracking-wider text-amber-400">MADHUR COMPUTERS</span>
          <div className="flex items-center space-x-1 sm:space-x-4">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-2.5 py-1 rounded font-semibold transition-colors ${
                activeTab === 'home' ? 'text-amber-400 bg-slate-800' : 'text-slate-300 hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-2.5 py-1 rounded font-semibold transition-colors ${
                activeTab === 'services' ? 'text-amber-400 bg-slate-800' : 'text-slate-300 hover:text-white'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`px-2.5 py-1 rounded font-semibold transition-colors ${
                activeTab === 'portfolio' ? 'text-amber-400 bg-slate-800' : 'text-slate-300 hover:text-white'
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`px-2.5 py-1 rounded font-semibold transition-colors ${
                activeTab === 'about' ? 'text-amber-400 bg-slate-800' : 'text-slate-300 hover:text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-2.5 py-1 rounded font-semibold transition-colors ${
                activeTab === 'contact' ? 'text-amber-400 bg-slate-800' : 'text-slate-300 hover:text-white'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Main Body depending on activeTab */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* TAB 1: HOME OVERVIEW */}
        {activeTab === 'home' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
                <Globe className="w-8 h-8 text-sky-400" />
                <h3 className="font-bold text-base text-white">Web Solutions</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Responsive corporate portals, educational institution websites, and SEO optimization.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
                <Code className="w-8 h-8 text-amber-400" />
                <h3 className="font-bold text-base text-white">Custom Software</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Desktop inventory applications, billing solutions with GST, and client management databases.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
                <Cpu className="w-8 h-8 text-emerald-400" />
                <h3 className="font-bold text-base text-white">Hardware &amp; LAN</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Comprehensive AMC, PC &amp; laptop repairs, Wi-Fi campus infrastructure, and data recovery.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 space-y-4">
              <h2 className="text-xl font-bold text-white">Why Businesses Choose Madhur Computers</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                Over 28 years in Gorakhpur supporting corporate leaders such as Gallantt Group of Companies, Kendriya Vidyalaya, Arogya Mandir, and regional schools. We provide 360-degree IT infrastructure support under one roof.
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: SERVICES */}
        {activeTab === 'services' && (
          <div className="space-y-8">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-2xl font-bold text-white">Enterprise Services</h2>
              <p className="text-xs text-slate-400 mt-1">High-reliability technological solutions crafted for sustainable business growth.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 space-y-3">
                <h3 className="font-bold text-base text-amber-400">1. Web Development &amp; Hosting</h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">✓ Mobile-first responsive website engineering</li>
                  <li className="flex items-center gap-2">✓ Domain registration (.com, .org.in, .edu.in) &amp; SSD Cloud Hosting</li>
                  <li className="flex items-center gap-2">✓ E-commerce integration and payment gateways</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 space-y-3">
                <h3 className="font-bold text-base text-sky-400">2. Software Engineering</h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">✓ Accounting, billing &amp; GST compliance systems</li>
                  <li className="flex items-center gap-2">✓ School &amp; college student management software</li>
                  <li className="flex items-center gap-2">✓ Hospital management &amp; diagnostic lab reporting</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 space-y-3">
                <h3 className="font-bold text-base text-emerald-400">3. Computer Hardware &amp; Sales</h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">✓ Authorized sales of HP, Dell, Lenovo, and Acer systems</li>
                  <li className="flex items-center gap-2">✓ Motherboard, display, and chip-level servicing</li>
                  <li className="flex items-center gap-2">✓ Critical data recovery from crashed drives</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 space-y-3">
                <h3 className="font-bold text-base text-purple-400">4. Campus Wi-Fi &amp; Networking</h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">✓ Structured Cat6/Fiber optic network cabling</li>
                  <li className="flex items-center gap-2">✓ Enterprise Wi-Fi access points and firewalls</li>
                  <li className="flex items-center gap-2">✓ IP CCTV camera security surveillance setups</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PORTFOLIO */}
        {activeTab === 'portfolio' && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-2xl font-bold text-white">Client Portfolio</h2>
              <p className="text-xs text-slate-400 mt-1">Institutions and enterprises powered by Madhur Computers</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {clientList.map((client, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2 hover:border-amber-500/50 transition-colors">
                  <h4 className="font-bold text-sm text-white">{client.name}</h4>
                  <p className="text-xs text-slate-400">{client.type}</p>
                  {client.url && (
                    <a
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-amber-400 hover:underline pt-1"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: ABOUT */}
        {activeTab === 'about' && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-2xl font-bold text-white">About Madhur Computers</h2>
              <p className="text-xs text-slate-400 mt-1">Our 28-year legacy in IT solutions</p>
            </div>

            <div className="bg-slate-800/60 p-6 sm:p-8 rounded-xl border border-slate-700 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              <p>
                Madhur Computers was founded in 1996 in Gorakhpur to bring high-quality computing, reliable software engineering, and authentic technical repair services to Eastern Uttar Pradesh.
              </p>
              <p>
                As technology evolved from standalone DOS computers to modern web applications, high-speed fiber internet, and cloud infrastructure, Madhur Computers remained at the forefront of this digital transformation. We also created our vocational educational wing, Madhur Computers &amp; Institute of Technology (MCIT), to train youth in job-ready IT skills.
              </p>
            </div>
          </div>
        )}

        {/* TAB 5: CONTACT (Cures checkform(this) runtime error) */}
        {activeTab === 'contact' && (
          <div className="space-y-8">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-2xl font-bold text-white">Contact Agency</h2>
              <p className="text-xs text-slate-400 mt-1">Request a technical proposal or consultation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5 space-y-4 text-xs text-slate-300">
                <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 space-y-2">
                  <strong className="text-white text-sm block">Office Address</strong>
                  <p>063 A, Keshawpuram, Gorakhnath, Gorakhpur - 273015 (U.P.), India</p>
                </div>

                <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 space-y-2">
                  <strong className="text-white text-sm block">Contact Phones</strong>
                  <p>+91 - 551 - 2255083 | +91 - 9956399811</p>
                </div>

                <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 space-y-2">
                  <strong className="text-white text-sm block">Email</strong>
                  <p>info@madhurcomputers.com | info@mcit.org.in</p>
                </div>
              </div>

              <div className="md:col-span-7 bg-slate-800 p-6 rounded-xl border border-slate-700">
                {submitted ? (
                  <div className="py-8 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                    <h3 className="font-bold text-white text-base">Inquiry Submitted!</h3>
                    <p className="text-xs text-slate-300">Our solution architect will review your project requirements and call back promptly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded text-xs text-white focus:outline-none focus:border-amber-400"
                        placeholder="e.g. Rajesh Kumar"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded text-xs text-white focus:outline-none focus:border-amber-400"
                          placeholder="rajesh@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">Phone *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded text-xs text-white focus:outline-none focus:border-amber-400"
                          placeholder="9956399811"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Requirements *</label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded text-xs text-white focus:outline-none focus:border-amber-400"
                        placeholder="Tell us about your website, software or hardware requirement..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded transition-colors flex items-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" /> Submit Proposal Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
