import React, { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import getCourse from '../../event/getCourse';
import getLecture from './event/getLecture';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import registerCourse from './event/registerCourse';
import CheckUserRegisterCourse from './event/checkUserRegisterCourse';
export default function showCourseUser() {
  const router = useNavigate();
  const [Data, setData] = useState([]);
  const [Lecture, setLecture] = useState([]);
  const [isCoursRegistered, setIsCoursRegistered] = useState(false);
  const [isUserRegistered, setisUserRegistered] = useState("IsStudying")
  
  console.log(isUserRegistered)
  useEffect(() => {
    try {
      //#region lấy danh sách khóa học
      getCourse().then((data) => {
        setData(data.data);
      });

      //#region lấy danh sách bài học
      getLecture().then((data) => {
        console.log(isUserRegistered);
        const initialLectureData = data.data.map((lecture) => ({
          key: lecture.id,
          label: lecture.LectureName,
          children: (
            <div className="d-flex justify-content-between align-items-center">
              <p>{lecture.Tittle}</p>
              {(function () {
                switch (isUserRegistered) {
                  case 'IsStudying':
                    return (
                      <button
                        onClick={() => handleLectureClick(lecture.Id)}
                        className="btn btn-outline-warning"
                      >
                        View Lecture
                      </button>
                    );
                  case 'Register':
                    return (
                      <button className="btn btn-outline-primary" onClick={handleRegisterCourse}>Register</button>
                    );
                  default:
                    return null;
                }
              })()}
            </div>
          ),
        }));
        setLecture(initialLectureData);
      });
      //#region kiểm tra người dùng đã đăng kí chưa

    } catch (err) {
      toast.error("do not find data!, please try again");
    }
    CheckUserRegisterCourse().then((data) => {
      setisUserRegistered(data.data);
    });
  }, []);
  const handleLectureClick = (lectureId) => {
    localStorage.setItem("LectureID", lectureId);
    router("lecture");
  };


  //#region đăng kí khóa học
  const handleRegisterCourse = async () => {
    await registerCourse();
    setIsCoursRegistered(true);
  };

  return (
    <>
      <div className="m-3">
        <div className="row">
          <div className="col m-2">
            <div
              className="container-video m-2"
              style={{
                background: "gray",
                height: "250px",
              }}
            >
              <img src={Data.Picture} alt="" className="w-100 h-100" />
            </div>

            <div className="row m-2">
              <div className="col m-2" style={{ textAlign: "left" }}>
                <div className="m-2">Title: {Data.CourseName}</div>
                <div className="m-2">Description: {Data.Description}</div>
                <div className="m-2">Content: {Data.Content}</div>
                <div className="m-2">Total of Lecture: {Data.Content}</div>
                <div className="m-2">Durations: {Data.Content}</div>
              </div>
            </div>
          </div>
          <div className="col m-2">
            <Collapse
              items={Lecture}
              defaultActiveKey={['1']}
              disabled={isCoursRegistered}
            />

            {/* <input
              type="button"
              warn="true"
              value={"Register"}
              className="m-2 btn btn-outline-warning"
              
            /> */}
          </div>
        </div>

        {/* <div className="row">
          <div className="m-2">
            <TextArea />
          </div>
        </div> */}
      </div>
    </>
  );
}