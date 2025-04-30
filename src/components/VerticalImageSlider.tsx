import React, {useState} from "react";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {ArrowForwardIos} from "@mui/icons-material";
import { FlexWrapper } from "./FlexWrapper";
import {H3Dark, P} from "../styles/theme";
import {Button} from "./Button";

interface ImageItem {
    src: string;
    alt: string;
}

interface VerticalImageSliderProps {
    images: ImageItem[];
    title: string;
    description: string;
    buttonText?: string;
}

export const VerticalImageSlider: React.FC<VerticalImageSliderProps> = ({
         images,
         title,
         description,
         buttonText = "подробнее",
}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 2;

    const canScrollUp = startIndex > 0;
    const canScrollDown = startIndex + visibleCount < images.length;

    const handleScrollUp = () => canScrollUp && setStartIndex(startIndex - 1);
    const handleScrollDown = () => canScrollDown && setStartIndex(startIndex + 1);
    const handleSelectImage = (index: number) => setCurrentIndex(index);

    const visiblePreviews = images.slice(startIndex, startIndex + visibleCount);
    return (
        <>
            <FlexWrapper gap="16px">
                <FlexWrapper align="center" gap="16px">

                    <FlexWrapper direction="column" align="center" gap="16px" style={{width: 150}}>

                        <ArrowButton onClick={handleScrollUp} disabled={!canScrollUp}>
                            <ArrowBackIosNewIcon fontSize="small" sx={{transform: 'rotate(90deg)' }} />
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
                                />
                            );
                        })}

                        <ArrowButton onClick={handleScrollDown} disabled={!canScrollDown}>
                            <ArrowForwardIos fontSize="small" sx={{transform: 'rotate(90deg)' }} />
                        </ArrowButton>

                    </FlexWrapper>
                    <MainImage src={images[currentIndex].src} alt={images[currentIndex].alt}/>
                </FlexWrapper>

                <FlexWrapper direction="column" gap="16px">
                    <H3Dark>{title}</H3Dark>
                    <StyledP>{description}</StyledP>
                    <Button>{buttonText}</Button>
                </FlexWrapper>
            </FlexWrapper>
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
