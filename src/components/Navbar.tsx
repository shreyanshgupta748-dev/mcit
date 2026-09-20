import React, { useState } from 'react';
import { PageId } from '../types';
import { Search, Menu, X, GraduationCap, ChevronRight } from 'lucide-react';
import { mcitCourses } from '../data/mcitData';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, filter?: string) => void;
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenEnquiry
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = searchQuery.trim() === ''
    ? []
    : mcitCourses.filter(c => 
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.modules.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()))
      );

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setSearchOpen(false);
  };

  const handleSearchResultClick = (courseCode: string) => {
    onNavigate('courses', courseCode);
    setSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Title */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-900 to-[#1a365d] flex items-center justify-center text-white shadow-sm border border-sky-700/30 group-hover:scale-105 transition-transform shrink-0">
              <GraduationCap className="w-7 h-7 text-amber-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#1a365d] leading-none">
                M C I T
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-600 tracking-tight leading-tight mt-0.5">
                Madhur Computers &amp; Institute of Technology
              </span>
              <span className="text-[9px] uppercase tracking-wider text-amber-700 font-bold">
                Govt. Regd. Society • Estd. 1996
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                currentPage === 'home'
                  ? 'text-[#1a365d] bg-sky-50 font-bold border-b-2 border-amber-500 rounded-b-none'
                  : 'text-slate-700 hover:text-[#1a365d] hover:bg-slate-50'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                currentPage === 'about'
                  ? 'text-[#1a365d] bg-sky-50 font-bold border-b-2 border-amber-500 rounded-b-none'
                  : 'text-slate-700 hover:text-[#1a365d] hover:bg-slate-50'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('courses')}
              className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                currentPage === 'courses'
                  ? 'text-[#1a365d] bg-sky-50 font-bold border-b-2 border-amber-500 rounded-b-none'
                  : 'text-slate-700 hover:text-[#1a365d] hover:bg-slate-50'
              }`}
            >
              Courses
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                currentPage === 'services'
                  ? 'text-[#1a365d] bg-sky-50 font-bold border-b-2 border-amber-500 rounded-b-none'
                  : 'text-slate-700 hover:text-[#1a365d] hover:bg-slate-50'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('placement')}
              className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                currentPage === 'placement'
                  ? 'text-[#1a365d] bg-sky-50 font-bold border-b-2 border-amber-500 rounded-b-none'
                  : 'text-slate-700 hover:text-[#1a365d] hover:bg-slate-50'
              }`}
            >
              Placement
            </button>
            <button
              onClick={() => {
                if (currentPage === 'home') {
                  const el = document.getElementById('student');
                  el?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  onNavigate('home');
                  setTimeout(() => {
                    document.getElementById('student')?.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                }
              }}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-[#1a365d] hover:bg-slate-50 rounded-md transition-colors"
            >
              Student Section
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                currentPage === 'gallery'
                  ? 'text-[#1a365d] bg-sky-50 font-bold border-b-2 border-amber-500 rounded-b-none'
                  : 'text-slate-700 hover:text-[#1a365d] hover:bg-slate-50'
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                currentPage === 'contact'
                  ? 'text-[#1a365d] bg-sky-50 font-bold border-b-2 border-amber-500 rounded-b-none'
                  : 'text-slate-700 hover:text-[#1a365d] hover:bg-slate-50'
              }`}
            >
              Contact Us
            </button>

            {/* Live Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 ml-2 text-slate-600 hover:text-[#1a365d] hover:bg-slate-100 rounded-full transition-colors"
              title="Search Courses"
              aria-label="Search Courses"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Quick Enquiry CTA */}
            <button
              onClick={onOpenEnquiry}
              className="ml-3 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs rounded-md shadow-sm transition-all"
            >
              Quick Enquiry
            </button>
          </div>

          {/* Mobile menu and search toggles */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-slate-600 hover:text-[#1a365d] rounded-md"
              aria-label="Toggle Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#1a365d] rounded-md"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Search Bar (Cures dead action="#" form) */}
      {searchOpen && (
        <div className="bg-slate-50 border-t border-slate-200 p-4 shadow-inner">
          <div className="max-w-3xl mx-auto relative">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, technologies (e.g. Python, Tally, DCA, ADCA, CCC, O-Level)..."
                className="w-full pl-11 pr-10 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Live Search Results Dropdown */}
            {searchQuery.trim() !== '' && (
              <div className="mt-2 bg-white rounded-lg border border-slate-200 shadow-xl overflow-hidden max-h-80 overflow-y-auto">
                {searchResults.length > 0 ? (
                  <div className="divide-y divide-slate-100">
                    {searchResults.map(course => (
                      <div
                        key={course.id}
                        onClick={() => handleSearchResultClick(course.code)}
                        className="p-3 hover:bg-sky-50 cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-[#1a365d] text-sm">{course.name}</span>
                            <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-amber-100 text-amber-800">
                              {course.code}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Duration: {course.duration} • Eligibility: {course.eligibility}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-sm text-slate-500">
                    No courses found matching &ldquo;{searchQuery}&rdquo;. Try searching for &ldquo;DCA&rdquo;, &ldquo;Tally&rdquo;, or &ldquo;Python&rdquo;.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-lg">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold ${
              currentPage === 'home' ? 'bg-sky-50 text-[#1a365d] font-bold' : 'text-slate-700'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold ${
              currentPage === 'about' ? 'bg-sky-50 text-[#1a365d] font-bold' : 'text-slate-700'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick('courses')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold ${
              currentPage === 'courses' ? 'bg-sky-50 text-[#1a365d] font-bold' : 'text-slate-700'
            }`}
          >
            Courses
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold ${
              currentPage === 'services' ? 'bg-sky-50 text-[#1a365d] font-bold' : 'text-slate-700'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick('placement')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold ${
              currentPage === 'placement' ? 'bg-sky-50 text-[#1a365d] font-bold' : 'text-slate-700'
            }`}
          >
            Placement
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (currentPage === 'home') {
                document.getElementById('student')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                onNavigate('home');
                setTimeout(() => {
                  document.getElementById('student')?.scrollIntoView({ behavior: 'smooth' });
                }, 150);
              }
            }}
            className="w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Student Section
          </button>
          <button
            onClick={() => handleNavClick('gallery')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold ${
              currentPage === 'gallery' ? 'bg-sky-50 text-[#1a365d] font-bold' : 'text-slate-700'
            }`}
          >
            Gallery
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold ${
              currentPage === 'contact' ? 'bg-sky-50 text-[#1a365d] font-bold' : 'text-slate-700'
            }`}
          >
            Contact Us
          </button>
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-md shadow"
            >
              Quick Enquiry
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
