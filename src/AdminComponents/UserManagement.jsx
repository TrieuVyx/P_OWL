import styleComponent from '../shortPath/styleComponent'
import { Layout } from "antd"
import { Navbar, Menutab, UserAdmin } from "../shortPath/path"
import SiderNavbar from '../PageComponents/Sider/SiderNavbar';
const { Header, Footer, Content, Sider } = Layout;
const { headerStyle } = styleComponent

export default function UserManagementPage() {
    return (
        <div className="w-100">
            <Layout >
                <SiderNavbar/>
                <Layout >
                    <Header>
                        <Menutab />
                    </Header>
                    <Content>
                        <UserAdmin />
                    </Content>
                    <Footer></Footer>
                </Layout>
            </Layout>
        </div>
    )
}