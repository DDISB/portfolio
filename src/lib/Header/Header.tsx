import styled from "styled-components";
import NavButton from "./PageButton";

const HeaderContainer = styled.header`
  height: 4rem;
  margin: 1rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;
  border: solid 1px ${({ theme }) => theme.colors.contrast};
  background-color: ${({ theme }) => theme.colors.background};
`;

export default function Header() {
  return (
    <HeaderContainer>
      <NavButton 
        page="обо мне" 
      />
      <NavButton 
        page="проекты"
      />
      <NavButton 
        page="навыки"
      />
      <NavButton 
        page="контакты"
      />
    </HeaderContainer>
  );
}
