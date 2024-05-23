import React, {useEffect, useState} from 'react';
import { Collapse } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import getCourse from '../../event/getCourse';

export default function showCourseUser() {
    useEffect(()=>{
        getCourse()
        .then((data)=>{
            console.log(data)
        })
    },[])
    const onChange = (key) => {
        console.log(key);
    };
    const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
        `;
    const items = [
        {
            key: '1',
            label: 'This is panel header 1',
            children: <p>{text}</p>,
        },
        {
            key: '2',
            label: 'This is panel header 2',
            children: <p>{text}</p>,
        },
        {
            key: '3',
            label: 'This is panel header 3',
            children: <p>{text}</p>,
        },
    ];
    return (
        <>
            <div className='m-3'>
                <div className="row">
                    <div className="col">
                        <div className="container-video m-2" style={{
                            background: "gray",
                            height: "250px",

                        }}>

                        </div>
                        <div className="row">
                            <div className="col m-2" style={{textAlign:"left"}}>
                                <div className='m-2'>Title: </div>
                                <div className='m-2'>Description: </div>
                                <div className='m-2'>Content: </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />;
                    </div>
                </div>
                <div className="row">
                    <div className='m-2'>
                        <TextArea   />
                    </div>
                </div>
            </div>

        </>
    )
}