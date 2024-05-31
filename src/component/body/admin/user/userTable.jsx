import React, { useEffect, useState } from 'react';
import { Button, Popconfirm, Space, Table } from "antd";
import { floatLeft } from "../../../../shortPath/styleComponent"
import getListUser from './event/CRUD/getListUser';
import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function UserTable() {
    const router = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);
    const [sizePage, setSizePage] = useState(30);
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
    const handleCreate = () => {
        router(`/admin/user/create`
        )
    }
    const handleDelete = (key) => {
        localStorage.setItem('AccountId', key)
        router(`/admin/user/delete/${key}`)
    }

    const handleUpdate = (key) => {
        localStorage.setItem('AccountId', key)
        router(`/admin/user/update/${key}`)
    }

    const handleDetail = (key) => {
        localStorage.setItem('AccountId', key)
        router(`/admin/user/detail/${key}`)
    }
    const columns = [
        {
            title: 'UserName',
            dataIndex: 'UserName',
            key: 'UserName',
        },

        {
            title: 'Address',
            dataIndex: 'Address',
            key: 'Address',
        },
        {
            title: 'FullName',
            dataIndex: 'FullName',
            key: 'FullName',
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
                        <Button danger="true">Delete </Button>
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
            <Popconfirm title="Sure to create?"
                onConfirm={() => handleCreate()}
            >
                <Button primary="true" style={floatLeft} >Create </Button>
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