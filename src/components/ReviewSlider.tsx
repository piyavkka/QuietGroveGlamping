import { useState } from 'react';
import {Typography, IconButton, Fade, Box, Rating, Avatar, Button} from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const reviews = [
    {
        text: 'Очень уютное место, обязательно приедем ещё раз!',
        name: 'Иван Петров',
        avatar: '/path/to/avatar1.jpg',
        stars: 5,
    },
    {
        text: 'Прекрасный отдых, понравилась баня и чан 💙',
        name: 'Анна Смирнова',
        avatar: '/path/to/avatar2.jpg',
        stars: 5,
    },
    {
        text: 'Ночевали в палатке-домике — супер атмосферно!',
        name: 'Дмитрий Кузнецов',
        avatar: '/path/to/avatar3.jpg',
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
                p: { xs: 2, md: 3 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
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

                <Box sx={{ width: '100%' }}>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                        <Avatar src={reviews[index].avatar} sx={{ width: 40, height: 40, mr: 2 }} />
                        <Typography sx={{ fontWeight: 600, mr: 1, fontFamily: 'Montserrat' }}>
                            {reviews[index].name}
                        </Typography>
                    </Box>

                    <Box sx={{ m: 1 }}>
                        <Rating
                            name="read-only"
                            value={reviews[index].stars}
                            readOnly
                            sx={{ color: 'gold' }}
                        />
                    </Box>

                    <Typography variant="body1" sx={{ color: 'black', px: 2, fontFamily: 'Montserrat' }}>
                        {reviews[index].text}
                    </Typography>

                    <Button variant="contained" href="#" sx={{bgcolor: 'var(--main-color)', fontFamily: 'Montserrat'}}>Читать ещё отзывы</Button>

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
