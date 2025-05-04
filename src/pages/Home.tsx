import main_img from "../assets/Home/main_img.jpg";

import {
    Reservation,
    Slider,
    ActionAreaCard,
    ReviewSlider,
    Route,
    WhyUs
} from '../components/Home/index.tsx';

import '../styles/home.css'

function Home() {

    return (
        <>
            <section className="main-section">
                <img src={main_img} alt="Глэмпинг"/>
                <h2 className="main-title">наедине с природой, не отвлекаясь от важного</h2>
                <Reservation/>
            </section>

            <section className="slider">
                <h1 className="slider-title">Тихая роща - идеальное место для отдыха на природе, вдали от городской суеты</h1>
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