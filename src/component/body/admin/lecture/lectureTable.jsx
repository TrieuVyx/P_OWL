import React, { useState, useEffect } from 'react';
import { Space, Table, Tag, Button, Popconfirm } from 'antd';
import { floatLeft } from '../../../../shortPath/styleComponent';
import getListLecture from './event/CRUD/getListLecture';
import { useNavigate } from 'react-router-dom';

export default function LectureTable() {
    const router = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);
    const [sizePage, setSizePage] = useState(10);
    const [lecture, setLecture] = useState([])
    const pageSize = 3;
    const handleCreate = ()=>{
        router( `/admin/lecture/create`)
    }
    const handleDelete = (key)=>{
        localStorage.setItem('LectureID', key)
        router( `/admin/lecture/delete/${key}`)
    }
    
    const handleUpdate = (key)=>{
        localStorage.setItem('LectureID', key)
        router( `/admin/lecture/update/${key}`)
    }
    
    const handleDetail = (key)=>{
        localStorage.setItem('LectureID', key)
        router( `/admin/lecture/detail/${key}`)
    }
    useEffect(() => {
        getListLecture(currentPage, sizePage)
            .then((data) => {
                setLecture(data)
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
        lecture.map((each, index) => {
            list.push({
                key: each.Id,
                LectureName: each.LectureName,
                Description: each.Description,
                Content: each.Content,
                Tittle: each.Tittle
            })
        })
        return list
    }
    const columns = [
        {
            title: 'LectureName',
            dataIndex: 'LectureName',
            key: 'LectureName',
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
        // {
        //     title: 'CourseName',
        //     dataIndex: 'CourseName',
        //     key: 'CourseName',
        // },
    
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
    
                    <Popconfirm title="Sure to update?" onConfirm={() => handleUpdate(record.key)}>
                        <Button  primary="true">Update </Button>
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
            <Popconfirm title="Sure to create?" onConfirm={() => handleCreate()}>
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