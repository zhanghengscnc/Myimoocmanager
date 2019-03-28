import React from 'react';
import {Card, Form, Input, Button, Icon, Checkbox, Radio,InputNumber,Select,Switch,DatePicker,TimePicker,message,Upload} from 'antd';
import moment from 'moment';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;



class RegistorFrom extends React.Component {
    handleSubmit=()=>{
        let data = this.props.form.getFieldValue();
        debugger;
        //console.log("data:", data);
        this.props.form.validateFields(((erros, values) => {
            //console.log("validateFields values:",values);
            if (!erros) {
                debugger;
               // console.log(JSON.stringify(data))
                message.success(`${data.userName}您好！注册成功！`)
            }
        }))
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const FormGradConf = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 8
            }
        };
        const offsetLayout= {
            wrapperCol:{
                xs:24,
                sm:{
                    span:8,
                    offset:4
                }
            }
        }
        return (
            <div>
                <Card title="表单注册" style={{marginTop: 10}}>
                    <Form layout="horizontal" {...FormGradConf}>
                        <FormItem label="用户名">
                            {
                                getFieldDecorator("userName", {
                                    rules: [{required: true}]
                                })(
                                    <Input placeholder="请输入用户名"/>
                                )
                            }
                        </FormItem>
                        <FormItem label="用户密码">
                            {
                                getFieldDecorator("password", {
                                    rules: [{required: true}]
                                })(
                                    <Input.Password  placeholder="请输入密码" key={"aa"}/>
                                )
                            }
                        </FormItem>
                        <FormItem label="性别">
                            {
                                getFieldDecorator("gender", {
                                    initialValue: 1
                                })(
                                    <RadioGroup>
                                        <Radio value={1}>男</Radio>
                                        <Radio value={0}>女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄">
                            {
                                getFieldDecorator("age", {
                                    initialValue:0,
                                })(
                                    <InputNumber min={0} max={100}/>
                                )
                            }
                        </FormItem>
                        <FormItem label={"当前状态"}>
                            {
                                getFieldDecorator("currentStatus",{
                                    initialValue:1

                                })(
                                    <Select>
                                        <Option value={1}>在线</Option>
                                        <Option value={2}>离线</Option>
                                        <Option value={3}>掉线</Option>
                                    </Select>
                                )
                            }

                        </FormItem>
                        <FormItem label={"区域"}>
                            {
                                getFieldDecorator("area",{
                                    initialValue:["北京","深圳"]
                                })(
                                    <Select mode={"multiple"}>
                                        <Option key={1} value={"四川"}>四川</Option>
                                        <Option key={2} vlaue={"北京"}>北京</Option>
                                        <Option key={3} vlaue={"深圳"}>深圳</Option>
                                        <Option key={4} vlaue={"上海"}>上海</Option>

                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label={"婚否"}>
                            {
                                getFieldDecorator("isMarried",{
                                    initialValue:1
                                })(
                                    <RadioGroup>
                                        <Radio value={1}>
                                            是
                                        </Radio>
                                        <Radio value={0}>
                                            否
                                        </Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label={"是否成年"}>
                            {
                                getFieldDecorator("isAdult",{
                                    /*valuePropName:"checked",
                                    initialValue:true*/
                                })(
                                    <Switch defaultChecked/>
                                )

                            }
                        </FormItem>
                        <FormItem label={"生日"}>
                            {getFieldDecorator("birthday",{
                                initialValue:moment('2018-01-01 00:00:00')

                            })(
                                <DatePicker
                                    showTime
                                    format={"YYYY-MM-DD HH:mm:ss "}
                                />

                            )}

                        </FormItem>
                        <FormItem label={"地址区域"}>
                            {
                                getFieldDecorator("localarea",{

                                })(
                                    <TextArea autosize={{ minRows: 3, maxRows: 6 }} placeholder={"请输入地址"}/>
                                )
                            }
                        </FormItem>
                        <FormItem label={"执行时间"}>
                            {getFieldDecorator("execTime",{
                                initialValue:moment("09:30:00","HH:mm:ss")

                            })(
                                <DatePicker format={"HH:mm:ss"}/>
                            )}

                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator("isAgree",{
                                    valuePropName:"checked",
                                    initialValue:true
                                })(
                                    <Checkbox>是否同意<a href={"#"}>慕课协议</a></Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Button type={"primary"} onClick={this.handleSubmit}>提交</Button>
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator("userImg",{

                                })(
                                    <Upload>
                                        <Button type={"primar"}>上传</Button>
                                    </Upload>
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