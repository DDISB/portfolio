import styled, { useTheme } from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: 5rem;
  margin: 5rem 0 auto;
  background-color: ${({ theme }) => theme.colors.secondary} ;
  box-shadow: 5px 5px 1rem #0000006b;
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

export default function Footer() {

  return (
    <FooterContainer>
      <ContentContainer>
        {/* <p>123 </p>  */}
        {/* <p>123 </p> */}
      </ContentContainer>
    </FooterContainer>
  )
}