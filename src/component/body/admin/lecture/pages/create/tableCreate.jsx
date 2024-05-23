import { Layout } from "antd"
import React, { useState, useEffect } from "react"
import { Button, Checkbox, Form, Input, Popconfirm } from "antd";
import { formStyle, formCenterStyle } from "../../../../../../shortPath/styleComponent";
import TextArea from "antd/es/input/TextArea";
import CreateLecture from "../../event/CRUD/create";

export default function TableCreate() {
    const [LectureName, setLectureName] = useState("")
    const [CourseName, setCourseName] = useState("")
    const [Description, setDescription] = useState("")
    const [Content, setContent] = useState("")
    const [Tittle, setTittle] = useState("")
    const [Picture, setPicture] = useState("https://ik.imagekit.io/alejk5lwty/P_OWL/uploda.jpg?updatedAt=1715747698979");
    const [Video, setVideo] = useState("https://ik.imagekit.io/alejk5lwty/P_OWL/uploda.jpg?updatedAt=1715747698979");

    const Data = {
        CourseName: CourseName,
        LectureName: LectureName,
        Description: Description,
        Content: Content,
        Tittle: Tittle,
        Picture: Picture,
        Video: Video

    }
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const newSrc = e.target.result;
            setPicture(newSrc);
        };
        reader.readAsDataURL(file);

    };
    const handleVideoChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const newSrc = e.target.result;
            setVideo(newSrc);
        };
        reader.readAsDataURL(file);

    };
    return (
        <>
            <Layout>
                <div className="">
                    <div className="row">
                        <div className="col" style={{background:"gray"}}>
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
                                {/* <Form.Item
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
                                </Form.Item> */}
                                <Form.Item
                                >
                                    <div style={formCenterStyle}>
                                        <Popconfirm title="Sure to create?" onConfirm={() => CreateLecture(Data)}>
                                            <Button danger="true">Create </Button>
                                        </Popconfirm>

                                    </div>

                                </Form.Item>
                            </Form>
                        </div>
                        <div className="col" style={{background:"gray"}}>
                            <h1 style={{ margin: "40px 0 20px 0 " }}>Upload Image</h1>
                            <div className="w-100 " style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <div style={{
                                    width: "200px",
                                    // background: "gray",
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
                        <div className="col" style={{background:"gray"}}>
                            <h1 style={{ margin: "40px 0 20px 0 " }}>Select Video</h1>
                            <div className="w-100 " style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexWrap:"wrap"
                            }}>
                                <div
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    <label htmlFor="videoInput">
                                        <video
                                            src={Video}
                                            alt="Err"
                                            style={{
                                                width: "350px",
                                                background: "white",
                                                border: "gray 2px solid",
                                                display: "block"
                                            }}
                                            controls
                                        />
                                    </label>

                                    <div class="form-group ">
                                        <div class="custom-file">
                                            <input
                                                type="file"
                                                class="custom-file-input"
                                                id="videoInput"
                                                name="Video"
                                                style={{display:"none"}}
                                                onChange={handleVideoChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <label for="videoInput" class="border rounded p-2" >Choose Video</label>
                            </div>
                        </div>
                    </div>

                </div>


            </Layout>
        </>
    )
}