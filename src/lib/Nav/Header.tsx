import { sections } from './sections';
import styled from 'styled-components';
import NavButton from './PageButton';

const HeaderContainer = styled.header`
  position: fixed;
  z-index: 100;
  inset: 0 0 auto;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  padding: 0 9rem 0 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.headerBackground};
  backdrop-filter: blur(18px);
  transition: background 0.25s ease, border-color 0.25s ease;
`;

const HeaderContent = styled.nav`
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent aria-label="Навигация по странице">
        <NavButton text="Обо мне" sectionId={sections.about} />
        <NavButton text="Работы" sectionId={sections.works} />
        <NavButton text="Достижения" sectionId={sections.achievements} />
        <NavButton text="Навыки" sectionId={sections.skills} />
        <NavButton text="Контакты" sectionId={sections.contacts} />
      </HeaderContent>
    </HeaderContainer>
  );
}
