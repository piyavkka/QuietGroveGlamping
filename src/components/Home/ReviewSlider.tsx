import { useState } from 'react';
import {Typography, IconButton, Fade, Box, Rating, Avatar, Button} from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const reviews = [
    {
        text: 'Недавно побывал в глэмпинге "Тихая Роща" — это было просто волшебно! Атмосфера уюта чувствуется с первых минут: чисто, аккуратно, всё продумано до мелочей.\n\n ' +
            'Природа вокруг завораживает, а вечер у костра — отдельный кайф. Особенно порадовали развлечения: катались на сапах, брали велосипеды напрокат, пробовали квадроциклы — адреналина хватило! ' +
            '\n\nПерсонал приветливый и всегда готов помочь. Также порадовал удобный трансфер прямо до дома' +
            'Здесь чувствуешь себя как дома, но с элементами приключения. Отличное место, чтобы перезагрузиться и отдохнуть от городской суеты. ',
        name: 'Иван Петров',
        avatar: '/src/assets/Home/avatar1.jpg',
        stars: 5,
    },
    {
        text: 'Всё выглядит очень стильно и при этом по-домашнему уютно. Мне особенно понравился интерьер домиков — минимализм, дерево, мягкий свет… просто кайф!\n\n' +
            'Каждое утро мы завтракали на террасе с видом на сосны, а потом шли на йогу под открытым небом — невероятная атмосфера спокойствия и перезагрузки.\n\n' +
            'Вечером устраивали пикник под гирляндами и жарили зефирки у костра 🔥 Было ощущение, будто попали в сказку.\n\n' +
            'Спасибо персоналу — очень вежливые и заботливые ребята! Обязательно приеду снова и возьму подругу с собой 😊',

        name: 'Анна Смирнова',
        avatar: '/src/assets/Home/avatar2.jpg',
        stars: 5,
    },
    {
        text: 'Впечатления самые положительные! Сразу порадовало, что домики утеплённые и оборудованы всем необходимым, даже в прохладную погоду было комфортно.\n\n' +
            'Отдельно хочу отметить баню с чаном — это просто must-have после активного дня. Вода горячая, вид на лес — полное расслабление.\n\n' +
            'Территория ухоженная, везде чисто, приятные тропинки, удобно гулять. Удивило, как тихо вокруг — идеальное место, чтобы выспаться и отдохнуть без шума.\n\n' +
            'Большой плюс — быстрая регистрация и понятная навигация. Вернусь сюда обязательно ещё раз!',
        name: 'Дмитрий Кузнецов',
        avatar: '/src/assets/Home/avatar3.jpg',
        stars: 5,
    },
];

export default function ReviewSlider() {
    const [index, setIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    const handleChange = (direction: 'next' | 'prev') => {
        setFadeIn(false);
        setTimeout(() => {
            setIndex((prev) => {
                if (direction === 'next') return (prev + 1) % reviews.length;
                else return (prev - 1 + reviews.length) % reviews.length;
            });
            setFadeIn(true);
        }, 200);
    };

    return (
        <Box
            sx={{
                position: 'absolute',
                top: { xs: '30%', md: '10%' },
                right: { xs: '5%', md: '10vw' },
                width: { xs: '90%', sm: '80%', md: '35%' },
                height: { xs: '60%', md: '80%' },
                backgroundColor: 'var(--light-text-color)',
                borderRadius: '10px',
                py: { xs: 2, md: 3 },
                px: { xs: 3, md: 4 },
                display: 'flex',
                flexDirection: 'column',
                zIndex: 2,
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.9)'
            }}
        >
            <IconButton
                onClick={() => handleChange('prev')}
                sx={{
                    position: 'absolute',
                    width: 40,
                    height: 40,
                    left: -20,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'var(--elem-color)',
                    borderRadius: '50%',
                    '&:hover': {
                        backgroundColor: 'rgb(133,130,112)',
                    },
                }}
            >
                <ArrowBackIosNewIcon fontSize="small" sx={{ color: 'black' }} />
            </IconButton>

            <Fade in={fadeIn} timeout={200}>

                <Box sx={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center'}}>
                            <Avatar
                                src={reviews[index].avatar}
                                sx={{
                                    width: { xs: 26,  md: 40 },
                                    height: { xs: 26, md: 40 },
                                    mr: 2 }} />
                            <Typography sx={{ fontWeight: 600, fontFamily: 'Montserrat'}}>
                                {reviews[index].name}
                            </Typography>
                        </Box>

                        <Box>
                            <Rating
                                name="read-only"
                                value={reviews[index].stars}
                                readOnly
                                sx={{ color: 'gold', mt: 1}}
                            />
                        </Box>
                    </Box>

                    <Typography
                        variant="body1"
                        sx={{ color: 'black',
                            fontSize: 'clamp(0.8rem, 1.6vw, 1rem)',
                            fontFamily: 'Montserrat',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 17,
                            WebkitBoxOrient: 'vertical',
                            whiteSpace: 'pre-line',
                            lineHeight: 1.4}}>
                        {reviews[index].text}
                    </Typography>

                    <Button variant="contained"
                            href="#"
                            sx={{
                                bgcolor: 'var(--main-color)',
                                fontFamily: 'Montserrat',
                                width: '300px'}}>
                        Читать ещё отзывы
                    </Button>

                </Box>

            </Fade>

            <IconButton
                onClick={() => handleChange('next')}
                sx={{
                    position: 'absolute',
                    width: 40,
                    height: 40,
                    right: -20,
                    top: '50%',
                    transform: 'translateY(-50%)' ,
                    backgroundColor: 'var(--elem-color)',
                    borderRadius: '50%',
                    '&:hover': {
                        backgroundColor: 'rgb(133,130,112)',
                    },
                }}
            >
                <ArrowForwardIos fontSize="small" sx={{ color: 'black' }} />
            </IconButton>
        </Box>
    );
}
