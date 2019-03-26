import React from 'react';
import {HashRouter as Router, Link, Switch, Route} from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Buttons from './pages/admin/ui/buttons';
import NoMatched from './pages/noMatched';
//import Modals from './pages/admin/ui/modals';
import Loadings from './pages/admin/ui/loadings';
import Notification from './pages/admin/ui/notification'
import Message from './pages/admin/ui/messages'
import MyTabs  from './pages/admin/ui/tabs'
import Modals from './pages/admin/ui/modals'
import Gallery from './pages/admin/ui/gallery'
import MyCarousel from './pages/admin/ui/carousel'

export default class IRooter extends React.Component {
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                    {/*<Route path="/login" component={Login}></Route>
                    <Route path="/order/detail" component={}></Route>*/}
                    <Route path="/admin" render={() => <Admin>
                        <Route path="/admin/ui/buttons" component={Buttons}></Route>
                        <Route path="/admin/ui/modals" component={Modals}></Route>
                        <Route path="/admin/ui/loadings" component={Loadings}></Route>
                        <Route path="/admin/ui/notification" component={Notification}></Route>
                        <Route path="/admin/ui/messages" component={Message}></Route>
                        <Route path="/admin/ui/tabs" component={MyTabs}></Route>
                        <Route path="/admin/ui/gallery" component={Gallery}></Route>
                        <Route path="/admin/ui/carousel" component={MyCarousel}></Route>
                    </Admin>}>
                    </Route>

                    <Route component={NoMatched}></Route>
                    </Switch>

                </App>
            </Router>
        )
    }

};