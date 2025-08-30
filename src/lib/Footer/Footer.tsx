import styled, { useTheme } from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 5rem;
  margin: 5rem auto 0;
  border-top: 1px solid ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 800px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const P = styled.p`
font-weight: 600;
`

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <ContentContainer>
      <P>&#169; {year} / Демид Самылов</P>
      </ContentContainer>
    </FooterContainer>
  )
}