import { useRef } from "react";
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import { SectionWrapper } from "../common/SectionWrapper.ts";
import { H1 } from "../../styles/theme.ts";
import { FlexWrapper } from "../common/FlexWrapper.ts";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const images = [
    "/src/assets/Home/house1.jpg",
    "/src/assets/Home/house2.jpg",
    "/src/assets/Home/house3.jpg",
    "/src/assets/Home/house4.jpg",
    "/src/assets/Home/house5.jpg",
];

export const Slider = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section>
            <SectionWrapper>
                <FlexWrapper direction="column" align="center">
                    <H1>Тихая роща - идеальное место для отдыха на природе, вдали от городской суеты</H1>
                    <SliderWrapper>
                        <ArrowButton
                            className="prev"
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            <ArrowBackIosNewIcon fontSize="small"/>
                        </ArrowButton>
                        <StyledSwiper
                            modules={[Autoplay, Pagination, Keyboard]}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 5000 }}
                            keyboard={{ enabled: true }}
                            loop={true}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                        >
                            {images.map((src, index) => (
                                <SwiperSlide key={index}>
                                    <img src={src} alt={`Slide ${index + 1}`} />
                                </SwiperSlide>
                            ))}
                        </StyledSwiper>
                        <ArrowButton
                            className="next"
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            <ArrowForwardIosIcon fontSize="small"/>
                        </ArrowButton>
                    </SliderWrapper>
                </FlexWrapper>
            </SectionWrapper>
        </section>

    );
};

const StyledSwiper = styled(Swiper)`
    width: 100%;
    height: 600px;
    border-radius: 10px;
    position: relative;

    .swiper-pagination-bullets {
        bottom: 10px;
    }

    .swiper-pagination-bullet {
        background-color: white;
        opacity: 0.6;
        transition: transform 0.3s ease, opacity 0.3s ease;
    }

    .swiper-pagination-bullet:hover {
        transform: scale(1.3);
        opacity: 1;
    }

    .swiper-pagination-bullet-active {
        background-color: white;
        opacity: 1;
        transform: scale(1.4);
    }

    @media (max-width: 768px) {
        height: 200px;
    }
`;

const SliderWrapper = styled.div`
    position: relative;
    width: 100%;

    &:hover button {
        opacity: 1;
    }
`;

const ArrowButton = styled.button<{ disabled?: boolean }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background: var(--main-color);
    color: var(--light-text-color);
    border-radius: 50%;
    padding: 10px;
    width: 40px;
    height: 40px;
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
    opacity: 0;
    transition: opacity 0.3s, background-color 0.2s;

    &:hover {
        background-color: var(--accent-color);
    }

    &.prev {
        left: 10px;
    }

    &.next {
        right: 10px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;
