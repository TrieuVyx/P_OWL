
import {  useNavigate } from 'react-router-dom';
import { linkRouter } from '../../../constants/constants';
const router = useNavigate();

export function keyPress (e){

    if(e.key === "0"){
        e.key = router('/')
        return true
    }
    if(e.key === "4" ){
        e.key = router("")
        return true
    }
    if(e.key === "7"){
        e.key = router('/login')
        return true
    }
    if(e.key === "8"){
        e.key = router(linkRouter.LOGIN)
        return true
    }
}