export const sections = {
  about: 'about',
  works: 'works',
  achievements: 'achievements',
  skills: 'skills',
  contacts: 'contacts'
} as const;


export type SectionId = keyof typeof sections;