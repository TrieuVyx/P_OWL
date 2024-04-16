//cau hinh file env
require('dotenv').config()
//su dung router
const HomeRouter = require('./routers/HomeRouter')
const DashRouter = require('./routers/DashRouter')

//su dung handlebar
const handlebar = require('express-handlebars')

//khai bao side can thiet
const path = require('path')
// dieu huong page
function routers(app) {
    uses(app)
    handlebars(app)   
}

//su dung router 
function uses(app) {
    app.use('/dashboard', DashRouter)
    app.use('/', HomeRouter)
}

//su dung view page
function handlebars (app){
    app.engine("hbs", handlebar.engine({
        defaultLayout: "main",
        extname: ".hbs"
      }));
      
    app.set('view engine', "hbs")
    app.set('views', path.join(__dirname, "views"))
    console.log(__dirname)
}

module.exports = routers