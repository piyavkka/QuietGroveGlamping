import {Component} from 'react';

class Reservation extends Component {
    render() {
        return (
            <div className="reservation-form">
                <input placeholder="заезд"/>
                <input placeholder="выезд"/>
                <input placeholder="гости"/>
                <button type="submit">найти</button>
            </div>
        );
    }
}

export default Reservation;