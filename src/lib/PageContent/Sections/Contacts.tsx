import { AnimatedLi } from "@/lib/animations/appearanceAnimation";
import { AnimatedContainer } from "@/lib/animations/AnimatedContainer";
import styled, { useTheme } from "styled-components";
import githubSvg from '@/assets/github.svg'
import telegramSvg from '@/assets/telegram.svg'
import mailSvg from '@/assets/mail.svg'
import contactsLight from '@/assets/contactsLight.svg'
import contactsDark from '@/assets/contactsDark.svg'
import useWindowWidth from "@/lib/hooks/useWindowWidth";
import { useState } from "react";

const ContactContainer = styled(AnimatedContainer)`
  position: static;
  max-width: 800px;
  width: 100%;
  min-height: 400px;
  margin: 0 auto;

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

  border-radius: 1rem;

  font-weight: 600;
  transform: translateY(0);

  border-right: solid 5px #00000000 ;
  border-left: solid 5px #00000000;
`;

const Img = styled.img`
  height: 100%;
  background-color: #fff;
  border-radius: 1rem;
  padding: 2px;
`;

const HeaderImg = styled.img`
  height: 3rem;
  margin-top: 10px;
  @media (max-width: 600px) {
    height: 2rem;
    margin-top: 5px;
  }
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

const EmailContainer = styled.div`
  cursor: pointer;
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
  gap: 1rem;
  width: 100%; 
`;

const EmailText = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export default function() {
  const theme = useTheme();
  const width = useWindowWidth();
  const LiHover = {
    borderRight: `solid 5px ${theme.colors.additional}`,
    borderLeft: `solid 5px ${theme.colors.additional}`,
    y: -4,
  }
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      let text: string = 'demidsamylov@gmail.com';
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Сброс статуса через 2 секунды
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  };
  return (
    <ContactContainer>
      <h2>
        <HeaderImg src={theme.themeName === 'light' ? contactsLight : contactsDark } alt="" /> Мои контакты
      </h2>

      <Ul>
        <Li whileHover={LiHover}>
          <A href="https://github.com/DDISB" target="_blank">
            <Img src={githubSvg} alt="GitHab logo" />
            <TextWrapper>
              {width > 375 && <p>GitHab</p>}
              <p>github.com/DDISB</p>
            </TextWrapper>
          </A>
        </Li>

        <Li whileHover={LiHover}>
          <A href="https://t.me/DemidSamylov" target="_blank">
            <Img src={telegramSvg} alt="Telegram logo" ></Img>
            <TextWrapper>
              {width > 375 && <p>Telegram</p>}
              <p>t.me/DemidSamylov</p>
            </TextWrapper>
          </A>
        </Li>

        <Li whileHover={LiHover}>
          <EmailContainer onClick={handleCopy}>
            <Img src={mailSvg} alt="Mail logo" ></Img>
            <TextWrapper>
              {width > 375 && <p>Gmail</p>}
              <EmailText>
                <p>demidsamylov@gmail.com</p>
                {isCopied && <span style={{ marginLeft: '10px', color: 'green' }}>✓ Скопировано!</span>}
              </EmailText>
            </TextWrapper>
          </EmailContainer>
        </Li>
      </Ul>
    </ContactContainer>
  );
}