import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard() {
    return (
        <div className="cards-container">
            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image="/src/assets/card1.png"
                        alt="bicycle"
                    />
                    <CardContent sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                        <Typography gutterBottom variant="h3" sx={{ fontWeight: 600, fontSize: 20, fontFamily: 'Montserrat'}}>
                            Прокат велосипедов
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 400, fontSize: 14, fontFamily: 'Montserrat', textAlign:'justify'}}>
                            аренда велосипедов для прогулок и активного отдыха на свежем воздухе
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image="/src/assets/card3.png"
                        alt="quad_bike"
                    />
                    <CardContent sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                        <Typography gutterBottom variant="h3" sx={{ fontWeight: 600, fontSize: 20, fontFamily: 'Montserrat'}}>
                            Квадроциклы
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 400, fontSize: 14, fontFamily: 'Montserrat', textAlign:'justify'}}>
                            захватывающие поездки по лесным тропам и бездорожью на мощных квадроциклах
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image="/src/assets/card4.png"
                        alt="sup"
                    />
                    <CardContent sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                        <Typography gutterBottom variant="h3" sx={{ fontWeight: 600, fontSize: 20, fontFamily: 'Montserrat'}}>
                            Катание на сапах
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 400, fontSize: 14, fontFamily: 'Montserrat', textAlign:'justify'}}>
                            спокойное и увлекательное плавание на сапборде по живописным водоёмам
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image="/src/assets/card5.png"
                        alt="stars"
                    />
                    <CardContent sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                        <Typography gutterBottom variant="h3" sx={{ fontWeight: 600, fontSize: 20, fontFamily: 'Montserrat'}}>
                            Звёздные вечера
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 400, fontSize: 14, fontFamily: 'Montserrat', textAlign:'justify'}}>
                            вечерние наблюдения за звёздным небом с телескопом и рассказами о космосе
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </div>
    );
}