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
            router(LinkRouter.HOME);
        } else if (e.key === "2") {
            router(LinkRouter.COURSE);
        } else if (e.key === "5") {
            router(LinkRouter.LOGIN);
        }
    };

    return (
        <Layout style={{ minHeight: "100vh" }}
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
                    getItem("Rewards", "4", <FileOutlined />),
                    getItem("Login", "5", <UserOutlined />),
                    getItem("Setting", "6", <UserOutlined />)
                ]}
                    onClick={(e) => setSelectedMenuItem(e)}
                ></Menu>
            </Sider>
        </Layout>
    )
}