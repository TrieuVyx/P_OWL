
import {  useNavigate } from 'react-router-dom';
//#region KEY
export function routers (e){
    const router = useNavigate();
    if(e){
        e =router(LinkRouter.CREATECOURSEPAGE)
        return true
    }
}

//#endregion