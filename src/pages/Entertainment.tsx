import house1 from "../assets/Home/house1.jpg";
import {IntroSection} from "../components/IntroSection.tsx";
import {SectionWrapper} from "../components/SectionWrapper.ts";
import styled from "styled-components";
import {FlexWrapper} from "../components/FlexWrapper.ts";
import {H3Dark, P, Span} from "../styles/theme.ts";

const description = [
    {
        id: 1,
        img: '/src/assets/card1.png',
        alt: '',
        title: 'Прокат велосипедов',
        text: 'Отправьтесь в увлекательное путешествие по лесным тропам и живописным маршрутам на велосипеде. Прокат двухколесного транспорта — отличный способ активно провести время, наслаждаясь свежим воздухом и природными пейзажами.',
        price: 'от 300 / за человека',
    },

    {
        id: 2,
        img: '/src/assets/card2.png',
        alt: '',
        title: 'Баня с чаном',
        text: 'Расслабьтесь и восстановите силы в уютной бане с горячим чаном под открытым небом. Пар, аромат натурального дерева и теплая вода создадут атмосферу полного отдыха, а окружающая природа добавит ощущение гармонии и уединения.',
        price: 'от 3 000 / в сутки',
    },

    {
        id: 3,
        img: '/src/assets/card3.png',
        alt: '',
        title: 'Квадроциклы',
        text: 'Почувствуйте азарт и свободу, отправившись в захватывающую поездку на квадроцикле по лесным тропам. Это отличный способ получить яркие эмоции, исследовать живописные окрестности и насладиться драйвом активного отдыха.',
        price: 'от 1 500 / за человека',
    },

    {
        id: 4,
        img: '/src/assets/card4.png',
        alt: '',
        title: 'Катание на сапах',
        text: 'Исследуйте живописные окрестности с воды, наслаждаясь прогулкой на сапборде по спокойному озеру. Это отличный способ почувствовать единение с природой, расслабиться и провести время с удовольствием, скользя по глади воды под лучами солнца.',
        price: 'от 1 000 / за человека',
    },

    {
        id: 5,
        img: '/src/assets/card5.png',
        alt: '',
        title: 'Звёздные вечера',
        text: 'Откройте для себя красоту ночного неба, наблюдая за звездами и планетами через телескоп. Вдали от городских огней можно увидеть тысячи сияющих созвездий и почувствовать магию бескрайней вселенной.',
        price: 'бесплатно',
    },

];

function Entertainment() {
    return (
        <>
            <IntroSection
                src={house1}
                alt="Глэмпинг"
                title="отдых и развлечения"
                description="Окунитесь в атмосферу уюта и спокойствия, наслаждаясь отдыхом в окружении природы. Наш глэмпинг-отель создан для тех, кто ценит комфорт, но не хочет терять связь с природой."
            />

            <SectionWrapper>
                <FlexWrapper gap="clamp(16px, 5vw, 70px)" wrap="wrap" justify="center">
                    {description.map((item) => (
                        <Card>
                            <FlexWrapper direction="column" gap="20px" align="center">
                                <Img src={item.img} alt={item.alt}/>
                                <H3Dark>{item.title}</H3Dark>
                                <P lang="ru">{item.text}</P>
                                <Span>{item.price}</Span>
                            </FlexWrapper>
                        </Card>
                    ))}
                </FlexWrapper>
            </SectionWrapper>
        </>
    );
}

export default Entertainment;

const Card = styled.div`
    max-width: 380px;
    min-height: 500px;
    border-radius: 10px;
    border: 1px solid lightgray;
    padding: 10px;
`;

const Img = styled.img`
    border-radius: 10px;
    height: 250px;
`