import React from 'react';
import { Carousel } from 'antd';
import '../../../../shortPath/scss/carousel.scss'
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
            <Carousel autoplay style={{height:"350px"}}>
                <div className='' style={{ width: "100%",height:"350px"}}  >
                    <img style={{ width: "100%",height:"350px" }} src="https://ik.imagekit.io/alejk5lwty/P_OWL/f48b3c6e87b2077be4ccdb38bb017de6.jpg?updatedAt=1716462986452" alt="" />
                </div>

                <div className='' style={{ width: "100%",height:"350px"}}>
                    <img style={{ width: "100%",height:"350px" }} src="https://ik.imagekit.io/alejk5lwty/P_OWL/9be206a792c842092a2525bc0864afa1.jpg?updatedAt=1716463076763" alt="" />
                </div>


                <div className='' style={{ width: "100%",height:"350px"}}>
                    <img style={{ width: "100%",height:"350px" }} src="https://ik.imagekit.io/alejk5lwty/P_OWL/6282f884476a7c3a1607f33d5601047d.jpg?updatedAt=1716463076660" alt="" />
                </div>

                <div className='' style={{ width: "100%",height:"350px"}}>
                    <img style={{ width: "100%",height:"350px" }} src="https://ik.imagekit.io/alejk5lwty/P_OWL/9be206a792c842092a2525bc0864afa1.jpg?updatedAt=1716463076763" alt="" />
                </div>

            </Carousel>
        </>
    )
}