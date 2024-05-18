import SiderNavbar from "../../../../../../PageComponents/Sider/SiderNavbar"
import styleComponent from "../../../../../../shortPath/styleComponent"

import { Layout } from "antd"
const { Header, Footer, Content, Sider } = Layout;
const { headerStyle } = styleComponent
export default function EndState(){
    return (
        <div className="w-100">
        <Layout >
            <SiderNavbar/>
            <Layout >
                <Header style={headerStyle}></Header>
                <Content></Content>
                <Footer></Footer>
            </Layout>
        </Layout>
    </div>
    )
}