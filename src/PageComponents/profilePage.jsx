import styleComponent from '../shortPath/styleComponent'
import { Layout } from "antd"
import SiderNavbar from './Sider/SiderNavbar';
import ProfileAccount from './Profile/profile';

import { Settingbar } from '../shortPath/path';
const { Header, Footer, Content, Sider } = Layout;
const { headerStyle } = styleComponent

export default function profilePages() {
    return (
        <div className="w-100">
            <Layout >
                <SiderNavbar/>
                <Layout >
                    <Content><ProfileAccount/></Content>
                    <Footer></Footer>
                </Layout>
            </Layout>
        </div>
    )
}