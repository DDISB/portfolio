import { sections } from '../Nav/sections';
import { Intro, About, Achievements, Skills, Contacts } from './Sections';
import styled from 'styled-components';

const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Section = styled.section`
  width: 100%;
  padding: clamp(4.5rem, 9vw, 4rem) clamp(1rem, 4vw, 2rem);
  scroll-margin-top: 4rem;
`;

export default function PageContent() {
  return (
    <ContentContainer>
      <Section><Intro /></Section>
      <Section id={sections.about}><About /></Section>
      <Section id={sections.achievements}><Achievements /></Section>
      <Section id={sections.skills}><Skills /></Section>
      <Section id={sections.contacts}><Contacts /></Section>
    </ContentContainer>
  );
}
