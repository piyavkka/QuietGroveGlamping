import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

interface OverlayProps {
    children: React.ReactNode;
    onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ children, onClose }) => {
    return (
        <OverlayWrapper onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    <CloseIcon fontSize="large" />
                </CloseButton>
                {children}
            </ModalContent>
        </OverlayWrapper>
    );
};

export default Overlay;

const OverlayWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000;

    display: flex;
    align-items: center;    
    justify-content: center;
`;

const ModalContent = styled.div`
    position: relative;
    width: fit-content;
    max-width: 1440px;
    margin: 0 auto;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background: transparent;
    color: var(--main-color);
    transition: opacity 0.2ms;

    &:hover {
        opacity: 0.5;
    }
`;