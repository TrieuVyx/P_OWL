import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from "antd";
import React, { useState } from "react";
// import {keyPress} from "./key/key"
import { useNavigate } from 'react-router-dom';
import { LinkRouter } from '../../../shortPath/path';

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
    const setSelectedMenuItem = (e) => {
        if (e.key === "0") {
            e.key = router(LinkRouter.HOME)
            return true
        }
        if (e.key === "2") {
            e.key = router(LinkRouter.COURSE)
            return true
        }
        if (e.key === "4") {
            e.key = router(LinkRouter.HOME)
            return true
        }
        if (e.key === "7") {
            e.key = router(LinkRouter.LOGIN)
            return true
        }
        if (e.key === "8") {
            e.key = router(LinkRouter.LOGIN)
            return true
        }
    }

    return (
        <Layout
            style={{ minHeight: "100vh" }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}  >
                <div className="demo-logo-vertical"></div>
                <Menu theme='dark' defaultSelectedKeys={[1]} mode="inline" items={[
                    getItem("ANT-ETL", "0"),
                    getItem("Dashboard", "1", <PieChartOutlined />),
                    getItem("MyCourses", "2", <DesktopOutlined />),
                    getItem("Lessons", "3", <TeamOutlined />,
                        [
                        //     getItem("Nhân Viên", "4"),
                        //     getItem("Sản Phẩm", '5')
                        ]),
                    getItem("Rewards", "6", <FileOutlined />),
                    getItem("Login", "7", <UserOutlined />),
                    getItem("Setting", "8", <UserOutlined />)
                ]}
                    onClick={(e) => setSelectedMenuItem(e)}
                ></Menu>
            </Sider>
        </Layout>
    )
}