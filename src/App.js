import React, { Component } from 'react';
import './App.css';
import Navigation from './Navbar';
import Routes from './Routes';
import PelaajaValikko from './PelaajaValikko';
import Home from './Home';
import ScoreBoard from './ScoreBoard';
import Peli from './Peli';

class App extends Component {
  state = {
    visible: true,
    playerCount: 0,
    playerTurn: 1,
    totalTurns: 1,
    playerPoints: [],
  }

  constructor(props) {
    super(props);
  }

  handleCalculation = () => {
    if (this.state.playerTurn === 1) {
      this.state.playerPoints[0]--;
    }
    else if (this.state.playerTurn === 2) {
      this.state.playerPoints[1]--;
    }
    else if (this.state.playerTurn === 3) {
      this.state.playerPoints[2]--;
    }
    else {
      this.state.playerPoints[3]--;
    }
  }

  handleAddPoints = () => {
    let number = this.state.totalTurns / 10;
    let number1 = this.state.totalTurns / 100;
    let number2 = this.state.totalTurns / 500;
    if (Number.isInteger(number2)) {
      let index = this.state.playerTurn;
      index--;
      const num = 250;
      for (let i = 0; i < num; i++) {
        this.state.playerPoints[index]++;
      }
    }
    else if (Number.isInteger(number1)) {
      let index = this.state.playerTurn;
      index--;
      const num = 40;
      for (let i = 0; i < num; i++) {
        this.state.playerPoints[index]++;
      }
    }
    else if (Number.isInteger(number)) {
      let index = this.state.playerTurn;
      index--;
      const num = 5;
      for (let i = 0; i < num; i++) {
        this.state.playerPoints[index]++;
      }
    }
  }

  handleVisible = () => {
    this.setState({visible: false});
  }

  handleCount = (count) => {
    let points = 20;
    this.setState({playerCount: count});
    for (let i = 0; i < count; i++) {
      this.state.playerPoints.push(points);
    }
  }

  handleTurn = (turns) => {
    if (this.state.playerTurn === this.state.playerCount) {
      this.setState({playerTurn: 1})
    }
    else {
      turns++;
      this.setState({playerTurn: turns});
    }
  }

  handleTotalTurn = (total) => {
    total++;
    this.setState({totalTurns: total});
  }

  render() {
    if (this.state.visible === true) {
      return (
        <React.Fragment>
          <div style = {{height:"100vh"}} className="App">
            <Navigation />
            <Routes />
            <main className="container">
              <Home />
              <PelaajaValikko 
              onVisible={this.handleVisible} 
              onCount={this.handleCount}
              />
            </main>
          </div>
        </React.Fragment>
      );
    }
    else if (this.state.playerPoints[0, 1, 2, 3] === 0) {

    }
    else {
      return (
        <div style = {{height:"100vh"}} className="App">
          <Navigation />
          <Routes />
          <ScoreBoard 
          playerCount={this.state.playerCount} 
          playerPoints={this.state.playerPoints}
          />
          <Peli 
          playerCount={this.state.playerCount}
          playerTurn={this.state.playerTurn}
          totalTurns={this.state.totalTurns}
          onTurn={this.handleTurn}
          onTotalTurn={this.handleTotalTurn}
          onCalculatePoints={this.handleCalculation}
          onAddPoints={this.handleAddPoints}
          />
        </div>
      )
    }
  }
}

export default App;
