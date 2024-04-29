import HomePage from "../PageComponents/homePage";
import Course from "../PageComponents/coursePage";
import Navbar from "../component/header/navbar/navbar";
import Settingbar from "../component/header/navbar/setting";
import CourseBody from "../component/body/course/course";
import LinkRouter from "../component/constants/constants";
import LoginPage from "../PageComponents/AuthorComponents/Login.component";
import CourseManagementPage from "../AdminComponents/CourseManagementPage";
import UserManagementPage from "../AdminComponents/UserManagement";
import { checkTokenExist, checkPermission } from "../PageComponents/AuthorComponents/Authenticate/checkTokenExperienced";
import { heightStyle } from "./styleComponent";
import { IMAGE_ADMIN_COURSE, IMAGE_USER_ } from "./imageUrl/imageUrl";
import Menutab from "../component/header/navbar/menutab"
import CourseAdmin from "../component/body/admin/course/course";
import User from "../component/body/admin/user/user"

export {
    HomePage,
    Course,
    LoginPage,
    CourseManagementPage,
    UserManagementPage,
    CourseAdmin,
    User,
    Navbar,
    Settingbar,
    Menutab,
    CourseBody,

    checkTokenExist,
    checkPermission,

    LinkRouter,
    heightStyle,


    IMAGE_USER_,
    IMAGE_ADMIN_COURSE
};
