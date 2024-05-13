import Navbar from "../../../../../header/navbar/navbar";
import Setting from "../../../../../header/navbar/setting";
import { Layout } from "antd"
import React, { useState, useEffect } from "react"
import { detailUser } from "../../../../../constants/axiosconstants";
import { Button, Checkbox, Form, Input, Popconfirm } from "antd";
import { Toaster } from 'react-hot-toast'
import { formStyle, formCenterStyle } from "../../../../../../shortPath/styleComponent";
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
const { Header, Footer, Content, Sider } = Layout;

export default function TableCreate() {
    // const AccountId = localStorage.getItem("AccountId")
    // const [datasource, setDatasource] = useState({
    //     UserName: undefined,
    //     FullName: undefined,
    //     Email: undefined,
    //     Phone: undefined,
    //     Address: undefined,
    //     Hierachy: undefined,
    //     Image: undefined
    // })
    const [CourseName, setCourseName] = useState("")
    const [Description, setDescription] = useState("")
    const [Content, setContent] = useState("")
    const [Tittle, setTittle] = useState("")
    const [Picture, setPicture] = useState("")

    useEffect(() => {
        // detailUser()
        //     .then((data) => {
        //         setDatasource(data.data)
        //     })
        //     .catch((error) => console.error(error));
    }, [])
    return (
        <>
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Form
                                name="basic"
                                labelCol={{
                                    span: 8,
                                }}
                                wrapperCol={{
                                    span: 16,
                                }}
                                style={formStyle}
                                initialValues={{
                                    remember: true,
                                }}
                                method='POST'
                                onFinish={() => {
                                    // Authenticate(Email, PassWord)
                                }}
                            // onFinishFailed={onFinishFailed}
                            >
                                <h1>Create Couse</h1>
                                <Form.Item
                                    label="CourseName"
                                    name="CourseName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your CourseName!',
                                        },
                                    ]}
                                >
                                    <Input value={CourseName} onChange={(e) => {
                                        setCourseName(e.target.value)
                                    }} />
                                </Form.Item>
                                <Form.Item
                                    label="Description"
                                    name="Description"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Description!',
                                        }
                                    ]}
                                >
                                    <Input name="Description" value={Description} onChange={(e) => {
                                        setDescription(e.target.value)
                                    }} />
                                </Form.Item>
                                <Form.Item
                                    label="Content"
                                    name="Content"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Content!',
                                        }
                                    ]}
                                >
                                    <Input name="Content" value={Content} onChange={(e) => {
                                        setContent(e.target.value)
                                    }} />
                                </Form.Item>
                                <Form.Item
                                    label="Tittle"
                                    name="Tittle"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Tittle!',
                                        }
                                    ]}
                                >
                                    <Input name="Tittle" value={Tittle} onChange={(e) => {
                                        setTittle(e.target.value)
                                    }} />
                                </Form.Item>
                                
                                <Form.Item
                                >
                                    <div style={formCenterStyle}>
                                        <Popconfirm title="Sure to delete?"  >
                                            <Button danger>Create </Button>
                                        </Popconfirm>

                                    </div>

                                </Form.Item>
                            </Form>
                        </div>
                        <div className="col">
                            <h1>show</h1>
                        </div>
                    </div>

                </div>


            </Layout>
        </>
    )
}