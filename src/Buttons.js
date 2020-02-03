import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Buttons extends Component {
    render() {
        const {onTwo, onThree, onFour} = this.props;
        return (
            <div className="Buttons">
                <Button variant="primary" onClick={() => onTwo()}>2 Pelaajaa</Button>
                <Button variant="primary" className="m-2" onClick={() => onThree()}>3 Pelaajaa</Button>
                <Button variant="primary" onClick={() => onFour()}>4 Pelaajaa</Button>
            </div>
        );
    }
}
 
export default Buttons;