import Navbar from "../../../../header/navbar/navbar";
import { Layout } from "antd"
const { Header, Footer, Content, Sider } = Layout;

export default function Detail() {
    return (

        <>
            <div className="w-100">
                <Layout >
                    <Sider width="20%"><Navbar /></Sider>
                    <Layout >
                        <Header ></Header>
                        <Content></Content>
                        <Footer></Footer>
                    </Layout>
                </Layout>
            </div>
        </>


    )
}