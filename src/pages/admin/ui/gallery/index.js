import React from 'react';
import {Card, Row, Col,Modal} from 'antd';
const { Meta } = Card;
export default class Gallery extends React.Component {
    state={
        visibal:false,
        imgSrc: ""
    }
    showImg=(imgSrc)=>{
        this.setState({
            imgSrc,
            visibal:true
        })
    }
    render() {
        const imgList = [
            ["1.png", "2.png", "3.png", "4.png"],
            ["5.png", "6.png", "7.png", "8.png"],
            ["9.png", "10.png", "11.png", "12.png"],
            ["13.png", "14.png", "15.png", "16.png"],
            ["17.png", "18.png", "19.png", "20.png"],
        ];


        return (
            <div>

                {imgList.map((rowArr) => {
                   return <Row gutter={5} >
                        {
                            rowArr.map((imgI) => {
                                const imgSrc = "/gallery/"+imgI;
                               return <Col md={6} >
                                    <Card
                                        hoverable
                                        style={{width:300,marginTop:30}}
                                        cover={<img alt="tip" src={imgSrc}/>}
                                        onClick={()=>this.showImg(imgSrc)}

                                    >
                                        <Meta
                                            title="Imook public img"
                                            description="www.baidu.com"
                                        />

                                    </Card>
                                </Col>
                            })
                        }
                    </Row>
                })}
                <Modal
                    title="图片画廊"
                    visible={this.state.visibal}
                    footer={null}
                    onCancel={()=>this.setState({
                        visibal:false
                    })}
                    width={300}
                    height={500}

                >
                    <img src={this.state.imgSrc} style={{width:"100%"}}/>

                </Modal>

            </div>
        );


    }

};