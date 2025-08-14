import styled from "styled-components";

const IntroContainer = styled.div`
  min-height: 90vh;  
  width: 100%;

  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function() {
  return (
    <IntroContainer>
      <h1>Привет, я Самылов Демид</h1>
    </IntroContainer>
  );
}