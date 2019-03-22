import React from 'react';
import {Card,Button,Radio} from 'antd';
import './index.less';
export default class Buttons extends React.Component {
    state ={
       loading:true,
        size:"default"
    }
    handleCloseLoading=()=>{
        console.log("handleCloseLoading")
       this.setState({
           loading: false,
       })
    }
    handleChange=(e)=>{
      let size =   e.target.value;
      this.setState({
          size
      })
    }

    render() {
        return (
            <div>
                <Card title={"基础按钮"} className={"card-warp"}>
                    <Button type={"primary"}>primary</Button>
                    <Button type={"dashed"}>dashed</Button>
                    <Button>default</Button>
                    <Button type="danger">danger</Button>
                </Card>
                <Card title={"图形按钮"} className={"card-warp"}>
                    <Button icon={"plus"}></Button>
                    <Button icon={"delete"}></Button>
                    <Button icon="search" shape="circle"></Button>
                    <Button icon="edit"></Button>
                    <Button icon="download">download</Button>

                </Card>
                <Card title={"加载"} className={"card-warp"}>
                    <Button loading={this.state.loading} type={"primary"}>保存中...</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}/>
                    <Button onClick={this.handleCloseLoading}>关闭loading</Button>
                </Card>
                <Card title={"按钮组"} style={{marginBottom:10}}>
                    <Button.Group>
                        <Button type="primary" icon={"double-left"}>向左</Button>
                        <Button type={"primary"} icon={"double-right"}>向右</Button>
                    </Button.Group>
                </Card>
                <Card title={"按钮尺寸"}>
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value={"small"}></Radio>
                        <Radio value={"default"}></Radio>
                        <Radio value={"large"}></Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>{this.state.size}</Button>
                </Card>
            </div>

        );
    }
}