import React from 'react';
import {Card, Form, Input, Button, Icon, Checkbox,message} from 'antd';

const FormItem = Form.Item;

class FormLogin extends React.Component {
    componentDidMount() {
        this.props.form.validateFields();
    }

    hasError = function (fieldsError) {
        return Object.keys(fieldsError).some(field => fieldsError[field])

    };
    handleSubmit = () => {
        let obj = this.props.form.getFieldsValue();
         /*this.props.form.validateFields((err,values)=>{
             //表示所有校验均通过
             if (!err) {
                 message.success(`${obj.name}:恭喜你，你登录成功！你的密码是：${obj.password}`)
             }else {
                 message.error(err)
             }
         })*/
         console.log(obj)


    }

    render() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        // only show error after field touched
        const userNameError = isFieldTouched("userName") && getFieldError("userName");
        const pwdError = isFieldTouched("pwd") && getFieldError("pwd");

        const nameError = isFieldTouched("name") && getFieldError("name");
        const passwordError = isFieldTouched("password") && getFieldError("password");
        return (
            <div>
                {/*<Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem
                            validateStatus={userNameError ? 'error' : ''}
                            help={userNameError || ""}
                        >
                            {
                                getFieldDecorator("userName", {
                                    // initialValue: 'zhangheng',
                                    rules: [{required: true, message: "userName is must be input!"}]
                                })(
                                    <Input prefix={<Icon type="user"/>} placeholder="userName"/>
                                )
                            }
                        </FormItem>
                        <Form.Item
                            validateStatus={pwdError ? "error" : ""}
                            help={pwdError || ""}
                        >
                            {
                                getFieldDecorator("pwd", {
                                    rules: [{required: true, message: "pwd must be inputed!"}]
                                })(
                                    <Input type="password" prefix={<Icon type="lock"/>} placeholder="password"/>
                                )
                            }

                        </Form.Item>
                        <FormItem>
                            <Button type="primary" htmlType="submit" disabled={this.hasError(getFieldsError())}
                                    onClick={this.handleSubmit}>Login in</Button>
                        </FormItem>

                    </Form>

                </Card>*/}
                <Card title="水平排列from" style={{marginTop: 15}}>
                    <Form layout="vertical" style={{width: 300}} onSubmit={this.handleSubmit}>
                        <FormItem
                            validateStatus={nameError ? "error" : ""}
                            help={nameError || ""}
                        >
                            {
                                getFieldDecorator("name", {
                                    rules: [
                                        {
                                            required: true,
                                            message: "name must be input!"
                                        },
                                        {
                                            pattern:new RegExp("^.*@+.*$"),
                                            message:"name must include @"

                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="user"/>} placeholder="用户名"/>
                                )
                            }

                        </FormItem>
                        <FormItem
                            validateStatus={passwordError ? "error" : ""}
                            help={passwordError || ""}
                        >
                            {
                                getFieldDecorator("password", {
                                    rules: [
                                        {required: true, message: "password must be input"},
                                        {
                                            min:6,max:10, message:"长度不在范围内"

                                        }
                                        ]
                                })(
                                    <Input type="password" prefix={<Icon type="lock"/>} placeholder="密码"/>
                                )
                            }

                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator("remember", {
                                    valuePropName: "checked",
                                    initialValue: true
                                })(
                                    <Checkbox>remember me</Checkbox>
                                )
                            }
                            <a href="#">forget password</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit">login in</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }

}

export default Form.create()(FormLogin)