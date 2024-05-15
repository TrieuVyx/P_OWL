import Navbar from "../../../../../header/navbar/navbar";
import { Layout } from "antd"
import React, {useState, useEffect} from "react"
import TableDetail from "./tableDetail";
import SiderNavbar from "../../../../../../PageComponents/Sider/SiderNavbar";
const { Header, Footer, Content, Sider } = Layout;
export default function Detail() {
   
    return (

        <>
            <div className="w-100">
                <Layout >
                    <SiderNavbar/>
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