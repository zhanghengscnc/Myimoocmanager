import React from 'react';
import {Card, Table, message, Modal, Button} from 'antd';
import axios from './../../../../axios/index.js';
import util from './../../../../utils/utils';

export default class BasicTable extends React.Component {
    state = {
        dataSource: [],
        selectedRowKeys: [],
        selectedRows: null,
    };
    param = {
        page: 1
    };


    componentDidMount() {
        const dataSource = [
            {
                id: 0,
                userName: 'Jack',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
            {
                id: 1,
                userName: 'Tom',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
            {
                id: 2,
                userName: 'Lily',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            }
        ];
        dataSource.map((item, index) => {
            return item.key = index;
        });
        this.setState({
            dataSource
        });
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
                    page:this.param.page ? this.param.page : 1
                },
                // isShowLoading:true
            }

        }).then((resp) => {
            if (resp.code == 0) {
                this.setState({
                    dataSource2: resp.tableList,
                    //从服务器返回分页器属性
                    pagination: util.pagination(resp, evalPage)
                })
            }
        }, (resp) => {
            debugger;
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

    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? "男" : "女"
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        0: "无效",
                        1: "有效",
                        2: "已支付",
                        3: "以销毁"
                    }
                    return config[state]
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            }
        ];
        const selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        };
        const customPagination = this.state.pagination;
        return (
            <div>
                <Card title="动态数据表格-自定义分页" style={{marginTop: 10}}>
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
                        /*pagination={{
                            total:200,
                            pageSize:15,
                            showQuickJumper:true,
                            showSizeChanger:true,
                            pageSizeOptions:['10', '20', '30', '40']
                        }}*/
                        pagination={{onChange: this.changeCurrent, ...customPagination}}
                    />
                </Card>
                <Card title="动态数据表格-多选" style={{marginTop: 10}}>
                    <Button type="primary" onClick={this.handleCheckBoxButton}>点我</Button>
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        rowSelection={
                            {
                                type: "checkbox",
                                selectedRowKeys: this.state.selectedRowKeys,
                                onChange: this.onChangeOfCheckbox
                            }
                        }
                    />
                </Card>


                <Card title="动态表格-单选" style={{marginTop: 10}}>
                    <Table

                        columns={columns}
                        dataSource={this.state.dataSource2}
                        rowKey={record => record.id}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick1(record, index)
                                }
                            }
                        }}
                        rowSelection={{
                            type: "radio",
                            selectedRowKeys: this.state.selectedRowKeys,
                        }}


                    />

                </Card>
                <Card title={"动态表格"} style={{marginTop: 10}}>
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        rowKey={record => record.id}
                    >

                    </Table>
                </Card>
                <Card title={"基础表格"} style={{marginTop: 10}}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        //rowKey={record => record.id}
                        pagination={false}
                    />
                </Card>
            </div>
        );
    }

};