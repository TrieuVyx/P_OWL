import Axios from "axios"
import { toast } from 'react-hot-toast'
import { addLectureToCourseUrl } from "../../../../../../shortPath/urlPath";
export default async function addLectureToCourse() {
    const tokenAccess = localStorage.getItem('AccessToken');
    const CourseID = localStorage.getItem('CourseID');
    const LectureID = localStorage.getItem('LectureID');
    const URL_LECTUREFROMCOURSE = `${addLectureToCourseUrl}`;
    const data = {
        IDCourse: CourseID,
        IDLecture: LectureID
    }
    try {
        const response = await Axios({
            method: "POST",
            url: `${URL_LECTUREFROMCOURSE}`,
            headers: {
                tokenAccess
            },
            data: data
        });
        if (response.status == 200) {
            toast.success("Add lecture successfully!")
            return response.data;
        }
    } catch (error) {
        if (error.response && error.response.status === 404) {
            toast.error("Not Found Resource");
        } 
        else if(error.response && error.response.status === 400){
            toast.error("Lecture already exists in other course");
        }
        else {
            toast.error(error.message);
        }
    }
}
