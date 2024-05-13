import Navbar from "../../../../../header/navbar/navbar";
import { Layout } from "antd"
import React, {useState, useEffect} from "react"
import TableDelete from "./tableDelete";
const { Header, Footer, Content, Sider } = Layout;
export default function Delete() {
   
    return (
        <>
            <div className="w-100">
                <Layout >
                    <Sider width="20%"><Navbar /></Sider>
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