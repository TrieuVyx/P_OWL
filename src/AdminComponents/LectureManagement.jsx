import styleComponent from '../shortPath/styleComponent'
import { Layout } from "antd"
import { Navbar, Menutab, LectureAdmin,Settingbar } from "../shortPath/path"
import SiderNavbar from '../PageComponents/Sider/SiderNavbar';
const { Header, Footer, Content, Sider } = Layout;
const { headerStyle } = styleComponent

export default function LectureManagementPage() {
    return (
        <div className="w-100">
            <Layout >
                <SiderNavbar/>
                <Layout >
                    <Header>
                        <Settingbar />
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