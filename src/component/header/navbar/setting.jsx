import { Input, Space, Avatar, Badge, Popconfirm } from 'antd';
import {
    BellOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { centerStyle, betweenStyle, margin, gap } from "../../../shortPath/styleComponent"
import GetUser from '../../body/Client/user/event/getUser';
import SearchCourse from './event/search.course';
import React, {useEffect,useState} from 'react'
const { Search } = Input;

export default function Setting() {
    const [courseName, setCourseName] = useState('');
    const HandleSearch = ()=>{
        localStorage.setItem("SearchReq", courseName)
        SearchCourse()
    }
    useEffect(()=>{
        
    },[])
    return (
        <div >
            <Space size={24} style={betweenStyle} >
                <Search
                    style={centerStyle}
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={HandleSearch}
                    onChange={(e) => setCourseName(e.target.value)}
                />
                <div>
                    <Badge count={0} >
                        <Avatar shape="square" icon={<BellOutlined />} style={margin} />
                    </Badge>
                    <Badge onClick={GetUser()} >
                        <Avatar shape="square" icon={<UserOutlined />} />
                    </Badge>
                </div>
            </Space>
        </div>
    )
}

