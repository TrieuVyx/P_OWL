import Axios from "axios"
import { toast } from 'react-hot-toast'
import { getListLectureInCourseUrl } from "../../../../../../shortPath/urlPath"
export default async function GetListLectureInCourse(currentPage, sizePage) {
    const tokenAccess = localStorage.getItem('AccessToken');
    const CourseID = localStorage.getItem('CourseID');
    const URL_LECTUREINCOURSE = `${getListLectureInCourseUrl}/${CourseID}?page=${currentPage}&size=${sizePage}`;
    try {
        const response = await Axios({
            method: "GET",
            url: `${URL_LECTUREINCOURSE}`,
            headers: {
                tokenAccess
            }
        });
        return response.data;
    } catch (error) {
        toast.error(error.message);
    }
}
