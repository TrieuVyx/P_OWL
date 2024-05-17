import { Layout } from "antd"
import React, { useState, useEffect } from "react"
import { Button, Checkbox, Form, Input, Popconfirm } from "antd";
import { formStyle, formCenterStyle } from "../../../../../../shortPath/styleComponent";
import GetUser from "../../event/CRUD/get";
import { Toaster } from "react-hot-toast"

export default function TableUpdate() {
    const AccountId = localStorage.getItem("AccountId")

    const [UserName, setUserName] = useState("")
    const [Email, setEmail] = useState("")
    const [FullName, setFullName] = useState("")
    const [Address, setAddress] = useState("")
    const [Phone, setPhone] = useState("")
    const [Hierachy, setHierachy] = useState("")
    const [Picture, setPicture] = useState("https://ik.imagekit.io/alejk5lwty/P_OWL/uploda.jpg?updatedAt=1715747698979");
    useEffect(() => {
        GetUser()
            .then((data) => {
                setUserName(data.data.UserName)
                setEmail(data.data.Email)
                setFullName(data.data.FullName)
                setAddress(data.data.Address)
                setPhone(data.data.Phone)
                setHierachy(data.data.Hierachy)
                setPicture(data.data.Image)
            })
            .catch((error) => console.error(error));
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
                                <h1>Detail User</h1>
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
                                    <Input name="UserName" readOnly value={UserName} onChange={(e) => setUserName(e.target.value)}
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
                                    <Input name="FullName"  readOnly value={FullName} onChange={(e) => setFullName(e.target.value)}
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
                                    <Input name="Email" value={Email} readOnly onChange={(e) => setEmail(e.target.value)}
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
                                    <Input name="Phone" value={Phone} readOnly onChange={(e) => setPhone(e.target.value)}
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
                                    <Input name="Address"  readOnly value={Address} onChange={(e) => setAddress(e.target.value)}
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
                                    <Input name="Hierachy" value={Hierachy}  readOnly onChange={(e) => setHierachy(e.target.value)}
                                    />
                                    <span></span>

                                </Form.Item>
                                {/* <Form.Item
                                >
                                    <div style={formCenterStyle}>
                                        <Popconfirm title="Sure to update?" onConfirm={() => UpdateUser(Data)}>
                                            <Button danger="true">Update </Button>
                                        </Popconfirm>
                                        <Popconfirm title="Sure to update?" className="m-2" onConfirm={() => handleUpdate(AccountId)}>
                                            <Button warn>Update </Button>
                                        </Popconfirm>
                                    </div>

                                </Form.Item> */}
                            </Form>
                        </div>
                        <div className="col ">
                            <div className="row " >
                                <div style={{
                                    width: "200px",
                                    // background: "gray",
                                    height: "200px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "120px 0 0 0"
                                }}>
                                    <label htmlFor="pictureInput" >

                                        <img src={Picture} alt="Err"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                background: "white",
                                                border: "gray 2px solid",
                                                display: "block"
                                            }} />
                                    </label>

                                    <input type="text" id="pictureInput" style={{ display: "none" }} />

                                </div>
                            </div>
                            {/* <div className="row mt-4 mb-4 ">
                                <ArrowDownOutlined className="arrow-icon"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }} />
                            </div>
                            <div className="row">
                                <div style={{
                                    width: "200px",
                                    // background: "gray",
                                    height: "200px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <label htmlFor="pictureInput" >

                                        <img src={Picture1} alt="Err"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                background: "white",
                                                border: "gray 2px solid",
                                                display: "block"
                                            }} />
                                    </label>

                                </div>
                            </div> */}

                        </div>
                    </div>
                    <div className="row">


                    </div>
                </div>


            </Layout>
        </>
    )
}