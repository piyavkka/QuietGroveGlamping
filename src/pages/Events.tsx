import {IntroSection} from "../components/IntroSection.tsx";
import EventsBg from "../assets/EventsBg.png";
import {VerticalImageSlider} from "../components/VerticalImageSlider.tsx";
import {SectionWrapper} from "../components/common/SectionWrapper.ts";
import {FlexWrapper} from "../components/common/FlexWrapper.ts";
import Overlay from "../components/common/Overlay.tsx";
import {useState} from "react";
import FormEvents from "../components/FormEvents.tsx";

const eventsData = [
    {
        id: 1,
        title: "Девичник",
        description: `Мы полностью организуем атмосферный девичник на природе: подберём уютное жильё, оформим фотозоны, украсим домики и зону для отдыха. Предложим программу с банными процедурами, чаном, ужином на террасе и лаунжем у костра. По желанию — организация мастер-классов, спа, сервировка пикника или выездной фотосессии. Мы поможем продумать сценарий и позаботимся о всех деталях. Вам останется только наслаждаться моментом вместе с подругами.\n
Мы создадим праздник, где каждая деталь — от пледа до свечей — будет подчёркивать заботу и стиль. Девичник получится душевным, тёплым и таким, о котором вспоминают с улыбкой. Наши координаторы всегда на месте и готовы решать любые вопросы. Атмосфера уюта, приватности и природной красоты гарантирована.`,
        images: [
            { src: "/src/assets/Events/events1.jpg", alt: "events1" },
            { src: "/src/assets/Events/events2.jpg", alt: "events2" },
            { src: "/src/assets/Events/events3.jpg", alt: "events3" },
            { src: "/src/assets/Events/events4.jpg", alt: "events4" },
            { src: "/src/assets/Events/events5.jpg", alt: "events5" },
        ],
    },
    {
        id: 2,
        title: "Годовщина",
        description: `Мы с радостью организуем годовщину по индивидуальному сценарию: романтический ужин при свечах, тёплый чан под звёздами, декор в любимых оттенках и уют в каждом моменте. Позаботимся о музыке, сервировке, свечах, тёплых пледах и мелочах, которые создают атмосферу. Мы предлагаем разные пакеты — от минимального оформления до полного сопровождения. Всё подстраивается под ваши пожелания.\n
Также предложим услуги фотографа, завтрак на террасе с панорамным видом и вечернюю прогулку с сюрпризом. Ваш праздник будет наполнен вниманием и эмоциями. Команда глэмпинга координирует все процессы, чтобы вы чувствовали только радость. Этот день останется в памяти как один из самых нежных и тёплых.`,
        images: [
            { src: "/src/assets/Events/events6.jpg", alt: "events6" },
            { src: "/src/assets/Events/events7.jpg", alt: "events7" },
            { src: "/src/assets/Events/events8.jpg", alt: "events8" },
            { src: "/src/assets/Events/events9.jpg", alt: "events9" },
            { src: "/src/assets/Events/events10.jpg", alt: "events10" },
        ],
    },
    {
        id: 3,
        title: "День рождения",
        description: `Мы организуем день рождения на природе — с декором, зонами отдыха, вкусной едой и уютной атмосферой. Возьмём на себя всё: оформление, выездную кухню или кейтеринг, развлечения, музыку, фотосъёмку и комфортное размещение гостей. Есть варианты для любого возраста и формата — от тихого вечера до весёлой компании. У нас всё предусмотрено для детских и взрослых праздников.\n
Всё под ключ: от первого звонка до свечей на торте. Вам остаётся только наслаждаться праздником и природой вокруг. Мы оформим индивидуальный сценарий праздника. А наши ведущие, фотографы и повара сделают день по-настоящему особенным.`,
        images: [
            { src: "/src/assets/Events/events11.jpg", alt: "events11" },
            { src: "/src/assets/Events/events12.jpg", alt: "events12" },
            { src: "/src/assets/Events/events13.jpg", alt: "events13" },
            { src: "/src/assets/Events/events14.jpg", alt: "events14" },
            { src: "/src/assets/Events/events15.jpg", alt: "events15" },
        ],
    },
    {
        id: 4,
        title: "Семейные выходные",
        description: `Мы поможем провести тёплые семейные выходные: подберём подходящие домики, организуем детскую анимацию, пешие маршруты, ужин на террасе и активности на свежем воздухе. Вечером — тёплый костёр, пледы, какао и настольные игры. Предусмотрим всё: от удобных кроватей до детских стульчиков. Даже если вы с малышами — будет комфортно.\n
Если вы хотите сохранить эти моменты — предложим семейную фотосессию в красивых местах глэмпинга. Мы делаем семейный отдых лёгким и продуманным. В меню — блюда, подходящие и детям, и взрослым. А наша команда всегда рядом, чтобы отдых прошёл без забот.`,
        images: [
            { src: "/src/assets/Events/events16.jpg", alt: "events16" },
            { src: "/src/assets/Events/events17.jpg", alt: "events17" },
            { src: "/src/assets/Events/events18.jpg", alt: "events18" },
            { src: "/src/assets/Events/events19.jpg", alt: "events19" },
            { src: "/src/assets/Events/events20.jpg", alt: "events20" },
        ],
    },
    {
        id: 5,
        title: "Наедине с собой",
        description: `Мы создадим условия для полного восстановления: тишина, уют, домик с видом, горячий чан и прогулки наедине с природой. Организуем доставку еды, комфортное размещение, ритуалы для отдыха — от ароматерапии до спа-программ. Вам не придётся заботиться ни о чём — всё включено. Просто приезжайте и отдыхайте.\n
По желанию можно добавить йогу, медитации, арт-терапию или просто тишину без телефона. Мы подстроим формат под ваш ритм и сделаем отдых действительно заботливым. Наши программы направлены на восстановление внутреннего ресурса. Вы вернётесь домой полными сил и вдохновения.`,
        images: [
            { src: "/src/assets/Events/events23.jpg", alt: "events23" },
            { src: "/src/assets/Events/events21.jpg", alt: "events21" },
            { src: "/src/assets/Events/events22.jpg", alt: "events22" },
            { src: "/src/assets/Events/events24.jpg", alt: "events24" },
            { src: "/src/assets/Events/events25.jpg", alt: "events25" },
        ],
    },
];

function Events() {

    const [showOverlay, setShowOverlay] = useState(false);

    const handleOpenOverlay = () => {
        setShowOverlay(true);
    };

    const handleCloseOverlay = () => {
        setShowOverlay(false);
    };

    return (
        <>
            <IntroSection
                src={EventsBg}
                alt="Глэмпинг"
                title="Мероприятия"
                description="Здесь можно наслаждаться особенными моментами в окружении живописных пейзажей, проводить время с близкими у костра или погружаться в атмосферу тишины и гармонии. Независимо от повода, каждый гость найдет здесь комфорт, вдохновение и незабываемые впечатления."
            />

            <SectionWrapper >
                <FlexWrapper direction="column" gap="70px">
                    {eventsData.map(({ id, title, description, images}) => (
                        <VerticalImageSlider
                            key={id}
                            images={images}
                            title={title}
                            description={description}
                            buttonText="запросить бронь"
                            action={handleOpenOverlay}
                        />
                    ))}
                </FlexWrapper>
            </SectionWrapper>

            {showOverlay && (
                <Overlay onClose={handleCloseOverlay}>
                    <FormEvents/>
                </Overlay>
            )}

        </>
    );
}

export default Events;
