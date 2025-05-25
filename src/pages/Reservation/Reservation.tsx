import {SectionWrapper} from "../../components/common/SectionWrapper.ts";
import styled from "styled-components";
import {useEffect, useState} from "react";
import { P, Span, theme} from "../../styles/theme.ts";
import {FlexWrapper} from "../../components/common/FlexWrapper.ts";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {Button} from "../../components/common/Button.tsx";
import ResPageForm from "./ResPageForm.tsx";
import {format} from "date-fns";
import {differenceInCalendarDays} from "date-fns";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import HousesSection from "./HousesSection.tsx";
import { House } from "./types";
import {SaunaSection} from "./SaunaSection.tsx";
import {useBathPricing} from "./useBathPricing.ts";

export default function Reservation() {
    const [houses, setHouses] = useState<House[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/houses")
            .then(res => {
                if (!res.ok) throw new Error("Ошибка загрузки домов");
                return res.json();
            })
            .then(data => setHouses(data))
            .catch(err => console.error("Ошибка:", err));
    }, []);

    const [checkIn, setCheckIn] = useState<Date | null>(null);
    const [checkOut, setCheckOut] = useState<Date | null>(null);
    const [page, setPage] = useState<number>(0);
    const [selectedHouse, setSelectedHouse] = useState<number | null>(null);
    const [selectedSaunaSlots, setSelectedSaunaSlots] = useState<Record<string, Set<string>>>({});
    const [addTub, setAddTub] = useState(false);
    const [selectedFillId, setSelectedFillId] = useState<number>(0);
    const [showAlert, setShowAlert] = useState(false);

    const handlePrev = () => setPage((p) => Math.max(0, p - 1));
    const handleNext = () => {
        if (page === 0 && selectedHouse === null) {
            setShowAlert(true);
            return;
        }
        if (page === 1 && saunaHoursCount > 0 && saunaHoursCount < 2) {
            setShowAlert(true);
            return;
        }
        setShowAlert(false);
        setPage((p) => Math.min(2, p + 1));
    };

    const pageTitles = ["Выберите домик", "Баня и чан", "Контакты"];

    const generateSaunaHours = () => {
        const hours: string[] = [];
        for (let h = 10; h < 22; h++) {
            hours.push(`${h.toString().padStart(2, '0')}:00`);
        }
        return hours;
    };

    const saunaSlotsData: { date: Date; slots: string[] }[] = [
        {date: new Date(2025, 4, 21), slots: generateSaunaHours()},
        {date: new Date(2025, 4, 22), slots: generateSaunaHours()},
        {date: new Date(2025, 4, 23), slots: generateSaunaHours()},
        {date: new Date(2025, 4, 24), slots: generateSaunaHours()},
    ];

    const toggleSlot = (dateKey: string, slot: string) => {
        setSelectedSaunaSlots((prev) => {
            const daySet = new Set(prev[dateKey] ?? []);
            if (daySet.has(slot)) daySet.delete(slot);
            else daySet.add(slot);
            return {...prev, [dateKey]: daySet};
        });
    };

    const handleSubmit = ({checkIn, checkOut}: { checkIn: Date | null; checkOut: Date | null }) => {
        setCheckIn(checkIn);
        setCheckOut(checkOut);
        console.log("📥 Получено в Reservation", checkIn, checkOut);
    };

    const {
        saunaHoursCount,
        saunaCost,
        tubCost,
        tubFillPrice
    } = useBathPricing(selectedSaunaSlots, addTub, selectedFillId);

    const calculateTotal = () => {
        let total = 0;
        const selectedDays = checkIn && checkOut ? Math.max(1, differenceInCalendarDays(checkOut, checkIn)) : 0;
        if (selectedHouse !== null) {
            const house = houses.find(h => h.id === selectedHouse);
            if (house) total += house.cost * selectedDays;
        }
        total += saunaCost + tubCost + tubFillPrice;
        return total;
    };
    const [showSuccess, setShowSuccess] = useState(false);

    const handleFinalSubmit = () => {
        const formattedCheckIn = checkIn ? format(checkIn, "yyyy-MM-dd") : null;
        const formattedCheckOut = checkOut ? format(checkOut, "yyyy-MM-dd") : null;

        const saunaTimes = Object.values(selectedSaunaSlots).flatMap((set) =>
            Array.from(set)
        );

        const totalSum = calculateTotal();

        const submissionData = {
            checkIn: formattedCheckIn,
            checkOut: formattedCheckOut,
            selectedHouse,
            saunaTimes,
            addTub,
            fillId: addTub ? selectedFillId : null,
            total: totalSum
        };

        console.log("📤 Отправка данных:", submissionData);

        setCheckIn(null);
        setCheckOut(null);
        setSelectedHouse(null);
        setSelectedSaunaSlots({});
        setAddTub(false);
        setSelectedFillId(0);

        setPage(0);

        setShowSuccess(true);
    };

    return (
        <>
            <SectionWrapper style={{padding: '15px clamp(15px, 5vw, 80px)'}}>
                <ResPageForm onSubmit={handleSubmit}/>
                <Wrapper>
                    <FlexWrapper justify="space-between" gap="24px" align="center">
                        <NavArrowButton onClick={handlePrev} disabled={page === 0}>
                            <ArrowBackIosNewIcon/> Назад
                        </NavArrowButton>

                        <Span>{pageTitles[page]}</Span>

                        <NavArrowButton onClick={handleNext} disabled={page === pageTitles.length - 1}>
                            Вперёд <ArrowForwardIosIcon/>
                        </NavArrowButton>

                        <Snackbar
                            open={showAlert}
                            autoHideDuration={6000}
                            onClose={() => setShowAlert(false)}
                            anchorOrigin={{vertical: "top", horizontal: "center"}}
                        >
                            <Alert
                                elevation={6}
                                variant="filled"
                                onClose={() => setShowAlert(false)}
                                severity="warning"
                                sx={{width: "100%"}}
                            >
                                {page === 0
                                    ? "Пожалуйста, выберите домик перед переходом."
                                    : "Минимальное время аренды бани — 2 часа."
                                }
                            </Alert>
                        </Snackbar>

                        <Snackbar
                            open={showSuccess}
                            autoHideDuration={6000}
                            onClose={() => setShowSuccess(false)}
                            anchorOrigin={{vertical: "top", horizontal: "center"}}
                        >
                            <Alert
                                elevation={6}
                                onClose={() => setShowSuccess(false)}
                                severity="success"
                                sx={{width: "100%"}}
                            >
                                Данные успешно отправлены!
                            </Alert>
                        </Snackbar>

                    </FlexWrapper>

                    <ContentWrapper>
                        {page === 0 && (
                            <HousesSection
                                houses={houses}
                                selectedHouse={selectedHouse}
                                onSelect={setSelectedHouse}
                            />
                        )}

                        {page === 1 && (
                            <SaunaSection
                                saunaSlotsData={saunaSlotsData}
                                selectedSaunaSlots={selectedSaunaSlots}
                                toggleSlot={toggleSlot}
                                addTub={addTub}
                                setAddTub={setAddTub}
                                selectedFillId={selectedFillId}
                                setSelectedFillId={setSelectedFillId}
                            />
                        )}

                        {page === 2 && (
                            <FlexWrapper>
                                <FlexWrapper direction="column" gap="16px">
                                    <P>Здесь будут контактные данные</P>
                                    <P style={{fontWeight: '600'}}>Итоговая стоимость: {calculateTotal()}₽</P>
                                    <Button onClick={handleFinalSubmit}>Отправить</Button>
                                </FlexWrapper>
                            </FlexWrapper>
                        )}
                    </ContentWrapper>
                </Wrapper>
            </SectionWrapper>
        </>
    );
}

const Wrapper = styled.div`
    width: 100%;
    margin-top: 12px;
    padding: 24px;
    border-radius: 10px;
    background-color: var(--light-elem-color);
    border: 1px solid var(--add-color);
`;

const ContentWrapper = styled.div`
    margin-top: 24px;
`;

const NavArrowButton = styled(Button)`
    display: flex;
    align-items: center;
    gap: 2px;
    width: fit-content;
    padding: 8px 10px;
    text-transform: lowercase;
    color: ${theme.fontColor.main};
    background-color: var(--white-color);

    opacity: ${({disabled}) => (disabled ? 0.4 : 1)};
    pointer-events: ${({disabled}) => (disabled ? "none" : "pointer")};

    &:hover {
        background-color: var(--add-color);
    }
`;