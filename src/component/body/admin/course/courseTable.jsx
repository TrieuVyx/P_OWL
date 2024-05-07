import React from 'react';
import { Space, Table, Tag, Button, Popconfirm } from 'antd';
import { columns } from './columns';
import { floatLeft } from '../../../../shortPath/styleComponent';
import { routers } from './router/router';
import { useNavigate } from 'react-router-dom';

// import { handleCreate } from './event/handleEvent';
export default function CourseTable() {

    const handleCreate =  (e) => {
        window.location.href  = 'course/create'
    }
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    return (
        <>
            <Popconfirm title="Sure to create?" style={floatLeft} onConfirm={() => handleCreate()}>
                <Button primary>Create </Button>
            </Popconfirm>
            <Table columns={columns} rowKey="key" dataSource={data} />
        </>
    )
}