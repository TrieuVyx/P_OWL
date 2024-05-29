import Axios from "axios"
import { toast } from 'react-hot-toast'
import { addLectureToCouseUrl } from "../../../../../../shortPath/urlPath";
export default async function addLectureToCourse() {
    const tokenAccess = localStorage.getItem('AccessToken');
    const CourseID = localStorage.getItem('CourseID');
    const LectureID = localStorage.getItem('LectureID');
    const URL_LECTUREFROMCOURSE = `${addLectureToCouseUrl}`;
    const data = {
        IDCourse: CourseID, 
        IDLecture:LectureID
    }

    try {

        const response = await Axios({
            method: "POST",
            url: `${URL_LECTUREFROMCOURSE}`,
            headers: {
                tokenAccess
            },
            data:data
        });

        return response.data;
    } catch (error) {
        toast.error(error.message);
        throw error;
    }
}
