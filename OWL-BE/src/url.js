//#region Base 

const HomeRouter = require('./routers/HomeRouter') 
const UserRouter = require('./routers/UserRouter') 
const AuthorRouter = require('./routers/AuthorRouter') 
const handlebar = require('express-handlebars')
const path = require('path')


//#region Entity
const UserEntity = require("./models/Entity/UserEntity")
const UserCreateDTO = require("./models/DTO/UserCreateDTO")

module.exports = {
    HomeRouter,
    UserRouter,
    AuthorRouter,
    handlebar,
    path,
    UserCreateDTO,
    UserEntity
}


//#endregion


