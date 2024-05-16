import { toast } from
    "react-hot-toast"
import { updateCourseImageUrl } from "../../../../../../shortPath/urlPath"
import Axios from "axios"
export default async function UploadImage(ImageUpdate) {
    try {
        const tokenAccess = localStorage.getItem("AccessToken")
        console.log(ImageUpdate)
        await Axios({
            method: "POST",
            url: `${updateCourseImageUrl}`,
            headers: {
                tokenAccess
            },
            data: ImageUpdate
        }).then((res) => {
            toast.success("Success Update Image ")
        })
            .catch(err => {
                toast.error("Failure Update Image " + err.message)
            })
    }
    catch (err) {
        toast.error("Inactive Update Image " + err.message)

    }
}