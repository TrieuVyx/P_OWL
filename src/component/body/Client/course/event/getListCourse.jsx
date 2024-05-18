import React, { useEffect } from 'react'
import { getListCourseUrl } from '../../../../../shortPath/urlPath';
import toast from 'react-hot-toast';
import Axios from "axios"
export default async function getListCourse() {
        const pageSize = 10;
        const currentPage = 0;
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