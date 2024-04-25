//cau hinh file env
require('dotenv').config()
const url = require('./url')

//su dung router
const HomeRouter = url.HomeRouter;
const UserRouter = url.UserRouter;
const AuthorRouter = url.AuthorRouter;
//su dung handlebar
// const handlebar = url.handlebar;
//khai bao side can thiet

const express = require("express")
const cors = require("cors")
const path = url.path;
// dieu huong page
function routers(app) {
    uses(app)
    // handlebars(app)
}

//su dung router 
function uses(app) {

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors({ origin: "*" }));

    app.use(process.env.AV1, AuthorRouter)
    app.use(process.env.UV1, UserRouter)
    app.use(process.env.V1, HomeRouter)
}

//su dung view page
// function handlebars(app) {
//     app.engine("hbs", handlebar.engine({
//         defaultLayout: "main",
//         extname: ".hbs"
//     }));

//     app.set('view engine', "hbs")
//     app.set('views', path.join(__dirname, "views"))
//     console.log(__dirname)
// }

module.exports = routers