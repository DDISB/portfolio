import styled from "styled-components";
import { type PageContextType, type Pages } from "@/context/PageContext";


const StyledHeaderButton = styled.button`
  border: 0px;
  padding: 10px;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.5s ease;
  background-color: ${({ theme }) => theme.colors.primary};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }
  
  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
    opacity: 1;
  }
`;

interface NavButtonProps extends PageContextType{
  page: Pages;
}

export default function NavBetton({ page, currentPage, setCurrentPage }: NavButtonProps) {
  return (
  <StyledHeaderButton
    onClick={() => setCurrentPage(page)}
    disabled={currentPage === page}
  >
    {page}
  </StyledHeaderButton>
  )
}