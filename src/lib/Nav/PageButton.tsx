import styled from "styled-components";

interface Props {
  text: string;
  sectionId: string;
}

const StyledHeaderButton = styled.button`
    border: 0px;
    padding: 1rem 1rem;
    border-radius: 2rem;
    cursor: pointer;
    transition: all 0.5s ease;

    transform: translateY(0);
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      transform: translateY(-2px);
    }
  `;

export default function NavButton({ text, sectionId }: Props) {
  

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
  <StyledHeaderButton onClick={() => scrollToSection(sectionId)}>
    {text}
  </StyledHeaderButton>
  )
}
