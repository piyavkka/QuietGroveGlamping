import { SectionWrapper } from "../common/SectionWrapper.ts";
import { H1 } from "../../styles/theme.ts";
import { FlexWrapper } from "../common/FlexWrapper.ts";
import {SliderComponent} from "../common/SliderComponent.tsx";

const images = [
    "/src/assets/Home/house1.jpg",
    "/src/assets/Home/house2.jpg",
    "/src/assets/Home/house3.jpg",
    "/src/assets/Home/house4.jpg",
    "/src/assets/Home/house5.jpg",
];

export default function Slider() {
    return (
        <section>
            <SectionWrapper>
                <FlexWrapper direction="column" align="center">
                    <H1>Тихая роща - идеальное место для отдыха на природе, вдали от городской суеты</H1>
                    <SliderComponent images={images}/>
                </FlexWrapper>
            </SectionWrapper>
        </section>
    );
}