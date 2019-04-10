import React from 'react';
import "./../../style/common.less";
import {Row, Col} from 'antd';
import './index.less';
import Util from './../../utils/utils';
import axios from './../../axios'


export default class Header extends React.Component {
    state = {}

    componentWillMount() {

        //定时每秒更新时间
        setInterval(() => {
            let sysTime = Util.formateDate(Date.now())
            this.setState({
                sysTime
            })
        }, 1000);
        //加载天气
        this.getWeatherAPIData();
    }

    getWeatherAPIData() {
        const {location} = this.props;
        let data = {
            url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(location) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2',
            options: {
                param: 'callback'
            }
        }
        axios.jsonp(data).then((resp) => {
            if (resp.status == 'success') {
                let weatherData = resp.results[0].weather_data[0];
                this.setState({
                    sysTime: resp.date,
                    weather: weatherData.weather,
                    dayPictureUrl: weatherData.dayPictureUrl
                })
            }
        }, (resp) => {
            console.log("reject:")
        });


    }


    render() {
        const menuLevel = this.props.menuLevel;
        return (
            <div className="header">
                <Row className="header-top">
                    {
                        menuLevel?
                            <Col span="6" className="logo">
                                <img src="/assets/logo-ant.svg" alt=""/>
                                <span>IMooc 通用管理系统</span>
                            </Col>:''
                    }

                    <Col span={menuLevel ? 18 : 24}>
                        <span>欢迎光临:{this.props.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                {
                    menuLevel ? '' :
                        <Row className="breadcrumb">
                            <Col span={4} className="breadcrumb-title">首页</Col>
                            <Col span={20} className="weather">
                                <span className="date">{this.state.sysTime}</span>
                                <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt=""/>
                        </span>
                                <span className="weather-detail">{this.state.weather}</span>
                            </Col>
                        </Row>
                }

            </div>
        )

    }

}
;