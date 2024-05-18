//cau hinh file env
require('dotenv').config()
const url = require('./url')
const Authenticate= require('./security/AuthenFilter')

//su dung router
const HomeRouter = url.HomeRouter;
const UserRouter = url.UserRouter;
const AuthorRouter = url.AuthorRouter;
const CourseRouter = url.CourseRouter;
const LectureRouter = url.LectureRouter;
const PaymentRouter = url.PaymentRouter;
const TrackRouter = url.TrackRouter;
const CommentRouter = url.CommentRouter;

//khai bao side can thiet

const express = require("express")
const cors = require("cors")
// dieu huong page
function routers(app) {
    router(app)
}



//su dung router 
function router(app) {
    app.use(Authenticate)

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors({ origin: "*" }));
    app.use(process.env.PV1, PaymentRouter)
    app.use(process.env.TV1, TrackRouter)
    app.use(process.env.CMV1, CommentRouter)
    app.use(process.env.LV1, LectureRouter)
    app.use(process.env.CV1, CourseRouter)
    app.use(process.env.AV1, AuthorRouter)
    app.use(process.env.UV1, UserRouter)
    app.use(process.env.V1, HomeRouter)

}

module.exports = routers