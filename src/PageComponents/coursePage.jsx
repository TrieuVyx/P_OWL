import { Layout } from "antd"
import { Navbar, Settingbar } from "../shortPath/path"
import ShowCourse from "../component/body/Client/course/course";
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
                        <ShowCourse/>
                    </Content>
                    <Footer></Footer>
                </Layout>
            </Layout>

        </div>

    )
}