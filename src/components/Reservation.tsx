import {Component} from 'react';
import {Button} from "@mui/material";

class Reservation extends Component {
    render() {
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
}

export default Reservation;