import Navbar from "../../../../../header/navbar/navbar";
import { Layout } from "antd"
import React, {useState, useEffect} from "react"
import TableCreate from "./tableCreate";
const { Header, Footer, Content, Sider } = Layout;
export default function Create() {
   
    return (
        <>
            <div className="w-100">
                <Layout >
                    <Sider width="20%"><Navbar /></Sider>
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