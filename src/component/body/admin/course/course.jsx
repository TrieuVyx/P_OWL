import "../../../../shortPath/scss/admin.course.scss"
import CourseTable from "./courseTable"
import Author from "../../Client/Author"
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