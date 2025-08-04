import styled from "styled-components";

const ProjectsContainer = styled.div`
  /* position: static; */
  max-width: 800px;
  width: 100%;
  min-height: 400px;
  /* margin: 0 auto;  */

  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 1rem;
  border-radius: 1rem;
`;

export default function() {


  return (
    <ProjectsContainer>
      132
    </ProjectsContainer>
  );
}