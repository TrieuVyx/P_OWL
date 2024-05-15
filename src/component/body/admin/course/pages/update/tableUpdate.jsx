import { Layout } from "antd"
import React, { useState, useEffect } from "react"
import { Button, Checkbox, Form, Input, Popconfirm } from "antd";
import { Toaster } from 'react-hot-toast'
import { formStyle, formCenterStyle , MoveUp} from "../../../../../../shortPath/styleComponent";
import GetCourse from "../../event/CRUD/get";
import UpdateCourse from "../../event/CRUD/update";
import TextArea from "antd/es/input/TextArea";
import {ArrowDownOutlined} from '@ant-design/icons';
import '../../../../../../shortPath/scss/action.scss'
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
                            <h1>Update Course</h1>
                            <Toaster position='top-right' reverseOrder={false}></Toaster>
                            <div className="row">
                                <div className="col">
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
                                        <span></span>

                                    </Form.Item>

                                    <Form.Item
                                    >
                                        <div style={formCenterStyle}>
                                            <Popconfirm title="Sure to update?" className="m-2" onConfirm={() => UpdateCourse(Data)}  >
                                                <Button warn="true">Update </Button>
                                            </Popconfirm>
                                        </div>

                                    </Form.Item>
                                </div>
                                <div className="col" style={{
                                    // background: "white",
                                    // border: "gray 2px solid",
                                    borderRadius: "2px"
                                }} >
                                    <div className="row">

                                        <div style={{
                                            width: "100%",
                                            // background: "gray",
                                            height: "100px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>

                                            <img src="https://ik.imagekit.io/alejk5lwty/P_OWL/uploda.jpg?updatedAt=1715747698979" alt="Err"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    background: "white",
                                                    border: "gray 2px solid"

                                                }} />
                                        </div>
                                    </div>
                                    <div className="row mt-4 mb-4 "> 
                                        <ArrowDownOutlined  className="arrow-icon"  
                                        style={{
                                        display:"flex",
                                        alignItems:"center",
                                        justifyContent:"center"
                                        }}/>

                                    </div>
                                    <div className="row">

                                        <div style={{
                                            width: "100%",
                                            // background: "gray",
                                            height: "100px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>

                                            <img src="https://ik.imagekit.io/alejk5lwty/P_OWL/uploda.jpg?updatedAt=1715747698979" alt="Err"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    background: "white",
                                                    border: "gray 2px solid"

                                                }} />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </Form>
                    </div>
                    <div className="col" >
                        <div style={{ margin: "40px 0 0 0" }}>
                            <h1>Lectures</h1>


                        </div>
                    </div>

                </div>
                <div className="row" >
                    <div className="col">
                        <h1 >List of Lecture</h1>
                    </div>

                </div>

            </Layout>
        </>
    )
}