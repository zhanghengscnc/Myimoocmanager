import React from 'react';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import Main from './Main';
import About from './About';
import Topic from './Topic';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/about/topic">Topic</Link>
                            </li>
                        </ul>
                        <hr/>
                        <Switch>
                        <Route path="/" exact={true} component={Main}></Route>
                        <Route path='/about' exact={true} component={About}></Route>
                        <Route path='/about/topic' component={Topic}></Route>
                        </Switch>
                     </div>
                </HashRouter>
            </div>
        );
    }
}