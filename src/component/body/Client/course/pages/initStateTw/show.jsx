import React, { useEffect, useState, useRef } from 'react';
import { Collapse } from 'antd';
// import getCourse from '../../event/getCourse';
import getLecture from '../initState/event/getLecture';
import getLectures from './event/getLecture';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import getCommentLecture from '../initState/event/commmentLecture';
import createCommentLecture from '../initState/event/createCommentLecture';
import checkLectureShow from './event/checkLectureShow';
export default function showLectureCourse() {
    const router = useNavigate();
    const [Data, setData] = useState([])
    const [Lecture, setLecture] = useState([])
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [Comment, setComment] = useState([])
    const toggleCommentBox = () => {
        setShowCommentBox(!showCommentBox);
    };
    useEffect(() => {
        try {
            //#region lấy danh sách khóa học
            getLectures()
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
    useEffect(() => {
        getCommentLecture().then((data) => {
            setComment(data.data)
        });
        checkLectureShow()

    }, [])

    const handleCommentChange = (event) => {
        setCommentText(event.target.value);
    };
    //#region XỬ LÝ COMMENT
    const HanleComment = () => {
        createCommentLecture(commentText)
    }
    //#region XỬ LÝ VIDEO
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.addEventListener('play', handlePlay);
            videoRef.current.addEventListener('pause', handlePause);
            videoRef.current.addEventListener('ended', handleEnded);
            videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('play', handlePlay);
                videoRef.current.removeEventListener('pause', handlePause);
                videoRef.current.removeEventListener('ended', handleEnded);
                videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, [videoRef]);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handlePause = () => {
        setIsPlaying(false);
    };

    const handleEnded = () => {
        setIsPlaying(false);
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const currentTime = videoRef.current.currentTime;
            const duration = videoRef.current.duration;
            const progress = (currentTime / duration) * 100;
            
            if (progress >= 90) {
                // Mở khóa bài học tiếp theo
                // unlockNextLesson();
            
                // // Cập nhật tiến độ thành 20%
                // updateProgress(20);
            }
        }
    };
    return (
        <>
            <div className='m-3'>
                <div className="row">
                    <div className="col m-2">

                        <div className="container-video m-2" style={{
                            background: "gray",
                            height: "250px",

                        }}>
                            <video src={Data.Video} controls className="w-100 h-100" autoPlay ref={videoRef}>
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <div className="row m-2">
                            <div className="col m-2" style={{ textAlign: "left" }}>
                                <div className='m-2'>Title: {Data.LectureName}</div>
                                <div className='m-2'>Description: {Data.Description}</div>
                                <div className='m-2'>Content: {Data.Content}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col m-2">
                        <Collapse items={Lecture} defaultActiveKey={['1']} onChange={onChange} disabled />
                    </div>
                    <div className="row">
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
                    <div className='m-2'>
                        <TextArea   />
                    </div>
                </div> */}
            </div>

        </>
    )
}