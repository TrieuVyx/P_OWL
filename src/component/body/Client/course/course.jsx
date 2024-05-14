import "../../../../shortPath/scss/admin.course.scss"
import { IMAGE_ADMIN_COURSE } from "../../../../shortPath/path"
import Author from "../../showAuthor/Author"
import ShowContent from "./show"
export default function ShowCourse() {
    return (
        <>
            <div className="row m-4 parent_course">
                <Author/>
            </div>
            <div className=" m-4 table__parent">
                <ShowContent/>
            </div>
        </>
    )
}