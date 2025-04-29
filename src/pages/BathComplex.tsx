import {IntroSection} from "../components/IntroSection.tsx";
import BathBg from "../assets/BathBg.png";

function BathComplex() {
    return (
        <>
            <IntroSection
                src={BathBg}
                alt="Глэмпинг"
                title="банный комплекс"
                description="Традиционная баня подарит вам жаркий пар и глубокое расслабление, а купель с горячей водой на свежем воздухе поможет снять усталость и восстановить силы. Ощутите гармонию с природой, наслаждаясь уютом и теплом в окружении живописного леса. Идеальное завершение активного дня на природе!"
            />
        </>
    );
}

export default BathComplex;