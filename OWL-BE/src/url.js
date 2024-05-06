//#region Base 

const HomeRouter = require('./routers/HomeRouter') 
const UserRouter = require('./routers/UserRouter') 
const AuthorRouter = require('./routers/AuthorRouter') 
const CourseRouter = require('./routers/CourseRouter') 
const LectureRouter = require('./routers/LectureRouter') 
const CommentRouter = require('./routers/CommentRouter') 
const TrackRouter = require('./routers/TrackRouter') 
const PaymentRouter = require('./routers/LectureRouter') 

//#region Entity

module.exports = {
    HomeRouter,
    UserRouter,
    AuthorRouter,
    CourseRouter,
    LectureRouter,
    CommentRouter,
    TrackRouter,
    PaymentRouter
}


//#endregion


