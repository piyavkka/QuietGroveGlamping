import HousesBg from "../assets/HousesBg.jpg";
import { IntroSection } from "../components/common/IntroSection.tsx";
import {VerticalImageSlider} from "../components/common/VerticalImageSlider.tsx";
import {SectionWrapper} from "../components/common/SectionWrapper.ts";
import {FlexWrapper} from "../components/common/FlexWrapper.ts";
import {P, Span, H3Dark} from "../styles/theme.ts";
import AccordionUsage from "../components/AccordionUsage.tsx";
import styled from "styled-components";
import {housesData} from "../components/Data/housesData.ts";

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
`;