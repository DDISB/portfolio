export const sections = {
  about: 'about',
  projects: 'projects',
  skills: 'skills',
  contacts: 'contacts'
} as const;


export type SectionId = keyof typeof sections;