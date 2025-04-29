import {IntroSection} from "../components/IntroSection.tsx";
import EventsBg from "../assets/EventsBg.png";


function Events() {
    return (
        <>
            <IntroSection
                src={EventsBg}
                alt="Глэмпинг"
                title="Мероприятия"
                description="Здесь можно наслаждаться особенными моментами в окружении живописных пейзажей, проводить время с близкими у костра или погружаться в атмосферу тишины и гармонии. Независимо от повода, каждый гость найдет здесь комфорт, вдохновение и незабываемые впечатления."
            />
        </>
    );
}

export default Events;