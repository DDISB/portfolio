import { sections } from "./sections";
import styled from "styled-components";
import NavButton from "./PageButton";

const HeaderContainer = styled.header`
  position: fixed;
  z-index: 100;
  top: 0rem;
  left: 0;
  right: 0;
  height: 4rem;
  
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  transition: all 0.4s ease;
  
  display: flex;
  justify-content: center;
  padding: 0 1rem;
`;

const HeaderContent = styled.div`
  min-height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default function Header() {
  
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavButton 
          text="обо мне" 
          sectionId={sections.about}
        />
        <NavButton 
          text="работы"
          sectionId={sections.works}
        />
        <NavButton 
          text="навыки"
          sectionId={sections.skills}
        />
        <NavButton 
          text="контакты"
          sectionId={sections.contacts}
        />
      </HeaderContent>
    </HeaderContainer>
  );
}
