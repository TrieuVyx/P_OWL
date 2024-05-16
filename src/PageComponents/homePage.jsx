import styleComponent from '../shortPath/styleComponent'
import { Navbar } from "../shortPath/path"
import { Layout } from "antd"
import SiderNavbar from './Sider/SiderNavbar';
const { Header, Footer, Content, Sider } = Layout;
const { headerStyle } = styleComponent
export default function homePages() {
    return (
        <div className="w-100">
            <Layout >
                <SiderNavbar/>
                <Layout >
                    <Header style={headerStyle}></Header>
                    <Content></Content>
                    <Footer></Footer>
                </Layout>
            </Layout>
        </div>
    )
}