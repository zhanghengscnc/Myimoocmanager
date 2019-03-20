import React from 'react';
import {HashRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Home from './Home'
import About from "./../routerDemo4/About"
import Main from "./../routerDemo4/Main"
import Topic from "./../routerDemo4/Topic"
import Info from  "./../routerDemo4/Info"
import NoMatch from  "./../routerDemo4/NoMatch"


export default class IRooter extends React.Component {
    render() {
        return (
            <Router>
                <Home>
                    <Switch>
                    <Route exact path="/" component={Main}></Route>
                    <Route path="/About" component={About}></Route>
                    <Route path="/Topic" render={() => <Topic>
                            <Route path="/Topic/:id" component={Info}></Route>
                    </Topic>}></Route>
                    <Route component={NoMatch}></Route>
                    </Switch>
                </Home>
            </Router>
        )
    }

};