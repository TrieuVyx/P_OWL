import { Layout } from "antd"
import React, { useState, useEffect } from "react"
import { Button, Checkbox, Form, Input, Popconfirm } from "antd";
import { Toaster } from 'react-hot-toast'
import { formStyle, formCenterStyle } from "../../../../../../shortPath/styleComponent";
import GetLecture from "../../event/CRUD/get";
import UpdateLecture from "../../event/CRUD/update";
const { Header, Footer, Content, Sider } = Layout;

export default function TableUpdate() {
    const LectureID = localStorage.getItem("LectureID")
    const [LectureName, setLectureName] = useState("")
    const [CourseName, setCourseName] = useState("")
    const [Description, setDescription] = useState("")
    const [Content, setContent] = useState("")
    const [Tittle, setTittle] = useState("")
    const [Picture1, setPicture1] = useState("https://ik.imagekit.io/alejk5lwty/P_OWL/uploda.jpg?updatedAt=1715747698979");
    const [Picture, setPicture] = useState("https://ik.imagekit.io/alejk5lwty/P_OWL/uploda.jpg?updatedAt=1715747698979");
    const [Video, setVideo] = useState("https://ik.imagekit.io/alejk5lwty/P_OWL/uploda.jpg?updatedAt=1715747698979");
    const [Video1, setVideo1] = useState("https://ik.imagekit.io/alejk5lwty/P_OWL/uploda.jpg?updatedAt=1715747698979");

    useEffect(() => {
        GetLecture()
            .then((data) => {
                setLectureName(data.data.LectureName)
                setCourseName(data.data.CourseName)
                setDescription(data.data.Description)
                setContent(data.data.Content)
                setTittle(data.data.Tittle)
                setPicture(data.data.Picture)
                setVideo(data.data.Video)
            })
            .catch((error) => console.error(error));
    }, [])
    const Data = {
        LectureID: LectureID,
        CourseName: CourseName,
        LectureName: LectureName,
        Description: Description,
        Content: Content,
        Tittle: Tittle,
        Picture: Picture1,
        Video: Video1
    }
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const newSrc = e.target.result;
            setPicture1(newSrc);
        };
        reader.readAsDataURL(file);

    };
    const handleVideoChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const newSrc = e.target.result;
            setVideo1(newSrc);
        };
        reader.readAsDataURL(file);

    };
    return (
        <>
            <Layout>
                <div className="conainer">
                    <div className="row">
                        <div className="col" style={{ background: "gray" }}>
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
                        </div>
                        <div className="col" style={{ background: "gray" }}>
                        <h1 style={{ margin: "40px 0 20px 0 " }}>Select Image</h1>
                            <div className="w-100 " style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexWrap: "wrap"
                            }}>

                                <div style={{
                                    width: "200px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
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

                            <div className="w-100 " style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexWrap: "wrap"
                            }}>

                                <div style={{
                                    width: "200px",
                                    // background: "gray",
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
                            </div>

                        </div>
                        <div className="col" style={{ background: "gray" }}>
                        <h1 style={{ margin: "40px 0 20px 0 " }}>Select Video</h1>
                            <div className="w-100 " style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexWrap: "wrap"
                            }}>
                                <div style={{
                                    width: "350px",
                                    display: "flex",
                                    alignItems: "center",
                                    flexWrap:"wrap",
                                    justifyContent: "center",
                                }}>
                                    <label htmlFor="videoInput" >

                                        <video src={Video} alt="Err"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                background: "white",
                                                border: "gray 2px solid",
                                                display: "block"
                                            }}
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
                                    <label for="videoInput" class="border rounded p-2" >Choose Video</label>

                                </div>
                            </div>
                       
                            <div className="w-100 " style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexWrap: "wrap"
                            }}>
                                <div style={{
                                    width: "350px",
                                    // background: "gray",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <label htmlFor="videoInput1" >

                                        <video src={Video1} alt="Err"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                background: "white",
                                                border: "gray 2px solid",
                                                display: "block"
                                            }}
                                            controls
                                        />
                                    </label>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </Layout>
        </>
    )
}