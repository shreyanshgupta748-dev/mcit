import React, { useState, useEffect } from 'react';
import { PageId, StudentModalType } from './types';
import { TopHeader } from './components/TopHeader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { CoursesPage } from './components/CoursesPage';
import { ServicesPage } from './components/ServicesPage';
import { PlacementPage } from './components/PlacementPage';
import { GalleryPage } from './components/GalleryPage';
import { ContactPage } from './components/ContactPage';
import { StudentModals } from './components/StudentModals';
import { MadhurComputersView } from './components/MadhurComputersView';

export function App() {
  const [siteMode, setSiteMode] = useState<'mcit' | 'madhur'>('mcit');
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [courseFilter, setCourseFilter] = useState<string | undefined>(undefined);
  const [activeModal, setActiveModal] = useState<StudentModalType>(null);

  const handleNavigate = (page: PageId, filter?: string) => {
    setCurrentPage(page);
    setCourseFilter(filter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModal = (type: StudentModalType) => {
    setActiveModal(type);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage, siteMode]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans antialiased selection:bg-amber-400 selection:text-slate-900">
      {/* Global Top Bar */}
      <TopHeader
        currentMode={siteMode}
        onSwitchMode={(mode) => setSiteMode(mode)}
        onOpenEnquiry={() => setActiveModal('enquiry')}
      />

      {siteMode === 'mcit' ? (
        <>
          {/* Authentic MCIT Sticky Navigation */}
          <Navbar
            currentPage={currentPage}
            onNavigate={handleNavigate}
            onOpenEnquiry={() => setActiveModal('enquiry')}
          />

          {/* Active Page View */}
          <main className="flex-1">
            {currentPage === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onOpenModal={handleOpenModal}
              />
            )}
            {currentPage === 'about' && (
              <AboutPage
                onNavigate={handleNavigate}
                onOpenEnquiry={() => setActiveModal('enquiry')}
              />
            )}
            {currentPage === 'courses' && (
              <CoursesPage
                initialFilter={courseFilter}
                onNavigate={handleNavigate}
                onOpenModal={handleOpenModal}
              />
            )}
            {currentPage === 'services' && (
              <ServicesPage
                onNavigate={handleNavigate}
                onOpenEnquiry={() => setActiveModal('enquiry')}
              />
            )}
            {currentPage === 'placement' && (
              <PlacementPage
                onNavigate={handleNavigate}
                onOpenEnquiry={() => setActiveModal('enquiry')}
              />
            )}
            {currentPage === 'gallery' && (
              <GalleryPage onNavigate={handleNavigate} />
            )}
            {currentPage === 'contact' && (
              <ContactPage onNavigate={handleNavigate} />
            )}
          </main>

          {/* Authentic 4-Column Footer */}
          <Footer
            onNavigate={handleNavigate}
            onOpenModal={handleOpenModal}
          />

          {/* All 6 Student Modals with Zero 404s */}
          <StudentModals
            activeModal={activeModal}
            onClose={handleCloseModal}
          />
        </>
      ) : (
        /* Sister Agency Clone (Madhur Computers) */
        <main className="flex-1">
          <MadhurComputersView />
        </main>
      )}
    </div>
  );
}

export default App;
