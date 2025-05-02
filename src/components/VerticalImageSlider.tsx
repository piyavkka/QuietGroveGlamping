import React, {useEffect, useState} from "react";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {ArrowForwardIos} from "@mui/icons-material";
import {FlexWrapper} from "./FlexWrapper";
import {H3Dark, P, theme} from "../styles/theme";
import {Button} from "./Button";

interface VerticalImageSliderProps {
    images: {
        src: string;
        alt: string;
    }[];
    title: string;
    description: string;
    buttonText?: string;
    visibleCount?: number;
    mainImageSize?: {
        width: number;
        height: number;
    };
    previewSize?: {
        width: number;
        height: number;
    };

    children?: React.ReactNode;
}

export const VerticalImageSlider: React.FC<VerticalImageSliderProps> = (
    {
        images,
        title,
        description,
        buttonText = "подробнее",
        visibleCount = 2,
        mainImageSize,
        previewSize,
        children,
    }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [startIndex, setStartIndex] = useState(0);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const canScrollUp = isMobile ? currentIndex > 0 : startIndex > 0;
    const canScrollDown = isMobile ? currentIndex < images.length - 1 : startIndex + visibleCount < images.length;


    const handleScrollUp = () => {
        if (isMobile) {
            setCurrentIndex(prev => Math.max(prev - 1, 0));
        } else {
            setStartIndex(prev => Math.max(prev - 1, 0));
        }
    };

    const handleScrollDown = () => {
        if (isMobile) {
            setCurrentIndex(prev => Math.min(prev + 1, images.length - 1));
        } else {
            setStartIndex(prev => {
                const maxStartIndex = images.length - visibleCount;
                return Math.min(prev + 1, maxStartIndex);
            });
        }
    };


    const handleSelectImage = (index: number) => setCurrentIndex(index);

    const visiblePreviews = images.slice(startIndex, startIndex + visibleCount);

    return (
        <>
            {isMobile ? (
                //МОБИЛЬНАЯ ВЕРСИЯ
                <FlexWrapper direction="column" gap={theme.gap.small} align="center">
                    <MainImage src={images[currentIndex].src} alt={images[currentIndex].alt}/>

                    <FlexWrapper justify="center" gap={theme.gap.small}>
                        <ArrowButton onClick={handleScrollUp} disabled={currentIndex === 0}>
                            <ArrowBackIosNewIcon fontSize="small"/>
                        </ArrowButton>

                        <ArrowButton onClick={handleScrollDown} disabled={currentIndex === images.length - 1}>
                            <ArrowForwardIos fontSize="small"/>
                        </ArrowButton>
                    </FlexWrapper>

                    <FlexWrapper direction="column" gap={theme.gap.small} align="center">
                        <H3Dark>{title}</H3Dark>
                        <StyledP style={{textAlign: "center"}}>{description}</StyledP>
                        <Button>{buttonText}</Button>
                    </FlexWrapper>
                </FlexWrapper>
            ) : (
                //ДЕСКТОПНАЯ ВЕРСИЯ
                <FlexWrapper gap={theme.gap.small}>
                    <FlexWrapper align="center" gap={theme.gap.small}>
                        <FlexWrapper direction="column" align="center" gap={theme.gap.small}>
                            <ArrowButton onClick={handleScrollUp} disabled={!canScrollUp}>
                                <ArrowBackIosNewIcon fontSize="small" sx={{transform: 'rotate(90deg)'}}/>
                            </ArrowButton>

                            {visiblePreviews.map((img, index) => {
                                const actualIndex = startIndex + index;
                                return (
                                    <PreviewImage
                                        key={img.src}
                                        src={img.src}
                                        alt={img.alt}
                                        isActive={actualIndex === currentIndex}
                                        onClick={() => handleSelectImage(actualIndex)}
                                        style={previewSize ? { width: previewSize.width, height: previewSize.height } : {}}
                                    />
                                );
                            })}

                            <ArrowButton onClick={handleScrollDown} disabled={!canScrollDown}>
                                <ArrowForwardIos fontSize="small" sx={{transform: 'rotate(90deg)'}}/>
                            </ArrowButton>
                        </FlexWrapper>

                        <MainImage
                            src={images[currentIndex].src}
                            alt={images[currentIndex].alt}
                            style={mainImageSize ? { width: mainImageSize.width, height: mainImageSize.height } : {}}/>
                    </FlexWrapper>

                    <FlexWrapper direction="column" gap={theme.gap.small}>
                        <H3Dark>{title}</H3Dark>
                        <StyledP>{description}</StyledP>
                        {children}
                        <Button>{buttonText}</Button>
                    </FlexWrapper>
                </FlexWrapper>
            )}
        </>
    );
};

const PreviewImage = styled.img<{ isActive: boolean }>`
    width: 150px;
    height: 150px;
    border: ${({isActive}) => (isActive ? "2px solid var(--main-color)" : "2px solid transparent")};
    border-radius: 8px;
    cursor: pointer;
    transition: border 0.2s;
`;

const MainImage = styled.img`
    width: 400px;
    height: 500px;
    border-radius: 10px;

    @media (max-width: 768px) {
        height: 300px;
    }
`;

const StyledP = styled(P)`
    text-align: left;
    max-width: 500px;
`;

const ArrowButton = styled.button<{ disabled?: boolean }>`
    background: var(--main-color);
    color: var(--light-text-color);
    border-radius: 50%;
    padding: 10px;
    width: 40px;
    height: 40px;
    cursor: ${({disabled}) => (disabled ? "default" : "pointer")};
    opacity: ${({disabled}) => (disabled ? 0.3 : 1)};
    transition: 0.2s;

    &:hover {
        background-color: var(--accent-color);
    }
`;
