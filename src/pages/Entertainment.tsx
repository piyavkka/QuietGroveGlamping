import house1 from "../assets/Home/house1.jpg";
import {IntroSection} from "../components/IntroSection.tsx";
import {SectionWrapper} from "../components/common/SectionWrapper.ts";
import styled from "styled-components";
import {FlexWrapper} from "../components/common/FlexWrapper.ts";
import {H3Dark, P, Span} from "../styles/theme.ts";
import { description } from '../components/entertainmentData.ts';
import Overlay from "../components/common/Overlay.tsx";
import {useState} from "react";

function Entertainment() {

    const [selectedCard, setSelectedCard] = useState<null | typeof description[0]>(null);

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
                    {description.map((card) => (
                        <Card key={card.id} onClick={() => setSelectedCard(card)}>
                            <FlexWrapper direction="column" gap="20px" align="center">
                                <Img src={card.img} alt={card.alt}/>
                                <H3Dark>{card.title}</H3Dark>
                                <P lang="ru">{card.text}</P>
                                <Span>{card.price}</Span>
                            </FlexWrapper>
                        </Card>
                    ))}
                </FlexWrapper>
            </SectionWrapper>

            {selectedCard && (
                <Overlay onClose={() => setSelectedCard(null)}>
                    <SelectedCard>
                        <FlexWrapper direction="column" gap="20px" align="center">
                            <Img src={selectedCard.img} alt={selectedCard.alt}/>
                            <H3Dark>{selectedCard.title}</H3Dark>
                            <P lang="ru">{selectedCard.text}</P>
                            <Span>{selectedCard.price}</Span>
                        </FlexWrapper>
                    </SelectedCard>
                </Overlay>
            )}
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
    cursor: pointer;
    transition: transform 0.2s ease;
    background-color: white;

    &:hover {
        transform: scale(1.02);
    }
`;

const Img = styled.img`
    border-radius: 10px;
    height: 250px;
`;

const SelectedCard = styled.div`
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    background-color: white;
    max-width: 480px;
    height: 680px;
`;