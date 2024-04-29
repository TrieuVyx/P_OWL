import "../../../shortPath/scss/admin.course.scss"
import { IMAGE_ADMIN_COURSE } from "../../../shortPath/path"
export default function Course() {
    return (
        <>
            <div className="row m-4 parent_course">
                <div className="col child_course">
                    <div id="userappear">
                        <div className="user_child">
                            <h1>hello {"ola"}</h1>
                            <span>very good!</span>
                        </div>
                        <div className="user_child">
                            <img className="user_image" src={IMAGE_ADMIN_COURSE}></img>
                        </div>

                    </div>
                </div>
                <div className="col child_course">hi</div>
            </div>
            <div className=" m-4 table__parent">

            </div>
        </>
    )
}