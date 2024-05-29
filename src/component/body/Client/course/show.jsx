import { EditOutlined, EllipsisOutlined, SettingOutlined, EyeOutlined } from '@ant-design/icons';
import { Avatar, Card, Popconfirm, Carousel, Badge } from 'antd';
import getListCourse from './event/getListCourse';
import React, { useEffect, useState } from 'react'
import GetCourseRender from './event/getCourse'
import { useNavigate } from 'react-router-dom';
import SearchCourse from '../../../header/navbar/event/search.course';
import toast from 'react-hot-toast';

export default function ShowContent() {
    const [Data, setData] = useState([])
    const [ResultSearch, setResultSearch] = useState([])
    const SearchReq = localStorage.getItem("SearchReq")
    const router = useNavigate();
    useEffect(() => {
        try {
            getListCourse()
                .then(data => {
                     setData(data)
                })
            SearchCourse()
                .then(data => {
                    setResultSearch(data.data)
                })
        }
        catch (err) {
            toast.err("Please Token is Exprienced,  login again")
        }
    }, [])

    //#region chuyển hướng khóa học
    const handleRegisterCourse = (each) => {
        localStorage.setItem("CourseID", each)
        router("/course/init")
    }
    return (
        <>
            <div className="">
                <div className="row ">
                    <h2 style={{ textAlign: "left", paddingLeft: "10px" }}>Common Course</h2>
                    <div className="col d-flex flex-wrap w-100">
                        {
                            SearchReq == null ?
                                Data.map(each => {
                                    return (
                                        <Popconfirm title="Sure to Watch?"
                                            onConfirm={() => handleRegisterCourse(each.Id)}   key={each.Id || index} >
                                            <Card
                                                key={each.Id || index}
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
                                                    <EyeOutlined key="eyes" style={{ textAlign: "left", padding: "0 10px 0 10px" }} />,
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
                                :
                                ResultSearch.map((each, index) => {
                                    return (
                                        <Popconfirm title="Sure to Watch?" onConfirm={() => handleRegisterCourse(each.Id)}   key={each.Id || index}>
                                            <Card
                                             key={each.Id || index} 
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
                                                    <EyeOutlined key="eyes" style={{ textAlign: "left", padding: "0 10px 0 10px" }} />,
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
                    {/* <h2 style={{ textAlign: "left" }}>Paid Course</h2> */}

                </div>
            </div>

        </>
    )
}
