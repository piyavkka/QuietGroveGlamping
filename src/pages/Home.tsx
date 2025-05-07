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
            <Slider/>
            <WhyUs/>
            <ActionAreaCard/>
            <ReviewSlider/>
            <Route/>
        </>
    )
}

export default Home