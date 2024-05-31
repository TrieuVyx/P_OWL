import React, { useState, useEffect } from 'react';
import { Space, Table, Tag, Button, Popconfirm } from 'antd';
import { columns } from './columnsDetail';
import GetListLectureInCourse from '../../../event/CRUD/getListLectureInCourse';
export default function LectureInCourseTable() {
    const [currentPage, setCurrentPage] = useState(0);
    const [sizePage, setSizePage] = useState(30);
    const [Lecture, setLecture] = useState([])
    const pageSize = 3;
    useEffect(() => {
        GetListLectureInCourse(currentPage, sizePage)
            .then((data) => {
                setLecture(data)
            })
            .catch((error) => console.error(error));
    }, [])
    const handleChangePage = (page) => {
        const current = page - 1
        setSizePage(pageSize)
        setCurrentPage(current);
    };
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