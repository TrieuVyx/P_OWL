import { Layout } from "antd"
import Navbar from "./header/navbar/navbar"
import { headerStyle } from '../component/style/styleComponent'
import Settingbar from "./header/navbar/setting"
import Course from "./body/course/course"
const { Header, Footer, Content, Sider } = Layout;

export default function coursePages() {

    return (
        <div className="w-100">
            <Layout >
                <Sider width="30%"><Navbar /></Sider>
                <Layout >
                    <Header
                    // style={headerStyle}
                    >
                        <Settingbar />
                    </Header>
                    <Content>
                        <Course />
                    </Content>
                    <Footer></Footer>
                </Layout>
            </Layout>

        </div>

    )
}