import React from 'react';
import {HashRouter as Router, Link, Switch, Route} from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Buttons from './pages/admin/ui/buttons';
import NoMatched from './pages/noMatched';

export default class IRooter extends React.Component {
    render() {
        return (
            <Router>
                <App>

                    <Route path="/admin" render={()=><Admin><Route path="/admin/ui/buttons" component={Buttons}></Route></Admin>}></Route>
                    {/*<Route path="/login" component={Login}></Route>
                    <Route path="/order/detail" component={}></Route>*/}
                    <Route component={NoMatched}></Route>
                </App>
            </Router>
        )
    }

};