import React from 'react';
import {Card, Table, message, Modal, Button, Badge, Tag} from 'antd';
import axios from './../../../../axios/index.js';
import util from './../../../../utils/utils';

export default class AvanceTable extends React.Component {
    state = {
        dataSource: [],
        selectedRowKeys: [],
        selectedRows: null,
    };
    param = {
        page: 1
    };


    componentDidMount() {
        //请求mock数据
        this.request();
    }

    request = () => {
        const evalPage = this.param.page ? this.param.page : 1;
        axios.ajax({
            url: "/table/list",
            method: "get",
            data: {
                params: {
                    page: this.param.page ? this.param.page : 1
                },
                // isShowLoading:true
            }

        }).then((resp) => {
            if (resp.code === 0) {
                this.setState({
                    dataSource2: resp.tableList,
                    //从服务器返回分页器属性
                    pagination: util.pagination(resp, evalPage)
                })
            }
        }, (resp) => {
            message.error("返回数据出错：" + resp.message)
        });
    };
    onRowClick1 = (record, index) => {
        const keys = this.state.selectedRowKeys;
        if (keys.indexOf(index) > -1) {
            keys.splice(keys.indexOf(index), 1)
        } else {
            keys.push(index);
        }
        console.log("new :", keys);
        this.setState({
            selectedRowKeys: keys,
            selectedItem: record
        });
    };
    onRowClick = (record, index) => {
        let selectKey = [index];
        Modal.info({
            title: '信息',
            content: `用户名:${record.userName},用户爱好:${record.interest}`
        });
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    };
    onChangeOfCheckbox = (selectedRowKeys, selectedRows) => {
        this.setState({
            selectedRowKeys,
            selectedRows
        })
    };
    handleCheckBoxButton = () => {
        let rows = this.state.selectedRows;
        let ids = [];
        rows.map(item => ids.push(item.id))
        Modal.confirm({
            title: '确认要删除么',
            content: `删除的数据行id为：${ids.join(",")}`,
            onOk: () => {
                this.setState({
                    selectedRowKeys: [],
                    selectedRows: null
                })
            }
        });


    };
    changeCurrent = (current) => {
        //改变页码
        this.param.page = current;
        this.request();

    };

    handleDelete(item) {
        Modal.confirm({
            title: "确认删除吗？",
            content: `被删除的id为：${item.id}`,
            onOk: () => {
                this.request();
            }
        })
    };

    handleTableChange = (pagination, filters, sorter) => {

        this.setState({
            order: sorter.order
        })
    };

