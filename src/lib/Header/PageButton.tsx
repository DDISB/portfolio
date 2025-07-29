import styled from "styled-components";


const StyledHeaderButton = styled.button`
  border: 0px;
  padding: 10px;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  /* background-color: ${({ theme }) => theme.colors.primary}; */
  
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

export default function NavBetton({ page }: {page: string}) {
  return (
  <StyledHeaderButton
  >
    {page}
  </StyledHeaderButton>
  )
}