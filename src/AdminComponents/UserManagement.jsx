import styleComponent from '../shortPath/styleComponent'
import { Layout } from "antd"
import { Navbar, Menutab, User } from "../shortPath/path"
const { Header, Footer, Content, Sider } = Layout;
const { headerStyle } = styleComponent
export default function UserManagementPage() {
    return (
        <div className="w-100">
            <Layout >
                <Sider width="20%"><Navbar /></Sider>
                <Layout >
                    <Header>
                        <Menutab />
                    </Header>
                    <Content>
                        <User />
                    </Content>
                    <Footer></Footer>
                </Layout>
            </Layout>
        </div>
    )
}