import house1 from "../assets/Home/house1.jpg";
import {IntroSection} from "../components/IntroSection.tsx";
import {SectionWrapper} from "../components/SectionWrapper.ts";
import styled from "styled-components";
import {FlexWrapper} from "../components/FlexWrapper.ts";
import {H3Dark, P, Span} from "../styles/theme.ts";
import { description } from '../components/entertainmentData.ts';

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