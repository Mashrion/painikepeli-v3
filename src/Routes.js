import React, { Component } from 'react';
import { Router, Switch, Route} from 'react-router-dom';

import history from './history';
import Home from "./Home";
import PelaajaValikko from './PelaajaValikko';
import ScoreBoard from './ScoreBoard';
import Peli from './Peli';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/Home" exact component={Home} />
                    <Route path="/PelaajaValikko" component={PelaajaValikko} />
                    <Route path="/ScoreBoard" component={ScoreBoard} />
                    <Route path="/Peli" component={Peli} />
                </Switch>
            </Router>
        )
    }
}