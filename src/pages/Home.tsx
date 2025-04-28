import main_img from "../assets/Home/main_img.jpg";
import reviews from "../assets/Home/reviews.png";
import {Header} from "../components/Header.tsx";
import Reservation from "../components/Home/Reservation.tsx";
import {Slider} from "../components/Home/Slider.tsx";
import ActionAreaCard from "../components/Home/ActionAreaCard.tsx";
import ReviewSlider from "../components/Home/ReviewSlider.tsx";
import Route from "../components/Home/Route.tsx";
import Footer from "../components/Footer.tsx";
import WhyUs from "../components/Home/WhyUs.tsx";
import '../styles/home.css'

function Home() {

    return (
        <>
            <Header/>
            <section className="main-section">
                <img src={main_img} className="main-img" alt="Глэмпинг"/>
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
                    <a href="#">смотреть все</a>
                </div>
                <ActionAreaCard/>
            </section>

            <section className="reviews">
                <img src={reviews} alt="glamping" className="reviews-img" />
                <h3>место, в котором обязательно нужно побывать</h3>
                <ReviewSlider/>
            </section>

            <section className="route">
                <Route/>
            </section>

            <Footer/>
        </>
    )
}

export default Home