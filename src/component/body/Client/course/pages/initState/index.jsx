import SiderNavbar from "../../../../../../PageComponents/Sider/SiderNavbar"
import styleComponent from "../../../../../../shortPath/styleComponent"
// import Setting from "../../../../../header/navbar/setting";
import ShowCourseUser from "./show";
import { Layout } from "antd"
const { Header, Footer, Content, Sider } = Layout;
const { headerStyle } = styleComponent

export default function InitState(){
    return (
        <div className="w-100" >
        <Layout >
            <SiderNavbar/>
            <Layout >
                {/* <Header style={headerStyle}><Setting /></Header> */}
                <Content>
                    
                    {/* <ShowCourseUser/> */}
                </Content>
                <Footer></Footer>
            </Layout>
        </Layout>
    </div>
    )
}