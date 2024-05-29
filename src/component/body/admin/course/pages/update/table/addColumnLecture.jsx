import { Space, Table, Tag, Button,Popconfirm } from 'antd';
import addLectureToCourse from '../../../event/CRUD/addLectureToCouse';
const handleClick = (recordKey) => {
    localStorage.setItem("LectureID" , recordKey)
    addLectureToCourse();
  };
export const columnsAdd = [
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
                    <Button danger="true">Add </Button>
                </Popconfirm>
            </Space>
        ),
    },
];