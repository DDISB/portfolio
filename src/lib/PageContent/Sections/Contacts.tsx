import { AnimatedLi, AnimatedContainer} from "@/lib/animations/appearanceAnimation";
import { LiHover } from '@lib/animations/hoverAnimation';
import styled from "styled-components";
import githubSvg from '@/assets/github.svg'
import telegramSvg from '@/assets/telegram.svg'
import mailSvg from '@/assets/mail.svg'

const ContactContainer = styled(AnimatedContainer)`
  position: static;
  max-width: 800px;
  width: 100%;
  min-height: 400px;
  margin: 0 auto;

  padding: 2rem;
  border-radius: 1rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Ul = styled.ul`  
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  display: flex;
  align-items: center;

  margin-top: 2rem;
`;

const Li = styled(AnimatedLi)`
  height: 5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 5px 5px 1rem #0000006b;

  border-radius: 1rem;

  font-weight: 600;
  transform: translateY(0);
`;

const Img = styled.img`
  height: 100%;
  background-color: #fff;
  border-radius: 1rem;
  padding: 2px;
`;

const A = styled.a`
  width: 100%;
  height: 100%;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const DivA = styled.a`
  width: 100%;
  height: 100%;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; 
`;

export default function() {
  return (
    <ContactContainer>
      <h2> Мои контакты</h2>

      <Ul>
        <Li whileHover={LiHover}>
          <A href="https://github.com/DDISB">
            <Img src={githubSvg} alt="GitHab logo" />
            <TextWrapper>
              <p>GitHab</p>
              <p>github.com/DDISB</p>
            </TextWrapper>
          </A>
        </Li>

        <Li whileHover={LiHover}>
          <A href="https://t.me/DemidSamylov">
            <Img src={telegramSvg} alt="Telegram logo" ></Img>
            <TextWrapper>
              <p>Telegram</p>
              <p>t.me/DemidSamylov</p>
            </TextWrapper>
          </A>
        </Li>

        <Li whileHover={LiHover}>
          <DivA>
            <Img src={mailSvg} alt="Mail logo" ></Img>
            <TextWrapper>
              <p>Gmail</p>
              <p>demidsamylov@gmail.com</p>
            </TextWrapper>
          </DivA>
        </Li>
      </Ul>
    </ContactContainer>
  );
}