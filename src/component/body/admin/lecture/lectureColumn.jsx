import { Space, Table, Tag, Button,Popconfirm } from 'antd';
import {handleDelete, handleDetail,handleUpdate} from "./event/handleEvent"

// export const columns = [
//     {
//         title: 'LectureName',
//         dataIndex: 'LectureName',
//         key: 'LectureName',
//     },

//     {
//         title: 'Description',
//         dataIndex: 'Description',
//         key: 'Description',
//     },
//     {
//         title: 'Content',
//         dataIndex: 'Content',
//         key: 'Content',
//     },
//     // {
//     //     title: 'CourseName',
//     //     dataIndex: 'CourseName',
//     //     key: 'CourseName',
//     // },

//     {
//         title: 'Action',
//         key: 'action',
//         render: (_, record) => (
//             <Space size="middle">

//                 <Popconfirm title="Sure to update?" onConfirm={() => handleUpdate(record.key)}>
//                     <Button  primary="true">Update </Button>
//                 </Popconfirm>
//                 <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
//                     <Button danger="true" >Delete </Button>
//                 </Popconfirm>
//                 <Popconfirm title="Sure to watch?" onConfirm={() => handleDetail(record.key)}>
//                     <Button primary="true">Detail </Button>
//                 </Popconfirm>
//             </Space>
//         ),
//     },
// ];