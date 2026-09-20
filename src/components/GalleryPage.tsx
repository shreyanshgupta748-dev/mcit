import React, { useState } from 'react';
import { PageId } from '../types';
import { galleryPhotos } from '../data/mcitData';
import { Image as ImageIcon, ZoomIn, Filter } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<typeof galleryPhotos[0] | null>(null);

  const categories = ['All', 'Infrastructure', 'Academics', 'Practical', 'Events', 'Placement'];

  const filteredPhotos = selectedCategory === 'All'
    ? galleryPhotos
    : galleryPhotos.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-12 pb-16">
      {/* Banner / Breadcrumb Area */}
      <section className="bg-gradient-to-r from-[#102238] to-[#1a365d] text-white py-12 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white">Campus Gallery</h1>
              <p className="text-sm text-slate-300 mt-1">
                Visual Glimpses of MCIT Labs, Smart Classrooms, Workshops &amp; Events
              </p>
            </div>
            <nav className="text-xs text-slate-400 flex items-center gap-2">
              <button onClick={() => onNavigate('home')} className="hover:text-amber-400">Home</button>
              <span>/</span>
              <span className="text-amber-400 font-semibold">Gallery</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Gallery Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#1a365d] text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={photo.url}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 px-2 py-0.5 bg-slate-900/80 backdrop-blur text-white text-[10px] font-bold rounded">
                  {photo.category}
                </span>
              </div>
              <div className="p-4 space-y-1 flex-1 flex flex-col justify-between">
                <h3 className="font-bold text-slate-900 text-sm">{photo.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm p-4 flex items-center justify-center animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl overflow-hidden max-w-3xl w-full shadow-2xl border border-slate-700"
          >
            <div className="relative aspect-video bg-black">
              <img
                src={activePhoto.url}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-5 bg-white">
              <span className="text-[10px] uppercase font-bold text-amber-600 block tracking-wider">
                {activePhoto.category}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">{activePhoto.title}</h3>
              <p className="text-xs text-slate-600 mt-1">{activePhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
