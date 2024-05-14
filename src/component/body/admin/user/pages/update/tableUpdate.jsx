import { Layout } from "antd"
import React, { useState, useEffect } from "react"
import { Button, Checkbox, Form, Input, Popconfirm } from "antd";
import { formStyle, formCenterStyle } from "../../../../../../shortPath/styleComponent";
import UpdateUser from "../../event/CRUD/update";
import GetUser from "../../event/CRUD/get";
import { Toaster } from "react-hot-toast"
const { Header, Footer, Content, Sider } = Layout;
export default function TableUpdate() {
    const AccountId = localStorage.getItem("AccountId")

    const [UserName, setUserName] = useState("")
    const [Email, setEmail] = useState("")
    const [FullName, setFullName] = useState("")
    const [Address, setAddress] = useState("")
    const [Phone, setPhone] = useState("")
    const [Hierachy, setHierachy] = useState("")

    useEffect(() => {
        GetUser()
            .then((data) => {
                setUserName(data.data.UserName)
                setEmail(data.data.Email)
                setFullName(data.data.FullName)
                setAddress(data.data.Address)
                setPhone(data.data.Phone)
                setHierachy(data.data.Hierachy)
            })
            .catch((error) => console.error(error));
    }, [])
    const Data = {
        AccountId: AccountId,
        UserName: UserName,
        FullName: FullName,
        Email: Email,
        Address: Address,
        Phone: Phone,
        Hierachy: Hierachy
    }
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
                    <h1>Update User</h1>
                    <Toaster position='top-right' reverseOrder={false}></Toaster>

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
                        <Input name="UserName" value={UserName} onChange={(e) => setUserName(e.target.value)}
                        />
                        <span></span>
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
                        <Input name="FullName" value={FullName} onChange={(e) => setFullName(e.target.value)}
                        />
                        <span></span>
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
                        <Input name="Email" value={Email} onChange={(e) => setEmail(e.target.value)}
                        />
                        <span></span>
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
                        <Input name="Phone" value={Phone} onChange={(e) => setPhone(e.target.value)}
                        />
                        <span></span>
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
                        <Input name="Address" value={Address} onChange={(e) => setAddress(e.target.value)}
                        />
                        <span></span>

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
                        <Input name="Hierachy" value={Hierachy} onChange={(e) => setHierachy(e.target.value)}
                        />
                        <span></span>

                    </Form.Item>
                    <Form.Item
                    >
                        <div style={formCenterStyle}>
                            <Popconfirm title="Sure to update?" onConfirm={() => UpdateUser(Data)}>
                                <Button danger="true">Update </Button>
                            </Popconfirm>
                            {/* <Popconfirm title="Sure to update?" className="m-2" onConfirm={() => handleUpdate(AccountId)}>
                                <Button warn>Update </Button>
                            </Popconfirm> */}
                        </div>

                    </Form.Item>
                </Form>

            </Layout>
        </>
    )
}