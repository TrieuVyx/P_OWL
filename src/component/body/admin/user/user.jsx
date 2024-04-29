import "../../../../shortPath/scss/admin.course.scss"
import { IMAGE_USER_ } from "../../../../shortPath/path"
import UserTable from "./userTable"
export default function User() {
    return (
        <>
            <div className="row m-4 parent_course">
                <div className="col child_course">
                    <div id="userappear">
                        <div className="user_child">
                            <h1>hello {"user"}</h1>
                            <span>very good!</span>
                        </div>
                        <div className="user_child">
                            <img className="user_image" src={IMAGE_USER_}></img>
                        </div>

                    </div>
                </div>
                <div className="col child_course">OPP!</div>
            </div>
            <div className=" m-4 table__parent">
                <UserTable/>
            </div>
        </>
    )
}