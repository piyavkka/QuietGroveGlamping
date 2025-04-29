import {Button} from "@mui/material";

export default function Reservation() {
        return (
            <div className="reservation-form">
                <input placeholder="заезд"/>
                <input placeholder="выезд"/>
                <input placeholder="гости"/>
                <Button variant="contained" href="#"
                        sx={{bgcolor: 'var(--main-color)', fontFamily: 'Montserrat', width: '200px', height: '56px'}}>найти
                </Button>
            </div>
        );
}
