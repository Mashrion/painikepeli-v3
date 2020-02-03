import React, { Component } from 'react';
import './ScoreBoard.css';


class ScoreBoard extends Component {

    render() {
        const {playerCount} = this.props;
        let {playerPoints} = this.props;

        if (playerCount === 2) {
            return (
                <div className="Header">
                    <ul className="List">
                        <li>Player 1</li>            
                        <p>Pisteet: {playerPoints[0]}</p>
                        <li>Player 2</li>
                        <p>Pisteet: {playerPoints[1]}</p>
                    </ul>
                </div>
            );
        }
        else if (playerCount === 3) {
            return (
                <div className="Header">
                    <ul className="List">
                        <li>Player 1</li>
                        <p>Pisteet: {playerPoints[0]}</p>
                        <li>Player 2</li>
                        <p>Pisteet: {playerPoints[1]}</p>
                        <li>player 3</li>
                        <p>Pisteet: {playerPoints[2]}</p>                   
                    </ul>
                </div>
            );
        }
        else {
            return (
                <div className="Header">
                    <ul className="List">
                        <li>Player 1</li>
                        <p>Pisteet: {playerPoints[0]}</p>
                        <li>Player 2</li>
                        <p>Pisteet: {playerPoints[1]}</p>
                        <li>Player 3</li>
                        <p>Pisteet: {playerPoints[2]}</p>
                        <li>Player 4</li>
                        <p>Pisteet: {playerPoints[3]}</p>
                    </ul>
                </div>
            );
        }
    }
}
 
export default ScoreBoard;