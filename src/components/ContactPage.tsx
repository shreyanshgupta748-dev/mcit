import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building, 
  MessageCircle
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Banner / Breadcrumb Area */}
      <section className="bg-gradient-to-r from-[#102238] to-[#1a365d] text-white py-12 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white">Contact Us</h1>
              <p className="text-sm text-slate-300 mt-1">
                Reach Out to MCIT Administrative Office or Visit Our Campus
              </p>
            </div>
            <nav className="text-xs text-slate-400 flex items-center gap-2">
              <button onClick={() => onNavigate('home')} className="hover:text-amber-400">Home</button>
              <span>/</span>
              <span className="text-amber-400 font-semibold">Contact Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Two Campus Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Head Office */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border-2 border-[#1a365d]/20 shadow-sm space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="p-2.5 bg-sky-100 text-sky-800 rounded-lg">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-sky-100 text-sky-800 uppercase">
                  Main Academic Campus
                </span>
                <h3 className="font-extrabold text-lg text-[#1a365d]">HEAD OFFICE</h3>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block text-sm">Gorakhnath Campus</strong>
                  <p className="text-slate-600 leading-relaxed">
                    063 A, Keshawpuram, Gorakhnath,<br />
                    Gorakhpur - 273015 (Uttar Pradesh), India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 block">Telephone &amp; Mobile:</span>
                  <a href="tel:+915512255083" className="hover:text-sky-700 font-medium block">+91 - 551 - 2255083</a>
                  <a href="tel:+919956399811" className="hover:text-sky-700 font-bold block text-slate-900">+91 - 9956399811</a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 block">Official Email:</span>
                  <a href="mailto:info@mcit.org.in" className="hover:text-sky-700 font-medium">info@mcit.org.in</a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 block">Working Hours:</span>
                  <p className="font-medium text-slate-800">Monday &ndash; Saturday: 08:00 AM &ndash; 06:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919956399811"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Card 2: Branch Office */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="p-2.5 bg-amber-100 text-amber-800 rounded-lg">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-100 text-amber-800 uppercase">
                  City Center
                </span>
                <h3 className="font-extrabold text-lg text-slate-900">BRANCH OFFICE</h3>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block text-sm">Nepalu Road Campus</strong>
                  <p className="text-slate-600 leading-relaxed">
                    100/10, Behind Hotel Bobina, Nepalu Road,<br />
                    Gorakhpur (Uttar Pradesh), India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 block">Telephone &amp; Mobile:</span>
                  <a href="tel:+915512200428" className="hover:text-sky-700 font-medium block">+91 - 551 - 2200428</a>
                  <a href="tel:+919415211709" className="hover:text-sky-700 font-bold block text-slate-900">+91 - 9415211709</a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 block">Official Email:</span>
                  <a href="mailto:info@mcit.org.in" className="hover:text-sky-700 font-medium">info@mcit.org.in</a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 block">Working Hours:</span>
                  <p className="font-medium text-slate-800">Monday &ndash; Saturday: 09:00 AM &ndash; 05:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form & Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form: Write to Us */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-5">
            <div>
              <h3 className="text-xl font-bold text-[#1a365d]">Write to Us</h3>
              <p className="text-xs text-slate-500 mt-0.5">Send your admission query or corporate enquiry directly to the director&rsquo;s desk.</p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Message Delivered Successfully!</h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your message regarding &ldquo;{formData.subject || 'Course Enquiry'}&rdquo; has been routed to our Gorakhpur admissions coordinator.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                  }}
                  className="px-6 py-2 bg-[#1a365d] text-white text-xs font-semibold rounded-lg"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Mishra"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:ring-2 focus:ring-[#1a365d] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9956399811"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:ring-2 focus:ring-[#1a365d] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@gmail.com"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:ring-2 focus:ring-[#1a365d] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. ADCA Course Fees &amp; Timing"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:ring-2 focus:ring-[#1a365d] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Detailed Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your questions or requirement here..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-xs text-slate-900 focus:ring-2 focus:ring-[#1a365d] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-md shadow flex items-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right Map Card */}
          <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-base text-[#1a365d]">Campus Location</h3>
            <p className="text-xs text-slate-500">
              Conveniently located near Gorakhnath Temple and Gorakhpur railway junction.
            </p>
            <div className="rounded-lg overflow-hidden border border-slate-300 h-72 relative">
              <iframe
                title="MCIT Gorakhpur Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14247.962043689408!2d83.3557262!3d26.7766432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991448b11111111%3A0x1111111111111111!2sGorakhnath%2C%20Gorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1600000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
            <div className="text-[11px] text-slate-500 leading-tight">
              <strong>Landmark:</strong> Near Gorakhnath Post Office, Keshawpuram, Gorakhpur. Ample parking space available for student two-wheelers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
