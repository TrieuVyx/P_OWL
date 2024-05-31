import { Layout } from "antd"
import React, { useState, useEffect } from "react"
import { Button, Checkbox, Form, Input, Popconfirm } from "antd";
import {toast, Toaster } from 'react-hot-toast'
import { formStyle, formCenterStyle } from "../../../../../../shortPath/styleComponent";
import TextArea from "antd/es/input/TextArea";
import CreateCourse from "../../event/CRUD/create";
const { Header, Footer, Content, Sider } = Layout;

export default function TableCreate() {

    const [CourseName, setCourseName] = useState("")
    const [Description, setDescription] = useState("")
    const [Content, setContent] = useState("")
    const [Tittle, setTittle] = useState("")
    const [Picture, setPicture] = useState("https://ik.imagekit.io/alejk5lwty/P_OWL/uploda.jpg?updatedAt=1715747698979");

    const Data = {
        CourseName: CourseName,
        Description: Description,
        Content: Content,
        Tittle: Tittle,
        Picture: Picture
    }
    const handleImageChange = (event) => {
        try{
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                const newSrc = e.target.result;
                setPicture(newSrc);
            };
            reader.readAsDataURL(file);
        }
        catch(err){
            toast.error("please choose image ")
        }

    };
    return (
        <>
            <Layout>
                <div className="">
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
                                    <TextArea name="Content" value={Content} onChange={(e) => {
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
                                        <Popconfirm title="Sure to create?" onConfirm={() => CreateCourse(Data)}>
                                            <Button danger="true">Create </Button>
                                        </Popconfirm>

                                    </div>

                                </Form.Item>
                            </Form>
                        </div>
                        <div className="col">
                            <h1 style={{ margin: "40px 0px 20px 0 " }}>Upload Image</h1>
                            <div className="w-100 " style={{
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center"
                            }}>
                                <div style={{
                                    width: "200px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
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

                                    <input type="file" id="pictureInput" style={{ display: "none" }} onChange={handleImageChange} />

                                </div>
                            </div>

                        </div>
                    </div>

                </div>


            </Layout>
        </>
    )
}