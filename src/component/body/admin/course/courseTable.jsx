import React, { useState, useEffect } from 'react';
import { Space, Table, Tag, Button, Popconfirm } from 'antd';
import { columns } from './courseColumn';
import { floatLeft } from '../../../../shortPath/styleComponent';
import { handleCreate } from './event/handleEvent'
import getListCourse from '../../../data/course/getListCourse';

export default function CourseTable() {


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
                Description: each.Description,
                Tittle: each.Tittle
            })
        })
        return list
    }
    return (
        <>
            <Popconfirm title="Sure to create?" onConfirm={() => handleCreate()}>
                <Button primary style={floatLeft} >Create </Button>
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