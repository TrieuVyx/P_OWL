import {
    DesktopOutlined,
    BookOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    SettingOutlined
} from '@ant-design/icons';
import { Layout, Menu } from "antd";
import React, { useState, useEffect } from "react";
// import {keyPress} from "./key/key"
import { useNavigate } from 'react-router-dom';
import { LinkRouter, checkTokenExist, checkPermission ,heightStyle} from '../../../shortPath/path';

const { Sider } = Layout;
const getItem = (label, key, icon, children, collapsed) => {
    return {
        key,
        label,
        icon,
        children,
        collapsed
    }
}
export default function Navbar() {
    const router = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const [isAuthen, setIsauthen] = useState(false);
    const [permission, setPermission] = useState("STUDENT")
    useEffect(() => {
        const token = checkTokenExist();
        const checkPer = checkPermission();
        if (token !== null && checkPer !== null) {
            setIsauthen(true);
            setPermission(checkPer)
        } else {
            setIsauthen(false);
            setPermission(checkPer)
        }

    }, [])
    const setSelectedMenuItem = (e) => {
        if (e.key === "0") {
            router(LinkRouter.HOME);
        } 
        else if (e.key === "2") {
            router(LinkRouter.COURSEMANA)
        }
        else if (e.key === "3") {
            router(LinkRouter.USERMANA)
        } 
        else if (e.key === "4") {
            router(LinkRouter.LECMANA)
        } 
        else if (e.key === "5") {
            localStorage.clear()
            router(LinkRouter.LOGIN);
        } 
    };
    return (
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}  style={heightStyle} >
                <div className="demo-logo-vertical"></div>
                <Menu theme='dark' defaultSelectedKeys={[1]} mode="inline" style={{textAlign:"left"}} items={[
                    getItem("ANT-ETL", "0"),
                    permission === "ADMIN" ? (
                        getItem("AdminBoard", "1", <TeamOutlined />,
                            [
                                getItem("Course Management", "2"),
                                getItem("Users Management", '3'),
                                getItem("Lecture Management", '4'),
                            ]
                        )
                    ) : (
                        getItem("Dashboard", "6", <PieChartOutlined />),
                        getItem("Setting", "7", <SettingOutlined />),
                        getItem("Rewards", "8", <FileOutlined />)
                    ),
                    getItem("Lessons", "10", <BookOutlined />),
                    isAuthen ? (
                        getItem("Logout", "5", <UserOutlined />)
                    ) : (
                        getItem("Login", "5", <UserOutlined />)
                    )
                ]}
                    onClick={(e) => setSelectedMenuItem(e)}
                ></Menu>
            </Sider>
    )
}