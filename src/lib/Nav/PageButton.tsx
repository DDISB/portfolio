import styled from 'styled-components';

interface Props { text: string; sectionId: string; }

const StyledHeaderButton = styled.button`
  padding: 0.65rem 1rem;
  border: 1px solid transparent;
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.9rem;
  font-weight: 650;
  transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.accentSoft};
    transform: translateY(-1px);
  }
`;

export default function NavButton({ text, sectionId }: Props) {
  const scrollToSection = () => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  return <StyledHeaderButton onClick={scrollToSection}>{text}</StyledHeaderButton>;
}
