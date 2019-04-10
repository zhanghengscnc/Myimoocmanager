import React from 'react';
import {Row, Col} from 'antd';
import Header from './components/header'
import './style/common.less';

export default class Common extends React.Component {
    render() {
        return (
            < Row className="container">
                <Col span={24} className="main">
                    <Row>
                        <Header menuLevel="second"/>
                    </Row>
                    <Row>
                        {this.props.children}
                    </Row>
                </Col>
            </Row>
        );

    }

};