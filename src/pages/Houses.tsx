import HousesBg from "../assets/HousesBg.png";
import { IntroSection } from "../components/IntroSection";
import {VerticalImageSlider} from "../components/VerticalImageSlider.tsx";
import {SectionWrapper} from "../components/common/SectionWrapper.ts";
import {FlexWrapper} from "../components/common/FlexWrapper.ts";
import {P, Span, H3Dark} from "../styles/theme.ts";
import AccordionUsage from "../components/AccordionUsage.tsx";
import styled from "styled-components";

const housesData = [
    {
        id: 1,
        title: "Барнхаус",
        description: "Современный просторный барнхаус с панорамными окнами и стильным минималистичным дизайном. В доме высокие потолки, большая гостиная с камином, полностью оборудованная кухня и уютные спальни. Просторная терраса с зоной отдыха и грилем идеально подходит для вечерних посиделок. Идеальный вариант для тех, кто ценит комфорт и природу. Барнхаус подойдёт как для спокойного отдыха, так и для активных встреч с друзьями. Отдельный вход и уединённое расположение обеспечат вам полную приватность.",
        images: [
            "https://res.cloudinary.com/dxmp5yjmb/image/upload/v1747237710/houses1_ebawfo.webp",
            "https://res.cloudinary.com/dxmp5yjmb/image/upload/v1747237713/houses2_bf7pwd.webp",
            "https://res.cloudinary.com/dxmp5yjmb/image/upload/v1747237717/houses3_gm0gt8.webp",
            "https://res.cloudinary.com/dxmp5yjmb/image/upload/v1747237721/houses4_e3r3u0.webp",
            "https://res.cloudinary.com/dxmp5yjmb/image/upload/v1747237725/houses5_jeo2of.webp",
            "https://res.cloudinary.com/dxmp5yjmb/image/upload/v1747237729/houses6_nq36fr.webp",
            "https://res.cloudinary.com/dxmp5yjmb/image/upload/v1747237733/houses7_f1yirp.webp",
        ],
        timeFirst: "14:00",
        timeSecond: "11:00",
        people: "15",
        cost: "15 000",
    },
    {
        id: 2,
        title: "Коттедж",
        description: "Компактный, но невероятно уютный домик для двоих или небольшой семьи. Внутри — тёплый скандинавский интерьер, кухня с основными удобствами, мягкая кровать и панорамные окна с видом на лес. Отличный выбор для тех, кто хочет насладиться тишиной, уединением и природой без потери комфорта. Утренний туман над лесом и аромат свежесваренного кофе создают по-настоящему сказочную атмосферу. Идеален для отдыха в любое время года — летом, зимой или в межсезонье.",
        images: [
            "https://res.cloudinary.com/dxmp5yjmb/image/upload/v1747237737/houses8_pbv273.jpg",
            "https://res.cloudinary.com/dxmp5yjmb/image/upload/v1747237741/houses9_ps5srq.jpg",
            "https://res.cloudinary.com/dxmp5yjmb/image/upload/v1747237744/houses10_h0tbfx.jpg",
            "https://res.cloudinary.com/dxmp5yjmb/image/upload/v1747237748/houses11_ut4w0a.webp",
            "https://res.cloudinary.com/dxmp5yjmb/image/upload/v1747237753/houses12_w8zrhm.webp",
            "https://res.cloudinary.com/dxmp5yjmb/image/upload/v1747237757/houses13_saqqkd.jpg",
            "https://res.cloudinary.com/dxmp5yjmb/image/upload/v1747237761/houses14_ddnkpm.jpg",
        ],
        timeFirst: "14:00",
        timeSecond: "11:00",
        people: "8",
        cost: "10 000",
    },
    {
        id: 3,
        title: "Глэмпинг",
        description: "Атмосферный палатка-домик для любителей глэмпинга. Просторное и стильное пространство с кроватью, мягкими пледами и панорамными видами на природу. Вечером можно любоваться звёздным небом прямо из окна или с уютной террасы. Этот вариант идеально подойдёт для романтического уик-энда или отдыха наедине с природой. В доме предусмотрено всё необходимое для комфортного проживания даже в прохладные вечера. Вдали от городской суеты вы сможете полностью перезагрузиться и отдохнуть душой.",
        images: [
            "https://res.cloudinary.com/dxmp5yjmb/image/upload/v1747237765/houses15_djgvjf.webp",
            "https://res.cloudinary.com/dxmp5yjmb/image/upload/v1747237769/houses16_pidmjw.webp",
            "https://res.cloudinary.com/dxmp5yjmb/image/upload/v1747237774/houses17_dunsk0.webp",
            "https://res.cloudinary.com/dxmp5yjmb/image/upload/v1747237778/houses18_hhzgu4.webp",
            "https://res.cloudinary.com/dxmp5yjmb/image/upload/v1747237782/houses19_n6elki.webp",
            "https://res.cloudinary.com/dxmp5yjmb/image/upload/v1747237786/houses20_wlqvn9.webp",
            "https://res.cloudinary.com/dxmp5yjmb/image/upload/v1747237791/houses21_jka7ue.webp",
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