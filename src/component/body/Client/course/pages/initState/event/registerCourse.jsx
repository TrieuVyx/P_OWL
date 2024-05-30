import Axios from "axios"
import { toast } from 'react-hot-toast'
import { registerCourseUrl } from "../../../../../../../shortPath/urlPath";
export default async function registerCourse() {
    const tokenAccess = localStorage.getItem('AccessToken');
    const CourseID = localStorage.getItem('CourseID');
    const IDUser = localStorage.getItem('IDUser');
    const URL_LECTUREFROMCOURSE = `${registerCourseUrl}`;
    const data = {
        IDCourse: CourseID,
        IDUser: IDUser
    }

    try {

        const response = await Axios({
            method: "POST",
            url: `${registerCourseUrl}`,
            headers: {
                tokenAccess
            },
            data: data
        });
        toast.success("register succesfull")

        return true;
    } catch (error) {
        if (error.response && error.response.status === 400) {
            // 400 Bad Request
            toast.error(`User is already enrolled in the course.`);
        }
    }
}
