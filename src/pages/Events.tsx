import {IntroSection} from "../components/IntroSection.tsx";
import EventsBg from "../assets/EventsBg.png";
import {VerticalImageSlider} from "../components/VerticalImageSlider.tsx";
import {SectionWrapper} from "../components/SectionWrapper.ts";
import {FlexWrapper} from "../components/FlexWrapper.ts";

const eventsData = [
    {
        id: 1,
        title: "Девичник",
        description: "Проведите незабываемый девичник в окружении природы, где комфорт сочетается с атмосферой уюта и расслабления. Уединенные стильные домики, вечер у костра, спа-процедуры в бане с чаном и звездное небо создадут особенное настроение. Гостям доступен уютный лаунж-пространство для дружеских посиделок, фотозоны в живописных местах и возможность организовать пикник или ужин на террасе.",
        images: [
            { src: "/src/assets/Events/events1.jpg", alt: "" },
            { src: "/src/assets/Events/events2.jpg", alt: "" },
            { src: "/src/assets/Events/events3.jpg", alt: "" },
            { src: "/src/assets/Events/events4.jpg", alt: "" },
            { src: "/src/assets/Events/events5.jpg", alt: "" },
        ],
    },

    {
        id: 2,
        title: "Годовщина",
        description: "Отпразднуйте годовщину в атмосфере уюта и романтики, наслаждаясь природой и комфортом. Мы позаботимся о каждом детали, создавая уникальную обстановку: ужин на террасе при свечах, теплый чан под звездным небом, декор в ваших любимых оттенках и уединение в стильном домике. По вашему пожеланию организуем фотосессию, пикник на берегу или завтрак с панорамным видом. Независимо от формата, этот день станет особенным и наполненным теплыми моментами.",
        images: [
            { src: "/src/assets/Events/events6.jpg", alt: "" },
            { src: "/src/assets/Events/events7.jpg", alt: "" },
            { src: "/src/assets/Events/events8.jpg", alt: "" },
            { src: "/src/assets/Events/events9.jpg", alt: "" },
            { src: "/src/assets/Events/events10.jpg", alt: "" },
        ],
    },

    {
        id: 3,
        title: "День рождения",
        description: "Отметьте день рождения в уютной атмосфере загородного отдыха, наслаждаясь природой и комфортом. Мы организуем праздник по вашим пожеланиям: стильное оформление, ужин на террасе, уютную зону для отдыха у костра и развлекательную программу. Гости смогут провести время в комфортных домиках, попробовать местные угощения и насладиться теплой атмосферой. Этот день будет наполнен радостью, уютом и незабываемыми моментами.",
        images: [
            { src: "/src/assets/Events/events11.jpg", alt: "" },
            { src: "/src/assets/Events/events12.jpg", alt: "" },
            { src: "/src/assets/Events/events13.jpg", alt: "" },
            { src: "/src/assets/Events/events14.jpg", alt: "" },
            { src: "/src/assets/Events/events15.jpg", alt: "" },
        ],
    },

    {
        id: 4,
        title: "Семейный уикенд",
        description: "Проведите время с семьей вдали от городской суеты, наслаждаясь уютом и природой. Наш глэмпинг-отель предлагает комфортное размещение, живописные прогулки, расслабляющий отдых в бане и возможность весело провести время на свежем воздухе. Дети будут в восторге от приключений на природе, а взрослые смогут насладиться покоем и уединением. Здесь каждый найдет занятие по душе, а теплые вечера в кругу семьи у камина или на террасе станут самыми ценными моментами.",
        images: [
            { src: "/src/assets/Events/events16.jpg", alt: "" },
            { src: "/src/assets/Events/events17.jpg", alt: "" },
            { src: "/src/assets/Events/events18.jpg", alt: "" },
            { src: "/src/assets/Events/events19.jpg", alt: "" },
            { src: "/src/assets/Events/events20.jpg", alt: "" },
        ],
    },

    {
        id: 5,
        title: "Ретрит",
        description: "Если вам хочется замедлиться, отвлечься от суеты и посвятить время себе, наш глэмпинг — идеальное место для уединенного отдыха. Здесь нет шума и спешки, только природа, тишина и уютные домики, где можно расслабиться и перезагрузиться. Медитации на свежем воздухе, неспешные прогулки и возможность полностью отвлечься от внешнего мира помогут восстановить баланс и наполниться энергией. Подарите себе время для отдыха, спокойствия и гармонии.",
        images: [
            { src: "/src/assets/Events/events23.jpg", alt: "" },
            { src: "/src/assets/Events/events21.jpg", alt: "" },
            { src: "/src/assets/Events/events22.jpg", alt: "" },
            { src: "/src/assets/Events/events24.jpg", alt: "" },
            { src: "/src/assets/Events/events25.jpg", alt: "" },
        ],
    },
];

function Events() {
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
                    {eventsData.map(({ id, title, description, images }) => (
                        <VerticalImageSlider
                            key={id}
                            images={images}
                            title={title}
                            description={description}
                        />
                    ))}
                </FlexWrapper>
            </SectionWrapper>

        </>
    );
}

export default Events;
