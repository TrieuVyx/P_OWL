import styleComponent from '../shortPath/styleComponent'
import { Layout } from "antd"
import { Navbar, Menutab, LectureAdmin } from "../shortPath/path"
const { Header, Footer, Content, Sider } = Layout;
const { headerStyle } = styleComponent
export default function LectureManagementPage() {
    return (
        <div className="w-100">
            <Layout >
                <Sider width="20%"><Navbar /></Sider>
                <Layout >
                    <Header>
                        <Menutab />
                    </Header>
                    <Content>
                        <LectureAdmin />
                    </Content>
                    <Footer></Footer>
                </Layout>
            </Layout>
        </div>
    )
}