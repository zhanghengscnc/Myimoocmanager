import React from 'react';
import {Card, Button, Modal} from 'antd';
import './index.less';

export default class Modals extends React.Component {
    state = {
        modalVisible1: false,
        modalVisible2: false,
        modalVisible3: false,
        modalVisible4: false,
    }
    openModle = (type) => {
        this.setState({
            [type]: true
        })

    }
    handleConfirm = (type) => {
            Modal[type]({
                title:type,
                content:"this is " + type + "的弹出框",
                onOk() {
                    console.log("exec on ok ")
                },
                onCancel() {
                    console.log("exec on cancel")
                }
            })

    }

    render() {
        return (
            <div>
                <Card title="基础模态框" className="card-warp">
                    <Button type="primary" onClick={() => this.openModle("modalVisible1")}>open</Button>
                    <Button type="primary" onClick={() => this.openModle("modalVisible2")}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.openModle("modalVisible3")}>顶部20px</Button>
                    <Button type="primary" onClick={() => this.openModle("modalVisible4")}>居中</Button>
                </Card>
                <Card title="消息确认框" className="card-warp">
                    <Button type="primary" onClick={() => {
                        this.handleConfirm("confirm")
                    }}>confirm</Button>
                    <Button type="primary" onClick={() => {
                        this.handleConfirm("info")
                    }}>info</Button>
                    <Button type="primary" onClick={() => {
                        this.handleConfirm("success")
                    }}>success</Button>
                    <Button type="primary" onClick={() => {
                        this.handleConfirm("warning")
                    }}>warning</Button>
                    <Button type="primary" onClick={() => {
                        this.handleConfirm("error")
                    }}>error</Button>
                </Card>

                <Modal
                    title="open modal1"
                    visible={this.state.modalVisible1}
                    onOk={() => {
                        this.setState({
                            modalVisible1: false
                        })
                    }}
                    onCancel={() => {
                        console.log("cancel和X叉关闭按钮是同一事件******")
                        this.setState({
                            modalVisible1: false
                        })
                    }}
                >
                    <p>modal1的内容部分</p>
                </Modal>
                <Modal
                    visible={this.state.modalVisible2}
                    title="自定义页脚"
                    okText="确定执行"
                    cancelText="算了吧"
                    onOk={() => {
                        this.setState({
                            modalVisible2: false
                        })
                    }}
                    onCancel={() => {
                        this.setState({
                            modalVisible2: false
                        })
                    }}

                >
                    <p>这是自定义页脚</p>
                </Modal>
                <Modal
                    visible={this.state.modalVisible3}
                    style={{top: 20}}
                    title="顶部20px"
                    onOk={() => {
                        this.setState({
                            modalVisible3: false
                        })
                    }}
                    onCancel={() => {
                        this.setState({
                            modalVisible3: false
                        })
                    }}

                >
                    <p>这是顶部20px</p>
                </Modal>

                <Modal
                    visible={this.state.modalVisible4}
                    wrapClassName="vertical-center-modal"
                    title="垂直居中"
                    onOk={() => {
                        this.setState({
                            modalVisible4: false
                        })
                    }}
                    onCancel={() => {
                        this.setState({
                            modalVisible4: false
                        })
                    }}

                >
                    <p>垂直居中</p>
                </Modal>
            </div>
        );

    }
}