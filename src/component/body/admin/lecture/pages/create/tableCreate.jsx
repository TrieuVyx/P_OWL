import { Layout } from "antd"
import React, { useState, useEffect } from "react"
import { Button, Checkbox, Form, Input, Popconfirm } from "antd";
import { Toaster } from 'react-hot-toast'
import { formStyle, formCenterStyle } from "../../../../../../shortPath/styleComponent";
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { Image, Upload, Flex, message, } from 'antd';
import TextArea from "antd/es/input/TextArea";
import CreateCourse from "../../event/CRUD/create";
const { Header, Footer, Content, Sider } = Layout;

export default function TableCreate() {
    const [LectureName, setLectureName] = useState("")
    const [CourseName, setCourseName] = useState("")
    const [Description, setDescription] = useState("")
    const [Content, setContent] = useState("")
    const [Tittle, setTittle] = useState("")
    const Data = {
        CourseName:CourseName,
        LectureName:LectureName,
        Description:Description,
        Content:Content,
        Tittle:Tittle,
    }
    
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
                                <h1>Create Lecture</h1>
                                <Form.Item
                                    label="LectureName"
                                    name="LectureName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your LectureName!',
                                        },
                                    ]}
                                >
                                    <Input value={LectureName} onChange={(e) => {
                                        setLectureName(e.target.value)
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
                                    label="CourseName"
                                    name="CourseName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your CourseName!',
                                        }
                                    ]}
                                >
                                    <Input name="CourseName" value={CourseName} onChange={(e) => {
                                        setCourseName(e.target.value)
                                    }} />
                                </Form.Item>
                                <Form.Item
                                >
                                    <div style={formCenterStyle}>
                                        <Popconfirm title="Sure to create?"   onConfirm={() => CreateCourse(Data)}>
                                            <Button danger = "true">Create </Button>
                                        </Popconfirm>

                                    </div>

                                </Form.Item>
                            </Form>
                        </div>
                        <div className="col">
                            <h1 style={{margin:"20px 0 0 0 "}}>Upload Image</h1>
                            {/* <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action=""
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload> */}
                        </div>
                    </div>

                </div>


            </Layout>
        </>
    )
}