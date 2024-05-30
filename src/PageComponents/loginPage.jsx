import styleComponent from '../shortPath/styleComponent'
import { Layout } from "antd"
import { backgroundStyle } from '../shortPath/styleComponent';
const { Content } = Layout;
const { LoginPage } = styleComponent

export default function loginPages() {
    return (
        <div className="w-100" >
            <Layout >
                <Content ><LoginPage /></Content>
            </Layout>
        </div>
    )
}