import React, { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import getCourse from '../../event/getCourse';
import getLecture from './event/getLecture';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import registerCourse from './event/registerCourse';
import CheckUserRegisterCourse from './event/checkUserRegisterCourse';
import getComment from './event/comment';
import createComment from './event/creaetComment';
export default function showCourseUser() {
  const router = useNavigate();
  const [Data, setData] = useState([]);
  const [Lecture, setLecture] = useState([]);
  const [Comment, setComment] = useState([])
  const [isCoursRegistered, setIsCoursRegistered] = useState(false);
  const [isUserRegistered, setisUserRegistered] = useState(() => {
    const userRegistered = CheckUserRegisterCourse();
    return userRegistered ? userRegistered : "Register";
  });
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentText, setCommentText] = useState('');
  const toggleCommentBox = () => {
    setShowCommentBox(!showCommentBox);
  };

  useEffect(() => {
    try {
      //#region lấy danh sách khóa học
      getCourse().then((data) => {
        setData(data.data);
      });
      //#region lấy danh sách bài học
      getLecture().then((data) => {
        const initialLectureData = data.data.map((lecture) => ({
          key: lecture.id,
          label: lecture.LectureName,
          children: (
            <div className="d-flex justify-content-between align-items-center">
              <p>{lecture.Tittle}</p>
              {isUserRegistered === "IsStudying" && (
                <button
                  onClick={() => handleLectureClick(lecture.Id)}
                  className="btn btn-outline-warning"
                >
                  View Lecture
                </button>
              )}
            </div>
          ),
        }));
        setLecture(initialLectureData);
      });
    } catch (err) {
      toast.error("do not find data!, please try again");
    }
  }, [isUserRegistered]);

  useEffect(() => {
    CheckUserRegisterCourse().then((data) => {
      setisUserRegistered(data.data);
    });
    getComment().then((data) => {
      setComment(data.data)
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
  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };
  const HanleComment = () => {
    createComment(commentText)
  }
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
            {
              isUserRegistered == "IsStudying" ? null : (<>

                <input
                  type="button"
                  warn="true"
                  value={"Register"}
                  className="m-2 btn btn-outline-warning"
                  onClick={handleRegisterCourse}
                />
              </>)
            }
            <div className="card-footer py-3 border-0" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="d-flex flex-start w-100">

                <div data-mdb-input-init className="form-outline w-100">
                  <textarea className="form-control" id="textAreaExample" rows="4" style={{ background: '#fff' }}
                    value={commentText}
                    onChange={handleCommentChange}
                  ></textarea>

                </div>
              </div>
              <div className="float-end mt-2 pt-1">
                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm" onClick={HanleComment}>
                  Post comment
                </button>
                {/* <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-sm" onClick={toggleCommentBox}>
                                            Cancel
                                        </button> */}
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="col">ok</div> */}
            <div className="col p-5" >
              {showCommentBox && (
                <div className="card-footer py-3 border-0" style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="d-flex flex-start w-100">

                    <div data-mdb-input-init className="form-outline w-100">
                      <textarea className="form-control" id="textAreaExample" rows="4" style={{ background: '#fff' }}
                        value={commentText}
                        onChange={handleCommentChange}
                      ></textarea>

                    </div>
                  </div>
                  <div className="float-end mt-2 pt-1">
                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm" onClick={HanleComment}>
                      Post comment
                    </button>
                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-sm" onClick={toggleCommentBox}>
                      Cancel
                    </button>
                  </div>
                </div>
              )}

            </div>

            <div className="col" >
              <div className="row d-flex justify-content-center">
                <div className="col-md-11 col-lg-9 col-xl-7 comments-container" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                  {
                    Comment.map(comment => (
                      <div className="d-flex flex-start mb-4" key={comment.id}>
                        <img
                          className="rounded-circle shadow-1-strong me-3"
                          src={comment.user.image || "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"}
                          alt="avatar"
                          width="65"
                          height="65"
                        />
                        <div className="card w-100">
                          <div className="card-body p-4">
                            <div>
                              <h5 className="text-left">{comment.user.username}</h5>
                              <p className="small text-left">{new Date(comment.createdAt).toLocaleString()}</p>
                              <p className="text-justify" style={{ fontSize: '16px', lineHeight: '1.5' }}>
                                {comment.content}
                              </p>
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  {/* <a href="#!" className="link-muted me-2">
                                    <i className="fas fa-thumbs-up me-1"></i>132
                                  </a>
                                  <a href="#!" className="link-muted">
                                    <i className="fas fa-thumbs-down me-1"></i>15
                                  </a> */}
                                </div>
                                <a href="#!" className="link-muted" onClick={toggleCommentBox}>
                                  <i className="fas fa-reply me-1"></i> Reply
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }

                </div>
              </div>
            </div>
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