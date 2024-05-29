import Axios from "axios"
import { toast } from 'react-hot-toast'
import { deleteLectureFromCourseUrl } from "../../../../../../shortPath/urlPath";
export default async function deleteLectureFromCourse() {
    const tokenAccess = localStorage.getItem('AccessToken');
    const CourseID = localStorage.getItem('CourseID');
    const LectureID = localStorage.getItem('LectureID');
    const URL_LECTUREFROMCOURSE = `${deleteLectureFromCourseUrl}?IDCourse=${CourseID}&IDLecture=${LectureID}`;
    try {

        const response = await Axios({
            method: "POST",
            url: `${URL_LECTUREFROMCOURSE}`,
            headers: {
                tokenAccess
            }
        });

        return response.data;
    } catch (error) {
        toast.error(error.message);
        throw error;
    }
}
