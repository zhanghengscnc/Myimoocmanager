import React from 'react';
import "./../../style/common.less";
import {Row, Col} from 'antd';
import './index.less';
import Util from './../../utils/utils';


export default class Header extends React.Component {
    state={}

    componentWillMount(){
        setInterval(()=>{
           let sysTime = Util.formateDate(new Date().getTime())
           this.setState({
               sysTime
           })
        },1000);
    }




render()
{
    return (
        <div className="header">
            <Row className="header-top">
                <Col span={24}>
                    <span>欢迎光临:{this.props.userName}</span>
                    <a href="#">退出</a>
                </Col>
            </Row>
            <Row className="breadcrumb">
                <Col span={4} className="breadcrumb-title">首页</Col>
                <Col span={20} className="weather">
                    <span>{this.state.sysTime}</span>
                    <span className="weather-detail">晴转多云</span>
                </Col>
            </Row>
        </div>
    )

}

}
;