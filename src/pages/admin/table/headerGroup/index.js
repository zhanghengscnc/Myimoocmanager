import React from 'react';
import {Card, Table, message, Modal, Button, Badge, Tag, Icon} from 'antd';
import axios from './../../../../axios/index.js';

export default class HeaderGroup extends React.Component {
    state = {
        data: [],

        sortedInfo:null,
        filteredInfo:null

    };

    componentDidMount() {
        this.request();
    }

    request = () => {
        const options = {
            url: "/table/list",
            method: "get",
            data: {
                params: {
                    key: "1"
                }
            }
        };
        axios.myAxios(options).then(
            (resp) => {
                this.setState({
                    data: resp.tableList
                })
            },
            (resp) => {
                message.error("请求错误：" + resp.code)
            }
        )
    };
    handleTableChange (pagination, filters, sorter) {
        console.log(filters, sorter)
        this.setState({
            filteredInfo:filters,
            sortedInfo:sorter
        })

    }

    hancleClearFilterSorter=() =>{
        this.setState({
            filteredInfo:null,
            sortedInfo:null
        })
    }

    render() {
        let {filteredInfo,sortedInfo} = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const columns = [
            {
                width: 20,
                title: 'id',
                dataIndex: 'id',
                key: 'id',
                sorter: (a, b) => a.id - b.id,
                sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
            },
            {
                width: 80,
                title: '用户名',
                dataIndex: 'userName',
                key: 'userName',
                onFilter: (value, record) => record.userName == value,
            },
            {
                title: "合并",
                children: [
                    {
                        width: 80,
                        title: '性别',
                        dataIndex: 'sex',
                        key: 'sex',
                        filters: [{
                            text: "男",
                            value: "1"
                        }, {
                            text: "女",
                            value: "0"
                        }],
                        onFilter: (value, record) =>
                            record.sex == value,
                        filtered: true,
                        filteredValue: filteredInfo.sex || null,

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
                        key: 'state',
                        sorter: (a, b) => (
                            a.state - b.state
                        ),
                        sortOrder: sortedInfo.columnKey === 'state' && sortedInfo.order,
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
                ]
            },


            /** {
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
             **/

            {
                width: 80,
                title: '爱好',
                dataIndex: 'interest',
                key: 'interest',
            },
            {
                width: 80,
                title: '生日',
                dataIndex: 'birthday',
                key: 'birthday'
            },
            {
                width: 80,
                title: '地址',
                dataIndex: 'address',
                key: 'address'
            },
            {
                width: 80,
                title: '早起时间',
                dataIndex: 'time',
                key: 'time'
            },
            {
                width: 80,
                title: '操作',
                render: (text, item) => {
                    return <Button size="small" onClick={() => {
                        this.handleDelete(item)
                    }}>删除</Button>
                },
            }
        ];
        return (
            <div>

                <Card title="表头分组3" style={{marginTop: 10}}>
                    <div><Button type="primary" onClick={this.hancleClearFilterSorter}>清除</Button></div>
                    <Table columns={columns} dataSource={this.state.data} bordered sortDirection={['ascend','descend']}

                           onChange={this.handleTableChange.bind(this)}
                           rowKey={record => record.id}
                           header
                           />;
                </Card>
            </div>
        );
    }

};