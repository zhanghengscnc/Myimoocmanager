import React from 'react';
import {Form, Table, Card, Row, Col,Select,Button,DatePicker} from 'antd';
import axios from './../../axios';
import './../../style/common.less'


const FormItem = Form.Item;
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

export default class order extends React.Component {
    state = {
        dataSource:[],
        selectedRowKeys:[]
    }

    componentDidMount() {
        this.requestList()
    }

    requestList = () =>{
        axios.commonAxios({
            url: "/order/list",
            method: "get",
            data:{
                params:{

                }
            }
        }).then((res)=>{
            this.setState({
                dataSource:res.data.res.dataList
            })
        })
    }
    onSelectChange = (selectedRowKeys, selectedRows) =>{
        this.setState({
            selectedRowKeys
        })
        console.log(this.state.selectedRowKeys)
    };
    handleOnRow = (record,index)=>{
        let selectedRowKeys = this.state.selectedRowKeys;
        return{
            onDoubleClick:(e)=>{
                console.log(record)
                console.log(selectedRowKeys)
            }
        }
    }
    render() {
        const columns = [{
            title: '订单编号',
            dataIndex: 'order_sn'
        }, {
            title: '车辆编号',
            dataIndex: 'bike_sn'
        }, {
            title: '用户名',
            dataIndex: 'user_name'
        }, {
            title: '手机号',
            dataIndex: 'mobile'
        }, {
            title: '里程',
            dataIndex: 'distance',
            render(distance) {
                return (distance / 1000) + " " + "km";
            }
        }, {
            title: '行程时长',
            dataIndex: 'total_time'
        }, {
            title: '状态',
            dataIndex: 'status',
            render(status) {
                return status == 1 ? '进行中' : '行程结束';
            }
        }, {
            title: '开始时间',
            dataIndex: 'start_time'
        }, {
            title: '结束时间',
            dataIndex: 'end_time'
        }, {
            title: '订单金额',
            dataIndex: 'total_fee'
        }, {
            title: '实付金额',
            dataIndex: 'user_pay'
        }];
        let rowSelection = {
            type:"checkbox",
            selectedRowKeys:this.state.selectedRowKeys,
            onChange:this.onSelectChange,

        }
        return(
            <div>
                <Card style={{marginBottom:10}}>
                    <FilterForm wrappedComponent={(inst) =>this.filterForm = inst}/>
                </Card>
                <Card>
                    <Button type="primary" style={{marginLeft:10 ,marginBottom:10}}>订单详情</Button>
                    <Button type="primary" style={{marginLeft:10,marginBottom:10}}>结束订单</Button>
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource}
                        rowKey={record => record.id}
                        rowSelection={rowSelection}
                        onRow={this.handleOnRow}
                    />
                </Card>
            </div>
        )
    }

}

class FilterForm extends React.Component {
    resetFilterForm =() =>{
        this.props.form.resetFields()
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return(
            <div>
                <Form layout="inline" className="ant-advanced-search-form">
                    <Row gutter={{sm:8,md:24}}>
                        <Col md={6} sm={24}>
                            <FormItem label="城市">
                                {
                                    getFieldDecorator("city_id",{
                                    })(
                                        <Select placeholder="请选择城市">
                                            <Option value="">全部</Option>
                                            <Option value="1">北京市</Option>
                                            <Option value="2">天津市</Option>
                                        </Select>
                                    )
                                }
                            </FormItem>
                        </Col>
                        <Col md={6} sm={24}>
                            {
                                getFieldDecorator("date")(
                                    <RangePicker showTime={true} format={"YYYY-MM-DD"}/>
                                )
                            }
                        </Col>
                        <Col md={6} sm={24}>
                            {
                                getFieldDecorator("orderStatus")(
                                    <Select placeholder="请选择状态">
                                        <Option value="1">有效</Option>
                                    </Select>
                                )
                            }
                        </Col>
                        <Col>
                            <Button type="primary">查询</Button>
                            <Button onClick={this.resetFilterForm} style={{marginLeft:10}}>重置</Button>
                        </Col>
                    </Row>
                </Form>

            </div>
        )
    }
}
 FilterForm = Form.create({})(FilterForm);