import HomePage from "../PageComponents/homePage";
import Course from "../PageComponents/coursePage";
import Navbar from "../component/header/navbar/navbar";
import Settingbar from "../component/header/navbar/setting";
import CourseBody from "../component/body/course/course";
import LinkRouter from "../component/constants/constants";
import LoginPage from "../PageComponents/AuthorComponents/Login.component";
import CourseManagementPage from "../AdminComponents/CourseManagementPage";
import {checkTokenExist,checkPermission} from "../PageComponents/AuthorComponents/Authenticate/checkTokenExperienced";
import { heightStyle } from "./styleComponent";
import Menutab from  "../component/header/navbar/menutab"
import CourseAdmin from "../component/body/admin/course";
import { IMAGE_ADMIN_COURSE } from "./imageUrl/imageUrl";


export {
    HomePage,
    Course,
    LoginPage,
    CourseManagementPage,
    CourseAdmin,
    Navbar,
    Settingbar,
    Menutab,
    CourseBody,

    checkTokenExist,
    checkPermission,

    LinkRouter,
    heightStyle,


    
    IMAGE_ADMIN_COURSE
};
