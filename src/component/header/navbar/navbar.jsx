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
import { useNavigate } from 'react-router-dom';
import { LinkRouter, checkTokenExist, checkPermission, heightStyle } from '../../../shortPath/path';
import { Link } from "react-router-dom";
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
    let hasClicked = false;

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
        if (!hasClicked) {
            hasClicked = true;
            if (e.key === "0") {
              router(LinkRouter.HOME);
            } else if (e.key === "2") {
              router(LinkRouter.COURSEMANA);
            } else if (e.key === "3") {
              router(LinkRouter.USERMANA);
            } else if (e.key === "4") {
              router(LinkRouter.LECMANA);
            } 
            else if (e.key === "5") {
              localStorage.clear();
              router(LinkRouter.LOGIN);
            }
            else if (e.key === "10") {
                router(LinkRouter.HOME);
              }
          }
    };
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{height:"100%", position:"fixed"}}  >
            <div className="demo-logo-vertical p-4">
                <Link to={"/"} style={{color:"white", fontWeight:"bold",  textDecorationLine: 'unset',textUnderlineOffset:"unset"}}>Online Website Learning</Link>
            </div>
            <Menu theme='dark' defaultSelectedKeys={[1]} mode="inline" style={{ textAlign: "left", width: "100%" , height:"200vh"}} items={[
                // getItem("Online Website Learning", "0"),
                permission === "ADMIN" ? (
                    getItem("AdminBoard", "1", <TeamOutlined />,
                        [
                            getItem("Course Management", "2"),
                            getItem("Users Management", '3'),
                            getItem("Lecture Management", '4'),
                        ]
                    )
                ) : (
                    getItem("Course", "10", <BookOutlined />)
                ),
                getItem("Dashboard", "6", <PieChartOutlined />),
                getItem("Setting", "7", <SettingOutlined />),
                getItem("Rewards", "8", <FileOutlined />),
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