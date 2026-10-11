/**
 * Page Metadata Configuration
 * 
 * Centralized SEO metadata for all static pages. Single source of truth
 * for titles and descriptions to ensure consistency across the site.
 * 
 * @module pages.config
 */

interface PageMeta {
  title: string;
  description: string;
  heading?: string;
  intro?: string;
}

export const pagesConfig = {
  home: {
    title: 'Home',
    description: 'Frontend engineer building React and Next.js products—internal tools, marketing sites, and customer workflows.',
  },
  
  projects: {
    title: 'Projects',
    description: 'Case studies on Reelax Admin v3, Spotlyt Marketing, Reelax Ads Web, Spotlyt apps, and Reelax Brand v2.',
    heading: 'Projects',
    intro: 'Each write-up starts with the problem someone felt, then the call I made and what shipped.',
  },
  
  decisions: {
    title: 'Decisions',
    description: 'A log of frontend and integration decisions: session handling, legacy migration, video playback, and channel connection.',
    heading: 'Decisions',
    intro: 'Short records of what I chose, what I skipped, and why—while the code was still fresh.',
  },
  
  journey: {
    title: 'Journey',
    description: 'Timeline from Honest Digital and Reelax internships through B.Tech completion and Reelax Admin v3.',
    heading: 'Journey',
    intro: 'Milestones and transitions that shaped how I work on React and Next.js products.',
  },
  
  writing: {
    title: 'Writing',
    description: 'Technical articles and notes.',
    heading: 'Writing',
    intro: 'Articles will appear here when published.',
  },

  speaking: {
    title: 'Speaking',
    description: 'Conference talks and presentations.',
    heading: 'Speaking',
    intro: 'Talks will appear here when scheduled.',
  },
  
  uses: {
    title: 'Uses',
    description: 'Languages, frameworks and tools I use for frontend work.',
    heading: 'Uses',
    intro: 'Stack and tooling I reach for on React, Next.js and TanStack projects.',
  },
  
  contact: {
    title: 'Contact',
    description: 'Get in touch about frontend and product engineering roles, projects or collaborations.',
    heading: 'Get in touch',
  },
} as const;

export type PagesConfig = typeof pagesConfig;
export type PageConfig = PageMeta;
