import React from 'react';
import {Row, Col} from 'antd';
import Header from './components/header'
import Footer from './components/footer'
import NavLeft from "./components/navleft";
import './style/common.less';
import Home from "./pages/home/index";

export default class admin extends React.Component {
    render() {
        return (
            < Row className="container">
                < Col span={2} className="nav-left">
                    <NavLeft/>
                </Col>
                <Col span={22} className="main">
                    <Row>
                        <Header userName={"zhangheng"} location={"成都"}/>
                    </Row>
                    <Row>
                        {this.props.children}
                    </Row>
                    <Row>
                        <Footer/>
                    </Row>
                </Col>
            </Row>
        );

    }

};