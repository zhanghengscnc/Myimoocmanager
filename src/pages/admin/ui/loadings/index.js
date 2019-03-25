import React from 'react';
import {Card, Button, Alert, Icon , Spin} from 'antd';
import './index.less';


export default class Loadings extends React.Component {
    render() {
        const spinIndicator = <Icon type="loading" style={{fontsize:20}}/>;
        return (
            <div>
                <Card title="Spin基本用法" className="wrap-card">
                    <Spin size="small"/>
                    <Spin size="default" style={{margin: "0 20px"}}/>
                    <Spin size="large"/>
                </Card>
                <Card title="内容遮罩" className="wrap-card">
                    <Alert
                        message="success"
                        description="this is success description"
                        type="success"
                        showIcon
                        style={{marginTop:10}}
                    />
                    <Spin tip="加载中...." >
                        <Alert
                            message="warning"
                            description="this is warning description"
                            showIcon
                            type="warning"
                            style={{marginTop:10}}
                        />
                    </Spin>
                        <Spin tip="加载中...." indicator={spinIndicator}>
                            <Alert
                                message="warning"
                                description="this is warning description"
                                showIcon
                                type="warning"
                                style={{marginTop:10}}
                            />
                        </Spin>

                </Card>
            </div>
        );
    }
}