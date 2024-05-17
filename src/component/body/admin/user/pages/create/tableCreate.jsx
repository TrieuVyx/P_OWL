import { Layout } from "antd"
import React, { useState, useEffect } from "react"
import { Button, Checkbox, Form, Input, Popconfirm } from "antd";
import { formStyle, formCenterStyle } from "../../../../../../shortPath/styleComponent";
import CreateUser from "../../event/CRUD/create";
import { Toaster } from "react-hot-toast"
export default function TableCreate() {

    const [UserName, setUserName] = useState("")
    const [Email, setEmail] = useState("")
    const [FullName, setFullName] = useState("")
    const [PassWords, setPassWords] = useState("")
    const [Address, setAddress] = useState("")
    const [Phone, setPhone] = useState("")
    const [Hierachy, setHierachy] = useState("")
    const [Image, setImage] = useState("https://ik.imagekit.io/alejk5lwty/P_OWL/uploda.jpg?updatedAt=1715747698979");

    const Data = {
        UserName: UserName,
        PassWord: PassWords,
        FullName: FullName,
        Email: Email,
        Address: Address,
        Phone: Phone,
        Hierachy: Hierachy,
        Image:Image

    }
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const newSrc = e.target.result;
            setImage(newSrc);
        };
        reader.readAsDataURL(file);

    };
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
                                <h1>Create User</h1>
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
                                    label="PassWord"
                                    name="PassWord"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your PassWord!',
                                        },
                                    ]}
                                >
                                    <Input name="PassWord" value={PassWords} onChange={(e) => setPassWords(e.target.value)}
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
                                        <Popconfirm title="Sure to create?" onConfirm={() => CreateUser(Data)}>
                                            <Button danger="true">Create </Button>
                                        </Popconfirm>
                                        {/* <Popconfirm title="Sure to update?" className="m-2" onConfirm={() => handleUpdate(AccountId)}>
                                <Button warn>Update </Button>
                            </Popconfirm> */}
                                    </div>

                                </Form.Item>
                            </Form>


                        </div>
                        <div className="col">
                            <h1 style={{ margin: "40px 0 0 0 " }}>Upload Image</h1>
                            <div style={{
                                width: "100%",
                                // background: "gray",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <label htmlFor="pictureInput" >

                                    <img src={Image} alt="Err"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            background: "white",
                                            border: "gray 2px solid",
                                            display: "block"
                                        }} />
                                </label>

                                <input type="file" id="pictureInput" style={{ display: "none" }} onChange={handleImageChange} />

                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}