import React from 'react';
import {Table, Modal, message, Card, Form, Select, Button, Row, Col} from "antd";
import Utils from './../../utils/utils';
import axios from './../../axios';
import './index.less'


const FormItem = Form.Item;
const Option = Select.Option;
export default class City extends React.Component {
    state = {
        isShowOpenCity: false,
        list: [],
        loading: false
    };

    componentDidMount() {
        this.request();
    };

    request = () => {
        this.setState({
            loading: true,
        })
        axios.myAxiosCity({
            url: "/city/list",
            method: "get"
        }).then((resp) => {
            if (resp) {
                let dataList = resp.data.list.map((item, index) => {
                        item.key = index
                        return item
                    }
                )
                this.setState({
                    list: dataList,
                    loading: false
                })
            }
        }, (error) => {
            message.error(error)
        })


    };


    handleOpenCity = () => {
        this.setState({
            isShowOpenCity:true
        })
    };
    handleOpenCityCancel =()=>{
        this.setState({
            isShowOpenCity:false
        })
    };
    handleOpenCityOk = () =>{
        let openCityInfo = this.cityForm.props.form.getFieldsValue();
        Modal.info({content:JSON.stringify(openCityInfo)});
    };

    render() {
        const columns = [
            {
                title: '城市ID',
                dataIndex: 'id'
            }, {
                title: '城市名称',
                dataIndex: 'name'
            }, {
                title: '用车模式',
                dataIndex: 'mode',
                render(model) {
                    return model == 1 ? '停车点' : '禁停区'
                }
            }, {
                title: '营运模式',
                dataIndex: 'op_mode',
                render(op_mode) {
                    return op_mode === 1 ? '自营' : '加盟';
                }
            }, {
                title: '授权加盟商',
                dataIndex: 'franchisee_name'
            },
            {
                title: '城市管理员',
                dataIndex: 'city_admins',
                render(arr) {
                    return arr.map((item) => {
                        return item;
                    }).join(',');
                },
            },
            {
                title: '城市开通时间',
                dataIndex: 'open_time',
                render: Utils.formateDate
            }, {
                title: '操作时间',
                dataIndex: 'update_time',
                render: Utils.formateDate //格式化时间戳
            }, {
                title: '操作人',
                dataIndex: 'sys_user_name'
            }
        ];
        return (
            <div>
                <FilterForm wrappedComponentRef={inst => this.filterForm = inst}/>
                <Button type="primary" onClick={this.handleOpenCity}>开通城市</Button>
                <Table columns={columns} dataSource={this.state.list}/>
                <Modal
                    title="开通城市"
                    onOk={this.handleOpenCityOk}
                    onCancel={this.handleOpenCityCancel}
                    visible={this.state.isShowOpenCity}
                >
                    <MyOpenCityForm wrappedComponentRef={(inst) => this.cityForm = inst}/>
                </Modal>
            </div>

        );
    }

};

class FilterForm extends React.Component {
    handleSearch = () => {
        this.props.form.validateFields((err, values)=>{
            if (!err) {
                Modal.info({content:JSON.stringify(values)})
            }
        })
    };
    render() {
        const {getFieldDecorator} = this.props.form;
        const formLayout = {
            labelCol: {
                span:2
            },
            wrapperCol: {
                span:6
            }
        };
        return (
            <div>
                <Form  layout="inline" {...formLayout}>
                    <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                        <Col md={8} sm={24}>
                        <FormItem label="城市">
                            {
                                getFieldDecorator("city_id",
                                )(
                                    <Select placeholder="全部"
                                        className='block'
                                    >
                                        <Option value="">全部</Option>
                                        <Option value="1">北京</Option>
                                        <Option value="2">天津</Option>
                                        <Option value="3">深圳</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        </Col>
                        <Col md={8} sm={24}>
                        <FormItem label="用车模式">
                            {
                                getFieldDecorator("model")(
                                    <Select >
                                        <Option value="">全部</Option>
                                        <Option value="1">指定停车点模式</Option>
                                        <Option value="2">禁停区模式</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        </Col>
                        <Col md={8} sm={24}>
                        <FormItem label="营运模式">
                            {
                                getFieldDecorator('op_mode')(
                                    <Select
                                        placeholder="全部"
                                    >
                                        <Option value="">全部</Option>
                                        <Option value="1">自营</Option>
                                        <Option value="2">加盟</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        </Col>
                    </Row>
                    <Row >
                        <Col md={8} sm={24}>
                        <FormItem label="加盟商授权状态">
                            {
                                getFieldDecorator('auth_status')(
                                    <Select
                                       // style={{width:'100%'}}
                                        placeholder="全部"
                                    >
                                        <Option value="">全部</Option>
                                        <Option value="1">已授权</Option>
                                        <Option value="2">未授权</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        </Col>
                        <Col md={8} sm={24}>
                        {<FormItem>
                            <Button type="primary" onClick={this.handleSearch}>查询</Button>
                            <Button>重置</Button>
                        </FormItem>}
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }

}

FilterForm = Form.create({})(FilterForm);

class OpenCityForm extends React.Component {

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                span: 5
            },
            wrapperCol: {
                span: 19
            }

        }
        return (
            <div>
                <FormItem label="开通城市">
                    {
                        getFieldDecorator("city_id", {
                            initialValue: '1'
                        })(
                            <Select style={{width: 100}}>
                                <Option value="">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="营运模式"  {...formItemLayout}>
                    {
                        getFieldDecorator('op_mode', {
                            initialValue: '1'
                        })(
                            <Select style={{width: 100}}>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>
                            </Select>
                        )
                    }

                </FormItem>
                <FormItem label="用车模式"  {...formItemLayout}>
                    {
                        getFieldDecorator('use_mode', {
                            initialValue: '1'
                        })(
                            <Select style={{width: 100}}>
                                <Option value="1">指定停车点</Option>
                                <Option value="2">禁停区</Option>
                            </Select>
                        )
                    }
                </FormItem>
            </div>
        );
    }
}
const MyOpenCityForm = Form.create({})(OpenCityForm);