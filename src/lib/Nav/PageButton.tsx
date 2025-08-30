import styled from "styled-components";

interface Props {
  text: string;
  sectionId: string;
}

const StyledHeaderButton = styled.button`
    border: 0px;
    padding: 1rem 1rem;
    border-radius: 2rem;
    font-weight: 600;

    cursor: pointer;

    transform: translateY(0);
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      transform: translateY(-2px);
      transition: all 0.4s ease;
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
