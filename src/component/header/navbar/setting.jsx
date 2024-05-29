import { Input, Space, Avatar, Badge, Popconfirm } from 'antd';
import {
    BellOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { centerStyle, betweenStyle, margin, gap } from "../../../shortPath/styleComponent"
import SearchCourse from './event/search.course';
import React, {useEffect,useState, useReducer} from 'react'
import { useNavigate } from 'react-router-dom';
import GetUser from '../../body/Client/user/event/getUser';
import getListCourse from '../../body/Client/course/event/getListCourse';

const { Search } = Input;

export default function Setting() {
    const router = useNavigate();
    const [courseName, setCourseName] = useState('');
    const AccountId = localStorage.getItem("AccountId")

    //#region tìm kiếm khóa học
    const HandleSearch = ()=>{
        localStorage.setItem("SearchReq", courseName)
        SearchCourse()
    }
    //#region chuyển hướng đến user
    const HandleDirect = ()=> {
        router(`user`)
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
                    <Badge onClick={HandleDirect} >
                        <Avatar shape="square" icon={<UserOutlined />} />
                    </Badge>
                </div>
            </Space>
        </div>
    )
}

