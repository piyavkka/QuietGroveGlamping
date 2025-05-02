import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {P, theme} from "../styles/theme.ts";

const faq = [
    {
        question: 'Какие типы размещения доступны в глэмпинге?',
        answer: 'У нас есть барнхаусы, уютные домики и комфортные палатки-домики с полными удобствами.',
    },
    {
        question: 'Есть ли у вас баня или чан?',
        answer: 'Да! У нас есть банный комплекс, включающий русскую баню и горячий чан под открытым небом.',
    },
    {
        question: 'Можно ли приехать с детьми?',
        answer: 'Да, мы рады семьям с детьми. У нас есть безопасная территория и развлечения для малышей.',
    },
    {
        question: 'Допускаются ли домашние животные?',
        answer: 'Да, ваш питомец может отдыхать с вами! Главное — заранее сообщите нам и следите за чистотой.',
    },
    {
        question: 'Какие удобства есть внутри домиков?',
        answer: 'В каждом домике есть душ, туалет, кухня, отопление и зона отдыха с видом на природу.В каждом домике есть душ, туалет, кухня, отопление и зона отдыха с видом на природу.В каждом домике есть душ, туалет, кухня, отопление и зона отдыха с видом на природу.В каждом домике есть душ, туалет, кухня, отопление и зона отдыха с видом на природу.',
    },
    {
        question: 'Как происходит заезд и выезд?',
        answer: 'Заезд возможен с 15:00, выезд — до 12:00. Возможны индивидуальные условия по договорённости.',
    },
    {
        question: "Можно ли с питомцами?",
        answer: `Да! Мы всегда рады четвероногим друзьям! Но они должны быть воспитаны и неагрессивны.\n
        Если ваша собака принадлежит к бойцовским породам — просьба согласовать возможность её проживания с менеджером по телефону.\n
        Чтобы избежать некомфортных ситуаций с другими гостями, возьмите с собой все необходимые принадлежности для питомца: ошейник, поводок, гигиенические пакеты для выгула. Соблюдайте правила общественных зон.\n
        Доплата за питомца — 5000 ₽`
    },
];



export default function AccordionUsage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <AccordionContainer>
            {faq.map((item, index) => (
                <AccordionItemComponent
                    key={index}
                    item={item}
                    isOpen={openIndex === index}
                    onClick={() => toggle(index)}
                />
            ))}
        </AccordionContainer>
    );
}

function AccordionItemComponent(
    {
        item,
        isOpen,
        onClick,
    }: {
        item: { question: string; answer: string };
        isOpen: boolean;
        onClick: () => void;
    }) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <AccordionItem>
            <AccordionQuestion onClick={onClick}>
                {item.question}
                {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </AccordionQuestion>
            <AccordionAnswerWrapper height={height} isOpen={isOpen}>
                <div ref={contentRef}>
                    <StyledP>{item.answer}</StyledP>
                </div>
            </AccordionAnswerWrapper>
        </AccordionItem>
    );
}

const AccordionContainer = styled.div`
    max-width: 600px;
`;

const AccordionItem = styled.div`
    border-bottom: 2px solid lightgray;
`;

const AccordionQuestion = styled.button`
    width: 100%;
    padding: ${theme.padding.small};
    background: #f8f8f8;
    text-align: left;
    font-size: ${theme.fontSize.P};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AccordionAnswerWrapper = styled.div<{ height: number; isOpen: boolean }>`
    height: ${({ height }) => height}px;
    transition: height 0.3s ease;
    overflow: hidden;
    background-color: white;
`;

const StyledP = styled(P)`
    padding: ${theme.padding.small};
    text-align: left;
    white-space: pre-line;
`;