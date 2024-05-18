import { Navbar } from "../../shortPath/path"
import { Layout } from "antd"
const { Header, Footer, Content, Sider } = Layout;
export default function SiderNavbar() {
    return (
        <>
            <Sider height="true" style={{background:"white",height:"200vh"}}><Navbar/></Sider>
        </>
    )
}