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
    const [Picture1, setPicture1] = useState("https://ik.imagekit.io/alejk5lwty/P_OWL/uploda.jpg?updatedAt=1715747698979");
    const [Picture, setPicture] = useState("https://ik.imagekit.io/alejk5lwty/P_OWL/uploda.jpg?updatedAt=1715747698979");
    useEffect(() => {
        GetCourse()
            .then((data) => {
                // setCourseName(data.data.LectureName)
                setLectureName(data.data.LectureName)
                setDescription(data.data.Description)
                setContent(data.data.Content)
                setTittle(data.data.Tittle)
                setPicture(data.data.Picture)

            })
            .catch((error) => console.error(error));
    }, [])
    
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
                                    <Input name="Description" readOnly value={Description} />
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
                                        {/* <Popconfirm title="Sure to delete?"
                                        // onConfirm={() => handleDelete(AccountId)}
                                        >
                                            <Button danger="true">Delete </Button>
                                        </Popconfirm>
                                        <Popconfirm title="Sure to update?" className="m-2"
                                        // onConfirm={() => handleUpdate(AccountId)}
                                        >
                                            <Button warn="true">Update </Button>
                                        </Popconfirm> */}
                                    </div>

                                </Form.Item>
                            </Form>


                        </div>
                        <div className="col">
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
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}