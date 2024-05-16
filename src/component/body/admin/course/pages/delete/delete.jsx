import Navbar from "../../../../../header/navbar/navbar";
import { Layout } from "antd"
import React, {useState, useEffect} from "react"
import TableDelete from "./tableDelete";
import SiderNavbar from "../../../../../../PageComponents/Sider/SiderNavbar";

const { Header, Footer, Content, Sider } = Layout;
export default function Delete() {
   
    return (
        <>
            <div className="w-100">
                <Layout >
                    <SiderNavbar/>
                    <Layout >
                        {/* <Header><Setting/></Header> */}
                        <Content><TableDelete/></Content>
                        <Footer></Footer>
                    </Layout>
                </Layout>
            </div>
        </>


    )
}