import Navbar from "../../../../../header/navbar/navbar";
import { Layout } from "antd"
import React, {useState, useEffect} from "react"
import TableCreate from "./tableCreate";
import SiderNavbar from "../../../../../../PageComponents/Sider/SiderNavbar";
const { Header, Footer, Content, Sider } = Layout;
export default function Create() {
   
    return (
        <>
            <div className="w-100">
                <Layout >
                    <SiderNavbar/>
                    <Layout >
                        {/* <Header><Setting/></Header> */}
                        <Content><TableCreate/></Content>
                        <Footer></Footer>
                    </Layout>
                </Layout>
            </div>
        </>


    )
}