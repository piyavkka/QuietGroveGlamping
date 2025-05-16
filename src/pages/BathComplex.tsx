import {useState} from "react";
import {IntroSection} from "../components/IntroSection.tsx";
import BathBg from "../assets/BathBg.png";
import {SectionWrapper} from "../components/common/SectionWrapper.ts";
import {SliderComponent} from "../components/common/SliderComponent.tsx";
import {bathServices, features, fillOptions, images} from "../components/BathData.ts";
import styled from "styled-components";
import {FlexWrapper} from "../components/common/FlexWrapper.ts";
import {Button} from "../components/common/Button.tsx";
import {H2Dark, P, Span, theme} from "../styles/theme.ts";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {CardService} from "../components/CardService.tsx";

function BathComplex() {

    const [selectedId, setSelectedId] = useState<number>(0);
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const toggleDropdown = () => setDropdownOpen((prev) => !prev);

    const selectedOption = fillOptions.find((opt) => opt.id === selectedId);

    return (
        <>
            <IntroSection
                src={BathBg}
                alt="Глэмпинг"
                title="банный комплекс"
                description="Традиционная баня подарит вам жаркий пар и глубокое расслабление, а купель с горячей водой на свежем воздухе поможет снять усталость и восстановить силы. Ощутите гармонию с природой, наслаждаясь уютом и теплом в окружении живописного леса."
            />

            <SectionWrapper>
                <FlexWrapper direction="column" gap="clamp(15px, 5vw, 80px)">
                    <FlexWrapper gap="24px" wrap="wrap">
                        <SliderContainer direction="column" gap="24px">
                            <SliderComponent images={images} height="430px"/>
                            <Card>
                                Баня доступна только при заселении в любой из домов. Подробную
                                информацию можете посмотреть на этапе бронирования
                            </Card>
                        </SliderContainer>

                        <StyledWrapper direction="column" gap="24px">
                            <H2Dark>Старорусская баня на дровах</H2Dark>
                            <P>
                                Погрузитесь в атмосферу настоящей русской бани: аромат берёзового
                                веника, жаркий пар и отдых в тишине природы. Идеальное место,
                                чтобы перезагрузиться, восстановить силы и почувствовать себя
                                живым.
                            </P>
                            <FeatureList>
                                {features.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </FeatureList>
                            <Span>от 2500 / час</Span>
                            <Button>выбрать даты</Button>
                        </StyledWrapper>
                    </FlexWrapper>

                    <FlexWrapper gap="24px" wrap="wrap">
                        <FlexWrapper direction="column" gap="24px" style={{maxWidth: '850px'}}>
                            <H2Dark>Горячий чан под открытым небом</H2Dark>
                            <P>
                                Расслабьтесь в горячем чане на свежем воздухе. В наличии —
                                наполнения с травами, уточками, хвойными ароматами и морской солью.
                                Каждый сеанс — это уникальный ритуал восстановления и уюта.
                            </P>

                            <P>{selectedOption?.description}</P>
                            <Span>Цена: {selectedOption?.price} / час</Span>
                        </FlexWrapper>
                        <FlexWrapper direction="column" gap="12px">
                            <DropdownWrapper>
                                <DropdownButton onClick={toggleDropdown}>
                                    <StyledSpan>
                                        {selectedOption?.label}
                                        {isDropdownOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    </StyledSpan>
                                </DropdownButton>

                                {isDropdownOpen && (
                                    <DropdownList>
                                        {fillOptions
                                            .filter((option) => option.id !== 0)
                                            .map((option) => (
                                                <li
                                                    key={option.id}
                                                    onClick={() => {
                                                        setSelectedId(option.id);
                                                        setDropdownOpen(false);
                                                    }}
                                                >
                                                    {option.label}
                                                </li>
                                            ))}
                                    </DropdownList>
                                )}
                            </DropdownWrapper>
                            <Img src={selectedOption?.image} alt={selectedOption?.label} />
                        </FlexWrapper>
                    </FlexWrapper>

                    <FlexWrapper direction="column" gap="24px">
                        <H2Dark>Выберите, что сделает ваш отдых особенным</H2Dark>
                        <FlexWrapper gap="24px" wrap="wrap">
                            {bathServices.map(service => (
                                <CardService
                                    key={service.id}
                                    title={service.title}
                                    description={service.description}
                                    icon={service.icon}
                                    price={service.price}
                                />
                            ))}
                        </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper>
            </SectionWrapper>
        </>
    );
}

export default BathComplex;

const SliderContainer = styled(FlexWrapper)`
    max-width: 700px;
    min-width: 0;
`;

const StyledWrapper = styled(FlexWrapper)`
    max-width: 500px;
`;

const Card = styled.div`
    background-color: #b4b198;
    border-radius: 10px;
    padding: 24px;
    text-align: center;
`;

const FeatureList = styled.ul`
    list-style-type: disc;
    padding-left: 14px;
    color: inherit;

    li {
        margin-bottom: 8px;
        color: ${theme.fontColor.main};
    }
`;

const DropdownWrapper = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    max-width: 600px;
`;

const DropdownButton = styled.button`
    background-color: ${theme.fontColor.additional};
    padding: 14px 24px;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
`;

const StyledSpan = styled(Span)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.fontColor.light};
`;

const DropdownList = styled.ul`
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    width: 100%;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
  
    padding: 5px 0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;

    li {
        padding: 14px 24px;
        white-space: nowrap;

        &:hover {
            background-color: #f0f0f0;
        }
    }
`;

const Img = styled.img`
    width: 100%;
    max-width: 400px;
    height: 400px;
    border-radius: 10px;
`;
