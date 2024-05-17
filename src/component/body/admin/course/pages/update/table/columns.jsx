import { Space, Table, Tag, Button,Popconfirm } from 'antd';

export const columns = [
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
                // onConfirm={() => handleDelete(record.key) }
                >
                    <Button danger="true" >Delete </Button>
                </Popconfirm>
            </Space>
        ),
    },
];