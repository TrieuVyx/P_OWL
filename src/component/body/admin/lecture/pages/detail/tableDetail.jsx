import { Layout } from "antd"
import React, { useState, useEffect } from "react"
import { Button, Checkbox, Form, Input, Popconfirm } from "antd";
import { Toaster } from 'react-hot-toast'
import { formStyle, formCenterStyle } from "../../../../../../shortPath/styleComponent";
import GetCourse from "../../event/CRUD/get";

const { Header, Footer, Content, Sider } = Layout;

export default function TableDetail() {
    const LectureID = localStorage.getItem("LectureID")
  
    // const [CourseName, setCourseName] = useState("")
    const [LectureName, setLectureName] = useState("")
    const [Description, setDescription] = useState("")
    const [Content, setContent] = useState("")
    const [Tittle, setTittle] = useState("")

    useEffect(() => {
        GetCourse()
            .then((data) => {
                // setCourseName(data.data.LectureName)
                setLectureName(data.data.LectureName)
                setDescription(data.data.Description)
                setContent(data.data.Content)
                setTittle(data.data.Tittle)
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
                    <h1>Detail Lecture</h1>
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
                        <Input readOnly value={LectureName} />
                        <span></span>
                    </Form.Item>
                    {/* <Form.Item
                        label="CourseName"
                        name="CourseName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your CourseName!',
                            },
                        ]}
                    >
                        <Input readOnly value={CourseName} />
                        <span></span>
                    </Form.Item> */}
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
                        <Input name="Description" readOnly value={Description}  />
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
                        <Input name="Content" readOnly value={Content} 
                         />
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
                        <Input name="Tittle" readOnly value={Tittle} />
                        <span></span>

                    </Form.Item>
                    
                    <Form.Item
                    >
                        <div style={formCenterStyle}>
                            <Popconfirm title="Sure to delete?"  
                            // onConfirm={() => handleDelete(AccountId)}
                            >
                                <Button danger = "true">Delete </Button>
                            </Popconfirm>
                            <Popconfirm title="Sure to update?" className="m-2" 
                            // onConfirm={() => handleUpdate(AccountId)}
                            >
                                <Button warn="true">Update </Button>
                            </Popconfirm>
                        </div>

                    </Form.Item>
                </Form>

            </Layout>
        </>
    )
}