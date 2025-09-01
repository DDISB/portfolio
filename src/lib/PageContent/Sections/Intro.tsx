import { AnimatedContainer } from "@/lib/animations/AnimatedContainer";
import styled from "styled-components";
import useWindowWidth from '@lib/hooks/useWindowWidth';
import Silk from "@/lib/components/ui/Silk";

const IntroContainer = styled(AnimatedContainer)`
  position: relative;
  min-height: 100vh;
  width: 100%;

  margin-top: -7rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BackgroundBeamsContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  overflow: 'hidden';
  top: 0;
  left: 0;
  z-index: 0;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const H1 = styled.h1`
  z-index: 10;
  color: white;
  text-align: center;
  padding: 1rem;
`;

export default function() {
  const width = useWindowWidth();

  return (
    <IntroContainer>
      <H1>Привет, я Демид Самылов</H1>
      <BackgroundBeamsContainer>
        <Wrapper>
          {width > 600 &&
            <Silk
              speed={3}
              scale={1}
              color="#514f60"
              noiseIntensity={0.1}
              rotation={0}
            />
          }
          {width < 600 &&
            <Silk
              speed={3}
              scale={0.8}
              color="#514f60"
              noiseIntensity={0.1}
              rotation={0}
            />
          }
        </Wrapper>
      </BackgroundBeamsContainer>
    </IntroContainer>
  );
}