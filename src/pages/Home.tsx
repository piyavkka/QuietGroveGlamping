import {
    Slider,
    ActionAreaCard,
    ReviewSlider,
    Route,
    WhyUs,
    MainSection,
} from '../components/Home/index.tsx';

function Home() {

    return (
        <>
            <MainSection/>

            <section>
                <Slider/>
            </section>

            <section>
                <WhyUs/>
            </section>

            <section style={{border: '2px solid var(--light-text-color)'}}>
                <ActionAreaCard/>
            </section>

            <section>
                <ReviewSlider/>
            </section>

            <section>
                <Route/>
            </section>
        </>
    )
}

export default Home