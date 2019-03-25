import React from 'react';
import {Card, Button, Alert, Icon , Spin,message} from 'antd';
import './index.less';


export default class Message extends React.Component {
    showMessage = (type,content)=>{
        message[type](content).then(()=>console.log("after",type))
    }
    render() {
        return (
            <div>
                <Card title="message的基本使用" className="warp-card">
                    <Button type="primary" onClick={()=>this.showMessage("success","opertion success")}>success message</Button>
                    <Button type="primary" onClick={()=>this.showMessage("warning","opertion success")}>warning message</Button>
                    <Button type="primary" onClick={()=>this.showMessage("info","opertion success")}>info message</Button>
                    <Button type="primary" onClick={()=>this.showMessage("error","opertion success")}>error message</Button>
                </Card>

            </div>
        );
    }
}