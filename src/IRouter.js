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
import MyTabs from './pages/admin/ui/tabs'
import Modals from './pages/admin/ui/modals'
import Gallery from './pages/admin/ui/gallery'
import MyCarousel from './pages/admin/ui/carousel'
import LoginFrom from './pages/admin/form/login'
import RegistorFrom from './pages/admin/form/registor'
import BasicTable from './pages/admin/table/basic';
import AvanceTable from './pages/admin/table/advance';
import CustomSearch from  './pages/admin/table/customSearch';
import ExtendsRow from  './pages/admin/table/ExtendsRow';
//import MergeCell from  './pages/admin/table/MergeCell';
import HeaderGroup from  './pages/admin/table/headerGroup';
import Home from './pages/home';
import City from './pages/city';
import Order from './pages/order';
import Common from './common'
import  OrderDetail from './pages/order/detail';





export default class IRooter extends React.Component {
    render() {
        return (
            <Router>
                <App>
                    {/*<Route path="/login" component={Login}></Route>
                    <Route path="/order/detail" component={}></Route>*/}
                    <Route path="/admin" render={() => <Admin>
                        <Switch>
                            <Route path="/admin/home" component={Home}/>
                            <Route path="/admin/ui/buttons" component={Buttons}/>
                            <Route path="/admin/ui/modals" component={Modals}/>
                            <Route path="/admin/ui/loadings" component={Loadings}/>
                            <Route path="/admin/ui/notification" component={Notification}/>
                            <Route path="/admin/ui/messages" component={Message}/>
                            <Route path="/admin/ui/tabs" component={MyTabs}/>
                            <Route path="/admin/ui/gallery" component={Gallery}/>
                            <Route path="/admin/ui/carousel" component={MyCarousel}/>
                            <Route path="/admin/form/login" component={LoginFrom}/>
                            <Route path="/admin/form/reg" component={RegistorFrom}/>
                            <Route path="/admin/table/basic" component={BasicTable}/>
                            <Route path="/admin/table/high" component={AvanceTable}/>
                            <Route path="/admin/table/customSearch" component={CustomSearch}/>
                            <Route path="/admin/table/extendsRow" component={ExtendsRow}/>
                           {/*// <Route path="/admin/table/mergeCell" component={MergeCell}></Route>*/}
                            <Route path="/admin/table/headerGroup" component={HeaderGroup}/>
                            <Route path="/admin/city" component={City}/>
                            <Route path="/admin/order" component={Order}/>
                        </Switch>
                    </Admin>}>
                    </Route>
                    <Route path="/common" render={() => {
                        return <Common>
                            <Route path="/common/order/detail/:id" component={OrderDetail}/>
                        </Common>;
                    }}
                    />
                    <Route component={NoMatched}/>

                </App>
            </Router>
        )
    }

};