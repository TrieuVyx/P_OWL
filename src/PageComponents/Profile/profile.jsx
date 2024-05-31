import React, { useEffect, useState } from 'react'
import getUser from './event/getUser'
import toast from "react-hot-toast"
import { Progress } from 'antd';
import getProcesing from './event/getProcessing';
export default function profileAccount({ ...props }) {
    const { percent, status, strokeWidth, strokeColor, trailColor } = props;
    // const segmentWidth = 100 / segments.length; 
    const [Data, setData] = useState([])
    const [processing, setProccesing] = useState([])
    useEffect(() => {
        getUser()
            .then((data) => {
                setData(data.data)
            })
        getProcesing().then((data) => {
            setProccesing(data.data)
        })
    }, [])

    return (
        <div className="row m-5">
            <div className="col-lg-4">
                <div className="card mb-4">
                    <div className="card-body text-center">
                        <img
                            src={Data.Image}
                            alt="avatar"
                            className="rounded-circle img-fluid"
                            style={{ width: '150px' }}
                        />
                        <h5 className="my-3">{Data.FullName}</h5>
                        <p className="text-muted mb-1">Full Stack Developer</p>
                        <p className="text-muted mb-4">{Data.Email}</p>
                        <div className="d-flex justify-content-center mb-2">
                            <button
                                type="button"
                                data-mdb-button-init
                                data-mdb-ripple-init
                                className="btn btn-primary"
                            >
                                Follow
                            </button>
                            <button
                                type="button"
                                data-mdb-button-init
                                data-mdb-ripple-init
                                className="btn btn-outline-primary ms-1"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card mb-4 mb-lg-0">
                    <div className="card-body p-0">
                        <ul className="list-group list-group-flush rounded-3">
                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                <i className="fas fa-globe fa-lg text-warning"></i>
                                <p className="mb-0">https://mdbootstrap.com</p>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                <i className="fab fa-github fa-lg text-body"></i>
                                <p className="mb-0">mdbootstrap</p>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }}></i>
                                <p className="mb-0">@mdbootstrap</p>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }}></i>
                                <p className="mb-0">mdbootstrap</p>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                <i className="fab fa-facebook-f fa-lg" style={{ color: '#3b5998' }}></i>
                                <p className="mb-0">mdbootstrap</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Full Name: </p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{Data.FullName}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Email</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{Data.Email}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Phone</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{Data.Phone}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Mobile</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{Data.FullName}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Address</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{Data.Address}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card mb-4 mb-md-0">
                            {/* <div className="card-body">
                                <p className="mb-4"><span className="text-primary font-italic me-1">assignment</span> Project Status</p>
                                <p className="mb-1" style={{ fontSize: '.77rem' }}>React</p>
                                <div className="progress rounded" style={{ height: '5px' }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Java</p>
                                <div className="progress rounded" style={{ height: '5px' }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>MongoDb</p>
                                <div className="progress rounded" style={{ height: '5px' }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>SQL</p>
                                <div className="progress rounded" style={{ height: '5px' }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>HTML & CSS</p>
                                <div className="progress rounded mb-2" style={{ height: '5px' }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/* <div className="col-md-6">
                        <div className="card mb-4 mb-md-0">
                            <div className="card-body">
                                <p className="mb-4"><span className="text-primary font-italic me-1">assignment</span> Project Status</p>
                                <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                                <div className="progress rounded" style={{ height: '5px' }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</p>
                                <div className="progress rounded" style={{ height: '5px' }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</p>
                                <div className="progress rounded" style={{ height: '5px' }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</p>
                                <div className="progress rounded" style={{ height: '5px' }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                                <div className="progress rounded mb-2" style={{ height: '5px' }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="row">
                <div className="col m-2">
                    {

                        processing.map(each => (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Progress type="dashboard" steps={8} percent={each.progress} trailColor="rgba(0, 0, 0, 0.06)"
                                    strokeWidth={20} />
                                <div>Name Course</div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}