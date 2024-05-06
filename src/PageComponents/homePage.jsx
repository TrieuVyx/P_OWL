import styleComponent from '../shortPath/styleComponent'
import { Navbar } from "../shortPath/path"
import { Layout } from "antd"
const { Header, Footer, Content, Sider } = Layout;
const { headerStyle } = styleComponent
export default function homePages() {
    return (
        <div className="w-100">
            <Layout >
                <Sider width="20%"><Navbar /></Sider>
                <Layout >
                    <Header style={headerStyle}></Header>
                    <Content></Content>
                    <Footer></Footer>
                </Layout>
            </Layout>
        </div>
    )
}