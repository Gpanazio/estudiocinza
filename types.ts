import React from 'react';

// Navigation is now handled via IDs for scrolling
export type SectionId = 'home' | 'space' | 'equipment' | 'gallery' | 'pricing' | 'contact';

export interface StudioSpace {
  id: number;
  title: string;
  specs: string;
  image: string;
  description: string;
}

export interface Amenity {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricingTier {
    title: string;
    price: string;
    features: string[];
    highlight?: boolean;
}

export interface NavItem {
  label: string;
  id: SectionId;
}