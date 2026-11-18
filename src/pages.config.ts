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
    description: 'Junior Software Engineer at Reelax shipping production React, Next.js and TypeScript apps: admin consoles, fast marketing sites and creator-marketing workflows.',
  },
  
  projects: {
    title: 'Projects',
    description: 'Case studies from Reelax: a sole-engineer admin console, a 95+ Lighthouse marketing site, a creator CRM, and OAuth and Meta signup integrations.',
    heading: 'Projects',
    intro: 'Production work from Reelax. Each case study covers the problem, the decisions I made, what shipped and what I would change. My role is stated on every one.',
  },
  
  decisions: {
    title: 'Decisions',
    description: 'Engineering decision records from production work: session handling, legacy migration, video playback and channel connection.',
    heading: 'Decisions',
    intro: 'Short decision records written as the code shipped: the context, the options I weighed, and why I chose what I did.',
  },
  
  journey: {
    title: 'Journey',
    description: 'From Honest Digital and a Reelax internship to a full-time Junior Software Engineer role at Reelax.',
    heading: 'Journey',
    intro: 'Two companies, 10+ live products and six production codebases, from intern to full-time engineer in under eighteen months.',
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
    description: 'The languages, frameworks and tools I use to ship production web apps.',
    heading: 'Uses',
    intro: 'The stack and tooling behind the work on this site.',
  },
  
  contact: {
    title: 'Contact',
    description: 'Contact Udayan Mishra, Junior Software Engineer at Reelax, about products, collaborations or engineering conversations.',
    heading: 'Let\'s talk',
  },
} as const;

export type PagesConfig = typeof pagesConfig;
export type PageConfig = PageMeta;
