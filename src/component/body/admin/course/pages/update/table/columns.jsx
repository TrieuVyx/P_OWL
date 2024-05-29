import { Space, Table, Tag, Button,Popconfirm } from 'antd';
import deleteLectureFromCourse from '../../../event/CRUD/deleteLectureFromCourse';
const handleClick = (recordKey) => {
    console.log(recordKey)
    localStorage.setItem("LectureID" , recordKey)
    deleteLectureFromCourse()
  };
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
                onConfirm={() => handleClick(record.key) }
                >
                    <Button danger="true">Delete </Button>
                </Popconfirm>
            </Space>
        ),
    },
];