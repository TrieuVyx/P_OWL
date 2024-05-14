import Axios from "axios"
import { toast } from 'react-hot-toast'
import { getListUserUrl } from "../../../shortPath/urlPath";
export default async function getListUser(currentPage, pageSize) {
    try {
        const tokenAccess = localStorage.getItem('AccessToken')
        const URL_USER = `${getListUserUrl}?page=${currentPage}&size=${pageSize}`;
        
        const HEADERS = {
            tokenAccess
        };
        try {
            const response = await Axios.get(URL_USER, { headers: HEADERS });
            return response.data;
        } catch (error) {
            toast.error(error.message);
            throw error;
        }
    }
    catch (err) {
        toast.error(err.message)
    }
}

