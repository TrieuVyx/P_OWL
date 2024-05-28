import { Input, Space, Avatar, Badge, Popconfirm } from 'antd';
import {

    BellOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { centerStyle, betweenStyle, margin, gap } from "../../../shortPath/styleComponent"
import GetUser from '../../body/Client/user/event/getUser';
const { Search } = Input;

export default function Setting() {


    return (
        <div >

            <Space size={24} style={betweenStyle} >
                <Search
                    style={centerStyle}
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                // onSearch={onSearch}
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

