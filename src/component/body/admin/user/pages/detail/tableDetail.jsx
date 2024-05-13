import { Layout } from "antd"
import React, { useState, useEffect } from "react"
import { Button, Checkbox, Form, Input, Popconfirm } from "antd";
import { formStyle, formCenterStyle,InputStyle } from "../../../../../../shortPath/styleComponent";
import { handleDelete, handleUpdate } from "../../event/handleEvent";
const { Header, Footer, Content, Sider } = Layout;
import GetUser from "../../event/CRUD/get";
export default function TableDetail() {
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
                    <h1>Detail User</h1>
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
                        <Input name="UserName" readOnly value={UserName}  defaultValue={UserName}
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
                        <Input name="FullName" readOnly value={FullName}  />
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
                        <Input name="Email" readOnly value={Email}  />
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
                        <Input name="Phone" readOnly value={Phone} defaultValue={Phone}  />
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
                        <Input name="Address" readOnly value={Address} />
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
                        <Input name="Hierachy" readOnly value={Hierachy}/>
                        <span></span>

                    </Form.Item>
                    <Form.Item
                    >
                        <div style={formCenterStyle}>
                            <Popconfirm title="Sure to delete?"  onConfirm={() => handleDelete(AccountId)}>
                                <Button danger>Delete </Button>
                            </Popconfirm>
                            <Popconfirm title="Sure to update?" className="m-2" onConfirm={() => handleUpdate(AccountId)}>
                                <Button warn>Update </Button>
                            </Popconfirm>
                        </div>

                    </Form.Item>
                </Form>

            </Layout>
        </>
    )
}