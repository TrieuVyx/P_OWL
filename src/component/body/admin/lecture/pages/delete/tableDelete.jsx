import { Layout } from "antd"
import React, { useState, useEffect } from "react"
import { Button, Checkbox, Form, Input, Popconfirm } from "antd";
import { Toaster } from 'react-hot-toast'
import { formStyle, formCenterStyle } from "../../../../../../shortPath/styleComponent";
import GetCourse from "../../event/CRUD/get";
import DeleteCourse from "../../event/CRUD/delete";
const { Header, Footer, Content, Sider } = Layout;

export default function TableUpdate() {
    const CourseID = localStorage.getItem("CourseID")
    const [CourseName, setCourseName] = useState("")
    const [Description, setDescription] = useState("")
    const [Content, setContent] = useState("")
    const [Tittle, setTittle] = useState("")

    useEffect(() => {
        GetCourse()
            .then((data) => {
                setCourseName(data.data.CourseName)
                setDescription(data.data.Description)
                setContent(data.data.Content)
                setTittle(data.data.Tittle)
            })
            .catch((error) => console.error(error));
    }, [])
    const Data = {
        CourseID: CourseID,
        CourseName: CourseName,
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
                    <h1>Delete Lecture</h1>
                    <Toaster position='top-right' reverseOrder={false}></Toaster>

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
                        <Input value={CourseName}  readOnly/>
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
                        <Input name="Description" value={Description} readOnly/>
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
                        <Input name="Content" value={Content} readOnly />
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
                        <Input name="Tittle" readOnly value={Tittle}  />
                        <span></span>

                    </Form.Item>

                    <Form.Item
                    >
                        <div style={formCenterStyle}>

                            <Popconfirm title="Sure to delete?" className="m-2" onConfirm={() => DeleteCourse()}>
                                <Button warn="true">Delete </Button>
                            </Popconfirm>
                        </div>

                    </Form.Item>
                </Form>

            </Layout>
        </>
    )
}