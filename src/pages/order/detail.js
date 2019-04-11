import React from 'react';
import {Card} from 'antd';
import axios from './../../axios';
import './detail.less'
export default class OrderDetail extends React.Component{
    state={
        orderInfo: {}
    }
    componentDidMount() {
        let p_id = this.props.match.params.id

        console.log(p_id)
        debugger
        this.requestOrderDetail(p_id);
    }
    requestOrderDetail =(id) =>{
        axios.commonAxios({
            url: "/order/detail",
            method: "get",
            data:{
                params:{
                    id:id
                }
            }
        }).then((resp)=>{
            console.log(resp)
            this.setState({
                orderInfo :resp.result
            })
        })
    }
    render() {
        const info = this.state.orderInfo;
        debugger
        return(
            <div>
                <Card>
                    <div id="orderDetailMap" className='order-map'></div>
                    <div className="detail-items">
                        <div className="item-title">基础信息</div>
                        <ul className="detail-form">
                            <li>
                                <div className="detail-form-left">用车模式</div>
                                <div className="detail-form-content">{info.mode == 1 ? '服务区' : '停车点'}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">订单编号</div>
                                <div className="detail-form-content">{info.order_sn}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">车辆编号</div>
                                <div className="detail-form-content">{info.bike_sn}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">用户姓名</div>
                                <div className="detail-form-content">{info.user_name}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">手机号码</div>
                                <div className="detail-form-content">{info.mobile}</div>
                            </li>
                        </ul>
                    </div>
                    <div className="detail-items">
                        <div className="item-title">行驶轨迹</div>
                        <ul className="detail-form">
                            <li>
                                <div className="detail-form-left">行程起点</div>
                                <div className="detail-form-content">{info.start_location}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">行程终点</div>
                                <div className="detail-form-content">{info.end_location}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">行程里程</div>
                                <div className="detail-form-content">{info.distance / 1000}公里</div>
                            </li>
                        </ul>
                    </div>
                </Card>
            </div>
        )
    }
}