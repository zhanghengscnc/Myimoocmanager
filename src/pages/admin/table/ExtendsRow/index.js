import React from 'react';
import {Card, Table, message, Modal, Button, Badge,Input,Icon} from 'antd';
import Highlighter from 'react-highlight-words';
import axios from './../../../../axios/index.js';
import util from './../../../../utils/utils';

export default class ExtendsRow extends React.Component {
    state = {};


    render() {
        const columns = [
            { title: 'Name', dataIndex: 'name', key: 'name' },
            { title: 'Age', dataIndex: 'age', key: 'age' },
            { title: 'Address', dataIndex: 'address', key: 'address' },
            {
                title: 'Action', dataIndex: '', key: 'x', render: () => <a href="javascript:;">Delete</a>,
            },
        ];

        const data = [
            {
                key: 1, name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
            },
            {
                key: 2, name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
            },
            {
                key: 3, name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
            },
        ];

        return (
            <div>
                <Card title="自定义搜索筛选" style={{marginTop: 10}}>
                    <Table columns={columns} dataSource={data} bordered header={() => "header"} expandedRowRender={record=><p style={{marginLeft:10}}>{record.description}</p>} />;
                </Card>
            </div>
        );
    }

};