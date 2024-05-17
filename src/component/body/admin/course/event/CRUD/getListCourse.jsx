import Axios from "axios"
import { toast } from 'react-hot-toast'
import { getListCourseUrl } from "../../../../../../shortPath/urlPath";
export default async function getListCourse(currentPage, pageSize) {
    const tokenAccess = localStorage.getItem('AccessToken')
    const URL_COURSE = `${getListCourseUrl}?page=${currentPage}&size=${pageSize}`;
    const HEADERS = {
        tokenAccess
    };
    try {
        const response = await Axios.get(URL_COURSE, { headers: HEADERS });
        return response.data;
    } catch (error) {
        toast.error(error.message);
        throw error;
    }
   
}

