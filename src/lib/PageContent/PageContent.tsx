import { useRef } from 'react';
import { sections } from '../Nav/sections';
import styled from "styled-components";

const ContentContainer = styled.div`
  margin-top:  7rem;
`;

const Section = styled.section`
  padding-top: 7rem;
  margin-top: -7rem;
`

export default function PageContent() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  return (
    <ContentContainer>
      <Section ref={section1Ref}  id={sections.about}>
        <h2>about</h2>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> 
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </Section>

      <Section ref={section2Ref}  id={sections.projects}>
        <h2>projects</h2>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </Section>

      <Section ref={section2Ref}  id={sections.skills}>
        <h2>skills</h2>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </Section>

      <Section ref={section2Ref}  id={sections.contacts}>
        <h2>contacts</h2>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </Section>
    </ContentContainer>
  )
}