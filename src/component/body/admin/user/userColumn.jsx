import { Space, Table, Tag,Button } from 'antd';

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
                <Button primary>Update </Button>
                <Button danger>Delete</Button>
            </Space>
        ),
    },
];