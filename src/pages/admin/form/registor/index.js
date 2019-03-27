import React from 'react';
import {Card, Form, Input, Button, Icon, Checkbox,message} from 'antd';

const FormItem = Form.Item;

class RegistorFrom extends React.Component {

    render() {
        const {getFieldDecorator}  = this.props.form;
        return (
            <div>
                <Card title="表单注册" style={{marginTop:10}}>
                    <Form layout="horizontal">
                        <FormItem>
                            {
                                getFieldDecorator("userName",{
                                    rules:[{required:true}]
                                })(
                                    <Input/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator("password",{
                                    rules:[{required:true}]
                                })(
                                    <Input type="password"/>
                                )
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }

}

export default Form.create()(RegistorFrom)