import React from 'react';
import {Card, Button, Alert, Icon, Spin, Tabs, message} from 'antd';
import './index.less';

const TabPane = Tabs.TabPane;
export default class MyTabs extends React.Component {
    state = {
        panes: [
            {title: "初始化叶签1", content: "初始化叶签1的内容", key: "1"},
            {title: "初始化叶签2", content: "初始化叶签2的内容", key: "2"},
            {title: "初始化叶签3不能关闭", content: "初始化叶签3的内容", key: "3", closable:false},
            {title: "初始化叶签4", content: "初始化叶签4的内容", key: "4"},
            ],
        activeKey: "1",
        newKeyIndex: 0
    }
    handleChange = (key) => {
        if (key) {
            console.log("handleChange :", key)
            this.setState({
                activeKey: key
            })
        }
    }
    //新增删除叶签时调用
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }
    //新增叶签
    add = () => {
        const panes = this.state.panes
        const activeKey = "新增叶签" + this.state.newKeyIndex++;
        panes.push({title: activeKey, content: activeKey + " content", key: activeKey})
        this.setState({panes, activeKey})
    }

    //删除叶签
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    }
    render() {
        return (
            <div>
                <Card title="tabs的基本使用" className="warp-card">
                    <Tabs defaultActiveKey="1" onChange={this.handleChange}>
                        <TabPane tab={<span><Icon type="plus"/>页签1</span>} key="1">页签1的内容</TabPane>
                        <TabPane tab={<span><Icon type="edit"/>页签2</span>} key="2" disabled>页签2的内容</TabPane>
                        <TabPane tab={<span><Icon type="delete"/>页签3</span>} key="3">页签3的内容</TabPane>
                        <TabPane tab={<span><Icon type="search"/>页签4</span>} key="4">页签4的内容</TabPane>
                    </Tabs>
                </Card>
                <Card title="新增和删除叶签" className="warp-card">
                    <Tabs
                          onChange={this.handleChange}
                          type="editable-card"
                          onEdit={this.onEdit}
                          activeKey={this.state.activeKey}
                    >

                        {this.state.panes.map((pane)=>{
                            return <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>
                        })}
                    </Tabs>
                </Card>
            </div>
        );
    }
}