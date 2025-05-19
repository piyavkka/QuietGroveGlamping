import house1 from "../assets/Home/house1.jpg";
import {IntroSection} from "../components/common/IntroSection.tsx";
import {SectionWrapper} from "../components/common/SectionWrapper.ts";
import styled from "styled-components";
import {FlexWrapper} from "../components/common/FlexWrapper.ts";
import {H3Dark, P, Span} from "../styles/theme.ts";
import { description } from '../components/Data/entertainmentData.ts';
import Overlay from "../components/common/Overlay.tsx";
import {useEffect, useState} from "react";
import {SliderComponent} from "../components/common/SliderComponent.tsx";
import {useLocation, useNavigate} from "react-router-dom";

function Entertainment() {

    const location = useLocation();
    const navigate = useNavigate();

    const [selectedCard, setSelectedCard] = useState<null | typeof description[0]>(null);

    useEffect(() => {
        const state = location.state as { cardId?: number } | null;

        if (state?.cardId) {
            const foundCard = description.find(card => card.id === state.cardId);
            if (foundCard) {
                setSelectedCard(foundCard);
                navigate('.', { replace: true });
            }
        }
    }, [location.state, navigate]);

    useEffect(() => {
        if (location.hash) {
            const anchorId = location.hash.replace('#', '');
            const el = document.getElementById(anchorId);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        }
    }, [location]);

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
                        <Card
                            key={card.id}
                            id={`card-${card.id}`}
                            onClick={() => setSelectedCard(card)}>
                            <FlexWrapper direction="column" gap="20px" align="center">
                                <Img src={card.img} alt={`Entertainment ${card.id}`}/>
                                <H3Dark>{card.title}</H3Dark>
                                <P lang="ru">{card.text}</P>
                                <Span>{card.price ? `от ${card.price} / за человека` : 'бесплатно'}</Span>
                            </FlexWrapper>
                        </Card>
                    ))}
                </FlexWrapper>
            </SectionWrapper>

            {selectedCard && (
                <Overlay onClose={() => setSelectedCard(null)}>
                    <SelectedCard>
                        <FlexWrapper direction="column" gap="20px" align="center">
                            <H3Dark>{selectedCard.title}</H3Dark>
                            <SliderComponent images={selectedCard.images} autoplay={false} height="250px"/>
                            <P lang="ru">{selectedCard.text}</P>
                            <P lang="ru">{selectedCard.description}</P>
                            <Span>{selectedCard.price ? `от ${selectedCard.price} / за человека` : 'бесплатно'}</Span>
                            <StyledP>*Только для гостей с действующим бронированием*</StyledP>
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
    padding: 16px;
    border-radius: 10px;
    cursor: pointer;
    background-color: white;
    max-width: 480px;
    width: min(480px, calc(100vw - 48px));
`;

const StyledP = styled(P)`
    color: gray;
    font-size: 14px;
`;