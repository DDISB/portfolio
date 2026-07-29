export const sections = {
  about: 'about',
  achievements: 'achievements',
  skills: 'skills',
  contacts: 'contacts'
} as const;


export type SectionId = keyof typeof sections;