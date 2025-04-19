import React, { useRef } from "react";

const images = [
    "/images/house1.jpg",
    "/images/house2.jpg",
    "/images/house3.jpg",
    "/images/house4.jpg",
    "/images/house5.jpg",];

export const Slider: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        isDown = true;
        scrollRef.current.classList.add("dragging");
        startX = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft = scrollRef.current.scrollLeft;
    };

    const handleMouseLeaveOrUp = () => {
        isDown = false;
        scrollRef.current?.classList.remove("dragging");
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDown || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // скорость прокрутки
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div
            className="slider-container"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
        >
            {images.map((src, index) => (
                <div className="slider-item" key={index}>
                    <img src={src} alt={`house-${index}`} />
                </div>
            ))}
        </div>
    );
};