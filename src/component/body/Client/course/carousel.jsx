import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
    height: '360px',
    color: '#fff',
    lineHeight: '360px',
    textAlign: 'center',
    background: '#364d79',
};
export default function Carousels() {
    return (
        <>
            <Carousel autoplay >
                <div >
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </>
    )
}