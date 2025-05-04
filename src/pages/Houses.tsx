import HousesBg from "../assets/HousesBg.png";
import { IntroSection } from "../components/IntroSection";
import {VerticalImageSlider} from "../components/VerticalImageSlider.tsx";
import {SectionWrapper} from "../components/SectionWrapper.ts";
import {FlexWrapper} from "../components/FlexWrapper.ts";
import {P, Span, H3Dark} from "../styles/theme.ts";
import AccordionUsage from "../components/AccordionUsage.tsx";
import styled from "styled-components";

const housesData = [
    {
        id: 1,
        title: "Барнхаус",
        description: "Современный просторный барнхаус с панорамными окнами и стильным минималистичным дизайном. В доме высокие потолки, большая гостиная с камином, полностью оборудованная кухня и уютные спальни. Просторная терраса с зоной отдыха и грилем идеально подходит для вечерних посиделок. Идеальный вариант для тех, кто ценит комфорт и природу.",
        images: [
            {src: "/src/assets/Houses/houses1.jpg", alt: ""},
            {src: "/src/assets/Houses/houses2.jpg", alt: ""},
            {src: "/src/assets/Houses/houses3.jpg", alt: ""},
            {src: "/src/assets/Houses/houses4.jpg", alt: ""},
            {src: "/src/assets/Houses/houses5.jpg", alt: ""},
            {src: "/src/assets/Houses/houses6.jpg", alt: ""},
            {src: "/src/assets/Houses/houses7.jpg", alt: ""},
        ],
        timeFirst: "14:00",
        timeSecond: "11:00",
        people: "15",
        cost: "15 000",
    },

    {
        id: 2,
        title: "Коттедж",
        description: "Компактный, но невероятно уютный домик для двоих или небольшой семьи. Внутри — тёплый скандинавский интерьер, кухня с основными удобствами, мягкая кровать и панорамные окна с видом на лес. Отличный выбор для тех, кто хочет насладиться тишиной, уединением и природой без потери комфорта. ",
        images: [
            {src: "/src/assets/Houses/houses8.jpg", alt: ""},
            {src: "/src/assets/Houses/houses9.jpg", alt: ""},
            {src: "/src/assets/Houses/houses10.jpg", alt: ""},
            {src: "/src/assets/Houses/houses11.jpg", alt: ""},
            {src: "/src/assets/Houses/houses12.jpg", alt: ""},
            {src: "/src/assets/Houses/houses13.jpg", alt: ""},
            {src: "/src/assets/Houses/houses14.jpg", alt: ""},
        ],
        timeFirst: "14:00",
        timeSecond: "11:00",
        people: "8",
        cost: "10 000",
    },

    {
        id: 3,
        title: "Глэмпинг",
        description: "Атмосферный палатка-домик для любителей глэмпинга. Просторное и стильное пространство с кроватью, мягкими пледами и панорамными видами на природу. Вечером можно любоваться звёздным небом прямо из окна или с уютной террасы. Этот вариант идеально подойдёт для романтического уик-энда или отдыха наедине с природой.",
        images: [
            {src: "/src/assets/Houses/houses15.jpg", alt: ""},
            {src: "/src/assets/Houses/houses16.jpg", alt: ""},
            {src: "/src/assets/Houses/houses17.jpg", alt: ""},
            {src: "/src/assets/Houses/houses18.jpg", alt: ""},
            {src: "/src/assets/Houses/houses19.jpg", alt: ""},
            {src: "/src/assets/Houses/houses20.jpg", alt: ""},
            {src: "/src/assets/Houses/houses21.jpg", alt: ""},
        ],
        timeFirst: "14:00",
        timeSecond: "11:00",
        people: "4",
        cost: "8 000",
    },
];

function Houses() {
    return (
        <>
            <IntroSection
                src={HousesBg}
                alt="Глэмпинг"
                title="наши домики"
                description="Наш глэмпинг-отель сочетает уют, стиль и полное погружение в природу. Гостей ждут три уникальных варианта размещения, каждый из которых создан для комфортного отдыха."
            />
            <SectionWrapper>
                <FlexWrapper direction="column" gap="70px">
                    {housesData.map(({ id, title, description, images, timeFirst, timeSecond, people, cost }) => (
                    <VerticalImageSlider
                        key={id}
                        images={images}
                        title={title}
                        description={description}
                        buttonText="Выбрать даты"
                        visibleCount={4}
                        mainImageSize={{ width: 600, height: 500 }}
                        previewSize={{ width: 80, height: 80 }}
                    >
                        <P>Заезд после {timeFirst}<br/>Выезд до {timeSecond}</P>
                        <P>Вместимость до {people} человек</P>
                        <Span>от {cost} / в сутки</Span>
                    </VerticalImageSlider>
                    ))}

                    <FlexWrapper direction="column" gap="20px">
                        <StyledH3Dark>Часто задаваемые вопросы</StyledH3Dark>
                        <AccordionUsage/>
                    </FlexWrapper>
                </FlexWrapper>
            </SectionWrapper>
        </>
    );
}

export default Houses;

const StyledH3Dark = styled(H3Dark)`
    @media (max-width: 768px) {
        text-align: center;
    }
`