import "../../../../shortPath/scss/admin.course.scss"

import UserTable from "./userTable"
import Author from "../../Client/Author"
export default function User() {
    return (
        <>
            <div className="row m-4 parent_course">
                <Author />
            </div>
            <div className=" m-4 table__parent">
                <UserTable />
            </div>
        </>
    )
}