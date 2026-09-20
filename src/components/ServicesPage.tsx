import React from 'react';
import { PageId } from '../types';
import { clientList } from '../data/mcitData';
import { 
  Globe, 
  Code, 
  Cpu, 
  HardDrive, 
  ArrowUp, 
  ExternalLink, 
  Building, 
  CheckCircle2, 
  Wrench,
  ShieldAlert
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenEnquiry
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="top" className="space-y-12 pb-16">
      {/* Banner / Breadcrumb Area */}
      <section className="bg-gradient-to-r from-[#102238] to-[#1a365d] text-white py-12 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white">Our Services</h1>
              <p className="text-sm text-slate-300 mt-1">
                Web Solutions, Custom Software, Hardware &amp; Enterprise Networking
              </p>
            </div>
            <nav className="text-xs text-slate-400 flex items-center gap-2">
              <button onClick={() => onNavigate('home')} className="hover:text-amber-400">Home</button>
              <span>/</span>
              <span className="text-amber-400 font-semibold">Services</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Quick Nav Anchors */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-wrap items-center gap-3 text-xs">
          <span className="font-bold text-slate-700">Jump to Service:</span>
          <a href="#web" className="px-3 py-1.5 bg-slate-100 hover:bg-[#1a365d] hover:text-white rounded font-medium transition-colors">
            Web Solutions
          </a>
          <a href="#soft" className="px-3 py-1.5 bg-slate-100 hover:bg-[#1a365d] hover:text-white rounded font-medium transition-colors">
            Software Solutions
          </a>
          <a href="#hard" className="px-3 py-1.5 bg-slate-100 hover:bg-[#1a365d] hover:text-white rounded font-medium transition-colors">
            Hardware &amp; Networking
          </a>
          <a href="#clients" className="px-3 py-1.5 bg-slate-100 hover:bg-[#1a365d] hover:text-white rounded font-medium transition-colors">
            Our Clients Portfolio
          </a>
        </div>

        {/* 1. Web Solutions */}
        <section id="web" className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-5 scroll-mt-24">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-sky-100 text-sky-800 rounded-lg">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1a365d]">
                Web Solutions
              </h2>
            </div>
            {/* Cured top link: smooth scrolling instead of 404 services.php#top */}
            <button
              onClick={scrollToTop}
              className="text-xs text-slate-500 hover:text-[#1a365d] flex items-center gap-1 font-semibold"
            >
              <ArrowUp className="w-3.5 h-3.5" /> | Top |
            </button>
          </div>

          <p className="text-slate-700 text-sm leading-relaxed text-justify">
            Madhur Computers creates unique, innovative web sites with a strong marketing focus for leading educational, industrial, and healthcare organizations. Effective website design involves a team of highly skilled specialists. At Madhur Computers, every web design team has an e-business strategist, website usability consultant, web programmers, graphic designers, search engine specialists, and a website copywriter &mdash; the result is an attractive website that is functional, interactive, and provides real returns for your business.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm mb-1">Website Design</h3>
              <p className="text-xs text-slate-600">Responsive layouts, modern aesthetics, user-friendly UI/UX, and mobile adaptation.</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm mb-1">Website Development</h3>
              <p className="text-xs text-slate-600">Custom web applications, CMS portals, database management, and cloud deployment.</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm mb-1">Search Engine Optimization</h3>
              <p className="text-xs text-slate-600">Keyword strategy, meta optimization, Google Business profile, and local ranking boost.</p>
            </div>
          </div>
        </section>

        {/* 2. Software Solutions */}
        <section id="soft" className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-5 scroll-mt-24">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-100 text-indigo-800 rounded-lg">
                <Code className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1a365d]">
                Software Solutions
              </h2>
            </div>
            <button
              onClick={scrollToTop}
              className="text-xs text-slate-500 hover:text-[#1a365d] flex items-center gap-1 font-semibold"
            >
              <ArrowUp className="w-3.5 h-3.5" /> | Top |
            </button>
          </div>

          <p className="text-slate-700 text-sm leading-relaxed text-justify">
            At MADHUR COMPUTERS (Software Development) Division, it is our approach to ensure that all development is designed with our client&rsquo;s resources in mind. We understand that software development needs to be a collaborative process to ensure that site and system maintenance is easily operated and that technology is applied to yield the most benefit to you and your staff.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed text-justify">
            We give you the advantage of working with a full-service technology team that utilizes stable, up-to-date, and compatible technology. We also have the ability and experience to make sure that the system can integrate with most legacy business software you currently have in place. Our solution is scalable, allowing your company to expand content, format, and enterprise features in the future.
          </p>
        </section>

        {/* 3. Hardware & Networking Solutions */}
        <section id="hard" className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-5 scroll-mt-24">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-amber-100 text-amber-800 rounded-lg">
                <Cpu className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1a365d]">
                Hardware &amp; Networking Solutions
              </h2>
            </div>
            <button
              onClick={scrollToTop}
              className="text-xs text-slate-500 hover:text-[#1a365d] flex items-center gap-1 font-semibold"
            >
              <ArrowUp className="w-3.5 h-3.5" /> | Top |
            </button>
          </div>

          <p className="text-slate-700 text-sm leading-relaxed text-justify">
            At MADHUR COMPUTERS, we also provide comprehensive Hardware solutions. Continuous advancements in computer software technology have increased the need to keep computer hardware updated to be supportive to the latest and upcoming operating systems and servers. Computer Hard Way caters to all your needs pertaining to computer/laptop purchase, computer/laptop repairing, computer accessories, hardware and networking solutions, and computer A.M.C. We also provide professional data recovery services.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2">
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
              <HardDrive className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span><strong>Data Recovery:</strong> Recovery from damaged HDDs, Pen Drives, SSDs, and Memory Cards.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
              <Cpu className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <span><strong>Computer Accessories:</strong> RAM, Motherboards, Cabinets, SMPS, Webcams, and Peripherals.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
              <Building className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Sales of Branded PCs &amp; Laptops:</strong> HCL, Dell, Lenovo, HP, Acer, Apple, and Toshiba.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
              <Wrench className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span><strong>Troubleshooting &amp; Maintenance:</strong> Formatting, OS installation, Virus cleaning, Data backup, and AMC.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 sm:col-span-2">
              <Globe className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <span><strong>Campus Networking:</strong> Structured LAN/WAN cabling, Wi-Fi campus solutions, and Server rack configurations.</span>
            </div>
          </div>
        </section>

        {/* 4. Our Clients Portfolio */}
        <section id="clients" className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6 scroll-mt-24">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-lg">
                <Building className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1a365d]">
                Our Prestigious Clients
              </h2>
            </div>
            <button
              onClick={scrollToTop}
              className="text-xs text-slate-500 hover:text-[#1a365d] flex items-center gap-1 font-semibold"
            >
              <ArrowUp className="w-3.5 h-3.5" /> | Top |
            </button>
          </div>

          <p className="text-xs text-slate-600">
            A selection of leading schools, corporate houses, and healthcare institutions served by Madhur Computers &amp; MCIT:
          </p>

          <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-sm">
            <table className="w-full text-left text-xs divide-y divide-slate-200">
              <thead className="bg-[#1a365d] text-white">
                <tr>
                  <th className="py-3 px-4 font-bold">Client / Organization</th>
                  <th className="py-3 px-4 font-bold">Service Provided</th>
                  <th className="py-3 px-4 font-bold text-right">Web Portal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {clientList.map((client, idx) => (
                  <tr key={idx} className="hover:bg-sky-50/60 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900">
                      {client.name}
                    </td>
                    <td className="py-3 px-4 text-slate-600">
                      {client.type}
                    </td>
                    <td className="py-3 px-4 text-right">
                      {client.url ? (
                        <a
                          href={client.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sky-700 hover:text-sky-900 font-medium"
                        >
                          <span>Visit Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-slate-400">On-Premises AMC</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Bar */}
        <div className="bg-[#1a365d] rounded-xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-lg font-bold text-white">Need Web, Software or Hardware Support?</h3>
            <p className="text-xs text-slate-300 mt-1">Get custom consultation for your school, company or lab setup.</p>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-lg shadow transition-colors shrink-0"
          >
            Request Quotation
          </button>
        </div>
      </div>
    </div>
  );
};
