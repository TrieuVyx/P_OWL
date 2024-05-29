import SiderNavbar from "../../../../../../PageComponents/Sider/SiderNavbar";
import styleComponent from "../../../../../../shortPath/styleComponent"
import ShowLectureCourse from "./show";
import { Layout } from "antd"
const { Header, Footer, Content, Sider } = Layout;
const { headerStyle } = styleComponent

export default function InitStateTw(){
    return (
        <div className="w-100">
        <Layout >
            <SiderNavbar/>
            <Layout >
                <Header></Header>
                <Content><ShowLectureCourse/></Content>
                <Footer></Footer>
            </Layout>
        </Layout>
    </div>
    )
}