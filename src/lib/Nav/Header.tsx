import { sections } from "./sections";
import styled from "styled-components";
import NavButton from "./PageButton";

const HeaderContainer = styled.header`
  position: fixed;
  top: 1rem;
  left: 0;
  right: 0;
  height: 4rem;
  display: flex;
  justify-content: center;
`;

const HeaderContent = styled.div`
  height: 100%;
  border: solid 1px ${({ theme }) => theme.colors.secondary};
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;
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
          text="проекты"
          sectionId={sections.projects}
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
