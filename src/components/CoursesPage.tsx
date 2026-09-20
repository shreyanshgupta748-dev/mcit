import React, { useState, useEffect } from 'react';
import { PageId, StudentModalType, CourseItem } from '../types';
import { mcitCourses } from '../data/mcitData';
import { 
  Award, 
  GraduationCap, 
  Clock, 
  BookOpen, 
  CheckCircle, 
  ChevronRight, 
  Search, 
  Filter,
  Briefcase
} from 'lucide-react';

interface CoursesPageProps {
  initialFilter?: string;
  onNavigate: (page: PageId) => void;
  onOpenModal: (type: StudentModalType) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({
  initialFilter,
  onNavigate,
  onOpenModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);

  useEffect(() => {
    if (initialFilter) {
      if (['certificate', 'diploma', 'degree', 'nielit'].includes(initialFilter.toLowerCase())) {
        setSelectedCategory(initialFilter.toLowerCase());
      } else {
        // If it was a course code like DCA or Tally
        setSearchTerm(initialFilter);
      }
    }
  }, [initialFilter]);

  const filteredCourses = mcitCourses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = searchTerm.trim() === '' ||
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.modules.some(m => m.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-10 pb-16">
      {/* Banner / Breadcrumb Area */}
      <section className="bg-gradient-to-r from-[#102238] to-[#1a365d] text-white py-12 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white">Course Catalog &amp; Syllabi</h1>
              <p className="text-sm text-slate-300 mt-1">
                Certificate, Diploma, NIELIT Govt., and University Degree Programs
              </p>
            </div>
            <nav className="text-xs text-slate-400 flex items-center gap-2">
              <button onClick={() => onNavigate('home')} className="hover:text-amber-400">Home</button>
              <span>/</span>
              <span className="text-amber-400 font-semibold">Courses</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Filter & Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Selector & Search Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#1a365d] text-white shadow'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Courses ({mcitCourses.length})
            </button>
            <button
              onClick={() => setSelectedCategory('certificate')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'certificate'
                  ? 'bg-[#1a365d] text-white shadow'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Certificate (Short-term)
            </button>
            <button
              onClick={() => setSelectedCategory('diploma')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'diploma'
                  ? 'bg-[#1a365d] text-white shadow'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Diploma (DCA / ADCA)
            </button>
            <button
              onClick={() => setSelectedCategory('nielit')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'nielit'
                  ? 'bg-[#1a365d] text-white shadow'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              NIELIT (CCC / O-Level)
            </button>
            <button
              onClick={() => setSelectedCategory('degree')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'degree'
                  ? 'bg-[#1a365d] text-white shadow'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Degree (BCA / MCA)
            </button>
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search course or topic..."
              className="w-full pl-9 pr-3 py-1.5 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-[#1a365d] focus:outline-none"
            />
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#1a365d] transition-all flex flex-col justify-between overflow-hidden"
            >
              <div className="p-5 space-y-3">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider ${
                    course.category === 'diploma'
                      ? 'bg-sky-100 text-sky-800'
                      : course.category === 'nielit'
                      ? 'bg-emerald-100 text-emerald-800'
                      : course.category === 'degree'
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-amber-100 text-amber-900'
                  }`}>
                    {course.institution} • {course.category}
                  </span>
                  <span className="font-mono font-bold text-xs px-2 py-0.5 bg-slate-100 rounded text-slate-800">
                    {course.code}
                  </span>
                </div>

                {/* Course Name */}
                <h3 className="font-extrabold text-base text-slate-900 leading-snug">
                  {course.name}
                </h3>

                {/* Meta details */}
                <div className="space-y-1.5 text-xs text-slate-600 pt-1 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Duration: <strong className="text-slate-800">{course.duration}</strong></span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                    <span>Eligibility: <span className="text-slate-700">{course.eligibility}</span></span>
                  </div>
                </div>

                {/* Key modules preview */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                    Syllabus Highlights:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {course.modules.slice(0, 3).map((mod, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{mod}</span>
                      </li>
                    ))}
                    {course.modules.length > 3 && (
                      <li className="text-[11px] text-sky-700 font-semibold pl-5">
                        + {course.modules.length - 3} more modules
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="flex-1 py-2 bg-white hover:bg-slate-100 text-[#1a365d] border border-slate-300 font-bold text-xs rounded-md transition-colors"
                >
                  View Details
                </button>
                <button
                  onClick={() => onOpenModal('registration')}
                  className="flex-1 py-2 bg-[#1a365d] hover:bg-[#152a48] text-white font-bold text-xs rounded-md transition-colors"
                >
                  Apply Online
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="bg-white rounded-xl p-12 text-center border border-slate-200">
            <Filter className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="font-bold text-slate-800 text-lg">No matching courses found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              We couldn't find any course matching your search criteria. Try clearing the filter or search query.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
              }}
              className="mt-4 px-4 py-2 bg-[#1a365d] text-white text-xs font-semibold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Course Detail Modal (Cures mobile table blowout and gives full syllabus) */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col border border-slate-200">
            {/* Header */}
            <div className="bg-[#1a365d] text-white p-6 flex items-start justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-amber-400 text-slate-950 uppercase">
                  {selectedCourse.institution} • {selectedCourse.code}
                </span>
                <h3 className="text-xl font-bold text-white mt-1.5">{selectedCourse.name}</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Duration: {selectedCourse.duration} • Eligibility: {selectedCourse.eligibility}
                </p>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="text-slate-300 hover:text-white p-1 rounded-md"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Syllabus Breakdown */}
              <div>
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-[#1a365d]" /> Complete Curriculum &amp; Modules
                </h4>
                <div className="space-y-2 border border-slate-200 rounded-lg p-3 bg-slate-50">
                  {selectedCourse.modules.map((mod, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs text-slate-700 py-1 border-b border-slate-100 last:border-none">
                      <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 font-bold flex items-center justify-center shrink-0 text-[10px]">
                        {index + 1}
                      </span>
                      <span className="font-medium">{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Opportunities */}
              {selectedCourse.careerProspects && (
                <div>
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-emerald-600" /> Career &amp; Employment Prospects
                  </h4>
                  <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs text-emerald-900 font-medium">
                    {selectedCourse.careerProspects}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-3">
              <button
                onClick={() => setSelectedCourse(null)}
                className="px-4 py-2 border border-slate-300 text-slate-700 text-xs font-semibold rounded-md hover:bg-slate-100"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedCourse(null);
                  onOpenModal('registration');
                }}
                className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold rounded-md shadow"
              >
                Enroll in {selectedCourse.code}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
