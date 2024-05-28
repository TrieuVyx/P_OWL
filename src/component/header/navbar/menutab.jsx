import {
    TeamOutlined
} from '@ant-design/icons';
import { Menu, Badge, Avatar } from "antd";
import { betweenStyle, menutabstyle } from '../../../shortPath/styleComponent';
export default function Menutab() {
    const getItem = (label, key, icon, children, collapsed) => {
        return {
            key,
            label,
            icon,
            children,
            collapsed
        }
    }
    return (
        <div
            id="menutab"
        >
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={[
                    getItem("", "5",
                        <a href="#">
                            <Badge count={1}>
                                <Avatar shape="square" size="small" />
                            </Badge>
                        </a>),
                ]}
                style={menutabstyle}
            />
        </div>

    )
}