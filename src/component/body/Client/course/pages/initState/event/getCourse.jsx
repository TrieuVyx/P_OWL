export default async function getCourse (){
    try {
        const tokenAccess = localStorage.getItem("AccessToken")
        const CourseID = localStorage.getItem("CourseID")
        const data = await Axios({
            method: "GET",
            url: `${detailCourseUrl}${CourseID}`,
            headers: {
               tokenAccess
            }
        }).catch(err => {
            console.log("ERR")
        })
        const dataPromise = await data
        return dataPromise
    }
    catch (err) {
        console.log("ERR")
    }
}