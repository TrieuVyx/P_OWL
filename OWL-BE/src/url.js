//#region Base 

const HomeRouter = require('./routers/HomeRouter') 
const UserRouter = require('./routers/UserRouter') 
const AuthorRouter = require('./routers/AuthorRouter') 
const CourseRouter = require('./routers/CourseRouter') 

//#region Entity

module.exports = {
    HomeRouter,
    UserRouter,
    AuthorRouter,
    CourseRouter
}


//#endregion


