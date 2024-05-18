import HomePage from "../PageComponents/homePage";
import Course from "../PageComponents/coursePage";
import Navbar from "../component/header/navbar/navbar";
import Settingbar from "../component/header/navbar/setting";
import CourseBody from "../component/body/Client/Author";
import LinkRouter from "../component/constants/constants";
import LoginPage from "../PageComponents/AuthorComponents/Login.component";
import CourseManagementPage from "../AdminComponents/CourseManagementPage";
import UserManagementPage from "../AdminComponents/UserManagement";
import LectureManagementPage from "../AdminComponents/LectureManagement"
import { checkTokenExist, checkPermission } from "../PageComponents/AuthorComponents/Authenticate/checkTokenExperienced";
import { heightStyle } from "./styleComponent";
import { IMAGE_ADMIN_COURSE, IMAGE_USER_ } from "./imageUrl/imageUrl";
import Menutab from "../component/header/navbar/menutab"
import CourseAdmin from "../component/body/admin/course/course";
import UserAdmin from "../component/body/admin/user/user"
import LectureAdmin from "../component/body/admin/lecture/lecture"
import InitState from "../component/body/Client/course/pages/initState";
import InitStateF from "../component/body/Client/course/pages/initStateF";
import InitStateFi from "../component/body/Client/course/pages/initStateFi";
import InitStateThr from "../component/body/Client/course/pages/initStateThr";
import InitStateTw from "../component/body/Client/course/pages/initStateTw";
import EndState from "../component/body/Client/course/pages/endState";
export {
    HomePage,
    Course,
    LoginPage,
    CourseManagementPage,
    UserManagementPage,
    LectureManagementPage,
    CourseAdmin,
    UserAdmin,
    LectureAdmin,
    Navbar,
    Settingbar,
    Menutab,
    CourseBody,

    checkTokenExist,
    checkPermission,

    LinkRouter,
    heightStyle,


    IMAGE_USER_,
    IMAGE_ADMIN_COURSE,
    InitState,
    InitStateF,
    InitStateThr, 
    InitStateTw, 
    InitStateFi,
    EndState
};
