import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, Popconfirm, Space, Table, Tag } from "antd";
import { style ,floatLeft} from "../../../../shortPath/styleComponent"
import { columns } from './userColumn';
import getListUser from '../../../data/user/getListUser';
import { handleCreate } from './event/handleEvent';
import { Toaster } from 'react-hot-toast';
export default function UserTable() {
    const [currentPage, setCurrentPage] = useState(0);
    const [sizePage, setSizePage] = useState(10);
    const [user, setUser] = useState([])
    const pageSize = 3;
    useEffect(() => {
        getListUser(currentPage, sizePage)
            .then((data) => {
                setUser(data)
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
        user.map((each, index) => {
            list.push({
                key: each.Id,
                UserName: each.UserName,
                Address: each.Address,
                FullName: each.FullName
            })
        })
        return list
    }
    return (
        <>
            <Popconfirm title="Sure to create?"
            onConfirm={() => handleCreate()}
            >
                <Button primary style={floatLeft} >Create </Button>
            </Popconfirm>
            <Toaster position='top-right' reverseOrder={false}></Toaster>
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