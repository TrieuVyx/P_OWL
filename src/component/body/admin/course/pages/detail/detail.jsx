import Navbar from "../../../../../header/navbar/navbar";
import Setting from "../../../../../header/navbar/setting";
import { Layout } from "antd"
import React, {useState, useEffect} from "react"
import { detailUser } from "../../../../../constants/axiosconstants";
import TableDetail from "./tableDetail";
const { Header, Footer, Content, Sider } = Layout;
export default function Detail() {
    const [datasource, setDatasource] = useState({
        UserName: undefined,
        FullName: undefined,
        Email: undefined,
        Phone: undefined,
        Address: undefined,
        Hierachy: undefined,
        Image: undefined
    })

    useEffect(()=>{
        detailUser()
            .then((data) => {
                setDatasource(data)
            })
            .catch((error) => console.error(error));
    }, [])
    return (

        <>
            <div className="w-100">
                <Layout >
                    <Sider width="20%"><Navbar /></Sider>
                    <Layout >
                        {/* <Header><Setting/></Header> */}
                        <Content><TableDetail/></Content>
                        <Footer></Footer>
                    </Layout>
                </Layout>
            </div>
        </>


    )
}