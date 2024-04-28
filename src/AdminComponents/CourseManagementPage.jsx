import styleComponent from '../shortPath/styleComponent'
import { Layout } from "antd"
import { Navbar } from "../shortPath/path"
const { Header, Footer, Content, Sider } = Layout;
const { headerStyle } = styleComponent
export default function CourseManagementPage(){
    return (

        <div className="w-100">
        <Layout >
            <Sider width="30%"><Navbar /></Sider>
            <Layout >
                <Header ></Header>
                <Content></Content>
                <Footer></Footer>
            </Layout>
        </Layout>

    </div>
    )
}