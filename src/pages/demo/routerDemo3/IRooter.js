import React from 'react';
import {HashRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Home from './Home'
import About from "./../routerDemo2/About"
import Main from "./../routerDemo2/Main"
import Topic from "./../routerDemo2/Topic"

export default class IRooter extends React.Component {
    render() {
        return (
            <Router>
                <Home>
                    <Route exact path="/" component={Main}></Route>
                    <Route path="/About" component={About}></Route>
                    <Route path="/Topic" render={() => <Topic>
                            <Route path="/Topic/son" component={About}></Route>
                    </Topic>}></Route>
                </Home>
            </Router>
        )
    }

};