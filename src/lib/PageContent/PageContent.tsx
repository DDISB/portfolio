import { useRef } from 'react';
import { sections } from '../Nav/sections';
import { Intro, About, Works, Skills, Contacts } from './Sections';
import styled from "styled-components";

const ContentContainer = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
  width: 100%;
`;

const Section = styled.section`
  padding: 1rem;
  padding-top: 7rem;
  margin-top: -7rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export default function PageContent() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  return (
    <ContentContainer>
      <Section>
        <Intro />
      </Section>

      <Section ref={section1Ref}  id={sections.about}>
        <About />
      </Section>

      <Section ref={section2Ref}  id={sections.works}>
        <Works />
      </Section>

      <Section ref={section2Ref}  id={sections.skills}>
        <Skills />
      </Section>

      <Section ref={section2Ref}  id={sections.contacts}>
        <Contacts />
      </Section> 
    </ContentContainer>
  )
}