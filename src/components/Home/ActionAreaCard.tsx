import { description } from '../entertainmentData.ts';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/keyboard';
import { Scrollbar, Keyboard } from 'swiper/modules';
import styled from 'styled-components';
import {H2Dark, H3Dark, H4Dark, theme} from '../../styles/theme.ts';
import {SectionWrapper} from "../SectionWrapper.ts";
import {Link} from "react-router-dom";
import {FlexWrapper} from "../FlexWrapper.ts";

export default function ActionAreaCard() {
    return (
        <SectionWrapper>
            <H2Dark style={{marginBottom: '16px'}}>Развлечения</H2Dark>
            <FlexWrapper justify="space-between" style={{marginBottom: '12px'}}>
                <H4Dark>Отдых в нашем глэмпинге — это не только уют и комфорт, но и множество увлекательных развлечений на свежем воздухе! Вас ждут:</H4Dark>
                <StyledLink to="/entertainment">смотреть все</StyledLink>
            </FlexWrapper>

            <Swiper
                modules={[Scrollbar, Keyboard]}
                spaceBetween={36}
                scrollbar={{ draggable: true }}
                keyboard={{ enabled: true, onlyInViewport: true }}
                touchMoveStopPropagation={false}
                breakpoints={{
                    0: { slidesPerView: 1.2 },
                    600: { slidesPerView: 2.4 },
                    900: { slidesPerView: 3.4 },
                }}
            >
                {description.map((card) => (
                    <SwiperSlide key={card.id}>
                        <Card>
                            <Img src={card.img} alt={card.alt} />
                            <BottomContent>
                                <H3Dark>{card.title}</H3Dark>
                            </BottomContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SectionWrapper>
    );
}

const Card = styled.div`
    max-width: 380px;
    height: 340px;
    border-radius: 10px;
    border: 1px solid lightgray;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
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

const BottomContent = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const StyledLink = styled(Link)`
    color: ${theme.fontColor.main};
    display: flex;
    align-items: flex-end;
    font-size: 1rem;
    transition: 0.2s ease;
    
    &:hover{
        opacity: 0.5;
    }
`