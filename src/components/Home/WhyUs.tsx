import {Button} from "@mui/material";

export default function WhyUs(){
    return (
        <>
            <div className="why-us-text">
                <h2>Отдых на природе с комфортом – ваш идеальный глэмпинг! </h2>
                <p>Добро пожаловать в Тихую рощу – место, где природа встречается с уютом. Забудьте о городской суете и
                    подарите себе отдых в стильных домиках среди леса.</p>
                <p>Уединение и спокойствие – пробуждайтесь под пение птиц и вдыхайте свежий воздух.</p>
                <p>Комфорт без компромиссов – мягкие кровати, горячий душ, Wi-Fi и всё, что нужно для полного
                    расслабления.</p>
                <p>Атмосфера уюта – вечерние костры, звёздное небо и аромат свежесваренного кофе по утрам.</p>
                <p>Активный отдых – пешие прогулки, веломаршруты, SUP-доски и походные бани.</p>
                <p>Окунитесь в мир гармонии и вдохновения – бронируйте отдых мечты уже сегодня!</p>
                <span>От 8 000 /сутки</span>
                <Button variant="contained" href="#"
                        sx={{
                            bgcolor: 'var(--main-color)',
                            fontFamily: 'Montserrat',
                            width: '300px'
                        }}>забронировать</Button>
            </div>
            <div className="advantages">
                <h3>Есть всё необходимое для вашего комфорта</h3>
                <div className="advantages-list">
                    <div className="list-icon">
                        <img src="/src/assets/Home/image.svg" alt="" className="icon"/>
                        <h4>Кухня</h4>
                    </div>
                    <div className="list-icon">
                        <img src="/src/assets/Home/image-1.svg" alt="" className="icon"/>
                        <h4>Ванная комната</h4>
                    </div>
                    <div className="list-icon">
                        <img src="/src/assets/Home/image-2.svg" alt="" className="icon"/>
                        <h4>Бельё</h4>
                    </div>
                    <div className="list-icon">
                        <img src="/src/assets/Home/image-3.svg" alt="" className="icon"/>
                        <h4>Банный комплекс</h4>
                    </div>
                    <div className="list-icon">
                        <img src="/src/assets/Home/image-4.svg" alt="" className="icon"/>
                        <h4>Мангал</h4>
                    </div>
                    <div className="list-icon">
                        <img src="/src/assets/Home/image-5.svg" alt="" className="icon"/>
                        <h4>Развлечения</h4>
                    </div>
                </div>
            </div>
        </>
    );
}