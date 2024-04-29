//cau hinh file env
require('dotenv').config()
const url = require('./url')
const Authenticate= require('./security/AuthenFilter')
//su dung router
const HomeRouter = url.HomeRouter;
const UserRouter = url.UserRouter;
const AuthorRouter = url.AuthorRouter;
//su dung handlebar
// const handlebar = url.handlebar;
//khai bao side can thiet

const express = require("express")
const cors = require("cors")
// dieu huong page
function routers(app) {
    router(app)
    // extensions(app)
    // handlebars(app)
}

//su dung router 
function router(app) {

    app.use(Authenticate)
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors({ origin: "*" }));

 
    app.use(process.env.AV1, AuthorRouter)
    app.use(process.env.UV1, UserRouter)
    app.use(process.env.V1, HomeRouter)
}

module.exports = routers