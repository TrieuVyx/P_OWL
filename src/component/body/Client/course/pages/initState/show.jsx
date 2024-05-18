import React from 'react';
import { Collapse } from 'antd';
export default function showCourseUser() {

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
            <div className="">
                <div className="row">
                    <div className="col">


                    </div>
                    <div className="col">
                        <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />;
                    </div>
                </div>
                <div className="row">

                </div>
            </div>
        </>
    )
}