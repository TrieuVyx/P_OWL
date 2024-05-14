import { Layout } from "antd"
import React, { useState, useEffect } from "react"
import { Button, Checkbox, Form, Input, Popconfirm } from "antd";
import { Toaster } from 'react-hot-toast'
import { formStyle, formCenterStyle } from "../../../../../../shortPath/styleComponent";
import GetLecture from "../../event/CRUD/get";
const { Header, Footer, Content, Sider } = Layout;

export default function TableUpdate() {
    const LectureID = localStorage.getItem("LectureID")
    const [LectureName, setLectureName] = useState("")
    const [CourseName, setCourseName] = useState("")
    const [Description, setDescription] = useState("")
    const [Content, setContent] = useState("")
    const [Tittle, setTittle] = useState("")

    useEffect(() => {
        GetLecture()
            .then((data) => {
                setLectureName(data.data.LectureName)
                setCourseName(data.data.CourseName)
                setDescription(data.data.Description)
                setContent(data.data.Content)
                setTittle(data.data.Tittle)
            })
            .catch((error) => console.error(error));
    }, [])
    const Data = {
        LectureID: LectureID,
        CourseName: CourseName,
        LectureName: LectureName,
        Description: Description,
        Content: Content,
        Tittle: Tittle
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
                    <h1>Update Lecture</h1>
                    <Toaster position='top-right' reverseOrder={false}></Toaster>
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
                        <span></span>

                    </Form.Item>
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
                        <span></span>

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
                        <span></span>
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
                        <span></span>

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

                        <span></span>

                    </Form.Item>

                    <Form.Item
                    >
                        <div style={formCenterStyle}>

                            <Popconfirm title="Sure to update?" className="m-2" onConfirm={() => UpdateLecture(Data)} >
                                <Button warn="true">Update </Button>
                            </Popconfirm>
                        </div>

                    </Form.Item>
                </Form>

            </Layout>
        </>
    )
}