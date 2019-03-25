import React from 'react';
import {Card, Button, Alert, Icon, Spin, notification} from 'antd';
import './index.less';


export default class Notification extends React.Component {
    openNotification = (type,placement) => {
        if (placement) {
            notification.config({
                placement
            })
        }
        notification[type]({
            message: type,
            description: "haha ! you are opertion " + type + "!"
        });
    }

    render() {
        return (
            <div>
                <Card title="notification的基本使用" className="warp-card">
                    <Button type="primaary" icon="plus" onClick={() => this.openNotification("success")}>success
                        notification</Button>
                    <Button type="primaary" icon="plus" onClick={() => this.openNotification("info")}>info
                        notification</Button>
                    <Button type="primaary" icon="plus" onClick={() => this.openNotification("warning")}>warning
                        notification</Button>
                    <Button type="primaary" icon="plus" onClick={() => this.openNotification("error")}>error
                        notification</Button>
                </Card>
                <Card title="notification的基本使用，带方向" className="warp-card">
                    <Button type="primaary" icon="plus" onClick={() => this.openNotification("success","topLeft")}>success
                        notification topleft</Button>
                    <Button type="primaary" icon="plus" onClick={() => this.openNotification("info","topRight")}>info
                        notification topright</Button>
                    <Button type="primaary" icon="plus" onClick={() => this.openNotification("warning","bottomLeft")}>warning
                        notification bottomleft</Button>
                    <Button type="primaary" icon="plus" onClick={() => this.openNotification("error","bottomRight")}>error
                        notification bottomright</Button>
                </Card>
            </div>
        );
    }
}