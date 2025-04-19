import main_img from './assets/main_img.jpg';
import reviews from './assets/reviews.png';
import Header from "./components/Header.tsx";
import Reservation from "./components/Reservation.tsx";
import {Slider} from "./components/Slider.tsx";
import ActionAreaCard from "./components/ActionAreaCard.tsx";
import ReviewSlider from "./components/ReviewSlider.tsx";
import {Button} from "@mui/material";
import Footer from "./components/Footer.tsx";


function App() {

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
                <div className="why-us-text">
                    <h2>Отдых на природе с комфортом – ваш идеальный глэмпинг! </h2>
                    <p>Добро пожаловать в Тихую рощу – место, где природа встречается с уютом. Забудьте о городской суете и подарите себе отдых в стильных домиках среди леса.</p>
                        <p>Уединение и спокойствие – пробуждайтесь под пение птиц и вдыхайте свежий воздух.</p>
                        <p>Комфорт без компромиссов – мягкие кровати, горячий душ, Wi-Fi и всё, что нужно для полного расслабления.</p>
                        <p>Атмосфера уюта – вечерние костры, звёздное небо и аромат свежесваренного кофе по утрам.</p>
                        <p>Активный отдых – пешие прогулки, веломаршруты, SUP-доски и походные бани.</p>
                        <p>Окунитесь в мир гармонии и вдохновения – бронируйте отдых мечты уже сегодня!</p>
                    <span>От 8 000 /сутки</span>
                    <button>забронировать</button>
                </div>
                <div className="advantages">
                    <h3>Есть всё необходимое для вашего комфорта</h3>
                    <div className="advantages-list">
                        <div className="list-icon">
                            <img src="/images/image.svg" alt="" className="icon" />
                            <h4>Кухня</h4>
                        </div>
                        <div className="list-icon">
                            <img src="/images/image-1.svg" alt="" className="icon" />
                            <h4>Ванная комната</h4>
                        </div>
                        <div className="list-icon">
                            <img src="/images/image-2.svg" alt="" className="icon" />
                            <h4>Бельё</h4>
                        </div>
                        <div className="list-icon">
                            <img src="/images/image-3.svg" alt="" className="icon" />
                            <h4>Банный комплекс</h4>
                        </div>
                        <div className="list-icon">
                            <img src="/images/image-4.svg" alt="" className="icon" />
                            <h4>Мангал</h4>
                        </div>
                        <div className="list-icon">
                            <img src="/images/image-5.svg" alt="" className="icon" />
                            <h4>Развлечения</h4>
                        </div>
                    </div>
                </div>
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
                <div className="map">здесь будет карта</div>
                <div className="route-text">
                    <h2>Как добраться</h2>
                    <h3>📍Мы находимся по адресу:</h3>
                    <p>Нижегородская область, посёлок Ильиногорск, микрорайон Ильиногорец-2, д. 77</p>
                    <h4>3 способа добраться:</h4>
                    <h4>🚗 На машине</h4>
                    <p>Примерно 60 км от Нижнего Новгорода по автодороге на Ильиногорск. Удобный съезд и хорошая дорога прямо до нас.</p>
                    <h4>🚉 На общественном транспорте</h4>
                    <p>Электричка с Московского вокзала Нижнего Новгорода до станции «Ильиногорск» (в пути около часа). Затем 10 минут на такси.</p>
                    <h4>🚐 Трансфер</h4>
                    <p>Мы можем организовать для вас трансфер из Нижнего Новгорода прямо до нас — по запросу.</p>

                    <Button variant="contained" href="#" sx={{bgcolor: 'var(--main-color)', fontFamily: 'Montserrat', width: '300px'}}>Построить маршрут</Button>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default App