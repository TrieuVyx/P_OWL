import { useNavigate } from "react-router-dom"
import LinkRouter from "../../../../constants/constants"
const router = useNavigate()
const handleCreate =  () => {
    // window.location.href = router(LinkRouter.CREATECOURSE)
    window.location.href = `admin/course/create`
}


export {
    handleCreate
}