import { Link } from "react-router-dom";
import main_img from "../assets/Home/main_img.jpg";
import reviews from "../assets/Home/reviews.png";

import {
    Reservation,
    Slider,
    ActionAreaCard,
    ReviewSlider,
    Route,
    WhyUs
} from '../components/Home/index.tsx';

import '../styles/home.css'
import {ImageBg} from "../components/ImageBg.ts";

function Home() {

    return (
        <>
            <section className="main-section">
                <ImageBg src={main_img} alt="Глэмпинг"/>
                <h2 className="main-title">наедине с природой, не отвлекаясь от важного</h2>
                <Reservation/>
            </section>

            <section className="slider">
                <h1 className="slider-title">Тихая роща - идеальное место для отдыха на природе, вдали от городской суеты</h1>
                <Slider/>
            </section>

            <section className="why-us">
                <WhyUs/>
            </section>

            <section className="entertainment">
                <h2>Развлечения</h2>
                <div className="entertainment-text">
                    <h4>Отдых в нашем глэмпинге — это не только уют и комфорт, но и множество увлекательных развлечений на свежем воздухе! Вас ждут:</h4>
                    <Link to="/entertainment">смотреть все</Link>
                </div>
                <ActionAreaCard/>
            </section>

            <section className="reviews">
                <ImageBg src={reviews} alt="glamping"/>
                <h3>место, в котором обязательно нужно побывать</h3>
                <ReviewSlider/>
            </section>

            <section className="route">
                <Route/>
            </section>
        </>
    )
}

export default Home