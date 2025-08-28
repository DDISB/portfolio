import { AnimatedLi, AnimatedContainer} from "@/lib/animations/appearanceAnimation";
import styled, { useTheme } from "styled-components";
import workLight from '@/assets/workLight.svg'
import workDark from '@/assets/workDark.svg'
import brando from '@/img/brando.png'
import boldo from '@/img/boldo.png'

const ProjectsContainer = styled(AnimatedContainer)`
  position: static;
  max-width: 1200px;
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

  margin-top: 2rem;
`;

const LiLeft = styled(AnimatedLi)`
  min-height: 20rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 5px 5px 1rem #0000006b;

  border-radius: 1rem;
  padding: 1rem;

  font-weight: 600;
  transform: translateY(0);

  display: flex;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 1000px) {
    height: max-content;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const LiRight = styled(AnimatedLi)`
  min-height: 20rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 5px 5px 1rem #0000006b;

  border-radius: 1rem;
  padding: 1rem;

  font-weight: 600;
  transform: translateY(0);

  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 1000px) {
    height: max-content;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const HeaderImg = styled.img`
  margin-top: 5px;
  height: 3rem;
`;

const Img = styled.img`
  max-width: 60%;
  object-fit: contain;
  @media (max-width: 1000px) {
    height: max-content;
    max-width: 100%;
  }
`;

const DesciptionContainer = styled.div`
  flex-grow: 1;
  height: 100%;
  border-radius: 1rem;
  padding: 1rem;

  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
`;

const Desciption = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;

const LinkContainer = styled.div`
  width: 100%;
  border-radius: 1rem;
  height: 3rem;

  display: flex;
  align-items: center;
  gap: 3rem;

  :hover {
    transition:  0.3s all ease;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.additional};
  }
`;

const AButton = styled.a`
  height: 100%;
  width: 8rem;
  color: ${({ theme }) => theme.colors.text};

  border-radius: 1rem;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.additional};
  
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

const P = styled.p`
  padding-top: 1rem;
`

const ColoredP = styled.p`
  color: ${({ theme }) => theme.colors.additional};
`

export default function() {
  const theme = useTheme();
  const LiHover = {
    y: -4,
  }

  return (
    <ProjectsContainer>
      <h2>
        <HeaderImg src={theme.themeName === 'light' ? workLight : workDark} /> Мои работы
      </h2>

      <Ul>
        <LiLeft whileHover={LiHover}>
          <Img src={brando} alt="works-svg"></Img>
          <DesciptionContainer>
            <Desciption>
              <ColoredP>&mdash; Веб-приложение </ColoredP>
              <h3>Brando</h3>
              <P>"Brando" – веб-приложение, где пользователи выполняют задания от партнеров (квизы, челленджи, покупки) и зарабатывают очки. Очки повышают уровень, открывая новые бонусы: скидки, эксклюзивные товары или реальные призы. Есть карта бонусов и магазин призов</P>
            </Desciption>
            <LinkContainer>
              <AButton href="https://github.com/DDISB/Stainless-Hackathon/">GitHub</AButton>
              <AButton href="https://ddisb.github.io/Stainless-Hackathon/">Демо</AButton>
            </LinkContainer>
          </DesciptionContainer>
        </LiLeft>
        
        <LiRight whileHover={LiHover}>
          <Img src={boldo} alt="works-svg"></Img>
          <DesciptionContainer>
            <ColoredP>&mdash; Одностраничный лэндинг </ColoredP>
            <Desciption>
              <h3>Boldo </h3>
              <P>Boldo - это одностраничный лэндинг написанный и использованием HTML, CSS и JavaScript. Представляет собой страницу в строгом дизайне, а так же поддерживает адаптивную верстку для устройств с разным размером экранов.</P>
            </Desciption> 
            <LinkContainer>
              <AButton href="https://github.com/DDISB/Boldo.github.io">GitHub</AButton>
              <AButton href="https://ddisb.github.io/Boldo.github.io/">Демо</AButton>
            </LinkContainer>
          </DesciptionContainer>
        </LiRight>
      </Ul>
    </ProjectsContainer>
  );
}