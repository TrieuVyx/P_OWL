import { Navbar } from "../../shortPath/path"
import { Layout } from "antd"
const { Header, Footer, Content, Sider } = Layout;
export default function SiderNavbar() {
    return (
        <>
            <Sider width="20%"  style={{background:"white"}}><Navbar/></Sider>
        </>
    )
}