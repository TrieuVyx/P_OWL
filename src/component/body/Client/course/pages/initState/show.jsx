import React, { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import getCourse from '../../event/getCourse';
import getLecture from './event/getLecture';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import registerCourse from './event/registerCourse';
export default function showCourseUser() {
    const router = useNavigate();
    const [Data, setData] = useState([])
    const [Lecture, setLecture] = useState([])
    useEffect(() => {
        try {
            //#region lấy danh sách khóa học
            getCourse()
                .then((data) => {
                    setData(data.data)
                })
            //#region lấy danh sách bài học
            getLecture()
                .then((data) => {
                    const initialLectureData = data.data.map((lecture) => ({
                        key: lecture.id,
                        label: lecture.LectureName,
                        children: (
                            <div className='d-flex justify-content-between align-items-center'>
                                <p>{lecture.Tittle}</p>
                                <button onClick={() => handleLectureClick(lecture.Id)} className='btn btn-outline-warning'>View Lecture</button>
                            </div>
                        )
                        ,
                    }));
                    setLecture(initialLectureData);
                })
        }
        catch (err) {
            toast.error("do not find data!, please try again")
        }
    }, [])
    const handleLectureClick = (lectureId) => {
        localStorage.setItem("LectureID", lectureId)
        router("lecture")
    };
    const onChange = (key) => {
        // console.log(key);
    };

    //#region đăng kí khóa học
    const handleRegisterCourse = () => {
        try {
            const check = registerCourse();
          
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <div className='m-3'>
                <div className="row">
                    <div className="col m-2">

                        <div className="container-video m-2" style={{
                            background: "gray",
                            height: "250px",

                        }}>
                            <img src={Data.Picture} alt="" className='w-100 h-100' />
                        </div>

                        <div className="row m-2">
                            <div className="col m-2" style={{ textAlign: "left" }}>
                                <div className='m-2'>Title: {Data.CourseName}</div>
                                <div className='m-2'>Description: {Data.Description}</div>
                                <div className='m-2'>Content: {Data.Content}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col m-2">
                        <Collapse items={Lecture} defaultActiveKey={['1']} onChange={onChange} disabled />
                        <input type='button' warn="true" value={"Register"} className='m-2 btn btn-outline-warning' onClick={handleRegisterCourse} />
                    </div>
                </div>

                {/* <div className="row">
                    <div className='m-2'>
                        <TextArea   />
                    </div>
                </div> */}
            </div>

        </>
    )
}