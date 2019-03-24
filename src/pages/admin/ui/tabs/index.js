import React from 'react';
import {Card, Button, Alert, Icon , Spin,Tabs,message} from 'antd';
import './index.less';

const TabPane = Tabs.TabPane;
export default class MyTabs extends React.Component {
    hanleChange = (key)=>{
        if (key) {
            message.info("选择了:"+key);
        }
    }
    render() {
        return (
            <div>
                <Card title="tabs的基本使用" className="warp-card">
                    <Tabs defaultActiveKey="1" onChange={this.hanleChange}>
                        <TabPane tab={<span><Icon type="plus"/>页签1</span>} key="1" >页签1的内容</TabPane>
                        <TabPane tab={<span><Icon type="edit"/>页签2</span>} key="2" disabled>页签2的内容</TabPane>
                        <TabPane tab={<span><Icon type="delete"/>页签3</span>} key="3">页签3的内容</TabPane>
                        <TabPane tab={<span><Icon type="search"/>页签4</span>} key="4">页签4的内容</TabPane>
                    </Tabs>
                </Card>
            </div>
        );
    }
}