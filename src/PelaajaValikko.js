import React, { Component } from 'react';
import "./PelaajaValikko.css";
class PelaajaValikko extends Component {


    render() {
        const {onVisible, onCount} = this.props;
        return (
            <div className="Header">
                <h1>Kuinka monta pelaajaa?</h1>
                <div className="Buttons">
                    <button className="btn btn-primary btn-sm" onClick={() => {onVisible(); onCount(2);}}>2 Pelaajaa</button>
                    <button className="btn btn-primary btn-sm m-2" onClick={() => {onVisible(); onCount(3);}}>3 Pelaajaa</button>
                    <button className="btn btn-primary btn-sm" onClick={() => {onVisible(); onCount(4);}}>4 Pelaajaa</button>
                </div>
            </div>
        );
    }
}
 
export default PelaajaValikko;