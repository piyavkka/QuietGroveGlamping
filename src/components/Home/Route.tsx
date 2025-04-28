import {Button} from "@mui/material";

export default function Route(){
    return (
        <>
            <div className="map">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad31d6bcef6c6ac64e41786b39e3002f65c03a4fcea89270a0f2d4efa1c49e5a6&amp;source=constructor"
                    allowFullScreen
                    loading="lazy"
                    title="Карта местности">
                </iframe>
            </div>

            <div className="route-text">
                <h2>Как добраться</h2>
                <h3>📍Мы находимся по адресу:</h3>
                <p>Нижегородская область, посёлок Ильиногорск, микрорайон Ильиногорец-2, д. 77</p>
                <h4>3 способа добраться:</h4>
                <h4>🚗 На машине</h4>
                <p>Примерно 60 км от Нижнего Новгорода по автодороге на Ильиногорск. Удобный съезд и хорошая дорога
                    прямо до нас.</p>
                <h4>🚉 На общественном транспорте</h4>
                <p>Электричка с Московского вокзала Нижнего Новгорода до станции «Ильиногорск» (в пути около часа).
                    Затем 10 минут на такси.</p>
                <h4>🚐 Трансфер</h4>
                <p>Мы можем организовать для вас трансфер из Нижнего Новгорода прямо до нас — по запросу.</p>

                <Button variant="contained" href="#"
                        sx={{bgcolor: 'var(--main-color)', fontFamily: 'Montserrat', width: '300px'}}>Построить
                    маршрут</Button>
            </div>
        </>
    );
}