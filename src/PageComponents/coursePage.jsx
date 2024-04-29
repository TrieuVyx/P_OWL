import { Layout } from "antd"
import {CourseBody, Navbar, Settingbar} from "../shortPath/path"
const { Header, Footer, Content, Sider } = Layout;

export default function coursePages() {

    return (
        <div className="w-100">
            <Layout >
                <Sider width="20%"><Navbar /></Sider>
                <Layout >
                    <Header>
                        <Settingbar />
                    </Header>
                    <Content>
                        <CourseBody />
                    </Content>
                    <Footer></Footer>
                </Layout>
            </Layout>

        </div>

    )
}