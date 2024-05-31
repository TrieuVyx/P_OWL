import React, { useState, useEffect } from 'react';
import GetListLectureInCourse from '../../../event/CRUD/getListLectureInCourse';
import toast from 'react-hot-toast';
import { Space, Table, Tag, Button,Popconfirm } from 'antd';
import deleteLectureFromCourse from '../../../event/CRUD/deleteLectureFromCourse';
import { useNavigate } from 'react-router-dom';
import { columns } from './columns';

export default function LectureInCourseTable() {
    const [currentPage, setCurrentPage] = useState(0);
    const [sizePage, setSizePage] = useState(30);
    const [Lecture, setLecture] = useState([])
    const navigate = useNavigate();
    const IDCourse = localStorage.getItem("CourseID")
    const pageSize = 3;
    useEffect(() => {
        GetListLectureInCourse(currentPage, sizePage)
            .then((data) => {
                setLecture(data)
            })
            .catch((error) => toast.error("error"));
    }, [])

    const handleChangePage = (page) => {
        const current = page - 1
        setSizePage(pageSize)
        setCurrentPage(current);
    };
    const handleClick = (recordKey) => {
        localStorage.setItem("LectureID" , recordKey)
        deleteLectureFromCourse()
            navigate(`/admin/course/update/${IDCourse}`)
    
    };
    //#region lấy data
    const getData = () => {
        const list = []
        Lecture.map((each, index) => {
            list.push({
                key: each.Id,
                LectureName: each.LectureName,
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
            title: 'Tittle',
            dataIndex: 'Tittle',
            key: 'Tittle',
        },
    
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Popconfirm title="Sure to delete?"   
                    onConfirm={() => handleClick(record.key) }
                    >
                        <Button danger="true">Delete </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];
    return (
        <>
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