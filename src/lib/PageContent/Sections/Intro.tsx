import { AnimatedContainer } from "@/lib/animations/AnimatedContainer";
import styled from "styled-components";
import useWindowWidth from '@lib/hooks/useWindowWidth';
import Dither from "@/lib/components/ui/Dither";

const IntroContainer = styled(AnimatedContainer)`
  position: relative;
  min-height: 100vh;
  width: 100%;

  margin-top: -7rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* z-index: 0; */
`;

const BackgroundBeamsContainer = styled.div`
  width: 100%;
  height: 100vh;
  /* height: 100vh; */
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
  /* z-index: 1; */
`;

const H1 = styled.h1`
  z-index: 10;
  color: white;
`;

const H1Mobile = styled.h1`
  z-index: 10;
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem;
`;

export default function() {
  const width = useWindowWidth();

  return (
    <IntroContainer>
      {width > 600 && <H1>Привет, я Демид Самылов</H1>}
      {width < 600 && <H1Mobile>Привет, я Демид Самылов</H1Mobile>}
      <BackgroundBeamsContainer>
        <Wrapper>
          {width > 600 &&
            <Dither
              waveColor={[0.5, 0.5, 0.5]}
              disableAnimation={false}
              enableMouseInteraction={false}
              mouseRadius={0.9}
              colorNum={40}
              waveAmplitude={0.35}
              waveFrequency={3}
              waveSpeed={0.05}
            />
          }
        </Wrapper>
      </BackgroundBeamsContainer>
    </IntroContainer>
  );
}