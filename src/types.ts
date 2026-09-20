export type PageId = 'home' | 'about' | 'courses' | 'services' | 'placement' | 'gallery' | 'contact';

export type StudentModalType = 'registration' | 'enquiry' | 'certificate' | 'openings' | 'feedback' | 'downloads' | null;

export interface CourseItem {
  id: string;
  name: string;
  code: string;
  category: 'certificate' | 'diploma' | 'degree' | 'nielit';
  institution: 'MCIT' | 'RSSA' | 'NIELIT' | 'SVSU';
  duration: string;
  eligibility: string;
  modules: string[];
  careerProspects?: string;
}

export interface ClientItem {
  name: string;
  type: string;
  url?: string;
  description?: string;
}

export interface GalleryPhoto {
  id: number;
  title: string;
  category: string;
  url: string;
  caption: string;
}
