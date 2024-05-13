import { Space, Table, Tag, Button,Popconfirm } from 'antd';
import {handleDelete, handleDetail,handleUpdate} from "./event/handleEvent"
export const columns = [
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
                    <Button primary>Update </Button>
                </Popconfirm>
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                    <Button danger >Delete </Button>
                </Popconfirm>
                <Popconfirm title="Sure to watch?" onConfirm={() => handleDetail(record.key)}>
                    <Button primary>Detail </Button>
                </Popconfirm>
            </Space>
        ),
    },
];