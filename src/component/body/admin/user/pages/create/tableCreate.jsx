import Navbar from "../../../../../header/navbar/navbar";
import Setting from "../../../../../header/navbar/setting";
import { Layout } from "antd"
import React, { useState, useEffect } from "react"
import { detailUser } from "../../../../../constants/axiosconstants";
import { Button, Checkbox, Form, Input, Popconfirm } from "antd";
import { Toaster } from 'react-hot-toast'
import { formStyle, formCenterStyle } from "../../../../../../shortPath/styleComponent";
import { handleDelete, handleUpdate } from "../../event/handleEvent";
const { Header, Footer, Content, Sider } = Layout;

export default function TableCreate() {
    const AccountId = localStorage.getItem("AccountId")
    const [datasource, setDatasource] = useState({
        UserName: undefined,
        FullName: undefined,
        Email: undefined,
        Phone: undefined,
        Address: undefined,
        Hierachy: undefined,
        Image: undefined
    })
    const [UserName, setUserName] = useState("")
    const [Email, setEmail] = useState("")
    const [FullName, setFullName] = useState("")
    const [Address, setAddress] = useState("")
    const [Phone, setPhone] = useState("")
    const [Hierachy, setHierachy] = useState("")

    useEffect(() => {
        detailUser()
            .then((data) => {
                setDatasource(data.data)
            })
            .catch((error) => console.error(error));
    }, [])
    return (
        <>
            <Layout>
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
                    <h1>Create User</h1>
                    <Form.Item
                        label="UserName"
                        name="UserName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your UserName!',
                            },
                        ]}
                    >
                        <Input  value={datasource.UserName} onChange={(e) => {
                            setUserName(e.target.value)
                        }} />
                    </Form.Item>
                    <Form.Item
                        label="FullName"
                        name="FullName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your FullName!',
                            }
                        ]}
                    >
                        <Input name="FullName"  value={datasource.FullName} onChange={(e) => {
                            setFullName(e.target.value)
                        }} />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="Email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            }
                        ]}
                    >
                        <Input name="Email"  value={datasource.Email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="Phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Phone!',
                            }
                        ]}
                    >
                        <Input name="Phone"  value={datasource.Phone} onChange={(e) => {
                            setPhone(e.target.value)
                        }} />
                    </Form.Item>
                    <Form.Item
                        label="Address"
                        name="Address"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Address!',
                            }
                        ]}
                    >
                        <Input name="Address"  value={datasource.Address} onChange={(e) => {
                            setAddress(e.target.value)
                        }} />
                    </Form.Item>
                    <Form.Item
                        label="Hierachy"
                        name="Hierachy"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Hierachy!',
                            }
                        ]}
                    >
                        <Input name="Hierachy"  value={datasource.Hierachy} onChange={(e) => {
                            setHierachy(e.target.value)
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

            </Layout>
        </>
    )
}