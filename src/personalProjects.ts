/** Personal projects shown on the home and projects pages. Facts: docs/FACTS.md. */
export const personalProjects = [
  {
    title: 'Content Broadcasting System',
    summary:
      'A role-based content scheduling platform for schools. Teachers upload content with start and end times, a principal approves it, and a public live page per teacher shows only what is on air right now.',
    stack: ['Next.js 16', 'React 19', 'Prisma', 'NextAuth', 'TanStack Query', 'Cloudinary', 'shadcn/ui'],
    links: [
      { label: 'Live demo', url: 'https://content-broadcasting-system-mu.vercel.app' },
      { label: 'Source', url: 'https://github.com/Udman06/Content-Broadcasting-System' },
    ],
  },
  {
    title: 'AI-Powered Study Partner',
    summary:
      'A study platform that generates notes with AI, processes PDF content, answers questions through a chatbot and tracks student progress over time.',
    stack: ['PHP', 'Python', 'Matplotlib', 'HTML/CSS/JS'],
    links: [] as { label: string; url: string }[],
  },
];
