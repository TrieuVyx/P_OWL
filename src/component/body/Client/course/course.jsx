import "../../../../shortPath/scss/admin.course.scss"
import { IMAGE_ADMIN_COURSE } from "../../../../shortPath/path"
import Author from "../Author"
import ShowContent from "./show"
import Carousels from "./carousel"

export default function ShowCourse() {

   
    return (
        <>
            <div className="row m-4 parent_course">
                <Carousels/>
            </div>
            <div className=" m-4 table__parent">
                <ShowContent/>
            </div>
        </>
    )
}