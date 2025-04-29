import HousesBg from "../assets/HousesBg.png";
import { IntroSection } from "../components/IntroSection";

function Houses() {
    return (
        <>
            <IntroSection
                src={HousesBg}
                alt="Глэмпинг"
                title="наши домики"
                description="Наш глэмпинг-отель сочетает уют, стиль и полное погружение в природу. Гостей ждут три уникальных варианта размещения, каждый из которых создан для комфортного отдыха."
            />
        </>
    );
}

export default Houses;