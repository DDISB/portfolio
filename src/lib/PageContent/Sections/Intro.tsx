import { AnimatedContainer } from "@/lib/animations/AnimatedContainer";
import { BackgroundBeams } from "@/lib/components/ui/background-beams";
import styled from "styled-components";
import useWindowWidth from '@lib/hooks/useWindowWidth';

const IntroContainer = styled(AnimatedContainer)`
  /* position: static; */
  min-height: 90vh;  
  width: 100%;

  margin: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BackgroundBeamsContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export default function() {
  const width = useWindowWidth();

  return (
    <IntroContainer>
      <h1>Привет, я Демид Самылов</h1>
      <BackgroundBeamsContainer>
        {width > 1000 && <BackgroundBeams/>}
      </BackgroundBeamsContainer>
    </IntroContainer>
  );
}