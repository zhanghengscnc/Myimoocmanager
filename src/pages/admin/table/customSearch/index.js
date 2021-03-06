import React from 'react';
import {Card, Table, message, Modal, Button, Badge,Input,Icon,Tag} from 'antd';
import Highlighter from 'react-highlight-words';
import axios from './../../../../axios/index.js';
import util from './../../../../utils/utils';

export default class CustomSearch extends React.Component {
    state = {
        data:[],
        loading:false
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
        this.setState({
            loading:true
        });
        axios.myAxios(options).then(

            (resp) => {
                this.setState({
                    data: resp.tableList,
                    loading:false
                })
            },
            (resp) => {
                message.error("请求错误：" + resp.code)
            }
        )
    }
    getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
                             setSelectedKeys, selectedKeys, confirm, clearFilters,
                         }) => (
            <div style={{padding: 8}}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{width: 188, marginBottom: 8, display: 'block'}}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{width: 90, marginRight: 8}}
                >
                    Search
                </Button>
                <Button
                    onClick={() => this.handleReset(clearFilters)}
                    size="small"
                    style={{width: 90}}
                >
                    Reset
                </Button>
            </div>
        ),
        filterIcon: filtered => <Icon type="search" style={{color: filtered ? '#1890ff' : undefined}}/>,
        onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: (text) => (
            <Highlighter
                highlightStyle={{backgroundColor: '#ffc069', padding: 0}}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    });

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({searchText: selectedKeys[0]});
    };

    handleReset = (clearFilters) => {
        clearFilters();
        this.setState({searchText: ''});
    };

    render() {
                 const columns = [
            {
                width: 20,
                title: 'id',
                dataIndex: 'id',
                key: 'id',
                sorter: (a, b) => a.id - b.id,
                ...this.getColumnSearchProps("id")
                //sortOrder: this.state.idSortOrder,
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
                        //sortOrder: this.state.stateSortOrder,
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
                <Card title="表头分组" style={{marginTop: 10}}>
                    <Table columns={columns} dataSource={this.state.data} bordered sortDirection={['ascend','descend']}
                           loading = {this.state.loading}

                        //onChange={this.handleTableChange.bind(this)}
                           rowKey={record => record.id}

                    />;
                </Card>
            </div>
        );
    }

};