import React, { useState, useEffect } from 'react';
import { Space, Table, Tag, Button, Popconfirm } from 'antd';
import { columns } from './courseColumn';
import { floatLeft } from '../../../../shortPath/styleComponent';
import getListCourse from './event/CRUD/getListCourse';
import { useNavigate } from 'react-router-dom';
export default function CourseTable() {

    const router = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);
    const [sizePage, setSizePage] = useState(10);
    const [course, setCourse] = useState([])
    const pageSize = 3;
    useEffect(() => {
        getListCourse(currentPage, sizePage)
            .then((data) => {
                setCourse(data)
            })
            .catch((error) => console.error(error));
    }, [])
    const handleChangePage = (page) => {
        setSizePage(pageSize)
        const current = page - 1
        setCurrentPage(current);
    };
    const getData = () => {
        const list = []
        course.map((each, index) => {
            list.push({
                key: each.Id,
                CourseName: each.CourseName,
                Description: each.Description,
                Content: each.Content,
                Tittle: each.Tittle
            })
        })
        return list
    }
    const handleCreate = () => {
        router(`/admin/course/create`)
    }
    const handleDelete = (key) => {
        localStorage.setItem('CourseID', key)
       router(`/admin/course/delete/${key}`)
    }

    const handleUpdate = (key) => {
        localStorage.setItem('CourseID', key)
       router(`/admin/course/update/${key}`)
    }

    const handleDetail = (key) => {
        localStorage.setItem('CourseID', key);
       router(`/admin/course/detail/${key}`)
        // GetUser(key);
    }
    const columns = [
        {
            title: 'CourseName',
            dataIndex: 'CourseName',
            key: 'CourseName',
        },

        {
            title: 'Description',
            dataIndex: 'Description',
            key: 'Description',
        },
        {
            title: 'Content',
            dataIndex: 'Content',
            key: 'Content',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">

                    <Popconfirm title="Sure to update?" onConfirm={() => handleUpdate(record.key)}>
                        <Button primary="true">Update </Button>
                    </Popconfirm>
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                        <Button danger="true" >Delete </Button>
                    </Popconfirm>
                    <Popconfirm title="Sure to watch?" onConfirm={() => handleDetail(record.key)}>
                        <Button primary="true">Detail </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];
    return (
        <>
            <Popconfirm title="Sure to create?" onConfirm={() => handleCreate()} >
                <Button primary="true" style={floatLeft} >Create </Button>
            </Popconfirm>
            <Table
                columns={columns}
                dataSource={getData()}
                rowKey="key"
                pagination={{
                    currentPage: currentPage,
                    pageSize: pageSize,
                    total: getData().length,
                    onChange: handleChangePage
                }}
            />
        </>
    )
}