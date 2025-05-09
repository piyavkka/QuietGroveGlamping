import {description} from '../entertainmentData.ts';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/keyboard';
import {Scrollbar, Keyboard} from 'swiper/modules';
import styled from 'styled-components';
import {H2Dark, H3Dark, H4Dark, theme} from '../../styles/theme.ts';
import {SectionWrapper} from "../common/SectionWrapper.ts";
import {Link} from "react-router-dom";
import {FlexWrapper} from "../common/FlexWrapper.ts";

import {  useNavigate } from "react-router-dom";

export default function ActionAreaCard() {

    const navigate = useNavigate();

    return (
        <section>
            <SectionWrapper>
                <H2Dark style={{marginBottom: '16px'}}>Развлечения</H2Dark>
                <FlexWrapper justify="space-between" gap="12px" wrap="wrap">
                    <H4Dark>Отдых в нашем глэмпинге — это не только уют и комфорт, но и множество увлекательных развлечений
                        на свежем воздухе! Вас ждут:</H4Dark>
                    <StyledLink to="/entertainment">смотреть все</StyledLink>
                </FlexWrapper>

                <Swiper
                    modules={[Scrollbar, Keyboard]}
                    spaceBetween={24}
                    scrollbar={{draggable: true}}
                    keyboard={{enabled: true, onlyInViewport: true}}
                    touchMoveStopPropagation={false}
                    slidesPerView="auto"
                    centeredSlides={false}
                    style={{padding: "16px 0"}}
                >

                    {description.map((card) => (
                        <SwiperSlideStyled>
                            <Card key={card.id} onClick={() => navigate(`/entertainment`)}>
                                <Img src={card.img} alt={card.alt} />
                                <H3Dark>{card.title}</H3Dark>
                            </Card>
                        </SwiperSlideStyled>
                    ))}
                </Swiper>
            </SectionWrapper>
        </section>
    );
}

const SwiperSlideStyled = styled(SwiperSlide)`
    width: 300px;
    display: flex;
    justify-content: center;
`;

const Card = styled.div`
    width: 100%;
    height: 320px;
    border-radius: 10px;
    border: 1px solid lightgray;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 12px;
    transition: 0.2s ease;
    padding: 10px 10px 0 10px;

    &:hover {
        background-color: #f0f0f0;
    }
`

const Img = styled.img`
    border-radius: 10px;
    height: 250px;
`

const StyledLink = styled(Link)`
    color: ${theme.fontColor.main};
    display: flex;
    align-items: flex-end;
    font-size: 1rem;
    transition: 0.2s ease;

    &:hover {
        opacity: 0.5;
    }
`