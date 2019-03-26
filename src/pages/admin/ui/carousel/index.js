import React from 'react';
import {Card, Carousel} from 'antd';
import './index.less'

export default class MyCarousel extends React.Component {
    render() {
        return (
            <div>
                <Card title="文字轮播图">
                    <Carousel autoplay effect="fade" vertical={true}>
                        <div><h3>文字轮播图1</h3></div>
                        <div><h3>文字轮播图2</h3></div>
                        <div><h3>文字轮播图3</h3></div>
                        <div><h3>文字轮播图4</h3></div>
                    </Carousel>

                </Card>

                <Card title="图片轮播图" className="warp-card">
                    <Carousel autoplay effect="fade">
                        <div><img src="/carousel-img/carousel-1.jpg"/></div>
                        <div><img src="/carousel-img/carousel-2.jpg"/></div>
                        <div><img src="/carousel-img/carousel-3.jpg"/></div>
                    </Carousel>

                </Card>

            </div>
        );
    }

};