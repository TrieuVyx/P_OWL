import "../../../../shortPath/scss/admin.course.scss"
import { IMAGE_USER_ } from "../../../../shortPath/path"
import LectureTable from "./lectureTable"
import Author from "../../showAuthor/Author"
export default function Lecture() {
    return (
        <>
            <div className="row m-4 parent_course">
                <Author/>
            </div>
            <div className=" m-4 table__parent">
                <LectureTable/>
            </div>
        </>
    )
}