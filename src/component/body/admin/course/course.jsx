import "../../../../shortPath/scss/admin.course.scss"
import { IMAGE_ADMIN_COURSE } from "../../../../shortPath/path"
import CourseTable from "./courseTable"
import Author from "../../showAuthor/Author"
export default function Course() {
    return (
        <>
            <div className="row m-4 parent_course">
                <Author/>
            </div>
            <div className=" m-4 table__parent">
                <CourseTable />
            </div>
        </>
    )
}