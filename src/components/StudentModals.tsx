import React, { useState } from 'react';
import { StudentModalType } from '../types';
import { verifiedCertificates } from '../data/mcitData';
import { 
  X, 
  CheckCircle2, 
  Search, 
  FileText, 
  Download, 
  Briefcase, 
  Star, 
  AlertCircle,
  ShieldCheck,
  Send
} from 'lucide-react';

interface StudentModalsProps {
  activeModal: StudentModalType;
  onClose: () => void;
}

export const StudentModals: React.FC<StudentModalsProps> = ({
  activeModal,
  onClose
}) => {
  // Registration Form State
  const [regData, setRegData] = useState({
    name: '',
    fatherName: '',
    phone: '',
    email: '',
    course: 'ADCA',
    qualification: 'Intermediate (10+2)',
    address: ''
  });
  const [regSubmitted, setRegSubmitted] = useState(false);

  // Enquiry Form State
  const [enqData, setEnqData] = useState({
    name: '',
    phone: '',
    email: '',
    courseInterest: 'DCA',
    message: ''
  });
  const [enqSubmitted, setEnqSubmitted] = useState(false);

  // Certificate Verification State
  const [certQuery, setCertQuery] = useState('');
  const [certResult, setCertResult] = useState<typeof verifiedCertificates[string] | null | 'not_found'>(null);

  // Feedback Form State
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    batch: '',
    rating: 5,
    facultyRating: 5,
    labRating: 5,
    comments: ''
  });
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  if (!activeModal) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = certQuery.trim();
    if (!cleanId) return;

    if (verifiedCertificates[cleanId]) {
      setCertResult(verifiedCertificates[cleanId]);
    } else {
      setCertResult('not_found');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#1a365d] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
            <h3 className="font-bold text-lg text-white">
              {activeModal === 'registration' && 'Student Online Registration'}
              {activeModal === 'enquiry' && 'Admission Enquiry Form'}
              {activeModal === 'certificate' && 'Student Certificate Verification'}
              {activeModal === 'openings' && 'Current Job Openings at MCIT'}
              {activeModal === 'feedback' && 'Student Feedback & Rating'}
              {activeModal === 'downloads' && 'Course Downloads & Study Material'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* 1. Student Registration */}
          {activeModal === 'registration' && (
            <div>
              {regSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Application Submitted Successfully!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{regData.name}</strong>. Your provisional application for <strong className="text-slate-900">{regData.course}</strong> has been received by MCIT Academic Office. Our counselor will contact you at <strong className="text-slate-900">{regData.phone}</strong> shortly with your registration acknowledgment slip.
                  </p>
                  <button
                    onClick={() => {
                      setRegSubmitted(false);
                      onClose();
                    }}
                    className="px-6 py-2 bg-[#1a365d] text-white text-sm font-semibold rounded-lg hover:bg-[#152a48]"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setRegSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <p className="text-xs text-slate-500">
                    Fill out this official online admission registration form for enrollment in MCIT courses.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Student Full Name *</label>
                      <input
                        type="text"
                        required
                        value={regData.name}
                        onChange={(e) => setRegData({ ...regData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-900 focus:ring-2 focus:ring-[#1a365d] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Father's Name *</label>
                      <input
                        type="text"
                        required
                        value={regData.fatherName}
                        onChange={(e) => setRegData({ ...regData, fatherName: e.target.value })}
                        placeholder="e.g. Shri S. P. Kumar"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-900 focus:ring-2 focus:ring-[#1a365d] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Mobile / WhatsApp No. *</label>
                      <input
                        type="tel"
                        required
                        value={regData.phone}
                        onChange={(e) => setRegData({ ...regData, phone: e.target.value })}
                        placeholder="e.g. 9956399811"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-900 focus:ring-2 focus:ring-[#1a365d] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        value={regData.email}
                        onChange={(e) => setRegData({ ...regData, email: e.target.value })}
                        placeholder="e.g. student@gmail.com"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-900 focus:ring-2 focus:ring-[#1a365d] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Desired Course *</label>
                      <select
                        value={regData.course}
                        onChange={(e) => setRegData({ ...regData, course: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-900 focus:ring-2 focus:ring-[#1a365d] focus:outline-none bg-white"
                      >
                        <option value="ADCA (12 Months)">ADCA (Advance Diploma in Computer Application - 12 Months)</option>
                        <option value="DCA (6 Months)">DCA (Diploma in Computer Application - 6 Months)</option>
                        <option value="CCFA / Tally (3 Months)">CCFA (Computerized Financial Accounting with Tally - 3 Months)</option>
                        <option value="CCC (NIELIT 80 Hrs)">CCC (Course on Computer Concepts - NIELIT)</option>
                        <option value="O-Level (NIELIT 1 Year)">O-Level Foundation Course (NIELIT)</option>
                        <option value="Python Programming (3 Months)">Python Programming &amp; Logic Building</option>
                        <option value="Web Designing CWD (3 Months)">Certificate in Web Designing (CWD)</option>
                        <option value="CAT (2 Months)">Computer Awareness Training (CAT)</option>
                        <option value="BCA / MCA Degree">University Degree Program (BCA / MCA)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Highest Qualification</label>
                      <select
                        value={regData.qualification}
                        onChange={(e) => setRegData({ ...regData, qualification: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-900 focus:ring-2 focus:ring-[#1a365d] focus:outline-none bg-white"
                      >
                        <option value="High School (10th)">High School (10th)</option>
                        <option value="Intermediate (10+2)">Intermediate (10+2)</option>
                        <option value="Undergraduate (BA/B.Sc/B.Com)">Undergraduate (BA/B.Sc/B.Com)</option>
                        <option value="Postgraduate (MA/M.Sc/M.Com)">Postgraduate (MA/M.Sc/M.Com)</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Residential Address</label>
                    <textarea
                      rows={2}
                      value={regData.address}
                      onChange={(e) => setRegData({ ...regData, address: e.target.value })}
                      placeholder="Village / Mohalla, Post, District, PIN Code"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-900 focus:ring-2 focus:ring-[#1a365d] focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 border border-slate-300 text-slate-700 text-sm font-semibold rounded-md hover:bg-slate-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-md shadow flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" /> Submit Application
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* 2. Enquiry Form */}
          {activeModal === 'enquiry' && (
            <div>
              {enqSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Enquiry Received!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for contacting MCIT. We have received your query for <strong className="text-slate-900">{enqData.courseInterest}</strong>. A career advisor will call you at <strong className="text-slate-900">{enqData.phone}</strong> or email details to <strong className="text-slate-900">{enqData.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setEnqSubmitted(false);
                      onClose();
                    }}
                    className="px-6 py-2 bg-[#1a365d] text-white text-sm font-semibold rounded-lg hover:bg-[#152a48]"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setEnqSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="bg-sky-50 border border-sky-200 rounded-lg p-3 text-xs text-sky-900">
                    Get full details regarding course syllabus, batch timings (Morning/Evening), fee structure, and scholarship opportunities.
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={enqData.name}
                      onChange={(e) => setEnqData({ ...enqData, name: e.target.value })}
                      placeholder="e.g. Anjali Gupta"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-900 focus:ring-2 focus:ring-[#1a365d] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={enqData.phone}
                        onChange={(e) => setEnqData({ ...enqData, phone: e.target.value })}
                        placeholder="e.g. 9415211709"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-900 focus:ring-2 focus:ring-[#1a365d] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        value={enqData.email}
                        onChange={(e) => setEnqData({ ...enqData, email: e.target.value })}
                        placeholder="e.g. anjali@gmail.com"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-900 focus:ring-2 focus:ring-[#1a365d] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Course of Interest</label>
                    <select
                      value={enqData.courseInterest}
                      onChange={(e) => setEnqData({ ...enqData, courseInterest: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-900 focus:ring-2 focus:ring-[#1a365d] focus:outline-none bg-white"
                    >
                      <option value="ADCA (12 Months)">ADCA (Advance Diploma in Computer Application)</option>
                      <option value="DCA (6 Months)">DCA (Diploma in Computer Application)</option>
                      <option value="TallyPrime & GST (3 Months)">TallyPrime with GST &amp; Accounting</option>
                      <option value="CCC & O-Level (Govt Recognised)">CCC &amp; O-Level (NIELIT)</option>
                      <option value="Python & AI Basics">Python &amp; AI Basics</option>
                      <option value="Web Designing & Development">Web Designing &amp; Development</option>
                      <option value="Hardware & Networking">Hardware, Wi-Fi &amp; Networking Solutions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Questions or Comments</label>
                    <textarea
                      rows={3}
                      value={enqData.message}
                      onChange={(e) => setEnqData({ ...enqData, message: e.target.value })}
                      placeholder="Ask about batch timings, fees, online/offline classes, or hostel accommodation..."
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-900 focus:ring-2 focus:ring-[#1a365d] focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 border border-slate-300 text-slate-700 text-sm font-semibold rounded-md hover:bg-slate-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-md shadow flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" /> Send Enquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* 3. Certificate Verification */}
          {activeModal === 'certificate' && (
            <div className="space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <h4 className="text-sm font-bold text-[#1a365d] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" /> Official Online Certificate Verification
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Employers, educational institutions, and students can authenticate diplomas and certificates issued by Madhur Computers &amp; Institute of Technology.
                </p>

                <form onSubmit={handleVerify} className="mt-4 flex gap-2">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={certQuery}
                      onChange={(e) => setCertQuery(e.target.value)}
                      placeholder="Enter Certificate No. (e.g. MCIT/2023/1042 or MCIT/2024/0891)"
                      className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-[#1a365d] focus:outline-none uppercase font-mono"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#1a365d] hover:bg-[#152a48] text-white text-sm font-bold rounded-lg shadow shrink-0"
                  >
                    Verify Now
                  </button>
                </form>

                {/* Quick test buttons */}
                <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
                  <span>Quick Test Numbers:</span>
                  <button
                    type="button"
                    onClick={() => {
                      setCertQuery('MCIT/2023/1042');
                      setCertResult(verifiedCertificates['MCIT/2023/1042']);
                    }}
                    className="px-2 py-0.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded font-mono font-medium"
                  >
                    MCIT/2023/1042
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setCertQuery('MCIT/2024/0891');
                      setCertResult(verifiedCertificates['MCIT/2024/0891']);
                    }}
                    className="px-2 py-0.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded font-mono font-medium"
                  >
                    MCIT/2024/0891
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setCertQuery('CCC-UP-98421');
                      setCertResult(verifiedCertificates['CCC-UP-98421']);
                    }}
                    className="px-2 py-0.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded font-mono font-medium"
                  >
                    CCC-UP-98421
                  </button>
                </div>
              </div>

              {/* Verification Result Card */}
              {certResult && certResult !== 'not_found' && (
                <div className="bg-emerald-50 border-2 border-emerald-500/40 rounded-xl p-5 shadow-sm space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between border-b border-emerald-200 pb-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span className="font-extrabold text-emerald-900 text-sm">AUTHENTIC &amp; VERIFIED RECORD</span>
                    </div>
                    <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full">
                      Valid Certificate
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-500 block">Student Name:</span>
                      <strong className="text-sm text-slate-900">{certResult.studentName}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Father's Name:</span>
                      <strong className="text-sm text-slate-900">{certResult.fatherName}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Course Name:</span>
                      <strong className="text-sm text-slate-900">{certResult.course}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Roll / Enrollment No:</span>
                      <strong className="text-sm text-slate-900 font-mono">{certResult.rollNo}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Certificate No:</span>
                      <strong className="text-sm text-[#1a365d] font-mono">{certResult.certNo}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Grade / Percentage:</span>
                      <strong className="text-sm text-emerald-800">{certResult.grade} ({certResult.percentage})</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Date of Issue:</span>
                      <strong className="text-sm text-slate-900">{certResult.issueDate}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Authorized Issuer:</span>
                      <strong className="text-sm text-slate-900">MCIT Examination Cell, Gorakhpur</strong>
                    </div>
                  </div>
                </div>
              )}

              {certResult === 'not_found' && (
                <div className="bg-rose-50 border border-rose-300 rounded-xl p-5 text-center space-y-2">
                  <AlertCircle className="w-8 h-8 text-rose-600 mx-auto" />
                  <h5 className="font-bold text-rose-900 text-sm">Certificate Record Not Found</h5>
                  <p className="text-xs text-rose-700 max-w-sm mx-auto">
                    No certificate found with ID &ldquo;{certQuery}&rdquo;. Please verify your certificate number printed on the top-right corner of your marksheet or contact the MCIT administrative desk at <a href="tel:+919956399811" className="font-bold underline">+91-9956399811</a>.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* 4. Current Openings */}
          {activeModal === 'openings' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600">
                Join our teaching and technical team at Madhur Computers &amp; Institute of Technology, Gorakhpur campus.
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-lg border border-slate-200 hover:border-[#1a365d] transition-colors bg-white shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-[#1a365d]">Computer Faculty (TallyPrime &amp; GST)</h4>
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded">Full Time</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Requirements: M.Com / B.Com with thorough expertise in TallyPrime, GST returns, and TDS. Minimum 1 year teaching experience.
                    </p>
                  </div>
                  <a
                    href="mailto:info@mcit.org.in?subject=Application%20for%20Tally%20Faculty"
                    className="px-4 py-1.5 bg-[#1a365d] text-white text-xs font-semibold rounded-md hover:bg-[#152a48] text-center shrink-0"
                  >
                    Apply Now
                  </a>
                </div>

                <div className="p-4 rounded-lg border border-slate-200 hover:border-[#1a365d] transition-colors bg-white shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-[#1a365d]">Python &amp; Web Development Trainer</h4>
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-sky-100 text-sky-800 rounded">Part/Full Time</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Requirements: BCA / MCA / B.Tech with sound knowledge of Python, Django/Flask, HTML5, CSS3, and JavaScript.
                    </p>
                  </div>
                  <a
                    href="mailto:info@mcit.org.in?subject=Application%20for%20Python%20Trainer"
                    className="px-4 py-1.5 bg-[#1a365d] text-white text-xs font-semibold rounded-md hover:bg-[#152a48] text-center shrink-0"
                  >
                    Apply Now
                  </a>
                </div>

                <div className="p-4 rounded-lg border border-slate-200 hover:border-[#1a365d] transition-colors bg-white shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-[#1a365d]">Hardware &amp; Network Support Technician</h4>
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-800 rounded">Immediate</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Requirements: Desktop troubleshooting, printer servicing, Wi-Fi router setup, and LAN cabling.
                    </p>
                  </div>
                  <a
                    href="mailto:info@mcit.org.in?subject=Application%20for%20Hardware%20Technician"
                    className="px-4 py-1.5 bg-[#1a365d] text-white text-xs font-semibold rounded-md hover:bg-[#152a48] text-center shrink-0"
                  >
                    Apply Now
                  </a>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-500 text-center">
                Send your updated CV directly to <a href="mailto:info@mcit.org.in" className="font-bold text-[#1a365d] underline">info@mcit.org.in</a> or visit our Head Office at Gorakhnath.
              </div>
            </div>
          )}

          {/* 5. Feedback Form */}
          {activeModal === 'feedback' && (
            <div>
              {feedbackSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Thank You for Your Feedback!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your valuable review helps MCIT continuously upgrade our lab infrastructure, faculty quality, and student learning experience.
                  </p>
                  <button
                    onClick={() => {
                      setFeedbackSubmitted(false);
                      onClose();
                    }}
                    className="px-6 py-2 bg-[#1a365d] text-white text-sm font-semibold rounded-lg hover:bg-[#152a48]"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFeedbackSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <p className="text-xs text-slate-500">
                    We value student voice. Please share your rating and constructive comments regarding courses and faculties.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={feedbackData.name}
                        onChange={(e) => setFeedbackData({ ...feedbackData, name: e.target.value })}
                        placeholder="e.g. Vikas Yadav"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-900 focus:ring-2 focus:ring-[#1a365d] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Course / Batch</label>
                      <input
                        type="text"
                        value={feedbackData.batch}
                        onChange={(e) => setFeedbackData({ ...feedbackData, batch: e.target.value })}
                        placeholder="e.g. ADCA Morning Batch"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-900 focus:ring-2 focus:ring-[#1a365d] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <span className="block text-xs font-bold text-slate-700 mb-1">Overall Experience</span>
                      <select
                        value={feedbackData.rating}
                        onChange={(e) => setFeedbackData({ ...feedbackData, rating: Number(e.target.value) })}
                        className="w-full px-2 py-1.5 text-xs border border-slate-300 rounded bg-white"
                      >
                        <option value={5}>⭐⭐⭐⭐⭐ (5/5 Excellent)</option>
                        <option value={4}>⭐⭐⭐⭐ (4/5 Very Good)</option>
                        <option value={3}>⭐⭐⭐ (3/5 Good)</option>
                        <option value={2}>⭐⭐ (2/5 Average)</option>
                      </select>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <span className="block text-xs font-bold text-slate-700 mb-1">Faculty &amp; Teaching</span>
                      <select
                        value={feedbackData.facultyRating}
                        onChange={(e) => setFeedbackData({ ...feedbackData, facultyRating: Number(e.target.value) })}
                        className="w-full px-2 py-1.5 text-xs border border-slate-300 rounded bg-white"
                      >
                        <option value={5}>⭐⭐⭐⭐⭐ (5/5 Excellent)</option>
                        <option value={4}>⭐⭐⭐⭐ (4/5 Very Good)</option>
                        <option value={3}>⭐⭐⭐ (3/5 Good)</option>
                      </select>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <span className="block text-xs font-bold text-slate-700 mb-1">Computer Lab &amp; LAN</span>
                      <select
                        value={feedbackData.labRating}
                        onChange={(e) => setFeedbackData({ ...feedbackData, labRating: Number(e.target.value) })}
                        className="w-full px-2 py-1.5 text-xs border border-slate-300 rounded bg-white"
                      >
                        <option value={5}>⭐⭐⭐⭐⭐ (5/5 Excellent)</option>
                        <option value={4}>⭐⭐⭐⭐ (4/5 Very Good)</option>
                        <option value={3}>⭐⭐⭐ (3/5 Good)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Detailed Comments &amp; Suggestions</label>
                    <textarea
                      rows={3}
                      required
                      value={feedbackData.comments}
                      onChange={(e) => setFeedbackData({ ...feedbackData, comments: e.target.value })}
                      placeholder="Share what you enjoyed most about the training or any areas for improvement..."
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm text-slate-900 focus:ring-2 focus:ring-[#1a365d] focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 border border-slate-300 text-slate-700 text-sm font-semibold rounded-md hover:bg-slate-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-md shadow flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" /> Submit Feedback
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* 6. Downloads */}
          {activeModal === 'downloads' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600">
                Official documents, admission brochures, and syllabus PDFs available for direct download.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 border border-slate-200 rounded-lg hover:border-sky-300 transition-colors bg-slate-50 flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
                      <FileText className="w-4 h-4 text-rose-500" /> MCIT Institutional Prospectus
                    </div>
                    <p className="text-[11px] text-slate-500">Comprehensive course catalog &amp; institute guidelines (PDF • 2.4 MB)</p>
                  </div>
                  <button
                    onClick={() => {
                      alert('Downloading MCIT Institutional Prospectus 2026 PDF...');
                    }}
                    className="p-2 text-slate-600 hover:text-[#1a365d] hover:bg-slate-200 rounded transition-colors shrink-0"
                    title="Download Prospectus"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-3.5 border border-slate-200 rounded-lg hover:border-sky-300 transition-colors bg-slate-50 flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
                      <FileText className="w-4 h-4 text-sky-500" /> Offline Admission Form
                    </div>
                    <p className="text-[11px] text-slate-500">Printable admission application form for campus submission (PDF • 450 KB)</p>
                  </div>
                  <button
                    onClick={() => {
                      alert('Downloading Offline Admission Application Form PDF...');
                    }}
                    className="p-2 text-slate-600 hover:text-[#1a365d] hover:bg-slate-200 rounded transition-colors shrink-0"
                    title="Download Admission Form"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-3.5 border border-slate-200 rounded-lg hover:border-sky-300 transition-colors bg-slate-50 flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
                      <FileText className="w-4 h-4 text-emerald-500" /> ADCA Complete Syllabus
                    </div>
                    <p className="text-[11px] text-slate-500">Detailed 12-month module breakdown and lab schedule (PDF • 820 KB)</p>
                  </div>
                  <button
                    onClick={() => {
                      alert('Downloading ADCA Detailed Syllabus PDF...');
                    }}
                    className="p-2 text-slate-600 hover:text-[#1a365d] hover:bg-slate-200 rounded transition-colors shrink-0"
                    title="Download Syllabus"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-3.5 border border-slate-200 rounded-lg hover:border-sky-300 transition-colors bg-slate-50 flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
                      <FileText className="w-4 h-4 text-amber-500" /> CCC / NIELIT Model Question Bank
                    </div>
                    <p className="text-[11px] text-slate-500">Practice questions and solved model tests for CCC exams (PDF • 1.8 MB)</p>
                  </div>
                  <button
                    onClick={() => {
                      alert('Downloading CCC Model Test Paper PDF...');
                    }}
                    className="p-2 text-slate-600 hover:text-[#1a365d] hover:bg-slate-200 rounded transition-colors shrink-0"
                    title="Download Practice Bank"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
