import React, { Component } from 'react';
import './Peli.css';
import { Button } from 'react-bootstrap';

class Peli extends Component {


    render() {
        const {onTurn, onTotalTurn, onCalculatePoints, points, onAddPoints} = this.props;
        const {playerCount} = this.props;
        let {playerTurn, totalTurns} = this.props;
        return (
            <div>
                <h1 className="Turns">Player {playerTurn} turn!</h1>
                <div className="Button">
                    <Button className="btn" onClick={() => {onTurn(playerTurn); onTotalTurn(totalTurns); onCalculatePoints(points); onAddPoints();}}>Pelaa!</Button>
                </div>
            </div>
        );
    }
}
 
export default Peli;