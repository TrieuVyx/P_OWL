import { EditOutlined, EllipsisOutlined, SettingOutlined, EyeOutlined } from '@ant-design/icons';
import { Avatar, Card, Popconfirm, Carousel, Badge } from 'antd';
import getListCourse from './event/getListCourse';
import React, { useEffect, useState } from 'react'
import GetCourseRender from './event/getCourse'
import { useNavigate } from 'react-router-dom';
import LinkRouter from '../../../constants/constants';
const { Meta } = Card;
export default function ShowContent() {
    const [Data, setData] = useState([])
    const router = useNavigate();
    useEffect(() => {
        getListCourse()
            .then(data => {
                setData(data)
            })
    }, [])
    const handleRegisterCourse = (e) => {
        GetCourseRender()
        localStorage.setItem("CourseID", e)
        router("/course/init")
    }
    return (
        <>
            <div className="">
                <div className="row ">
                    <h2 style={{ textAlign: "left" }}>Common Course</h2>

                    <div className="col d-flex flex-wrap w-100">
                        {
                            Data.map(each => {
                                return (
                                    <Popconfirm title="Sure to Register?" onConfirm={(e) => handleRegisterCourse(each.Id)} key={each.Id} >

                                        <Card
                                            className='m-2' 
                                            style={{ padding: "0", width: "24%" }}
                                            cover={
                                                <img
                                                    alt="example"
                                                    style={{ width: "100%", height: "100px" }}
                                                    src={each.Picture}
                                                />
                                            }
                                            actions={[
                                                <EyeOutlined key="eyes" style={{ margin: "0" }} />,
                                                // <EllipsisOutlined key="ellipsis" />,
                                            ]}
                                        >
                                            <div style={{ textAlign: "left" }}>
                                                <h6>CourseName : {each.CourseName}</h6>
                                                <h6>Pee : Free</h6>
                                            </div>

                                        </Card>
                                    </Popconfirm>
                                )
                            })
                        }
                    </div>

                </div>
                <div className="row ">
                    <h2 style={{ textAlign: "left" }}>Paid Course</h2>

                    {/* <div className="col d-flex flex-wrap w-100">
                        {
                            Data.map(each => {
                                return (
                                    <Popconfirm title="Sure to Register?" onConfirm={(e) => handleRegisterCourse(each.Id)} key={each.Id}>

                                        <Card
                                            className='m-2'
                                            style={{ padding: "0" ,width:"24%"}}
                                            cover={
                                                <img
                                                    alt="example"
                                                    style={{ width: "100%", height: "100px" }}
                                                    src={each.Picture}
                                                />
                                            }
                                            actions={[
                                                <EyeOutlined key="eyes" style={{margin :"0"}}/>,
                                                
                                                // <EllipsisOutlined key="ellipsis" />,
                                            ]}
                                        >
                                            <div style={{ textAlign: "left"}}>
                                                <h6>CourseName : {each.CourseName}</h6>
                                                <h6>Pee : Free</h6>
                                            </div>

                                        </Card>
                                    </Popconfirm>
                                )
                            })
                        }


                    </div> */}

                </div>
            </div>

        </>
    )
}
