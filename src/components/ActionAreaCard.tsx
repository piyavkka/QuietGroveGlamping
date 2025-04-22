import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import { Swiper, SwiperSlide } from 'swiper/react';

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/scrollbar';

import { Scrollbar } from 'swiper/modules';

export default function ActionAreaCard() {
    return (
        <div className="cards-slider">
            <Swiper className="custom-swiper"
                modules={[Scrollbar]}
                spaceBetween={16}
                scrollbar={{ draggable: true }}
                touchMoveStopPropagation={false}
                breakpoints={{
                    0: { slidesPerView: 1.2,},
                    600: { slidesPerView: 2.4,},
                    900: {slidesPerView: 3.4,},
                }}
            >
                {[{
                    title: "Прокат велосипедов",
                    image: "/src/assets/card1.png",
                    desc: "аренда велосипедов для прогулок и активного отдыха на свежем воздухе"
                }, {
                    title: "Квадроциклы",
                    image: "/src/assets/card3.png",
                    desc: "захватывающие поездки по лесным тропам и бездорожью на мощных квадроциклах"
                }, {
                    title: "Баня с чаном",
                    image: "/src/assets/card2.png",
                    desc: "расслабляющий отдых в жаркой бане и горячем чанe под открытым небом"
                }, {
                    title: "Катание на сапах",
                    image: "/src/assets/card4.png",
                    desc: "спокойное и увлекательное плавание на сапборде по живописным водоёмам"
                }, {
                    title: "Звёздные вечера",
                    image: "/src/assets/card5.png",
                    desc: "вечерние наблюдения за звёздным небом с телескопом и рассказами о космосе"
                }].map((card, index) => (
                    <SwiperSlide key={index}>
                        <Card
                            sx={{ maxWidth: 300, height: 370, margin: 1}}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={card.image}
                                    alt={card.title}
                                />
                                <CardContent sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                                    <Typography gutterBottom variant="h3" sx={{ fontWeight: 600, fontSize: 20, fontFamily: 'Montserrat'}}>
                                        {card.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'text.secondary',
                                            fontWeight: 400,
                                            fontSize: 14,
                                            fontFamily: 'Montserrat',
                                            textAlign:'justify',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical'}}>
                                        {card.desc}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
