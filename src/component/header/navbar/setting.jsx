import { Input, Space, Avatar, Badge } from 'antd';
import {

    BellOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { centerStyle, betweenStyle ,margin,gap} from "../../style/styleComponent"
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
                    <Badge >
                        <Avatar shape="square" icon={<UserOutlined />} />
                    </Badge>
                </div>

            </Space>

        </div>
    )
}

{/* 
<Search 
    placeholder="input search text" 
    onSearch={onSearch} 
    style={{ width: 200 }} />
<Search 
    placeholder="input search text" 
    allowClear 
    onSearch={onSearch} 
    style={{ width: 200 }} />
<Search
    addonBefore="https://"
    placeholder="input search text"
    allowClear
    onSearch={onSearch}
    style={{ width: 304 }}
/>
<Search 
    placeholder="input search text" 
    onSearch={onSearch} 
    enterButton />
<Search
    placeholder="input search text"
    enterButton="Search"
    size="large"
    suffix={suffix}
    onSearch={onSearch}
/> */}