import { Layout } from "antd"
import Navbar from "../component/header/navbar/navbar"
import {headerStyle} from '../component/style/styleComponent'
const { Header, Footer, Content, Sider } = Layout;


export default function homePages() {

    return (
        <div className="w-100">
            <Layout >
                <Sider width="30%"><Navbar/></Sider>
                <Layout >
                    <Header style={headerStyle}></Header>
                    <Content></Content>
                    <Footer></Footer>
                </Layout>
            </Layout>

        </div>
            
    )
}