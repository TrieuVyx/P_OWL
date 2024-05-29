import React, { useState, useEffect } from 'react';
import { columnsAdd } from './addColumnLecture';
import toast from 'react-hot-toast';
import getListLecture from '../../../event/CRUD/getListLecture';
import Title from 'antd/es/skeleton/Title';
import GetListLectureInCourse from '../../../event/CRUD/getListLectureInCourse';
import { Space, Table, Tag, Button, Popconfirm } from 'antd';
import { columns } from './columns';
export default function AddLectureToCourseTable() {
    const [currentPage, setCurrentPage] = useState(0);
    const [sizePage, setSizePage] = useState(10);
    const [Lecture, setLecture] = useState([])
    const pageSize = 3;
    useEffect(() => {
        getListLecture(currentPage, sizePage)
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
                columns={columnsAdd}
                dataSource={getData()}
                rowKey="key"
                className='w-100'
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