    render() {
        const columns = [
            {
                width: 20,
                title: 'id',
                dataIndex: 'id',
                sorter: (a, b) => a.id - b.id,
                sortOrder: this.state.order
            },
            {
                width: 80,
                title: '用户名',
                dataIndex: 'userName',
                onFilter:(value,record)=>record.userName == value
            },
            {
                width: 80,
                title: '性别',
                dataIndex: 'sex',
                filters: [{
                    text: "男",
                    value: "1"
                }, {
                    text: "女",
                    value: "0"
                }],
                onFilter: (value, record) =>
                    record.sex == value,
                filtered:true,

                render(sex) {
                    let val = sex == 1 ? "男" : "女";
                    let colorCus
                    if (val == "男") {
                        colorCus = 'blue'
                    } else {
                        colorCus = 'red'
                    }

                    return <Tag color={colorCus} key={sex}>{sex == 1 ? "男" : "女"}</Tag>;
                }
            },
            {
                width: 80,
                title: '状态',
                dataIndex: 'state',
                sorter:(a,b)=>(
                    a.state-b.state
                ),
                sortOrder:this.state.order,
                render(state) {
                    let config = {
                        0: <Badge status="success" text="Success"/>,
                        1: <Badge status="info" text="Info"/>,
                        2: <Badge status="warning" text="warning"/>,
                        3: <Badge status="error" text="error"/>
                    }
                    return config[state]
                }
            },
            {
                width: 80,
                title: '爱好',
                dataIndex: 'interest',
            },
            {
                width: 80,
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                width: 80,
                title: '地址',
                dataIndex: 'address'
            },
            {
                width: 80,
                title: '早起时间',
                dataIndex: 'time'
            },
            {
                width: 80,
                title: '操作',
                render: (text, item) => {
                    return <Button size="small" onClick={() => {
                        this.handleDelete(item)
                    }}>删除</Button>


                }
            }
        ];
        const columns2 = [
            {
                width: 20,
                title: 'id',
                dataIndex: 'id',
                fixed: "left"
            },
            {
                width: 80,
                title: '用户名',
                dataIndex: 'userName',
                fixed: "left"
            },
            {
                width: 80,
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? "男" : "女"
                }
            },
            {
                width: 80,
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        0: "无效",
                        1: "有效",
                        2: "已支付",
                        3: "以销毁"
                    };
                    return config[state]
                }
            },
            {
                width: 80,
                title: '爱好',
                dataIndex: 'interest',
            },
            {
                width: 80,
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                width: 80,
                title: '地址',
                dataIndex: 'address'
            },
            {
                width: 80,
                title: '早起时间',
                dataIndex: 'time'
            },

            {
                width: 20,
                title: 'id',
                dataIndex: 'id'
            },
            {
                width: 80,
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                width: 80,
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? "男" : "女"
                }
            },
            {
                width: 80,
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        0: "无效",
                        1: "有效",
                        2: "已支付",
                        3: "以销毁"
                    };
                    return config[state]
                }
            },
            {
                width: 80,
                title: '爱好',
                dataIndex: 'interest',
            },
            {
                width: 80,
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                width: 80,
                title: '地址',
                dataIndex: 'address'
            },
            {
                width: 80,
                title: '爱好',
                dataIndex: 'interest',
            },
            {
                width: 80,
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                width: 80,
                title: '地址',
                dataIndex: 'address'
            },
            {
                width: 80,
                title: '爱好',
                dataIndex: 'interest',
            },
            {
                width: 80,
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                width: 80,
                title: '地址',
                dataIndex: 'address'
            },
            {
                width: 80,
                title: '早起时间',
                dataIndex: 'time',
                fixed: "right"
            }

        ];

        return (

            <div>
                <Card title="徽标" style={{marginTop: 10}}>
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        rowKey={record => record.id}
                        rowSelection={{
                            type: 'checkbox',
                            selectedRowKeys: this.state.selectedRowKeys,
                            selectedRows: this.state.selectedRows,
                            onChange: this.onChangeOfCheckbox,
                            getCheckboxProps: record => ({
                                disabled: record.sex == "1",
                                name: "id双数不能选"
                            })

                        }}
                        pagination={{onChange: this.changeCurrent, ...this.state.pagination}}
                        scroll={{y: 800}}
                        onChange={this.handleTableChange}
                    />
                </Card>
                {/*<Card title="左右固定" style={{marginTop: 10}}>
                    <Table
                        columns={columns2}
                        dataSource={this.state.dataSource2}
                        rowKey={record => record.id}
                        rowSelection={{
                            type: "checkbox",
                            selectedRowKeys: this.state.selectedRowKeys,
                            selectedRows: this.state.selectedRows,
                            onChange: this.onChangeOfCheckbox
                        }}
                        pagination={{onChange: this.changeCurrent, ...this.state.pagination}}
                        scroll={{x: 1645}}
                    />
                </Card>
                <Card title="固定表头" style={{marginTop: 10}}>
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        rowKey={record => record.id}
                        rowSelection={{
                            type: "checkbox",
                            selectedRowKeys: this.state.selectedRowKeys,
                            selectedRows: this.state.selectedRows,
                            onChange: this.onChangeOfCheckbox
                        }}
                        pagination={{onChange: this.changeCurrent, ...this.state.pagination}}
                        scroll={{y: 800}}
                    />
                </Card>*/}
            </div>
        );
    }

};