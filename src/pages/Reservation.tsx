import {SectionWrapper} from "../components/common/SectionWrapper.ts";
import styled from "styled-components";
import {useState} from "react";
import {H3Dark, P, Span, theme} from "../styles/theme.ts";
import {FlexWrapper} from "../components/common/FlexWrapper.ts";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {housesData} from "../components/Data/housesData.ts";
import {SliderComponent} from "../components/common/SliderComponent.tsx";
import {Button} from "../components/common/Button.tsx";
import ResPageForm from "../components/ResPageForm.tsx";

export default function Reservation(){
    const [page, setPage] = useState<number>(0);
    const [selectedHouse, setSelectedHouse] = useState<number | null>(null);

    const handlePrev = () => setPage((p) => Math.max(0, p - 1));
    const handleNext = () => setPage((p) => Math.min(3, p + 1));

    const pageTitles = [
        "Выберите домик",
        "Баня и чан",
        "Развлечения",
        "Контакты",
    ];

    return(
        <>
            <SectionWrapper>
                <ResPageForm/>
                <Wrapper>
                    <FlexWrapper justify="space-between" gap="24px" align="center">
                        <NavArrowButton onClick={handlePrev} disabled={page === 0}>
                            <ArrowBackIosNewIcon /> Назад
                        </NavArrowButton>

                        <P>{pageTitles[page]}</P>

                        <NavArrowButton onClick={handleNext} disabled={page === pageTitles.length - 1}>
                            Вперёд <ArrowForwardIosIcon />
                        </NavArrowButton>
                    </FlexWrapper>

                    <ContentWrapper>
                        {page === 0 && (
                            <FlexWrapper
                                justify="space-between"
                                gap="24px"
                                wrap="wrap"
                            >
                                {housesData.map(
                                    ({ id, title, images, timeFirst, timeSecond, people, cost }) => (
                                        <CardHouse
                                            key={id}
                                            direction="column"
                                            gap="14px"
                                            align="center"
                                            selected={selectedHouse === id}
                                        >
                                            <H3Dark>{title}</H3Dark>
                                            <SliderComponent
                                                images={images}
                                                autoplay={false}
                                                height="250px"
                                            />
                                            <List>
                                                <li>Заезд после {timeFirst}</li>
                                                <li>Выезд до {timeSecond}</li>
                                                <li>Вместимость до {people} человек</li>
                                            </List>
                                            <Span>от {cost} / в сутки</Span>
                                            {selectedHouse !== id && (
                                                <Button onClick={() => setSelectedHouse(id)}>
                                                    выбрать
                                                </Button>
                                            )}
                                        </CardHouse>
                                    )
                                )}
                            </FlexWrapper>
                        )}

                        {page === 1 && (
                            <FlexWrapper>
                                <P>Здесь будет информация о бане</P>
                            </FlexWrapper>
                        )}

                        {page === 2 && (
                            <FlexWrapper>
                                <P>Здесь будут развлечения для гостей</P>
                            </FlexWrapper>
                        )}

                        {page === 3 && (
                            <FlexWrapper>
                                <P>Здесь будут контактные данные</P>
                            </FlexWrapper>
                        )}
                    </ContentWrapper>
                </Wrapper>
            </SectionWrapper>
        </>
    );
}

const Wrapper = styled.div`
    width: 100%;
    margin-top: 12px;
    padding: 14px 24px;
    border-radius: 10px;
    background-color: var(--light-elem-color);
    border: 1px solid var(--light-text-color);
`;

const ContentWrapper = styled.div`
  margin-top: 14px;
`;

const CardHouse = styled(FlexWrapper)<{ selected?: boolean }>`
    width: min(380px, calc(100vw - 112px));
    max-width: 380px;
    border-radius: 10px;
    border: ${({selected}) =>
            selected ? "1px solid var(--main-color)" : "1px solid var(--light-text-color)"};
    padding: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: var(--white-color);

    &:hover {
        transform: ${({selected}) => (selected ? "none" : "scale(1.02)")};
    }
`;

const List = styled.ul`
    list-style-type: disc;
    padding-left: 14px;
    color: inherit;
    text-align: left;
    li {
        margin-bottom: 8px;
        color: ${theme.fontColor.main};
        font-size: ${theme.fontSize.P};
    }
`;

const NavArrowButton = styled(Button)`
    display: flex;
    align-items: center;
    gap: 2px;
    width: fit-content;
    padding: 8px 10px;
    text-transform: lowercase;
    color: ${theme.fontColor.main};
    background-color: var(--light-text-color);
    
    opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
    pointer-events: ${({ disabled }) => (disabled ? "none" : "pointer")};

    &:hover {
        background-color: var(--elem-color);
    }
`;